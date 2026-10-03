# Version 12.0.1 Release Checklist

Prepared October 3, 2026 at 10:43 AM EDT from fresh clean `develop` at 140894a. Initial live `main` is v12.0.0. This guide-only increment does not change itinerary or phone data.

## Automated and source checks
- [x] All 44 npm regression tests pass, including five-page Travel Details / All Guides navigation and PDF opening.
- [x] Both October 3 phone-export simulations exactly match their separately normalized v12.0.0 baselines after the change and after a Merge round trip.
- [x] Stable itinerary IDs and schema 6 unchanged; data.js is byte-for-byte unchanged.
- [x] The supplied five-page PDF is preserved byte-for-byte. All five preview pages are rendered from that PDF.
- [x] App/build/package/lockfile/manifest/cache versions and current timestamp consistently use 12.0.1.
- [x] Missing any new guide page or PDF blocks worker activation; an unrelated optional-guide failure remains tolerated.

## Phone-only review
- [x] Fresh separately labeled October 3 David Cell and David Work Cell exports supplied.
- [ ] Review the five-page guide and original PDF from the develop commit on the phone.
- [ ] After an approved main release, open the installed app online and confirm About shows 12.0.1.
- [ ] On each phone, open the Oct 7 transfer card: swipe forward/back through all five pages, zoom, and open the PDF.
- [ ] Repeat from All Guides; confirm the guide remains in Oct 7 order.
- [ ] Let the app finish loading online, then turn on airplane mode and repeat the gallery/PDF checks.
- [ ] Confirm existing notes, expenses, packing, flights, and locally attached photos remain visible. Do not clear storage or uninstall.

## Deferred phone-export decisions
- Oct 5 PSA registration: David Cell 1:30 PM; David Work Cell 1:01 PM; master 1:00–5:00 PM registration window.
- Oct 9 Uffizi return walk: David Cell 2:30–3:30 PM; David Work Cell 3:30–4:30 PM; master is flexible after the tour.
- Oct 11 Murano/Burano: David Cell 8:00 AM–5:00 PM; work-phone note says Time TBD.
- Oct 4: phone bag drop begins 8:45 AM while SkyConnect is 9:05–9:30 AM; sequence needs review.
- Oct 15: phone VCE check-in starts 7:00 AM while the master airport bus is 7:00–8:00 AM; sequence needs review.
- Other event/status edits and inherited older notes remain separate from this guide increment; do not blindly merge two exports or replace newer master facts with older notes.

## Develop and production
- [ ] Commit/push the tested guide change to develop and verify GitHub Actions.
- [ ] David directs any main release after reviewing the exact change. No main merge is implied by a phone-export upload.
- [ ] Verify live source and both physical phones after an approved release, then tag the verified production version.

---

# Version 11.0.3 Release Checklist

Prepared September 30, 2026 at 5:57 PM EDT from the supplied fresh develop copy (home-PC source commit ac59e06). Work remains local on develop; no remote push, main merge, or deployment performed.

## Automated and source checks
- [x] All 41 existing npm tests pass after release and booking assertions were updated.
- [x] APP_METADATA app/build, package/lockfile, manifest description, and service-worker cache consistently use 11.0.3; schema remains 6.
- [x] Existing stable IDs unchanged; one new planned-budget ID budget-0020 added; both original tour PDFs preserved byte-for-byte.
- [x] Both separately labeled Sep 30 phone backups were tested in isolated simulations. Their normalized notes, flights, expenses, packing, checklists, restaurant state, deleted records, phrases, and budget overrides are preserved; only the two new default tour expenses are added.
- [x] New default expenses total $656.08, company-paid, unsubmitted, not reimbursable; repeated loads do not duplicate them, and submission edits survive.
- [x] Optional-asset failure tolerated; core/voucher failure blocks new worker activation.
- [x] A1–A7 / B1–B4 / C1–C3 outcomes recorded in CHANGELOG.md.

## Phone and offline review
- [x] Fresh labeled David Cell and David Work Cell schema 6 exports supplied before edits.
- [ ] Open the FCO guide in Travel Details from either page; swipe between both pages and verify zoom/back.
- [ ] On develop, confirm both booking numbers and open each voucher on both phones. Original PDFs contain Rome page 1 and Florence page 2.
- [ ] Verify $351.64 Rome and $304.44 Florence under Company paid and Needs work report, with no duplicates. Venice $241.38 must appear only as a company-card planned cost, charge scheduled Oct 10, and not in actual spending.
- [ ] Confirm existing notes, flights, restaurant states, and personal expenses survive.
- [ ] Confirm All Guides are ordered before departure → Oct 4–15 → general references, with Venice departure before Copenhagen return on Oct 15.
- [ ] Test install sheet in portrait/landscape and at larger text settings; verify dismissal persists.
- [ ] Load both vouchers online once, then verify they and core pages open in airplane mode. Do not clear storage or uninstall.
- [ ] Open the supplied payment-confirmation screenshot on either tour card for the expense report; user-added receipt photos remain outside JSON backups.

## Develop handoff / production
- [ ] Confirm GitHub Desktop is on develop with a clean Changes tab; Fetch origin, then Pull origin if offered, before copying the patch.
- [ ] Copy the changed files with their relative folders, inspect the Changes tab, then commit/push develop with the supplied title/body.
- [ ] Verify GitHub Actions and the physical-phone checks above.
- [ ] Merge develop to main only after David explicitly approves the reviewed release. Provide one step at a time.
- [ ] Verify production and tag v11.0.3 only after approved release checks.
