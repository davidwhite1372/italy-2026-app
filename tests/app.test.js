const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM, VirtualConsole } = require("jsdom");

const projectRoot = path.resolve(__dirname, "..");

function appSource() {
  const data = fs.readFileSync(path.join(projectRoot, "data.js"), "utf8")
    .replace(/<\/script/gi, "<\\/script");
  return fs.readFileSync(path.join(projectRoot, "index.html"), "utf8")
    .replace('<script src="data.js"></script>', `<script>${data}</script>`);
}

async function bootApp() {
  const runtimeErrors = [];
  let exportedBlob = null;
  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", error => runtimeErrors.push(error.message));
  virtualConsole.on("error", message => runtimeErrors.push(String(message)));

  const dom = new JSDOM(appSource(), {
    url: "https://example.test/italy-2026-app/",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse(window) {
      window.matchMedia = () => ({
        matches: false,
        addEventListener() {},
        removeEventListener() {}
      });
      Object.defineProperty(window.navigator, "serviceWorker", {
        configurable: true,
        value: { register: () => Promise.resolve({}) }
      });
      window.fetch = () => Promise.reject(new Error("Offline regression test"));
      window.alert = () => {};
      window.confirm = () => true;
      window.prompt = () => null;
      window.scrollTo = () => {};
      window.URL.createObjectURL = blob => {
        exportedBlob = blob;
        return "blob:regression-test";
      };
      window.URL.revokeObjectURL = () => {};
      window.HTMLAnchorElement.prototype.click = function click() {};
    }
  });

  await new Promise(resolve => setTimeout(resolve, 150));
  return {
    dom,
    window: dom.window,
    runtimeErrors,
    exportedBlob: () => exportedBlob
  };
}

function blobJson(window, blob) {
  return new Promise((resolve, reject) => {
    const reader = new window.FileReader();
    reader.onload = () => resolve(JSON.parse(reader.result));
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}

test("app boots with current metadata and valid master data", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());

  app.window.openAppAbout();
  const document = app.window.document;
  assert.equal(document.querySelector("#aboutAppVersion").textContent, "10.9.0");
  assert.equal(document.querySelector("#aboutBuildVersion").textContent, "10.9.0");
  assert.equal(document.querySelector("#aboutBackupSchema").textContent, "4");
  assert.match(document.querySelector("#aboutLastEdited").textContent, /August 7, 2026/);
  assert.deepEqual(Array.from(app.window.collectDataIntegrityIssues()), []);
  assert.deepEqual(app.runtimeErrors, []);
});

test("built-in and custom restaurants remain editable and deletable", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  const document = window.document;

  const florian = window.allRestaurants().find(item => item.name === "Caffè Florian");
  assert.ok(florian, "Caffè Florian should be included");
  assert.equal(florian.website, "https://caffeflorian.com");

  window.editRestaurant(window.restKey(florian));
  document.querySelector("#ef_hours").value = "Test hours";
  document.querySelector("#efSave").click();
  assert.equal(
    window.allRestaurants().find(item => item._restaurantId === florian._restaurantId).hours,
    "Test hours"
  );

  window.addRestaurant();
  document.querySelector("#newRestName").value = "Regression Test Café";
  document.querySelector("#newRestCity").value = "Venice";
  document.querySelector("#newRestStyle").value = "Coffee";
  window.saveNewRestaurant();
  let custom = window.allRestaurants().find(item => item.name === "Regression Test Café");
  assert.ok(custom, "A user restaurant should be added");

  window.editRestaurant(window.restKey(custom));
  document.querySelector("#ef_style").value = "Coffee and snacks";
  document.querySelector("#efSave").click();
  custom = window.allRestaurants().find(item => item._restaurantId === custom._restaurantId);
  assert.equal(custom.style, "Coffee and snacks");

  assert.equal(window.deleteRestaurant(custom._restaurantId, window.restKey(custom)), true);
  assert.equal(window.allRestaurants().some(item => item._restaurantId === custom._restaurantId), false);
  assert.deepEqual(app.runtimeErrors, []);
});

test("Version 4 backups export and older Version 4 backups remain importable", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;

  window.exportData();
  const payload = await blobJson(window, app.exportedBlob());
  assert.equal(payload.version, 4);
  assert.equal(payload.appVersion, "10.9.0");
  assert.equal("dataVersion" in payload, false);

  window.chooseImportMode({
    version: 4,
    appVersion: "10.8.2",
    dataVersion: "10.5.0",
    exported: new Date().toISOString(),
    live: {}
  }, "legacy-v4.json");
  assert.ok(window.document.querySelector("#mergeImportBtn"));
  assert.ok(window.document.querySelector("#replaceImportBtn"));
  assert.deepEqual(app.runtimeErrors, []);
});

test("offline application shell lists every required local asset", () => {
  const worker = fs.readFileSync(path.join(projectRoot, "sw.js"), "utf8");
  const required = [
    "./index.html",
    "./data.js",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png",
    "./assets/comfort/rome-restrooms.jpg",
    "./assets/comfort/florence-restrooms.jpg",
    "./assets/comfort/venice-restrooms.jpg"
  ];
  required.forEach(asset => assert.match(worker, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))));
});
