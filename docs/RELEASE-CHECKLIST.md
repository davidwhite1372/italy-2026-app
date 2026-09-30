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
