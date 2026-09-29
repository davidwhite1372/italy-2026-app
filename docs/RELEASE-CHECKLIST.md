# Version 11.0.2 Release Checklist

V11.0.2 develop build prepared September 29, 2026 at 6:29 PM EDT from V11.0.1. Production branch `main` has not been changed by this patch; do not merge, publish, or deploy until the user approves after review.

## Automated checks

- [x] `npm ci` completes from the supplied lockfile.
- [x] `npm test` passes locally (41 tests); GitHub Actions still requires a develop push.
- [x] App/build/package/manifest versions all show 11.0.2; backup schema remains 6.
- [x] Service worker cache uses the v11.0.2 key and all guide PNG/PDF assets remain in its shell.
- [x] Rome, Florence, and JW hotel records, reservations, confirmation wallet, and W Florence check-in card show confirmation numbers 203390136, 186071359, and 187185636 with the supplied room types.
- [x] The confirmation wallet provides a copy control for each hotel number.
- [x] Hotel numbers have labeled prominent styling matching TSA and Delta identifiers.
- [x] Existing backup imports remain schema-compatible; stable IDs are unique.

## Agenda and content review

- [x] Oct. 5: 12:23 is clearly marked as a Leonardo Express placeholder; Nerone replaces SEEN.
- [x] Oct. 6: Cantine Santa Benedetta and Comodo replace the old excursion/dine-around entries; an Oct. 6 email check for the €620 Antiche Figure link is listed.
- [x] Oct. 7: tour meeting directions, maps, return guide, and free-dinner restaurant suggestion are clear; Villa Miani is removed.
- [x] Oct. 8: Train 10 group block is 10:45 AM–1:15 PM; Da Burde is 7:00 PM, explicitly time-unconfirmed.
- [x] Oct. 9: Accademia/Uffizi tour with outbound and return guidance; 6:15 PM dinner at Cucina retained; 3rosso is recorded as the street number.
- [x] Oct. 10: Italo 8904, PSA-led transfer (no independent routing), gondola, and 6:00 PM provisional Osteria Ai Assassini entry are intact.
- [x] Oct. 11: Murano & Burano is selected; missing pickup details and the still-unsaved PSA excursion page remain visible.
- [x] Oct. 12: booked tour, JW shuttle/walking guides, and 7:00 PM Oniga dinner are present; variable shuttle timing remains in Open Items.
- [x] Oct. 13–15 personal itinerary remains unchanged; Oct. 15 bus timing is a separate Open Item.
- [x] Open Items contains eight genuine future confirmations; obsolete and completed entries are removed.

## Phone and offline review

- [ ] Export fresh labeled backups from both phones before installing/replacing files.
- [ ] Review the V11 build on each phone and preserve all phone-only notes, expenses, restaurant states, and packing changes.
- [ ] Open each new PNG guide, PDF guide, map link, reservation, and tour timeline card on a phone.
- [ ] After loading the app online once, confirm the new guides remain available offline.

## Develop and production handoff

- [ ] Start from latest `develop`; preserve local changes and do not use `main` for development.
- [ ] Commit and push only after the user reviews the changed-files ZIP and resolves any blocking agenda questions.
- [ ] Verify GitHub Actions and manual local checks on `develop`.
- [ ] Ask the user to approve before merging `develop` to `main` or publishing.
- [ ] After approval, merge and verify production; tag `v11.0.2` only after any chosen production checks pass.
