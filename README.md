# Italy 2026 Travel Companion

Private, offline-capable travel companion for David and Melody's 2026 Italy trip.

## Current development build

**Version 12.0.8 — Confirmed Delta airside Boston transfer**
Last edited October 3, 2026 at 2:52 PM EDT. All Boston instructions now use Delta's internal Terminal A–E shuttle, staying inside security with no TSA reentry. Luggage is confirmed checked through to Rome (FCO). The remade one-page PNG/PDF guide opens from Travel Details, All Guides, and Featured Guides, and both formats are required in the offline cache. Aim for the SK928 gate by 4:45 PM for the unchanged 5:40 PM departure; follow the boarding pass deadline. All 51 tests pass. Both labeled Oct 3 phone simulations preserve all 19 saved sections exactly, with idempotent Merge round trips. No new saved-data migration is added. Physical-phone and airplane-mode review remain pending after an approved release.

Version 12.0.7 set Murano/Burano to 8:00 AM–5:00 PM, with flexible breakfast before the excursion and dinner at 7:00 PM. On Oct 15, leave Hotel Antiche Figure at 7:00 AM, allow walk/tickets through 7:30 AM, bus/wait through 8:30 AM, then airport check-in/security through 10:15 AM before the unchanged 11:00 AM flight. Exact ATVO service remains pending; use the next suitable bus and begin check-in earlier if possible. All approved times, hotel websites/copy controls, schema 6, local photos, and other guide assets are retained in 12.0.8.

Version 12.0.0 replaces the Rome and Florence tour booking numbers with 1212654, adds supplied offline vouchers and $656.08 in company-paid expenses awaiting a work report, and makes narrow travel-data, pronunciation, install-sheet, budget-caption, and offline-cache fixes. Dates, tour times, existing IDs, schema 6, and the page layout are preserved.

Version 11.0.0 updated the Oct. 5–12 itinerary, added three booked tour records and the matching outbound/return transfer cards, and included six Rome/Florence/Venice transfer guides plus a Copenhagen return-connection guide in PNG and PDF formats. The Oct. 13–15 personal itinerary remains as supplied. The Open Items list contains only eight genuine future checks; completed, optional, duplicate, and obsolete tasks were removed. Remaining items cover the €620 hotel balance, Da Burde timing/transport, Oct. 11 excursion details, Oct. 12 Viator payment/tickets and shuttle timing, Osteria ferry/time, the Oct. 15 bus timetable, the SK681 seat, and the unsupplied PSA excursion page.

Production remains on the stable `main` branch. Develop and test on `develop`; do not merge or publish until the app and both phones are reviewed and the release is approved.

## Data and backups

User-entered information is stored locally on each phone. Changes made on one phone do not automatically appear on the other.

- Export a fresh backup before changing devices, clearing browser data, or reinstalling the app.
- Backup schema numbers describe file compatibility; they are separate from the app version.
- Version 12.0.8 creates schema 6 backups and continues importing schema 5, schema 4, and older supported backups.
- Both Sep 30 device-labeled schema 6 exports were reviewed for conflicts. Preserve device-specific notes, flights, expenses, and local photos.
- Shared cloud data is still an evaluation item; this release adds no account, backend, or online synchronization.
- Online receipt recognition and the AI Italian tutor / microphone workflow remain unbuilt; provider, privacy, offline, and interaction requirements still need a product decision.

## Release workflow

1. Make and test changes on `develop`.
2. Push the approved develop changes and verify the checks.
3. Merge into `main` only after the user approves the tested release.
4. Verify the live installed app and browser version.
5. Create the version tag and GitHub release as a rollback point.
6. Return to `develop` for the next change.

## Project files

- `index.html` — application layout, styling, and behavior.
- `data.js` — permanent trip content and itinerary records.
- `manifest.json` — installable PWA metadata.
- `sw.js` — offline application cache.
- `CHANGELOG.md` — release history.
- `docs/ROADMAP.md` — completed and future work.
- `docs/RELEASE-CHECKLIST.md` — Version 11 develop and main acceptance.
- `tests/` — automated regression checks.

## Testing

With Node.js installed, run:

```text
npm ci
npm test
```

GitHub Actions runs the same checks when changes are pushed to `develop` or `main`, and for pull requests targeting either branch. Do not include `.git` or `node_modules` in a changed-files ZIP.
