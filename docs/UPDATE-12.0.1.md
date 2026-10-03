# Version 12.0.1 — Phone-only guide update

Prepared October 3, 2026 at 10:43 AM EDT. This increment replaces only the Oct 7 Colosseum-to-Tiber-Island guide. Main remains v12.0.0 until David directs a reviewed release.

## Commit title and full description

v12.0.1: Replace Rome transfer guide with five-page walking guide

Preserve David’s supplied original PDF and add five rendered pages to the existing Oct 7 transfer guide. Travel Details and All Guides share the swipeable gallery and PDF link; every new guide asset is required in the offline cache.

Update the version, timestamp, release notes, and project handoff together. Preserve schema 6, stable IDs, all itinerary records, both phone exports, and local-only photo storage. Phone time/event conflicts remain pending individual review; main is unchanged.

Validation: 44/44 npm tests pass. Both Oct 3 phone simulations exactly match their separate v12.0.0 data baselines after loading and a Merge round trip. Original PDF byte comparison passes. Physical-phone gallery/PDF and airplane-mode checks remain pending.

## Changed file paths

- `CHANGELOG.md`
- `ITALY-PROJECT-HANDOFF.md`
- `README.md`
- `assets/guides/rome-colosseum-to-tiber-island-food-tour-2.png`
- `assets/guides/rome-colosseum-to-tiber-island-food-tour-3.png`
- `assets/guides/rome-colosseum-to-tiber-island-food-tour-4.png`
- `assets/guides/rome-colosseum-to-tiber-island-food-tour-5.png`
- `assets/guides/rome-colosseum-to-tiber-island-food-tour.pdf`
- `assets/guides/rome-colosseum-to-tiber-island-food-tour.png`
- `docs/RELEASE-CHECKLIST.md`
- `docs/UPDATE-12.0.1.md`
- `index.html`
- `manifest.json`
- `package-lock.json`
- `package.json`
- `sw.js`
- `tests/app.test.js`

## Phone-only next step

Review the original PDF and five page images in this develop commit. Timeline/event disagreements are listed in RELEASE-CHECKLIST.md and need individual decisions before promoting phone edits. No phone import is needed for this guide replacement.

After David directs a main release: open the installed app online, confirm About shows 12.0.1, then open the Oct 7 guide in Travel Details and All Guides. Swipe all five pages, zoom, and open the PDF. Let online loading finish before repeating in airplane mode on each phone. Do not clear browser storage or uninstall. Photos remain only on their original phone.
