# Version 12.0.6 Release Checklist

Prepared October 3, 2026 at 12:34 PM EDT from clean develop ecbfb89. Production main remains v12.0.0.

## Automated and source checks
- [x] All 48 npm tests pass, including actual clicks on all four hotel Copy number buttons.
- [x] Clipboard/fallback copy paths preserve exact confirmation values, including quotes, an apostrophe, and an ampersand. No JavaScript errors occur on the tested clicks.
- [x] Both labeled Oct 3 phone simulations exactly match normalized v12.0.4 baselines; all saved sections and Merge round trips are unchanged.
- [x] data.js, all itinerary cards and approved times, official hotel URLs, schema 6, local-photo behavior, Rome guide/PDF, and required offline assets are unchanged from v12.0.5.
- [x] App/build/package/lockfile/manifest/cache metadata and current timestamp consistently use 12.0.6.
- [x] main-to-develop comparison before the fix shows no divergence; the branch allows a fast-forward. This is not a deployment or a physical-phone result.

## Physical phones / offline after approved release
- [ ] Confirm About shows 12.0.6. Tap each hotel Copy number button, paste, and verify the complete number; open each official website and return to the app.
- [ ] Confirm notes, flights, expenses, packing, and local photos remain visible, with prior approved card times intact.
- [ ] After online loading completes, verify core pages, wallet, Rome gallery/PDF, and affected cards in airplane mode. Hotel websites require internet.

## Unresolved itinerary decisions
- [ ] Oct 11 Murano/Burano: confirm PSA pickup/return; personal 08:00–17:00 versus work-phone Time TBD remains unreviewed.
- [ ] Oct 15 VCE check-in: resolve personal-phone 07:00 start against the master 07:00–08:00 bus window.

## Develop and production
- Verify the exact develop commit's GitHub Actions after push; the handoff records the result.
- Main remains v12.0.0. A release must use David's reviewed candidate, then verify GitHub Actions/Pages and both phones. Do not claim 100% verification while the checks and decisions above remain open.

---

# Version 12.0.5 Release Checklist

Prepared October 3, 2026 at 12:14 PM EDT from clean develop a33dd82. Production main remains v12.0.0.

## Automated and source checks
- [x] All 47 existing npm tests pass; only expected release metadata assertions changed in the tests.
- [x] Wallet DOM review verifies four Hotel website buttons with the verified official property targets, new-tab behavior, and accessible hotel-specific labels.
- [x] All four prominent hotel confirmation numbers and Copy number controls remain visible. Shared wallet text includes all four matching URLs; an existing private hotel note is preserved.
- [x] Both Oct 3 phone simulations exactly match separately normalized v12.0.4 baselines, including all 19 saved sections. Merge round trips are idempotent.
- [x] Only the four master hotel website fields and wallet render/share behavior changed. All itinerary cards, approved times, stable IDs, schema 6, local-photo storage, Rome guide/PDF, and required offline assets are unchanged.
- [x] App/build/package/lockfile/manifest/cache metadata and current timestamp use 12.0.5 consistently. Offline boot and wallet rendering pass with fetch unavailable.

## Phone-only review after approved production release
- [ ] Confirm About shows 12.0.5 on both existing phone installations. In Confirmation Wallet, tap each Hotel website button and check the correct property page opens; return to the app.
- [ ] Confirm the prominent hotel confirmation numbers and Copy number buttons still work; shared wallet text includes the official URLs.
- [ ] Confirm existing notes, expenses, packing, flights, and locally attached photos remain visible; no phone import/reset is required.
- [ ] After online loading completes, verify wallet confirmations and the five-page Rome guide/PDF in airplane mode. External hotel websites need internet.

## Separate unresolved phone timing decisions
- Oct 11 Murano/Burano: personal phone 8:00 AM–5:00 PM versus work-phone Time TBD; await PSA confirmation before setting an independent 8:00 AM departure.
- Oct 15 VCE check-in: phone 7:00 AM overlaps master bus 7:00–8:00 AM.
- Other unreviewed device-specific edits remain separate; do not bulk merge phone exports.

## Develop and production
- [x] v12.0.5 committed to develop at ecbfb89970cd74bcde3d365f2a23cf5fea43b338; GitHub Actions run 37136393257 succeeded.
- Merge/release main only after David directs the reviewed release, then verify live source and physical phones.

---

# Version 12.0.4 Release Checklist

Prepared October 3, 2026 at 12:01 PM EDT from clean develop d7043d7. Production main remains v12.0.0.

## Automated and source checks
- [x] All 47 npm tests pass, including rendered Timeline order, exact reviewed-pair correction, preservation of a different custom pair, and later Save/reload preservation.
- [x] Both Oct 3 labeled phone simulations show Uffizi return 15:30–16:30 before the 18:15 Cucina dinner. Retain all prior approved registration/departure times.
- [x] Every unrelated normalized exported value matches the separately preserved v12.0.0 baseline after allowing only approved bag-drop/security, registration, and Uffizi return clock fields. Merge round trips are idempotent.
- [x] Only travel-59 / tl-0059 master return clock fields and planning text changed from v12.0.3. The tour finish is unconfirmed; the walking estimate stays 15–20 minutes.
- [x] All other master cards, stable IDs, schema 6, local-only photo behavior, five-page Rome guide/PDF, and required offline assets are unchanged.
- [x] App/build/package/lockfile/manifest/cache metadata and current timestamp use 12.0.4 consistently.

## Phone-only review after approved production release
- [ ] Confirm About shows 12.0.4 on both existing phone installations. Check Oct 9 return at 3:30–4:30 PM in Timeline and Travel Details, before Cucina at 6:15 PM.
- [ ] Confirm the return planning window remains distinct from the 15–20 minute walk estimate and unconfirmed tour finish.
- [ ] Confirm notes/statuses, flights, expenses, packing, and local photos remain visible; no phone import/reset is required.
- [ ] Confirm Oct 5 registration, Oct 4 bag-drop sequence, and Rome gallery/PDF after complete online loading, then in airplane mode.

## Next individual decisions
- Oct 4 bag-drop sequence, Oct 5 registration, and Oct 9 Uffizi return: resolved in their approved increments; other phone edits remain separate.
- Oct 11 Murano/Burano: personal phone 8:00 AM–5:00 PM versus work-phone Time TBD.
- Oct 15 VCE check-in: phone 7:00 AM overlaps master bus 7:00–8:00 AM.

## Develop and production
- [x] v12.0.4 committed to develop at a33dd82e7c03b9f4edbd964cb481827911f30007; GitHub Actions run 37135543581 succeeded.
- Merge/release main only after David directs the reviewed release, then verify live source and physical phones.

---

# Version 12.0.3 Release Checklist

Prepared October 3, 2026 at 11:42 AM EDT from clean develop b92da89. Production main remains v12.0.0.

## Automated and source checks
- [x] All 46 npm tests pass, including actual Timeline order, reviewed registration override correction, different custom starts, and later Save/reload preservation.
- [x] Both Oct 3 labeled phone simulations show 13:30 registration between the 13:20 walk finish and 17:30 dinner, with the 17:00 desk closing time unchanged.
- [x] Every unrelated normalized exported value matches the separately preserved v12.0.0 baseline after allowing only the approved bag-drop/security and registration clock fields. Merge round trips are idempotent.
- [x] Only travel-13 / tl-0013 master registration start and planning text changed from v12.0.2. All other master cards, stable IDs, and schema 6 are unchanged.
- [x] Five-page Rome guide/PDF and all required offline assets are retained; service-worker behavior is unchanged apart from the versioned cache name.
- [x] Version/build/package/lockfile/manifest/cache metadata and current timestamp use 12.0.3 consistently.

## Phone-only review after approved production release
- [ ] Open the existing app online, confirm About shows 12.0.3, and check registration at 1:30 PM in Timeline and Travel Details on both phones.
- [ ] Confirm the Oct 5 order: hotel walk ends 1:20 PM, registration 1:30 PM, hotel room check-in from 3:00 PM, dinner 5:30 PM. The desk remains open 1:00–5:00 PM.
- [ ] Confirm existing notes, flights, expenses, packing, and locally attached photos remain visible; no phone import/reset is required.
- [ ] Confirm Oct 4 bag drop 9:30–9:55 / security 9:55–10:30 and the five-page Rome guide/PDF still work after complete online loading, then in airplane mode.

## Next individual decisions
- Oct 4 bag-drop sequence: resolved in v12.0.2; other departure-phone edits remain separate.
- Oct 5 PSA registration: resolved at 1:30 PM in v12.0.3; current cards fit.
- Oct 9 Uffizi return: personal 2:30–3:30 PM versus work 3:30–4:30 PM.
- Oct 11 Murano/Burano: personal 8:00 AM–5:00 PM versus work-phone Time TBD.
- Oct 15 VCE check-in: phone 7:00 AM overlaps master bus 7:00–8:00 AM.

## Develop and production
- [x] v12.0.3 committed to develop at d7043d7f5584b88777c0b613c9baab043fc15d94; GitHub Actions run 37134600537 succeeded.
- Merge/release main only after David directs the reviewed release, then verify live source and physical phones.

---

# Version 12.0.2 Release Checklist

Prepared October 3, 2026 at 11:22 AM EDT from clean develop 41f1dd0. Initial live main remains v12.0.0.

## Automated and source checks
- [x] All 45 npm tests pass, including the one-time clock correction and later Save/reload preservation.
- [x] Both October 3 phone simulations show bag drop 9:30–9:55 AM and security 9:55–10:30 AM; every unrelated normalized exported value is unchanged.
- [x] Changes are limited to the two departure clock windows and their reviewed saved overrides. Stable IDs and schema 6 are unchanged.
- [x] Five-page Rome guide and original PDF remain identical to v12.0.1; all required offline assets are retained.
- [x] Version/build/package/lockfile/manifest/cache metadata and current timestamp use 12.0.2 consistently.

## Phone-only review after approved production release
- [ ] Open the app online, confirm About shows 12.0.2, and inspect Oct 4 bag drop and security in Timeline and Travel Details on each phone.
- [ ] Verify personal notes, expenses, packing, flights, and local photos remain visible. No JSON import, clearing storage, or uninstall is needed.
- [ ] Verify the five-page Rome guide, PDF, and departure cards after loading finishes and airplane mode is enabled.

## Next individual decisions
- Oct 4 bag-drop sequence: resolved by David; retain other departure-phone edits for their separate review.
- Oct 5 PSA registration: David Cell 1:30 PM versus David Work Cell 1:01 PM.
- Oct 9 Uffizi return: David Cell 2:30–3:30 PM versus David Work Cell 3:30–4:30 PM.
- Oct 11 Murano/Burano: David Cell 8:00 AM–5:00 PM versus work-phone Time TBD note.
- Oct 15 VCE check-in: phone 7:00 AM overlaps the 7:00–8:00 AM master bus window.

## Develop and production
- [x] v12.0.2 committed to develop at b92da89042475b0742d75e6ac1169c93b0d2c8c3; GitHub Actions run 37133500974 succeeded.
- [ ] Merge/release main only when David directs the reviewed release; then verify live source and physical phones.

---

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
- [x] v12.0.1 committed to develop at 41f1dd05eae0afd6a4969905caffe1a36c418b1e; GitHub Actions run 37131498655 succeeded.
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
