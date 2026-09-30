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
      window.open = () => null;
      window.scrollTo = () => {};
      window.HTMLElement.prototype.scrollIntoView = function scrollIntoView() {};
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
  assert.equal(document.querySelector("#aboutAppVersion").textContent, "11.0.3");
  assert.equal(document.querySelector("#aboutBuildVersion").textContent, "11.0.3");
  assert.equal(document.querySelector("#aboutBackupSchema").textContent, "6");
  assert.match(document.querySelector("#aboutLastEdited").textContent, /September 30, 2026 at 5:57 PM EDT/);
  assert.deepEqual(Array.from(app.window.collectDataIntegrityIssues()), []);
  assert.deepEqual(app.runtimeErrors, []);
});

test("formal greeting promotion removes its exact stale phone override", async t => {
  const stalePhoneEdit = {
    category: "Greetings",
    en: "How are you?",
    it: "Come sta?",
    pr: "KOH-meh STAI",
    updatedAt: "2026-09-24T23:43:31.996Z"
  };
  const app = await bootApp({
    italy2026_phrasecatalog: {edits:{"phrase-0103":stalePhoneEdit},custom:{},deleted:{}}
  });
  t.after(() => app.dom.window.close());
  const {window}=app;
  const phrase=window.getPhraseItems().find(item=>item.id==="phrase-0103");
  assert.deepEqual({en:phrase.en,it:phrase.it,pr:phrase.pr},{
    en:"How are you? (formal)",it:"Come sta?",pr:"KOH-meh STAH"
  });
  assert.deepEqual(JSON.parse(JSON.stringify(window.getPhraseCatalogData())),{edits:{},custom:{},deleted:{}});
  window.exportData();
  const payload=await blobJson(window,app.exportedBlob());
  assert.deepEqual(payload.phrasecatalog,{edits:{},custom:{},deleted:{}});
  assert.deepEqual(app.runtimeErrors,[]);
});

test("10.14.5 promotes the corrected staff-directed phrase and retires its phone custom copy", async t => {
  const id="phrase-custom-83be4830-dc91-4d3c-9b6c-32d9dee15809";
  const oldPhoneCustom={
    category:"Food & Ordering",en:"Do you have....",it:"Avete",pr:"",
    id,createdAt:"2026-09-25T22:18:19.974Z",updatedAt:"2026-09-25T22:18:19.974Z"
  };
  const app=await bootApp({
    italy2026_phrasecatalog:{edits:{},custom:{[id]:oldPhoneCustom},deleted:{}}
  });
  t.after(()=>app.dom.window.close());
  const {window}=app;
  const phrase=window.getPhraseItems().find(item=>item.id===id);
  assert.deepEqual({category:phrase.category,en:phrase.en,it:phrase.it,pr:phrase.pr},{
    category:"Food & Ordering",en:"Do you have…? (asking staff)",it:"Avete…?",pr:"ah-VEH-teh"
  });
  assert.deepEqual(JSON.parse(JSON.stringify(window.getPhraseCatalogData())),{edits:{},custom:{},deleted:{}});
  window.exportData();
  const payload=await blobJson(window,app.exportedBlob());
  assert.deepEqual(payload.phrasecatalog,{edits:{},custom:{},deleted:{}});
  assert.deepEqual(app.runtimeErrors,[]);
});

test("10.14.6 replaces taxi phrases with the Venice vaporetto ticket phrase", async t => {
  const oldTaxiId="phrase-transportation-i-would-like-a-taxi-please";
  const app=await bootApp({
    italy2026_phrasecatalog:{edits:{},custom:{},deleted:{[oldTaxiId]:{updatedAt:"2026-09-15T13:16:41.092Z",by:"David Work Cell"}}}
  });
  t.after(()=>app.dom.window.close());
  const {window}=app;
  const phrases=window.getPhraseItems();
  const vaporetto=phrases.find(item=>item.id==="phrase-transportation-vaporetto-ticket");
  assert.deepEqual({en:vaporetto.en,it:vaporetto.it,pr:vaporetto.pr},{
    en:"I would like a vaporetto ticket, please",
    it:"Vorrei un biglietto per il vaporetto, per favore",
    pr:"vohr-RAY oon bee-LYET-toh pehr eel vah-poh-RET-toh, pehr fah-VOH-reh"
  });
  assert.equal(phrases.some(item=>/taxi/i.test(`${item.en} ${item.it}`)),false);
  const airportPlan=JSON.stringify(window.eval(`JSON.stringify({timeline:TIMELINE.find(item=>item.id==="tl-0048"),open:OPEN_ITEMS.find(item=>item.id==="open-0013"),route:MAP_DOOR_ROUTES?.find?.(item=>item.order===17)})`));
  assert.doesNotMatch(airportPlan,/water.?taxi/i);
  assert.match(airportPlan,/ATVO|ACTV/);
  assert.deepEqual(JSON.parse(JSON.stringify(window.getPhraseCatalogData())),{edits:{},custom:{},deleted:{}});
  const day=window.eval('DAYS.find(item=>item.date==="2026-10-14")');
  assert.match(day.phrase,/vaporetto/);
  assert.doesNotMatch(JSON.stringify(window.eval('DAYS.filter(item=>item.date==="2026-10-05" || item.date==="2026-10-14" || item.date==="2026-10-15")')),/taxi/i);
  assert.deepEqual(app.runtimeErrors,[]);
});

test("Oct 8 Train 10 agenda block replaces stale PSA train details", async t => {
  const app=await bootApp();
  t.after(()=>app.dom.window.close());
  const {window}=app;
  const data=JSON.parse(window.eval(`JSON.stringify({
    meetup:TIMELINE.find(item=>item.id==="tl-0017"),
    train:TIMELINE.find(item=>item.id==="tl-0018"),
    checkout:TIMELINE.find(item=>item.id==="tl-0055"),
    walk:TIMELINE.find(item=>item.id==="tl-0019"),
    reservation:RESERVATIONS.find(item=>item.id==="reservation-0004"),
    venue:MAP_VENUES_EVENTS.find(item=>item.name==="Trattoria Da Burde"),
    day:DAYS.find(item=>item.date==="2026-10-08"),
    mapRoute:MAP_DOOR_ROUTES.find(item=>item.order===11)
  })`));
  assert.equal(data.meetup.start,"10:45");
  assert.equal(data.meetup.end,"11:00");
  assert.match(data.meetup.instructions,/10:45 AM.*11:00 AM/);
  assert.equal(data.train.start,"11:00");
  assert.equal(data.train.end,"13:15");
  assert.match(data.train.title,/Train 10/);
  assert.match(data.train.instructions,/assigned train group.*station.*scenic/i);
  assert.doesNotMatch(data.train.instructions,/12:05|1:45|train number/);
  assert.equal(data.checkout.end,"10:45");
  assert.equal(data.walk.start,"13:15");
  assert.equal(data.walk.status,"Partial");
  assert.match(data.reservation.notes,/10:45 AM/);
  assert.match(data.reservation.notes,/11:00 AM/);
  assert.match(data.reservation.notes,/1:15 PM/);
  assert.match(data.venue.address,/Via Pistoiese 154/);
  assert.match(data.day.dining,/7:00 PM.*time unconfirmed/i);
  assert.match(data.mapRoute.note,/10:45 AM/);
  window.showPage("timeline");
  window.document.querySelector("#timelineDayFilter").value="2026-10-08";
  window.document.querySelector("#timelineDayFilter").dispatchEvent(new window.Event("change",{bubbles:true}));
  const cards=[...window.document.querySelectorAll("#timelineList .tl-step[data-timeline-id]")].map(card=>card.dataset.timelineId);
  assert.ok(cards.indexOf("tl-0055")<cards.indexOf("tl-0017"));
  assert.ok(cards.indexOf("tl-0017")<cards.indexOf("tl-0018"));
  assert.ok(cards.indexOf("tl-0018")<cards.indexOf("tl-0019"));
  assert.ok(cards.indexOf("tl-0019")<cards.indexOf("tl-0054"));
  assert.deepEqual(app.runtimeErrors,[]);
});

test("stale phone overrides cannot restore superseded Train 10 times", async t => {
  const app=await bootApp({italy2026_live:{trains:{"1":{dep:"Morning",arr:"",dur:"old block",notes:"Keep this unrelated phone note."}},timeline:{"tl-0018":{start:"Morning",end:"",time:"old block",status:"Pending",instructions:"Still need train details."}}}});
  t.after(()=>app.dom.window.close());
  const {window}=app;
  const live=JSON.parse(window.eval("JSON.stringify(getLive())"));
  assert.deepEqual(live.sharedTravel["travel-18"],{notes:"Keep this unrelated phone note."});
  const train=window.eval('liveSharedTravelItems().find(item=>item.id==="travel-18")');
  assert.equal(train.start,"11:00");
  assert.equal(train.end,"13:15");
  assert.equal(train.status,"Confirmed");
  assert.match(train.instructions,/Train 10/);
  window.showPage("timeline");
  window.document.querySelector("#timelineDayFilter").value="2026-10-08";
  window.document.querySelector("#timelineDayFilter").dispatchEvent(new window.Event("change",{bubbles:true}));
  const card=window.document.querySelector('#timelineList .tl-step[data-timeline-id="tl-0018"]');
  assert.match(card.textContent,/11:00 AM–1:15 PM/);
  assert.match(card.textContent,/Train 10/);
  assert.doesNotMatch(card.textContent,/Morning|old block|Pending/);
  assert.deepEqual(app.runtimeErrors,[]);
});

test("Version 11 itinerary cards, clickable routes, and offline guides match the agenda", async t => {
  const app=await bootApp();
  t.after(()=>app.dom.window.close());
  const {window}=app;
  const data=JSON.parse(window.eval(`JSON.stringify({
    timeline:TIMELINE,
    routes:MAP_DOOR_ROUTES,
    reservations:RESERVATIONS,
    venues:MAP_VENUES_EVENTS,
    open:OPEN_ITEMS,
    pretrip:PRETRIP.flatMap(group=>group.items),
    release:APP_METADATA
  })`));
  assert.equal(data.release.version,"11.0.3");
  assert.equal(data.release.backupSchema,6);
  assert.equal(data.routes.find(route=>route.order===15).start,"After 11:55 AM train");
  assert.equal(data.routes.find(route=>route.order===15).duration,"Per PSA group schedule");
  assert.equal(data.routes.find(route=>route.order===17).status,"Pending timetable");
  const byId=Object.fromEntries(data.timeline.map(item=>[item.id,item]));
  assert.match(byId["tl-0011"].instructions,/12:23 PM.*placeholder.*next available.*Trenitalia app/i);
  assert.match(byId["tl-0014"].title,/Nerone/);
  assert.match(byId["tl-0015"].title,/Cantine Santa Benedetta/);
  assert.match(byId["tl-0051"].title,/Comodo Mercado Trevi/);
  assert.match(byId["tl-0016"].title,/Vatican Museums.*Colosseum/);
  assert.match(byId["tl-0062"].title,/Free Dinner.*Da Danilo suggestion/);
  assert.match(byId["tl-0062"].time,/Flexible.*not booked/i);
  assert.match(byId["tl-0062"].instructions,/restaurant-list suggestion/i);
  assert.match(byId["tl-0062"].instructions,/no group reservation.*walkable/i);
  assert.match(byId["tl-0062"].instructions,/trattoriadadanilo\.com/i);
  assert.ok(!data.timeline.some(item=>/Villa Miani|Awards Gala/.test(item.title+item.to)));
  assert.ok(!data.venues.some(item=>item.name==="Villa Miani"));
  assert.equal(data.venues.find(item=>item.name==="Da Danilo").status,"Suggestion");
  assert.match(byId["tl-0056"].instructions,/Repubblica.*Line A.*Battistini.*Cipro.*Viale Vaticano 100/i);
  assert.match(byId["tl-0057"].instructions,/licensed white taxi.*060609.*Line B/i);
  assert.match(byId["tl-0020"].time,/7:00 PM.*time unconfirmed/i);
  assert.match(byId["tl-0021"].title,/Accademia.*Uffizi/);
  assert.equal(byId["tl-0053"].title,"PSA Group Dinner at Cucina");
  assert.match(byId["tl-0053"].to,/Cucina, Via Giano della Bella 3rosso/);
  assert.ok(!data.venues.some(item=>item.name==="Cucina 3rosso"));
  assert.equal(data.venues.find(item=>item.name==="Cucina").address,"Via Giano della Bella 3rosso, 50124 Firenze");
  assert.match(byId["tl-0058"].instructions,/9:40 AM.*10:15 AM/);
  assert.match(byId["tl-0059"].instructions,/Uffizi.*W Florence/);
  assert.match(byId["tl-0026"].time,/6:00 PM.*provisional/i);
  assert.match(byId["tl-0028"].title,/Murano.*Burano/);
  assert.match(byId["tl-0030"].instructions,/8:45 AM.*Giardini Reali.*Calle de le Rasse 4536/i);
  assert.match(byId["tl-0030"].instructions,/8:30 AM.*every 30 minutes/i);
  assert.match(byId["tl-0060"].instructions,/1451899139.*1833917139/);
  assert.match(byId["tl-0061"].instructions,/Giardini Reali.*next hotel shuttle/i);
  assert.match(byId["tl-0045"].title,/Ristoteca Oniga/);
  assert.equal(data.reservations.find(item=>item.id==="reservation-0011").conf,"Booking 1212654");
  assert.equal(data.reservations.find(item=>item.id==="reservation-0012").conf,"Booking 1212654");
  assert.equal(data.reservations.find(item=>item.id==="reservation-0011").dates,"Oct 7");
  assert.equal(data.reservations.find(item=>item.id==="reservation-0012").dates,"Oct 9");
  const tourExpenses = window.getExpenses().filter(item => [1790790000001,1790790000002].includes(item.id));
  assert.equal(tourExpenses.length, 2);
  const venice = JSON.parse(window.eval('JSON.stringify(BUDGET_PLANNED.find(item => item.id === "budget-0020"))'));
  assert.equal(venice.amt, 241.38);
  assert.equal(venice.company, true);
  assert.match(venice.status, /scheduled Oct 10/);
  assert.equal(window.getExpenses().some(item => /Viator|Doge/i.test(item.desc)), false);

  assert.equal(Math.round(tourExpenses.reduce((sum,item) => sum + item.amt, 0) * 100), 65608);
  assert.ok(tourExpenses.every(item => item.company && !item.submitted && !item.reimbursable));
  window.setExpenses(window.getExpenses());
  assert.equal(window.getExpenses().filter(item => item.id === 1790790000001).length, 1);
  for (const id of ["travel-16", "travel-21"]) assert.match(window.guideActionsForTravel(id), /Open tour voucher.*1212654/);

  assert.ok(data.venues.some(item=>item.name==="Comodo Mercado Trevi"));
  assert.ok(!data.venues.some(item=>item.name==="SEEN by Olivier"));
  assert.equal(data.open.find(item=>item.id==="open-0019"),undefined);
  assert.equal(data.open.find(item=>item.id==="open-0018").status,"Pending");
  assert.equal(data.open.find(item=>item.id==="open-0020").status,"Pending");
  assert.equal(data.open.length,8);
  assert.ok(data.open.every(item=>item.status==="Pending"));
  assert.ok(!data.open.some(item=>/Villa Miani|awards dinner|Italo.*reconfirm|restaurant reservations/i.test(item.item)));
  assert.match(data.pretrip.find(item=>item.id==="h1v11").text,/Oct 6.*€620.*pay when it arrives/);
  const orders=JSON.parse(window.eval(`JSON.stringify(Object.fromEntries(Object.entries(TIMELINE_ROUTE_MAP).filter(([id])=>["tl-0014","tl-0051","tl-0056","tl-0016","tl-0057","tl-0062","tl-0058","tl-0021","tl-0059","tl-0030","tl-0060","tl-0061","tl-0026","tl-0045","tl-0053"].includes(id))))`));
  for (const id of ["tl-0014","tl-0051","tl-0056","tl-0016","tl-0057","tl-0062","tl-0058","tl-0021","tl-0059","tl-0030","tl-0060","tl-0061","tl-0026","tl-0045","tl-0053"]) {
    const route=data.routes.find(route=>route.order===orders[id]);
    assert.ok(route?.link,`missing primary map/site link for ${id}`);
  }
  for (const guide of ["cph-connection-guide-return","rome-metro-transfer-guide","rome-return-transfer-guide","florence-tour-outbound-guide","florence-tour-return-guide","venice-tour-outbound-guide","venice-tour-return-guide"]) {
    for (const ext of ["png","pdf"]) assert.ok(fs.existsSync(path.join(projectRoot,"assets/guides",`${guide}.${ext}`)));
  }
  const sw=fs.readFileSync(path.join(projectRoot,"sw.js"),"utf8");
  for (const guide of ["cph-connection-guide-return","rome-metro-transfer-guide","rome-return-transfer-guide","florence-tour-outbound-guide","florence-tour-return-guide","venice-tour-outbound-guide","venice-tour-return-guide"]) {
    assert.match(sw,new RegExp(`${guide}\\.(?:png|pdf)`));
  }
  window.showPage("timeline");
  window.document.querySelector("#timelineDayFilter").value="2026-10-12";
  window.document.querySelector("#timelineDayFilter").dispatchEvent(new window.Event("change",{bubbles:true}));
  const cards=[...window.document.querySelectorAll("#timelineList .tl-step[data-timeline-id]")].map(card=>card.dataset.timelineId);
  assert.ok(cards.indexOf("tl-0030")<cards.indexOf("tl-0060"));
  assert.ok(cards.indexOf("tl-0060")<cards.indexOf("tl-0061"));
  assert.ok(cards.indexOf("tl-0061")<cards.indexOf("tl-0045"));
  assert.deepEqual(app.runtimeErrors,[]);
});

test("SAS advance seat-selection receipts are recorded once as paid budget cost", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const item = app.window.eval('BUDGET_PLANNED.find(item => item.id === "budget-0019")');
  assert.equal(item.cat, "Flights");
  assert.equal(item.sub, "SAS advance seat selection");
  assert.equal(item.amt, 260);
  assert.equal(item.cur, "USD");
  assert.equal(item.status, "Paid");
  assert.match(item.notes, /BOS–CPH at \$60 each.*CPH–JFK at \$70 each/i);
  assert.match(item.notes, /3982.*3983.*3992.*3993/);
  assert.match(item.notes, /card ending 9860/i);
  assert.deepEqual(app.runtimeErrors, []);
});

test("Timeline day filter scopes results without changing the all-days default", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const {window}=app;
  window.showPage("timeline");
  const select=window.document.querySelector("#timelineDayFilter");
  assert.ok(select.querySelector('option[value="2026-10-08"]'));
  const allCount=window.document.querySelectorAll("#timelineList .tl-step[data-timeline-id]").length;
  const oct8Count=window.liveTimeline().filter(item=>item.date==="2026-10-08").length;
  select.value="2026-10-08";
  select.dispatchEvent(new window.Event("change",{bubbles:true}));
  const visibleIds=[...window.document.querySelectorAll("#timelineList .tl-step[data-timeline-id]")].map(node=>node.dataset.timelineId);
  assert.equal(visibleIds.length,oct8Count);
  assert.ok(visibleIds.includes("tl-0018"));
  assert.ok(visibleIds.includes("tl-0019"));
  assert.ok(visibleIds.includes("tl-0054"));
  assert.ok(visibleIds.every(id=>window.liveTimeline().find(item=>window.timelineStateId(item)===id)?.date==="2026-10-08"));
  select.value="all";
  select.dispatchEvent(new window.Event("change",{bubbles:true}));
  assert.equal(window.document.querySelectorAll("#timelineList .tl-step[data-timeline-id]").length,allCount);
  assert.deepEqual(app.runtimeErrors,[]);
});

test("Trip Critical count badge and Today active date strip stay synchronized", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  const document = window.document;

  window.renderHome();
  const unresolvedCount = window.eval(`OPEN_ITEMS.filter(item => item.status !== "Done" && !getOpenState()[item.id]).length`);
  assert.equal(document.querySelector("#homeOpenItemsCount").textContent, String(unresolvedCount));
  assert.equal(document.querySelectorAll("#homeOpenItems .list-item").length, Math.min(5, unresolvedCount));

  window.showPage("today");
  const chips = document.querySelector("#dateChips");
  let lastScroll = null;
  chips.scrollTo = options => { lastScroll = options; };
  const oct9 = [...chips.querySelectorAll(".date-chip")].find(chip => chip.dataset.date === "2026-10-09");
  assert.ok(oct9);
  oct9.click();
  await new Promise(resolve => setTimeout(resolve, 25));
  assert.equal(document.querySelector("#dateChips .date-chip.active").dataset.date, "2026-10-09");
  assert.ok(lastScroll, "Today date strip should scroll to keep the active date visible");
  assert.equal(lastScroll.behavior, "smooth");
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
  assert.equal(window.getLive().sharedTravel["travel-17"].start, undefined);
  assert.equal(window.liveTimeline().find(item => item.id === "tl-0017").start, "10:45");
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
  assert.equal(live.sharedTravel["travel-11"].start, undefined);
  assert.equal(window.liveTimeline().find(item => item.id === "tl-0011").start, "12:23");
  assert.equal(live.sharedTravel["travel-1"].transportation, "Car");
  assert.equal(live.sharedTravel["travel-1"].transportationDetails, "Rental car");
  assert.equal("mode" in live.sharedTravel["travel-1"], false);
  assert.equal(live.sharedTravel["travel-34"].instructions, "Legacy airport steps");

  const appCode=fs.readFileSync(path.join(projectRoot,"index.html"),"utf8");
  const masterData=fs.readFileSync(path.join(projectRoot,"data.js"),"utf8");
  assert.doesNotMatch(appCode,/italy2026_phase5_migrated|DATA_MIGRATION_KEY/);
  assert.doesNotMatch(masterData,/\bconst\s+(?:TRAINS|TRANSFERS)\s*=/);
  assert.deepEqual(app.runtimeErrors, []);
});

test("every shared travel item uses controlled purpose and transportation values", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;

  assert.equal(window.eval("SHARED_TRAVEL_ITEMS.length"), 54);
  assert.equal(window.eval("SHARED_TRAVEL_ITEMS.every(item => ITEM_TYPE_OPTIONS.includes(item.itemType))"), true);
  assert.equal(window.eval("SHARED_TRAVEL_ITEMS.every(item => TRANSPORTATION_OPTIONS.includes(item.transportation))"), true);
  assert.equal(window.eval("TIMELINE.every(item => ITEM_TYPE_OPTIONS.includes(item.itemType))"), true);
  assert.equal(window.eval("TIMELINE.every(item => TRANSPORTATION_OPTIONS.includes(item.transportation))"), true);
  assert.equal(window.eval("liveTrains().every(item => item.itemType === 'Transfer' && item.transportation === 'Train')"), true);
  assert.deepEqual(app.runtimeErrors, []);
});

test("updated flight seats and Boston transfer guide match the supplied records", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  const seats = JSON.parse(window.eval(`JSON.stringify(Object.fromEntries(liveFlights().filter(f=>f.seats).map(f=>[f.flight,f.seats])))`));
  assert.deepEqual(seats, {
    DL2706:"29F, 29E",
    SK928:"27E, 27D",
    SK915:"24G, 24H",
    SK3438:"27A, 27B"
  });
  assert.equal(window.eval("OPEN_ITEMS.find(item=>item.id==='open-0006').item"), "Confirm remaining flight seat for SK681");
  const boston = window.eval("MAP_GUIDE_LIBRARY.find(guide=>guide.src==='assets/guides/boston-terminal-a-to-e.png')");
  assert.ok(boston);
  assert.match(boston.note, /5:40 PM/);
  window.showPage("maps");
  assert.match(window.document.querySelector("#mapsFeaturedGuides").textContent, /3:45–4:25 PM/);
  assert.deepEqual(app.runtimeErrors, []);
});

test("Version 10.9 phone classifications convert to the new controlled model", async t => {
  const app = await bootApp({
    italy2026_live: {
      sharedTravel: {
        "travel-8": { itemType:"Walk", mode:"Airport connection / passport control" },
        "travel-14": { itemType:"Event", mode:"Walk" }
      }
    }
  });
  t.after(() => app.dom.window.close());
  const { window } = app;
  const live = window.getLive().sharedTravel;

  assert.equal(live["travel-8"].itemType, "Transfer");
  assert.equal(live["travel-8"].transportation, "Walk");
  assert.equal(live["travel-8"].transportationDetails, "Airport connection / passport control");
  assert.equal(live["travel-14"], undefined);
  assert.equal(window.liveTimeline().find(item => item.id === "tl-0014").itemType, "Event");

  window.renderTransport();
  window.setTravelTransportationFilter("Train");
  assert.match(window.document.querySelector("#travelResultCount").textContent, /^\d+ result/);
  assert.equal(Array.from(window.document.querySelectorAll("#travelResults .travel-card")).length > 0, true);

  window.addTripItem();
  window.document.querySelector("#ef_itemType").value = "Transfer";
  window.document.querySelector("#ef_transportation").value = "Boat / Ferry";
  window.document.querySelector("#ef_transportationDetails").value = "Hotel shuttle boat";
  window.document.querySelector("#ef_title").value = "Regression transfer";
  window.document.querySelector("#ef_from").value = "Hotel";
  window.document.querySelector("#ef_to").value = "Venice";
  window.document.querySelector("#efSave").click();
  const custom = window.getCustomLegs().find(item => item.title === "Regression transfer");
  assert.equal(custom.itemType, "Transfer");
  assert.equal(custom.transportation, "Boat / Ferry");
  assert.equal(custom.transportationDetails, "Hotel shuttle boat");
  assert.deepEqual(app.runtimeErrors, []);
});

test("Timeline details toggle in place and a second Timeline-nav tap goes to the top", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;

  window.showPage("timeline");
  const card = window.document.querySelector('[data-timeline-id="tl-0023"]');
  const details = card.querySelector(".tl-expanded");
  const button = card.querySelector(".tl-toggle");
  assert.equal(details.hidden, true);

  let renderCalls = 0;
  let topCalls = 0;
  const originalRender = window.renderTimeline;
  window.renderTimeline = () => { renderCalls++; };
  window.scrollTo = options => { if (options && options.top === 0) topCalls++; };

  window.toggleTimelineDetails("tl-0023");
  assert.equal(details.hidden, false);
  assert.equal(button.textContent, "Hide");
  assert.equal(renderCalls, 0);

  window.openTimelineFromNav();
  assert.equal(renderCalls, 0);
  assert.equal(topCalls, 1);
  window.renderTimeline = originalRender;
  assert.deepEqual(app.runtimeErrors, []);
});

test("Timeline and Travel Details deep-link and Back restore the exact FCO card", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  const document = window.document;

  window.showPage("timeline");
  const timelineCard = document.querySelector('[data-timeline-id="tl-0010"]');
  assert.ok(timelineCard);
  assert.match(timelineCard.textContent, /Open travel details/);
  assert.match(timelineCard.textContent, /Edit details/);
  const source = fs.readFileSync(path.join(projectRoot, "index.html"), "utf8");
  assert.match(source, /\.tl-detail-link-row button\.link-btn\s*\{[^}]*color:#fff !important;[^}]*background:var\(--primary\);/);

  window.openTravelDetailsFromTimeline("tl-0010", false);
  await new Promise(resolve => setTimeout(resolve, 50));
  const travelCard = document.querySelector('.travel-card[data-travel-id="travel-10"]');
  assert.ok(travelCard, "FCO Travel Details card should exist");
  assert.equal(travelCard.querySelector("details.travel-card-details").open, true);
  assert.equal(travelCard.classList.contains("search-highlight"), true);
  assert.match(travelCard.textContent, /See in Timeline/);
  assert.match(travelCard.textContent, /FCO Arrival.*Train Station/s);
  assert.equal(document.querySelector("#travelDetailsBackButton").hidden, false);

  window.history.back();
  await new Promise(resolve => setTimeout(resolve, 100));
  assert.equal(document.querySelector("#page-timeline").classList.contains("active"), true);
  assert.equal(document.querySelector('[data-timeline-id="tl-0010"] .tl-expanded').hidden, false);
  assert.equal(document.querySelector('[data-timeline-id="tl-0010"]').classList.contains("search-highlight"), true);

  window.showPage("transport");
  assert.equal(document.querySelector("#travelDetailsBackButton").hidden, true);
  assert.deepEqual(app.runtimeErrors, []);
});

test("10.12.0 promotes reviewed budget, packing, and official alert changes", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  const master = JSON.parse(window.eval(`JSON.stringify({packing:PACKING,expenses:BASE_EXPENSES,alerts:SAFETY.alerts})`));

  assert.equal(master.packing.some(item => item.id === "packing-0012"), false);
  const suitcase = master.expenses.find(item => item.id === 1788990000000);
  assert.equal(suitcase.amt, 353.05);
  assert.equal(suitcase.payment, "Credit Card");
  assert.match(suitcase.desc, /Carry-On Spinner/);
  assert.equal(master.expenses.some(item => item.id === 1788280000000), false);
  assert.equal(master.packing.some(item => item.id === "packing-0015" && item.item.includes("Carry-On Spinner") && item.bag === "Carry-on"), true);
  assert.equal(master.alerts.every(item => /^https:\/\//.test(item.url)), true);

  window.openPrepTab("safety");
  assert.equal(window.document.querySelectorAll('#prepContent a[href^="https://"]').length >= 4, true);
  assert.match(window.document.querySelector("#prepContent").textContent, /Italian Civil Protection/);
  assert.deepEqual(app.runtimeErrors, []);
});

test("Packing, phrases, and safety are separate tools and phrase changes survive backups", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  const document = window.document;

  window.showPage("more");
  const toolCards = Array.from(document.querySelectorAll("#page-more .card")).map(card => card.textContent.trim());
  assert.equal(toolCards.some(text => text.includes("Packing")), true);
  assert.equal(toolCards.some(text => text.includes("Italian Phrases")), true);
  assert.equal(toolCards.some(text => text.includes("Safety & Emergency")), true);
  assert.equal(document.querySelectorAll("[data-prep]").length, 0);

  window.openPrepTab("phrases");
  assert.equal(document.querySelector("#prepPageTitle").textContent, "Italian Phrases");
  assert.equal(window.location.hash, "#prep-phrases");
  assert.equal(window.history.state.prepTab, "phrases");
  const builtIns = window.getPhraseItems();
  assert.equal(builtIns.some(item => item.en === "What?" && item.it === "Che cosa?"), true);
  assert.equal(builtIns.filter(item => item.en === "What?").length, 1);
  assert.equal(builtIns.some(item => item.en === "23" && item.it === "ventitré"), true);
  assert.equal(builtIns.some(item => item.en === "1000" && item.it === "mille"), true);
  assert.equal(builtIns.some(item => item.en === "Good night" && item.it === "Buonanotte" && item.pr), true);
  assert.equal(builtIns.some(item => item.en === "Where is the bathroom?" && item.it === "Dov'è il bagno?" && item.pr), true);
  assert.equal(builtIns.some(item => item.en === "Watch out, pickpocket!" && item.it === "Attenzione, borseggiatore!" && item.pr), true);
  assert.equal(builtIns.some(item => item.id === "phrase-water-still" && item.it === "Vorrei un'acqua naturale, per favore" && item.pr === "voh-RAY oon-AHK-wah nah-too-RAH-lay, pair fah-VOH-ray"), true);
  assert.match(document.querySelector(".phrase-group h3").textContent, /Greetings/);
  assert.match(document.querySelector("#prepContent").textContent, /English ↔ Italian Translator/);
  assert.match(window.openItalianTranslator.toString(), /GOOGLE_TRANSLATE_DIRECT_COMPONENT/);
  assert.match(window.openItalianTranslator.toString(), /GOOGLE_TRANSLATE_PACKAGE/);
  assert.doesNotMatch(window.openItalianTranslator.toString(), /GOOGLE_TRANSLATE_PLAY_URL|play\.google\.com/);

  window.dispatchEvent(new window.PopStateEvent("popstate", {state:{page:"prep",prepTab:"safety"}}));
  assert.equal(document.querySelector("#prepPageTitle").textContent, "Safety & Emergency");

  window.openPhraseEditor(null);
  assert.equal(document.querySelector("#ef_it").getAttribute("lang"), "it");
  assert.equal(document.querySelector("#ef_it").getAttribute("spellcheck"), "true");
  document.querySelector("#ef_category").value = "Restaurants";
  document.querySelector("#ef_en").value = "No cheese, please";
  document.querySelector("#ef_it").value = "Senza formaggio, per favore";
  document.querySelector("#ef_pr").value = "SEN-tsa for-MAD-joh";
  document.querySelector("#efSave").click();
  const custom = window.getPhraseItems().find(item => item.en === "No cheese, please");
  assert.ok(custom);
  assert.match(custom.id, /^phrase-custom-/);

  const hello = window.getPhraseItems().find(item => item.en === "Good Morning");
  window.openPhraseEditor(hello.id);
  document.querySelector("#ef_pr").value = "Updated pronunciation";
  document.querySelector("#efSave").click();
  const goodbye = window.getPhraseItems().find(item => item.en === "Goodbye");
  assert.equal(window.deletePhrase(goodbye.id), true);

  window.exportData();
  const payload = await blobJson(window, app.exportedBlob());
  assert.equal(Object.values(payload.phrasecatalog.custom).some(item => item.en === "No cheese, please"), true);
  assert.equal(payload.phrasecatalog.edits[hello.id].pr, "Updated pronunciation");
  assert.ok(payload.phrasecatalog.deleted[goodbye.id]);

  window.performImport(payload, "replace");
  assert.equal(window.getPhraseItems().some(item => item.en === "No cheese, please"), true);
  assert.equal(window.getPhraseItems().find(item => item.id === hello.id).pr, "Updated pronunciation");
  assert.equal(window.getPhraseItems().some(item => item.id === goodbye.id), false);

  const searchEntry = window.globalSearchEntries().find(item => item.title === "No cheese, please");
  assert.equal(searchEntry.prepTab, "phrases");
  assert.deepEqual(app.runtimeErrors, []);
});

test("Journal and Note photos stay on one phone and out of JSON backups", async t => {
  const app = await bootApp({
    italy2026_journal: [{ts:12345,date:"2026-10-08",highlight:"Florence",meal:"Dinner",notes:"Test memory"}],
    italy2026_notes: [{id:"note_photo_test",title:"Photo note",category:"General",body:"Test note",pinned:false,createdAt:"2026-08-15T00:00:00.000Z",updatedAt:"2026-08-15T00:00:00.000Z"}]
  });
  t.after(() => app.dom.window.close());
  const { window } = app;
  const sample="data:image/jpeg;base64,cGhvdG8=";

  await window.setAttrPhotos(window.localPhotoKey("journal","12345"),[sample]);
  await window.setAttrPhotos(window.localPhotoKey("note","note_photo_test"),[sample,sample]);
  await window.renderJournal();
  assert.match(window.document.querySelector("#journalEntries").textContent,/1 of 3 photos/);
  await window.renderNotes();
  assert.match(window.document.querySelector("#notesEntries").textContent,/2 of 3 photos/);

  await window.openEntryPhotos("note","note_photo_test");
  assert.match(window.document.querySelector("#sheetContent").textContent,/Saved on this phone/);
  assert.match(window.document.querySelector("#sheetContent").textContent,/Save \/ Share/);

  window.exportData();
  const payload=await blobJson(window,app.exportedBlob());
  assert.equal("photos" in payload,false);
  assert.equal(JSON.stringify(payload).includes(sample),false);
  assert.deepEqual(app.runtimeErrors, []);
});

test("dark-mode converter styling and controlled Checked packing location are present", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  const source=fs.readFileSync(path.join(projectRoot,"index.html"),"utf8");
  assert.match(source,/\.fx-box\s*\{\s*background:#16241e;\s*color:var\(--text\)/);
  assert.match(source,/\.fx-box input\s*\{\s*background:var\(--card\);\s*color:var\(--text\)/);
  assert.equal(window.normalizePackingBag("Checked roller"),"Checked");
  assert.equal(window.normalizePackingBag("Checked rollers"),"Checked");
  assert.equal(window.eval("PACKING.some(item => item.bag === 'Checked roller' || item.bag === 'Checked rollers')"),false);
  assert.equal(window.eval("PACKING_BAG_OPTIONS.includes('Checked')"),true);
  window.matchMedia = query => ({matches:query === "(prefers-color-scheme: dark)",addEventListener(){},removeEventListener(){}});
  window.syncSystemThemeColor();
  assert.equal(window.document.body.classList.contains("dark"),true);
  assert.equal(window.document.documentElement.style.colorScheme,"dark");
  assert.equal(window.document.querySelector('meta[name="theme-color"]').content,"#111315");
  assert.deepEqual(app.runtimeErrors, []);
});

test("Da Burde replaces the PSA Giardino Corsini dinner and keeps its time unconfirmed", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const data = JSON.parse(app.window.eval(`JSON.stringify({
    timeline:TIMELINE.find(item=>item.id==="tl-0020"),
    followup:OPEN_ITEMS.find(item=>item.id==="open-0020"),
    venue:MAP_VENUES_EVENTS.find(item=>item.name==="Trattoria Da Burde")
  })`));
  assert.equal(data.timeline.status,"Time Unconfirmed");
  assert.equal(data.followup.status,"Pending");
  assert.match(data.timeline.time,/7:00 PM.*unconfirmed/i);
  assert.match(data.followup.why,/transportation from W Florence/i);
  assert.match(data.venue.note,/private Joe Lynch event/i);
  assert.deepEqual(app.runtimeErrors, []);
});

test("SK681 stays confirmed while its seat follow-up remains open until check-in", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const data = JSON.parse(app.window.eval(`JSON.stringify({
    flight:FLIGHTS.find(item=>item.id==="flight-sk681"),
    followup:OPEN_ITEMS.find(item=>item.id==="open-0006"),
    map:MAP_SAVED_PENDING.find(item=>item.item==="Flight seat map links")
  })`));
  assert.equal(data.flight.status,"Confirmed");
  assert.equal(data.followup.status,"Pending");
  assert.match(data.followup.why,/until online check-in/i);
  assert.match(data.flight.notes,/until check-in/i);
  assert.match(data.map.note,/online check-in/i);
  assert.deepEqual(app.runtimeErrors, []);
});

test("event hotel confirmations are visible while stale placeholders and other phone edits are preserved", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const result = JSON.parse(app.window.eval(`JSON.stringify({
    hotels:RESERVATIONS.filter(item=>["reservation-0002","reservation-0003","reservation-0007"].includes(item.id)),
    hotelRecords:HOTELS.filter(item=>["hotel-rome-anantara","hotel-florence-w","hotel-venice-jw"].includes(item.id)),
    jwFollowup:OPEN_ITEMS.find(item=>item.id==="open-0003"),
    mapHotels:MAP_HOTELS
  })`));
  assert.deepEqual(result.hotels.map(item=>item.status),["Confirmed","Confirmed","Confirmed"]);
  assert.deepEqual(result.hotels.map(item=>item.conf),["203390136","186071359","187185636"]);
  assert.deepEqual(result.hotelRecords.map(item=>[item.conf,item.room]),[["203390136","Premium Room"],["186071359","KING"],["187185636","KING"]]);
  assert.doesNotMatch(result.hotels[0].notes,/no additional hotel confirmation number|room-specific confirmation .* outstanding/i);
  assert.doesNotMatch(result.hotels[1].notes,/no additional hotel confirmation number|room-specific confirmation .* outstanding/i);
  assert.match(result.hotels[2].notes,/Follow PSA instructions for the station-to-island group transfer/i);
  assert.equal(result.jwFollowup,undefined);
  assert.equal(result.mapHotels.find(item=>item.city==="Venice" && item.name==="JW Marriott Venice Resort & Spa").status,"Confirmed");
  assert.match(result.mapHotels.find(item=>item.city==="Rome").note,/203390136.*Premium Room/);
  app.window.renderWallet();
  const wallet=app.window.document.querySelector("#walletContent");
  assert.match(wallet.textContent,/203390136.*186071359.*187185636/s);
  const hotelCard=Array.from(wallet.querySelectorAll(".card")).find(card=>card.textContent.includes("🏨 Hotels"));
  assert.equal(hotelCard.querySelectorAll(".wallet-key").length,4);
  assert.equal(Array.from(hotelCard.querySelectorAll("strong")).filter(label=>label.textContent.trim()==="Confirmation:").length,4);
  assert.equal(Array.from(hotelCard.querySelectorAll("button")).filter(button=>button.textContent.trim()==="Copy number").length,4);
  assert.deepEqual(app.runtimeErrors, []);

  const stalePhoneApp=await bootApp({italy2026_live:{hotels:{
    "hotel-rome-anantara":{conf:"Event-provided",room:"Event-provided room",notes:"Check out by 11:00 AM on Oct. 8 before the 11:00 AM PSA lobby meeting. Need final room confirmation and check-in details."},
    "hotel-florence-w":{conf:"Event-provided",room:"Event-provided room",notes:"Melody's private hotel note"},
    "hotel-venice-jw":{conf:"Event-provided",room:"Event-provided room"}
  }}});
  t.after(()=>stalePhoneApp.dom.window.close());
  const mergedHotels=JSON.parse(stalePhoneApp.window.eval(`JSON.stringify(liveHotels().filter(item=>["hotel-rome-anantara","hotel-florence-w","hotel-venice-jw"].includes(item.id)).map(item=>({id:item.id,conf:item.conf,room:item.room,notes:item.notes})))`));
  assert.deepEqual(mergedHotels.map(item=>[item.conf,item.room]),[["203390136","Premium Room"],["186071359","KING"],["187185636","KING"]]);
  assert.match(mergedHotels[0].notes,/Confirmation received Sep\. 29, 2026.*Guests: David Theodore White and Melody Kay/);
  assert.equal(mergedHotels[1].notes,"Melody's private hotel note");
  assert.equal(stalePhoneApp.window.JSON.parse(stalePhoneApp.window.localStorage.getItem("italy2026_live")).hotels["hotel-rome-anantara"].conf,"Event-provided");
  assert.deepEqual(stalePhoneApp.runtimeErrors, []);
});

test("Maps page prioritizes quick guides and avoids duplicate itinerary sections", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  const document = window.document;

  const mapData = JSON.parse(window.eval(`JSON.stringify({
    hotels: MAP_HOTELS,
    venues: MAP_VENUES_EVENTS,
    help: MAP_TRAVEL_HELP_LOCATIONS
  })`));
  assert.deepEqual(mapData.hotels.map(item => item.name), [
    "Anantara Palazzo Naiadi",
    "W Florence",
    "JW Marriott Venice Resort & Spa",
    "Hotel Antiche Figure"
  ]);
  assert.deepEqual(mapData.venues.map(item => [item.name,item.event,item.transportation]), [
    ["Da Danilo","Free Dinner · Oct 7 (restaurant-list suggestion)","Walk / taxi"],
    ["Trattoria Da Burde","Private Joe Lynch Group Dinner · Oct 8","Taxi / group transport TBD"],
    ["Comodo Mercado Trevi","Joe Lynch Group Dinner · Oct 6","Walk / group plan"],
    ["Nerone al Viminale","Joe Lynch Group Dinner · Oct 5","Walk / group meetup"],
    ["Osteria Ai Assassini","Dinner · Oct 10","JW shuttle / ferry"],
    ["Cucina","PSA Group Dinner · Oct 9","PSA group dinner / transport TBD"],
    ["Ristoteca Oniga","PSA Group Dinner · Oct 12","JW shuttle / vaporetto"]
  ]);
  assert.deepEqual(mapData.help.map(item => item.name), ["U.S. Embassy Rome"]);

  window.showPage("maps");
  assert.equal(document.querySelectorAll("#mapsGuideFilters [data-maps-filter]").length, 8);
  assert.match(document.querySelector("#mapsGuideFilters").textContent, /Key trip guides/);
  assert.match(document.querySelector("#page-maps").textContent, /Key Trip Guides/);
  assert.match(document.querySelector("#mapsFeaturedGuides").textContent, /Copenhagen connection[\s\S]*FCO arrival[\s\S]*Venice Vaporetto map/);
  assert.equal(document.querySelectorAll("#mapsFeaturedGuides button").length, 6);
  assert.match(document.querySelector("#mapsFeaturedGuides").innerHTML, /venice-vaporetto-map-2026\.png/);
  assert.match(document.querySelector("#mapsFeaturedGuides").innerHTML, /cph-connection-guide-outbound\.png/);
  assert.equal(document.querySelector(`#mapsFeaturedGuides a[href="https://cphsecuritywait.dk/en/passport-control"]`)?.textContent.trim(), "Live passport wait times →");
  assert.equal(document.querySelector(`#mapsAirports a[href="https://cphsecuritywait.dk/en/passport-control"]`)?.textContent.trim(), "Passport wait times →");
  const libraryCards=[...document.querySelectorAll("#mapsGuideLibrary .maps-feature-card")];
  assert.equal(libraryCards.length, 18);
  assert.deepEqual(libraryCards.map(card=>card.querySelector("h3").textContent),[
    "Italy Camera Cheat Sheet · Samsung Galaxy S23 Ultra",
    "Luggage Lock Instructions",
    "Boston Terminal A → E transfer guide",
    "CPH Outbound Connection Guide",
    "FCO Arrival → Train Station",
    "Anantara → Vatican Tour Transit Guide",
    "Colosseum → Anantara Return Guide",
    "Laundry King Florence Guide",
    "W Florence → Accademia Tour Guide",
    "Uffizi → W Florence Return Guide",
    "Venezia Santa Lucia → JW Marriott",
    "ACTV Vaporetto Route Map · 2026",
    "Venice Tide Chart · October 2026",
    "JW Marriott → Calle de le Rasse Guide",
    "Doge’s Palace → JW Marriott Return Guide",
    "Venice Departure Day Guide",
    "CPH Return Connection Guide",
    "Toilets in Italy · Survival Guide"
  ]);

  // Travel Details must open both FCO pages as one gallery from either button.
  const travelFco = document.createElement("div");
  travelFco.innerHTML = window.guideActionsForTravel("travel-10");
  document.body.appendChild(travelFco);
  const travelFcoButtons = travelFco.querySelectorAll("button");
  assert.equal(travelFcoButtons.length, 2);
  travelFcoButtons[0].click();
  assert.equal(document.querySelector("#imageViewerImage").getAttribute("src"), "assets/guides/fco-arrival-to-train-1.png");
  const stage = document.getElementById("imageViewerStage");
  stage.setPointerCapture = () => {};
  const swipe = (from, to) => {
    for (const [type,x] of [["pointerdown",from],["pointermove",to],["pointerup",to]]) {
      const event = new window.Event(type, {bubbles:true});
      Object.assign(event, {pointerId:1,clientX:x,clientY:100});
      stage.dispatchEvent(event);
    }
  };
  swipe(200, 80);
  assert.equal(document.querySelector("#imageViewerImage").getAttribute("src"), "assets/guides/fco-arrival-to-train-2.png");
  swipe(80, 200);
  assert.equal(document.querySelector("#imageViewerImage").getAttribute("src"), "assets/guides/fco-arrival-to-train-1.png");
  window.closeImageViewer(true);
  travelFcoButtons[1].click();
  assert.equal(document.querySelector("#imageViewerImage").getAttribute("src"), "assets/guides/fco-arrival-to-train-2.png");
  window.changeImageViewerSlide(-1);
  assert.equal(document.querySelector("#imageViewerImage").getAttribute("src"), "assets/guides/fco-arrival-to-train-1.png");
  window.closeImageViewer(true);
  travelFco.remove();
  const fcoCard=libraryCards.find(card=>card.querySelector("h3").textContent==="FCO Arrival → Train Station");
  assert.equal(fcoCard.querySelectorAll(".guide-gallery-links .link-btn").length,2);
  assert.equal(fcoCard.querySelectorAll(".guide-gallery img").length,0);
  assert.match(fcoCard.querySelector(".guide-gallery-links").innerHTML,/fco-arrival-to-train-1\.png/);
  assert.match(fcoCard.querySelector(".guide-gallery-links").innerHTML,/fco-arrival-to-train-2\.png/);
  assert.match(document.querySelector("#mapsGuideLibrary").innerHTML, /venice-vaporetto-map-2026\.pdf/);
  assert.match(document.querySelector("#mapsGuideLibrary").innerHTML, /cph-connection-guide-outbound\.pdf/);
  window.openImageGallery([
    {src:"assets/guides/fco-arrival-to-train-1.png",title:"FCO Arrival → Train Station · Page 1"},
    {src:"assets/guides/fco-arrival-to-train-2.png",title:"FCO Arrival → Train Station · Page 2"}
  ],0);
  assert.equal(document.querySelector("#imageViewerImage").getAttribute("src"),"assets/guides/fco-arrival-to-train-1.png");
  window.changeImageViewerSlide(1);
  assert.equal(document.querySelector("#imageViewerImage").getAttribute("src"),"assets/guides/fco-arrival-to-train-2.png");
  window.changeImageViewerSlide(-1);
  assert.equal(document.querySelector("#imageViewerImage").getAttribute("src"),"assets/guides/fco-arrival-to-train-1.png");
  window.closeImageViewer();
  assert.match(document.querySelector("#mapsGuideFilters").textContent, /Comfort/);
  assert.match(document.querySelector("style").textContent, /maps-feature-card button\.link-btn \{ color:#fff; background:var\(--primary\)/);
  assert.equal(document.querySelector("#mapsHotels"), null);
  assert.equal(document.querySelector("#mapsVenues"), null);
  assert.equal(document.querySelector("#mapsTravelHelpLocations"), null);
  assert.equal(document.querySelector("#mapsPending"), null);
  assert.match(document.querySelector("#mapsTravelHelp").textContent, /U\.S\. Embassy Rome/);
  assert.match(document.querySelector("#mapsLocalGuide").textContent, /Venice High Water Guide[\s\S]*82 cm[\s\S]*105 cm[\s\S]*135 cm/);
  assert.deepEqual(
    [...document.querySelectorAll("#mapsComfortEssentials .comfort-map")].map(image => image.getAttribute("src")),
    ["assets/comfort/rome-restrooms.jpg","assets/comfort/florence-restrooms.jpg","assets/comfort/venice-restrooms.jpg"]
  );
  assert.deepEqual(
    [...document.querySelectorAll("#mapsLocalGuide .venice-tide-item img")].map(image => image.getAttribute("src")),
    ["assets/tides/san-marco.png", "assets/tides/rialto.png", "assets/tides/santa-lucia.png"]
  );
  assert.equal(document.querySelector('#mapsLocalGuide a[href="https://www.comune.venezia.it/maree"]')?.textContent.trim(), "Check live tide forecast →");

  const oldVenueSearch = window.globalSearchEntries().find(item => item.title === "SEEN by Olivier" && item.mapsFilter === "venues");
  const oldEmbassySearch = window.globalSearchEntries().find(item => item.title === "U.S. Embassy Rome" && item.mapsFilter === "help");
  assert.equal(oldVenueSearch, undefined);
  assert.equal(oldEmbassySearch, undefined);
  assert.deepEqual(app.runtimeErrors, []);
  const guides = JSON.parse(app.window.eval('JSON.stringify(MAP_GUIDE_LIBRARY)'));
  const dated = guides.filter(guide => /^Oct \d+/.test(guide.category));
  const days = dated.map(guide => Number(guide.category.match(/^Oct (\d+)/)[1]));
  assert.deepEqual(days, days.slice().sort((a,b) => a-b));
  assert.match(guides[0].category, /Before departure/);
  assert.match(guides[guides.length-1].category, /Any day/);
  const returnGuides = dated.filter(guide => /^Oct 15/.test(guide.category));
  assert.match(returnGuides[0].title, /Venice Departure/);
  assert.match(returnGuides[1].title, /CPH Return/);

});

test("CPH passport wait tracker appears on both Copenhagen layovers and reviewed note retirement is narrow", async t => {
  const app = await bootApp({
    italy2026_notes: [
      {id:"note_1788367411611",title:"Word adds for restaurant pharsing",category:"Food & Drink",body:"Antipasti Primi Secondi Contorni Dolci",pinned:false},
      {id:"luggage-note",title:"Luggage Note",category:"Packing",body:"Cable Lock Code 710\nSuitcase Lock Code 710",pinned:false}
    ]
  });
  t.after(() => app.dom.window.close());
  const {window} = app;
  const document = window.document;

  assert.equal(window.getNotes().some(note => note.id === "note_1788367411611"), false);
  assert.equal(window.getNotes().some(note => note.id === "luggage-note"), true);

  window.showPage("transport");
  ["travel-8","travel-43"].forEach(id => {
    const card = document.querySelector(`[data-travel-id="${id}"]`);
    assert.ok(card, `${id} should be present in Travel Details`);
    assert.equal(card.querySelectorAll(`a[href="https://cphsecuritywait.dk/en/passport-control"]`).length, 1);
  });
  window.showPage("timeline");
  ["tl-0008","tl-0043"].forEach(id => {
    const card = document.querySelector(`[data-timeline-id="${id}"]`);
    assert.ok(card, `${id} should be present in Timeline`);
    assert.equal(card.querySelectorAll(`a[href="https://cphsecuritywait.dk/en/passport-control"]`).length, 1);
  });
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

  assert.deepEqual(JSON.parse(JSON.stringify(window.getOpenState())), { "open-0012": true });
  window.toggleOpen("open-0020", true);
  assert.deepEqual(JSON.parse(JSON.stringify(window.getOpenState())), { "open-0012": true, "open-0020": true });

  window.exportData();
  const payload = await blobJson(window, app.exportedBlob());
  assert.deepEqual(Object.keys(payload.pack).sort(), ["packing-0001", "packing-0002"]);
  assert.deepEqual(Object.keys(payload.open), ["open-0012", "open-0020"]);
  assert.deepEqual(Object.keys(payload.packcatalog.edits), ["packing-0001"]);
  assert.deepEqual(app.runtimeErrors, []);
});

test("approved August 15 phone changes are permanent and conflicting expenses normalize", async t => {
  const app = await bootApp({
    italy2026_expenses:[{
      id:1785675679218,date:"2026-08-02",city:"Other",cat:"Miscellaneous",
      desc:"Walmart - tracker cards",amt:31.94,cur:"USD",fx:1,traveler:"David",
      payment:"Credit Card",company:false,reimbursable:false,receipt:true,notes:""
    }]
  });
  t.after(() => app.dom.window.close());
  const { window } = app;

  const travel=JSON.parse(window.eval("JSON.stringify(SHARED_TRAVEL_ITEMS)"));
  assert.equal(travel.find(item=>item.id==="travel-17").status,"Confirmed");
  assert.equal(travel.find(item=>item.id==="travel-19").status,"Partial");
  assert.equal(travel.find(item=>item.id==="travel-13").itemType,"Event");
  assert.equal(travel.find(item=>item.id==="travel-27").itemType,"Meal");
  assert.equal(travel.find(item=>item.id==="travel-27").transportation,"Walk");
  assert.equal(travel.find(item=>item.id==="travel-42").itemType,"Event");

  const packing=window.getPackingItems();
  assert.equal(packing.find(item=>item._id==="packing-0019").qty,2);
  assert.equal(packing.find(item=>item._id==="packing-0021").qty,2);
  assert.equal(packing.find(item=>item._id==="packing-0061").qty,2);
  assert.equal(packing.some(item=>item._id==="packing-0031"),false);
  assert.equal(packing.some(item=>item.item==="T-shirts" && item.qty===5),true);
  assert.equal(packing.some(item=>item.item==="Tracker cards" && item.qty===2),true);
  assert.equal(packing.some(item=>item.item==="Sunglasses case"),true);
  assert.equal(packing.filter(item=>/credit card/i.test(item.item)).length,3);
  assert.equal(packing.some(item=>item._id==="packing-custom-13363fd7-e533-4bd6-8839-9922acf6139b" && item.bag==="Sling bag"),true);
  assert.equal(packing.some(item=>item._id==="packing-custom-13363fd7-e533-4bd6-8839-9922acf6139b" && item.item==="Credit Cards - Work/Carnival/USAA Debit"),true);
  assert.equal(packing.some(item=>item._id==="packing-custom-098dfc93-369b-4043-812d-03cde6945cda" && item.item==="Luggage/Bag Security Clips"),true);
  assert.equal(packing.some(item=>item._id==="packing-custom-222f6ddd-49f0-4f25-870f-0e54ebc226ae" && item.qty===2),true);
  const phrases=window.getPhraseItems();
  assert.equal(phrases.some(item=>item.id==="phrase-custom-0005a4bb-12de-4c6a-985c-cb73fff738ec" && item.en==="I would like…" && item.it==="Vorrei"),true);
  assert.equal(phrases.some(item=>item.id==="phrase-custom-a106f552-7b58-4333-a8a5-32c187ba162f" && item.it==="Può aiutarmi?"),true);
  assert.equal(phrases.some(item=>item.id==="phrase-custom-da366552-4415-4bbf-9781-fa032d9078ce" && item.it==="Formaggio"),true);
  assert.equal(phrases.some(item=>item.id==="phrase-custom-9fa31b65-9c66-41f4-a233-9247772dde99" && item.it==="Estathé"),true);
  assert.equal(phrases.some(item=>item.id==="phrase-0201" && item.it==="Patatine fritte"),true);
  assert.equal(phrases.some(item=>item.id==="phrase-0105" && item.it==="Mi chiamo David"),true);
  assert.equal(window.eval('RESTAURANTS.filter(item=>["Corte Sconta","Osteria alla Frasca"].includes(item.name)).length'),2);

  const expenses=window.getExpenses();
  assert.equal(expenses.some(item=>item.desc==="Alibaba backpacks" && item.amt===25),true);
  assert.equal(expenses.some(item=>item.desc==="Amazon - tracker cards" && item.amt===80),true);
  assert.equal(expenses.some(item=>/Walmart/i.test(item.desc)),false);
  assert.equal(window.eval('OPEN_ITEMS.find(item=>item.id==="open-0007")'),undefined);
  assert.equal(window.eval('PRETRIP.flatMap(group=>group.items).find(item=>item.id==="h7").done'),true);
  assert.deepEqual(app.runtimeErrors, []);
});

test("10.12.0 normalizes promoted phone data into clean schema 6 exports", async t => {
  const promotedNote={id:"note_1787450342393",title:"UNICREDIT ATM IN ROME",category:"Miscellaneous",body:"Walk toward and just past the Anantara Palazzo Naiadi. Head to the NW part of the circle in front of the hotel.\n\nStop at the UniCredit ATM on Via Vittorio Emanuele Orlando, 70, 00185 Roma RM, Italy",pinned:false,createdAt:"2026-08-23T01:59:02.393Z",updatedAt:"2026-09-07T00:21:58.594Z"};
  const app = await bootApp({
    italy2026_live:{sharedTravel:{
      "travel-8":{itemType:"Transfer",transportation:"Walk",transportationDetails:"Airport connection / passport control"},
      "travel-18":{itemType:"Transfer",transportation:"Train",transportationDetails:"Train",notes:"Phone-only note"},
      "travel-13":{itemType:"Event",transportation:"None / Not applicable",transportationDetails:"Event"},
      "travel-27":{itemType:"Meal",transportation:"Walk",transportationDetails:"Breakfast / excursion preparation"},
      "travel-42":{itemType:"Event",transportation:"None / Not applicable",transportationDetails:"Event"}
    }},
    italy2026_notes:[promotedNote,{id:"note_1788029996450",title:"FRENCH FRIES (Fried Potatoes)",category:"Food & Drink",body:"Patatine Fritte"},{id:"note_1787702157588",title:"FIXES",category:"General",body:"Make photo in notes able to open"}],
    italy2026_customrestaurants:[{id:"restaurant_1785930925395",name:"Caffe Florian",city:"Venice"}],
    italy2026_restlog:{restaurant_1785930925395:{favorite:true,notes:""}},
    italy2026_routeedits:{route_2:{from:"TPA Economy Parking",to:"TPA Main Terminal",dateISO:"2026-10-04",start:"08:00",end:"08:15",mode:"Train",duration:"10-20 min",status:"Confirmed",note:"Elevator to Level 1, then SkyConnect to Main Terminal.",secondaryNote:"Keep luggage together."}},
    italy2026_packcatalog:{
      edits:{"packing-0005":{traveler:"David",cat:"Electronics",item:"Laptop charger",qty:1,bag:"Backpack",pri:"Critical",updatedAt:"2026-08-15T13:14:18.058Z"}},
      custom:{
        "pack_1785453779362":{_id:"pack_1785453779362",traveler:"David",cat:"Travel Gear",item:"Cell phone stand",qty:1,bag:"Checked",pri:"Medium"},
        "packing-custom-13363fd7-e533-4bd6-8839-9922acf6139b":{_id:"packing-custom-13363fd7-e533-4bd6-8839-9922acf6139b",traveler:"Shared",cat:"Documents",item:"Credit cards",qty:1,bag:"Sling bag",pri:"Critical"},
        "packing-custom-222f6ddd-49f0-4f25-870f-0e54ebc226ae":{_id:"packing-custom-222f6ddd-49f0-4f25-870f-0e54ebc226ae",traveler:"Shared",cat:"Health",item:"Toilet Paper or wipes",qty:2,bag:"Checked",pri:"High"},
        "packing-custom-018902e0-0328-42d7-b3c7-dfadd3b1bcba":{_id:"packing-custom-018902e0-0328-42d7-b3c7-dfadd3b1bcba",traveler:"David",cat:"Travel Gear",item:"Luggage Lock",qty:1,bag:"Checked",pri:"Critical"},
        "packing-custom-098dfc93-369b-4043-812d-03cde6945cda":{_id:"packing-custom-098dfc93-369b-4043-812d-03cde6945cda",traveler:"David",cat:"Travel Gear",item:"Bag Clips",qty:1,bag:"Backpack",pri:"Medium"},
        "packing-custom-4f397362-8025-404b-8270-d730d1aff4c4":{_id:"packing-custom-4f397362-8025-404b-8270-d730d1aff4c4",traveler:"David",cat:"Money",item:"Alternate Wallet",qty:1,bag:"Checked",pri:"Medium"}
      },deleted:{"packing-0031":{updatedAt:"2026-08-15T13:09:10.926Z"}}
    },
    italy2026_phrasecatalog:{edits:{},custom:{
      "phrase-custom-6870f416-fbb7-411b-8df2-461bfa0d7d22":{id:"phrase-custom-6870f416-fbb7-411b-8df2-461bfa0d7d22",category:"Greetings",en:"Good Night",it:"buonanotte",pr:""},
      "phrase-custom-a106f552-7b58-4333-a8a5-32c187ba162f":{id:"phrase-custom-a106f552-7b58-4333-a8a5-32c187ba162f",category:"Questions",en:"Can you help me?",it:"Può aiutarmi?",pr:"Può-“pwoh” aiutarmi- “ah-yoo-TAR-mee” Stress is on TAR."}
    },deleted:{}}
  });
  t.after(() => app.dom.window.close());
  const {window}=app;

  assert.deepEqual(JSON.parse(JSON.stringify(window.getLive())),{sharedTravel:{
    "travel-8":{itemType:"Transfer",transportation:"Walk",transportationDetails:"Airport connection / passport control"},
    "travel-18":{notes:"Phone-only note"}
  }});
  assert.deepEqual(JSON.parse(JSON.stringify(window.getCustomRestaurants())),[]);
  assert.deepEqual(JSON.parse(JSON.stringify(window.getRouteEdits())),{});
  assert.deepEqual(JSON.parse(JSON.stringify(window.getPackCatalogData())),{edits:{},custom:{},deleted:{}});
  assert.deepEqual(JSON.parse(JSON.stringify(window.getPhraseCatalogData())),{edits:{},custom:{},deleted:{}});
  assert.equal(window.getRestLog()["restaurant-0064"].wantToTry,true);

  window.exportData();
  const payload=await blobJson(window,app.exportedBlob());
  assert.equal(payload.version,6);
  assert.equal(payload.appVersion,"11.0.3");
  assert.equal(payload.referenceNotesMode,"delta");
  assert.deepEqual(payload.live,{sharedTravel:{"travel-18":{notes:"Phone-only note"}}});
  assert.deepEqual(payload.customrestaurants,[]);
  assert.deepEqual(payload.routeedits,{});
  assert.deepEqual(payload.packcatalog,{edits:{},custom:{},deleted:{}});
  assert.deepEqual(payload.phrasecatalog,{edits:{},custom:{},deleted:{}});
  assert.deepEqual(payload.expenses,[]);
  assert.deepEqual(payload.notes,[]);
  assert.deepEqual(payload.restlog,{"restaurant-0064":{favorite:false,wantToTry:true,notes:""}});
  assert.equal(window.getNotes().some(note=>["note_1788029996450","note_1787702157588"].includes(note.id)),false);

  window.performImport(payload,"replace");
  assert.equal(window.getNotes().some(note=>note.id==="note_1787450342393"),true);
  assert.equal(window.getExpenses().length>=2,true);
  assert.equal(window.getPackingItems().some(item=>item._id==="packing-custom-222f6ddd-49f0-4f25-870f-0e54ebc226ae"),true);
  assert.deepEqual(app.runtimeErrors,[]);
});

test("schema 6 backups use Timeline IDs and Version 4 backups remain importable", async t => {
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
  assert.equal(payload.version, 6);
  assert.equal(payload.appVersion, "11.0.3");
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

  assert.equal(packageData.version,"11.0.3");
  assert.match(manifest.description,/Version 11\.0\.3/);
  assert.match(worker,/v11-0-3-tour-vouchers/);
  ["boston-terminal-a-to-e.png","fco-arrival-to-train-1.png","fco-arrival-to-train-2.png","venice-station-to-jw-marriott.png","venice-departure-day.png","italy-bathroom-survival.jpg","luggage-lock-instructions.jpg","venice-october-2026-tide-chart.png","cph-connection-guide-outbound.pdf","venice-vaporetto-map-2026.pdf","cph-connection-guide-outbound.png","venice-vaporetto-map-2026.png","laundry-king-florence.png","italy-camera-cheat-sheet-samsung-s23-ultra.png"].forEach(name=>{
    assert.equal(fs.existsSync(path.join(projectRoot,"assets","guides",name)),true);
    assert.match(worker,new RegExp(name.replace(/[.]/g,"\\.")));
  });
  assert.deepEqual(Object.fromEntries(Object.entries(counts).map(([key,ids])=>[key,ids.length])),{
    timeline:60,restaurants:67,attractions:15,reservations:13,budget:20,packing:74,open:8
  });
  Object.values(counts).forEach(ids=>{
    assert.equal(ids.every(Boolean),true);
    assert.equal(new Set(ids).size,ids.length);
  });
  assert.deepEqual(app.runtimeErrors, []);
});

test("mobile sticky controls, PDF viewer, and apostrophe phrases are wired safely", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const source = fs.readFileSync(path.join(projectRoot, "index.html"), "utf8");
  assert.match(source, /overflow-x:\s*clip/);
  assert.match(source, /\.filter-bar\s*\{[^}]*flex-wrap:\s*wrap/);
  assert.match(source, /id="pdfViewerFrame"/);
  assert.match(source, /function openPdfViewer\(/);
  assert.match(source, /data-phrase="\$\{escapeHtml\(p\.it\)\}"/);
  assert.match(source, /this\.closest\('\.phrase-row'\)\.dataset\.phrase/);
  assert.deepEqual(app.runtimeErrors, []);
});

test("schema 6 backup round trip preserves representative stable-ID records", async t => {
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

test("offline application shell lists every required local asset", async () => {
  const worker = fs.readFileSync(path.join(projectRoot, "sw.js"), "utf8");
  const required = [
    "./index.html",
    "./data.js",
    "./manifest.json",
    "./icon-192.png",
    "./icon-512.png",
    "./assets/comfort/rome-restrooms.jpg",
    "./assets/comfort/florence-restrooms.jpg",
    "./assets/comfort/venice-restrooms.jpg",
    "./assets/tides/san-marco.png",
    "./assets/tides/rialto.png",
    "./assets/tides/santa-lucia.png",
    "./assets/guides/boston-terminal-a-to-e.png",
    "./assets/guides/italy-camera-cheat-sheet-samsung-s23-ultra.png"
  ];
  required.forEach(asset => assert.match(worker, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))));
  assert.match(worker, /italy-2026-github-v11-0-3-tour-vouchers/);
  assert.match(worker, /event\.request\.mode === 'navigate' \|\| isMutableAppFile/);
  assert.match(worker, /fetch\(event\.request\)/);
  assert.match(worker, /Cached copies remain the offline fallback/);
  const vm = require("node:vm");
  for (const failed of [null, "./assets/guides/laundry-king-florence.png", "./data.js", "./assets/guides/rome-tour-voucher-1212654.pdf"]) {
    const handlers = {}, stored = [];
    let activated = false, installation;
    const context = vm.createContext({
      console: {warn() {}}, URL, Set, Promise,
      fetch: async asset => ({ok: asset !== failed, status: asset === failed ? 404 : 200, type: "basic"}),
      caches: {open: async () => ({put: async asset => stored.push(asset)})},
      self: {addEventListener: (type, handler) => {handlers[type] = handler;}, skipWaiting: () => {activated = true;}}
    });
    vm.runInContext(worker, context);
    handlers.install({waitUntil: promise => {installation = promise;}});
    if (failed === "./data.js" || (failed && failed.includes("voucher"))) {
      await assert.rejects(installation, /Required offline assets missing/);
      assert.equal(activated, false);
    } else {
      await installation;
      assert.equal(activated, true);
      assert.ok(stored.includes("./data.js"));
      assert.ok(stored.includes("./assets/guides/rome-tour-voucher-1212654.pdf"));
      assert.ok(stored.includes("./assets/guides/florence-tour-voucher-1212654.pdf"));
    }
  }

});

test("retired planning notes are removed without deleting reference notes", async t => {
  const app = await bootApp({
    italy2026_notes: [
      {id:"note_1786799240417", title:"Watch Venice tides - over 80cm floods start", body:"Temporary tide note"},
      {id:"note_1786799292126", title:"App add", body:"Temporary development list"},
      {id:"note_sweet_drinks_italy", title:"Sweet Drinks in Italy", body:"Estathé: available everywhere", pinned:true},
      {id:"note_keep_me", title:"Keep this note", body:"User content", pinned:false}
    ]
  });
  t.after(() => app.dom.window.close());
  const notes = JSON.parse(JSON.stringify(app.dom.window.getNotes()));
  assert.deepEqual(notes.map(note => note.id), ["note_sweet_drinks_italy", "note_1787450342393", "note_1787519592195", "note_keep_me"]);
  assert.equal(notes[0].pinned, false);
  assert.match(notes[0].body, /Estathé: \(ess-tah-tay\)/);
  assert.deepEqual(app.runtimeErrors, []);
});

test("pre-departure checklist includes the Italy EES app support reminder", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  window.showPage("pretrip");
  const item = window.eval('PRETRIP.flatMap(group=>group.items).find(item=>item.id==="h9")');
  assert.ok(item);
  assert.equal(item.done,true);
  assert.match(item.text, /Sweden and Portugal, not Denmark or Italy/);
  const links = [...window.document.querySelectorAll('#pretripContent a')].map(link=>link.href);
  assert.equal(links.includes("https://travel-europe.europa.eu/dam/jcr:1429f2b3-ac8e-4c6b-914c-2ebbdb063fa9/FAQ_app.pdf"), true);
  assert.equal(links.includes("https://travel-europe.europa.eu/ees"), true);
  assert.deepEqual(app.runtimeErrors, []);
});

test("expense receipt photos stay local and keep receipt status accurate", async t => {
  const app = await bootApp();
  t.after(() => app.dom.window.close());
  const { window } = app;
  const expense = window.getExpenses()[0];

  await window.setExpenseReceiptPhotos(expense.id, ["data:image/jpeg;base64,receipt-one"]);
  assert.equal(window.getExpenses().find(item => item.id === expense.id).receipt, true);
  assert.deepEqual(
    await window.getLocalPhotos(window.expenseReceiptPhotoKey(expense.id)),
    ["data:image/jpeg;base64,receipt-one"]
  );

  window.exportData();
  const payload = await blobJson(window, app.exportedBlob());
  assert.equal(JSON.stringify(payload).includes("receipt-one"), false);

  await window.setExpenseReceiptPhotos(expense.id, []);
  assert.equal(window.getExpenses().find(item => item.id === expense.id).receipt, false);
  assert.deepEqual(app.runtimeErrors, []);
});
