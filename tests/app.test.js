const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { JSDOM, VirtualConsole } = require("jsdom");
const { IDBFactory } = require("fake-indexeddb");

const projectRoot = path.resolve(__dirname, "..");

function appSource() {
  const data = fs.readFileSync(path.join(projectRoot, "data.js"), "utf8")
    .replace(/<\/script/gi, "<\\/script");
  return fs.readFileSync(path.join(projectRoot, "index.html"), "utf8")
    .replace('<script src="data.js"></script>', `<script>${data}</script>`);
}

async function bootApp(initialStorage = {}) {
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
      Object.entries(initialStorage).forEach(([key, value]) => {
        window.localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
      });
      window.indexedDB = new IDBFactory();
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
  assert.equal(document.querySelector("#aboutBackupSchema").textContent, "5");
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
  assert.match(custom.id, /^restaurant-custom-/);

  window.editRestaurant(window.restKey(custom));
  document.querySelector("#ef_style").value = "Coffee and snacks";
  document.querySelector("#efSave").click();
  custom = window.allRestaurants().find(item => item._restaurantId === custom._restaurantId);
  assert.equal(custom.style, "Coffee and snacks");

  assert.equal(window.deleteRestaurant(custom._restaurantId, window.restKey(custom)), true);
  assert.equal(window.allRestaurants().some(item => item._restaurantId === custom._restaurantId), false);
  assert.deepEqual(app.runtimeErrors, []);
});

test("legacy restaurant and attraction keys migrate without losing saved activity", async t => {
  const app = await bootApp({
    italy2026_restaurantedits: {
      "builtin:Venice|Caffè Florian": { hours: "Legacy saved hours" }
    },
    italy2026_restlog: {
      "Venice|Caffè Florian": { favorite: true, ate: true, rating: "5", notes: "Legacy visit" }
    },
    italy2026_deleted: {
      restaurants: { "builtin:Rome|Armando al Pantheon": true }
    },
    italy2026_attrlog: {
      "Rome|Trevi Fountain": { visited: true, notes: "Legacy attraction visit" }
    }
  });
  t.after(() => app.dom.window.close());
  const { window } = app;

  const florian = window.allRestaurants().find(item => item.id === "restaurant-0064");
  assert.equal(florian.hours, "Legacy saved hours");
  assert.deepEqual(Object.keys(window.getRestaurantEdits()), ["restaurant-0064"]);
  assert.equal(window.getRestLog()["restaurant-0064"].notes, "Legacy visit");
  assert.equal(window.allRestaurants().some(item => item.id === "restaurant-0001"), false);
  assert.deepEqual(Object.keys(window.getDeletedRecords().restaurants), ["restaurant-0001"]);

  assert.equal(window.getAttrLog()["attraction-0001"].notes, "Legacy attraction visit");
  assert.deepEqual(Object.keys(window.getAttrLog()), ["attraction-0001"]);

  await window.setAttrPhotos("Rome|Trevi Fountain", ["data:image/jpeg;base64,bGVnYWN5"]);
  assert.deepEqual(Array.from(await window.getAttrPhotos("attraction-0001")), ["data:image/jpeg;base64,bGVnYWN5"]);
  assert.equal(await window.readAttrPhotosValue("Rome|Trevi Fountain"), undefined);
  assert.deepEqual(app.runtimeErrors, []);
});

test("legacy phone Timeline state migrates automatically to stable IDs", async t => {
  const app = await bootApp({
    italy2026_tldone: { "1": true, "9000": true },
    italy2026_tlhidden: { "2": true },
    italy2026_customlegs: [{
      id: "legacy-custom-leg",
      date: "2026-10-12",
      from: "Hotel",
      to: "Dinner",
      itemType: "Walk"
    }]
  });
  t.after(() => app.dom.window.close());

  assert.deepEqual(Object.keys(app.window.getTimelineDone()).sort(), ["tl-0001", "tl-custom-legacy-custom-leg"]);
  assert.deepEqual(Object.keys(app.window.getTimelineHidden()), ["tl-0002"]);
  assert.equal(app.window.localStorage.getItem("italy2026_tldone").includes('"1"'), false);

  app.window.toggleTimelineDone("tl-0003", true);
  assert.equal(app.window.getTimelineDone()["tl-0003"], true);
  assert.deepEqual(app.runtimeErrors, []);
});

test("Timeline records, edits, and route links use IDs without numeric step fields", async t => {
  const app = await bootApp({
    italy2026_live: {
      timeline: {
        "5": { itemType: "Information" },
        "17": { start: "09:00", notes: "Legacy linked Timeline edit" }
      }
    }
  });
  t.after(() => app.dom.window.close());
  const { window } = app;

  assert.equal(window.eval('TIMELINE.some(item => "step" in item)'), false);
  assert.equal(window.eval('SHARED_TRAVEL_ITEMS.some(item => "timelineStep" in item)'), false);
  assert.equal(window.eval('SHARED_TRAVEL_ITEMS.every(item => /^tl-\\d{4}$/.test(item.timelineId))'), true);
  assert.deepEqual(Object.keys(window.getLive().timeline || {}), ["tl-0005"]);
  assert.equal(window.getLive().sharedTravel["travel-17"].start, "09:00");
  assert.equal(window.liveTimeline().find(item => item.id === "tl-0017").notes, "Legacy linked Timeline edit");
  assert.equal(window.routeForTimelineId("tl-0001").order, 1);

  window.editTimelineItemType("tl-0005");
  window.document.querySelector("#ef_itemType").value = "Flight";
  window.document.querySelector("#efSave").click();
  assert.equal(window.getLive().timeline["tl-0005"].itemType, "Flight");
  assert.deepEqual(app.runtimeErrors, []);
});

test("legacy travel overrides normalize without one-time migration flags", async t => {
  const app = await bootApp({
    italy2026_live: {
      trains: {
        "0": { dep:"1:30 PM", arr:"2:02 PM", dur:"32 min", conf:"Legacy train", notes:"Saved train edit" }
      },
      transfers: {
        "0": { mode:"Rental car", time:"90 min", status:"Confirmed", steps:"Legacy driving steps" },
        "10": { mode:"Airport transfer", time:"75 min", status:"Ready", steps:"Legacy airport steps" }
      },
      reservations: {
        "0": { conf:"Retired duplicate air override" }
      }
    }
  });
  t.after(() => app.dom.window.close());
  const { window } = app;
  const live=window.getLive();

  assert.equal("trains" in live, false);
  assert.equal("transfers" in live, false);
  assert.equal("reservations" in live, false);
  assert.equal(live.sharedTravel["travel-11"].start, "1:30 PM");
  assert.equal(live.sharedTravel["travel-1"].mode, "Rental car");
  assert.equal(live.sharedTravel["travel-34"].instructions, "Legacy airport steps");

  const appCode=fs.readFileSync(path.join(projectRoot,"index.html"),"utf8");
  const masterData=fs.readFileSync(path.join(projectRoot,"data.js"),"utf8");
  assert.doesNotMatch(appCode,/italy2026_phase5_migrated|DATA_MIGRATION_KEY/);
  assert.doesNotMatch(masterData,/\bconst\s+(?:TRAINS|TRANSFERS)\s*=/);
  assert.deepEqual(app.runtimeErrors, []);
});

test("legacy reservation and planned-budget edits migrate from indexes to IDs", async t => {
  const app = await bootApp({
    italy2026_live: {
      reservations: {
        "3": { conf: "LEGACY-TRAIN", status: "Pending", notes: "Legacy reservation edit" }
      }
    },
    italy2026_plannededits: {
      "4": { amt: 777, status: "Booked", notes: "Legacy planned edit" }
    }
  });
  t.after(() => app.dom.window.close());
  const { window } = app;

  assert.deepEqual(Object.keys(window.getLive().reservations), ["reservation-0004"]);
  assert.equal(window.liveReservations().find(item => item.id === "reservation-0004").conf, "LEGACY-TRAIN");
  assert.deepEqual(Object.keys(window.getPlannedEdits()), ["budget-0005"]);
  assert.equal(window.liveBudgetPlanned().find(item => item.id === "budget-0005").amt, 777);

  window.editReservation("reservation-0004");
  window.document.querySelector("#ef_conf").value = "STABLE-TRAIN";
  window.document.querySelector("#efSave").click();
  assert.equal(window.getLive().reservations["reservation-0004"].conf, "STABLE-TRAIN");

  window.editPlannedItem("budget-0005");
  window.document.querySelector("#ef_amt").value = "888";
  window.document.querySelector("#efSave").click();
  assert.equal(window.getPlannedEdits()["budget-0005"].amt, 888);

  window.exportData();
  const payload = await blobJson(window, app.exportedBlob());
  assert.deepEqual(Object.keys(payload.live.reservations), ["reservation-0004"]);
  assert.deepEqual(Object.keys(payload.plannededits), ["budget-0005"]);
  assert.deepEqual(app.runtimeErrors, []);
});

test("legacy packing and open-item state migrates to stable IDs", async t => {
  const legacyPacked = { checked: true, qty: 1, by: "David", updatedAt: "2026-08-01T12:00:00.000Z" };
  const app = await bootApp({
    italy2026_pack: {
      base_0: legacyPacked,
      "Melody|Primary walking shoes": { checked: true, qty: 1, by: "Melody", updatedAt: "2026-08-02T12:00:00.000Z" }
    },
    italy2026_packcatalog: {
      edits: { base_0: { item: "Primary walking shoes — broken in", updatedAt: "2026-08-03T12:00:00.000Z" } },
      custom: { pack_legacy: { item: "Legacy custom item", traveler: "Shared", cat: "Other", qty: 1, bag: "Checked" } },
      deleted: { base_2: { updatedAt: "2026-08-04T12:00:00.000Z" } }
    },
    italy2026_open: { "1": true }
  });
  t.after(() => app.dom.window.close());
  const { window } = app;

  assert.deepEqual(Object.keys(window.getPackState()).sort(), ["packing-0001", "packing-0002"]);
  assert.deepEqual(JSON.parse(JSON.stringify(window.getPackState()["packing-0001"])), legacyPacked);
  assert.equal(window.getPackingItems().find(item => item._id === "packing-0001").item, "Primary walking shoes — broken in");
  assert.equal(window.getPackingItems().some(item => item._id === "packing-0003"), false);
  assert.equal(window.getPackingItems().find(item => item._id === "pack_legacy").item, "Legacy custom item");
  assert.deepEqual(Object.keys(window.getPackCatalogData().edits), ["packing-0001"]);
  assert.deepEqual(Object.keys(window.getPackCatalogData().deleted), ["packing-0003"]);

  assert.deepEqual(JSON.parse(JSON.stringify(window.getOpenState())), { "open-0001": true });
  window.toggleOpen("open-0002", true);
  assert.deepEqual(JSON.parse(JSON.stringify(window.getOpenState())), { "open-0001": true, "open-0002": true });

  window.exportData();
  const payload = await blobJson(window, app.exportedBlob());
  assert.deepEqual(Object.keys(payload.pack).sort(), ["packing-0001", "packing-0002"]);
  assert.deepEqual(Object.keys(payload.open), ["open-0001", "open-0002"]);
  assert.deepEqual(Object.keys(payload.packcatalog.edits), ["packing-0001"]);
  assert.deepEqual(app.runtimeErrors, []);
});

test("schema 5 backups use Timeline IDs and Version 4 backups remain importable", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;

  window.performImport({
    version: 4,
    appVersion: "10.8.2",
    dataVersion: "10.5.0",
    exported: new Date().toISOString(),
    tldone: { "1": true },
    tlhidden: { "2": true },
    customlegs: [{ id:"imported-custom-leg", date:"2026-10-12", from:"Hotel", to:"Dinner" }]
  }, "replace");
  window.setTimelineDone({ "1":true, "9000":true });
  assert.deepEqual(Object.keys(window.getTimelineDone()).sort(), ["tl-0001", "tl-custom-imported-custom-leg"]);
  assert.deepEqual(Object.keys(window.getTimelineHidden()), ["tl-0002"]);

  window.exportData();
  const payload = await blobJson(window, app.exportedBlob());
  assert.equal(payload.version, 5);
  assert.equal(payload.appVersion, "10.9.0");
  assert.equal("dataVersion" in payload, false);
  assert.deepEqual(Object.keys(payload.tldone).sort(), ["tl-0001", "tl-custom-imported-custom-leg"]);
  assert.deepEqual(Object.keys(payload.tlhidden), ["tl-0002"]);
  assert.deepEqual(app.runtimeErrors, []);
});

test("release metadata and stable-ID collections stay consistent", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const manifest=JSON.parse(fs.readFileSync(path.join(projectRoot,"manifest.json"),"utf8"));
  const packageData=JSON.parse(fs.readFileSync(path.join(projectRoot,"package.json"),"utf8"));
  const worker=fs.readFileSync(path.join(projectRoot,"sw.js"),"utf8");
  const counts=JSON.parse(app.window.eval(`JSON.stringify({
    timeline:TIMELINE.map(x=>x.id),restaurants:RESTAURANTS.map(x=>x.id),
    attractions:ATTRACTIONS.map(x=>x.id),reservations:RESERVATIONS.map(x=>x.id),
    budget:BUDGET_PLANNED.map(x=>x.id),packing:PACKING.map(x=>x.id),open:OPEN_ITEMS.map(x=>x.id)
  })`));

  assert.equal(packageData.version,"10.9.0");
  assert.match(manifest.description,/Version 10\.9\.0/);
  assert.match(worker,/v10-9-0/);
  assert.deepEqual(Object.fromEntries(Object.entries(counts).map(([key,ids])=>[key,ids.length])),{
    timeline:49,restaurants:65,attractions:15,reservations:10,budget:18,packing:66,open:13
  });
  Object.values(counts).forEach(ids=>{
    assert.equal(ids.every(Boolean),true);
    assert.equal(new Set(ids).size,ids.length);
  });
  assert.deepEqual(app.runtimeErrors, []);
});

test("schema 5 backup round trip preserves representative stable-ID records", async t => {
  const savedPacking={checked:true,qty:1,by:"David",updatedAt:"2026-08-07T12:00:00.000Z"};
  const app = await bootApp({
    italy2026_tldone:{"tl-0001":true},
    italy2026_open:{"open-0001":true},
    italy2026_pack:{"packing-0001":savedPacking},
    italy2026_restlog:{"restaurant-0064":{favorite:true,rating:"5",notes:"Round trip"}},
    italy2026_attrlog:{"attraction-0001":{visited:true,notes:"Round trip"}},
    italy2026_live:{reservations:{"reservation-0004":{conf:"ROUND-TRIP"}}},
    italy2026_plannededits:{"budget-0005":{amt:999,status:"Booked"}}
  });
  t.after(() => app.dom.window.close());
  const { window } = app;

  window.exportData();
  const payload=await blobJson(window,app.exportedBlob());
  window.performImport(payload,"replace");

  assert.equal(window.getTimelineDone()["tl-0001"],true);
  assert.equal(window.getOpenState()["open-0001"],true);
  assert.deepEqual(JSON.parse(JSON.stringify(window.getPackState()["packing-0001"])),savedPacking);
  assert.equal(window.getRestLog()["restaurant-0064"].notes,"Round trip");
  assert.equal(window.getAttrLog()["attraction-0001"].visited,true);
  assert.equal(window.getLive().reservations["reservation-0004"].conf,"ROUND-TRIP");
  assert.equal(window.getPlannedEdits()["budget-0005"].amt,999);
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
