# Italy 2026 Travel Companion

Private, offline-capable travel companion for David and Melody's 2026 Italy trip.

## Current development build

**Version 10.11.0 DEV - Timeline and Travel Details**

Version 10.11.0 makes Timeline the live trip-day guide and renames Travel to Travel Details. Two-way links open the exact matching card for instructions, guides, maps, and editing. It also adds official alert links, records the Travelpro suitcase purchase, and promotes the reviewed September 1 phone-data deletion while retaining schema 6 compatibility.

Version 10.10.2 is the stable production release until 10.11.0 is tested on `develop`, merged to `main`, and verified live/offline.

Production remains on the stable `main` branch. New work is developed and tested on `develop` before release.

## Data and backups

User-entered information is currently stored locally in each browser or installed app. Changes made on one phone do not automatically appear on another phone.

- Export a fresh backup before changing devices, clearing browser data, or reinstalling the app.
- Backup schema numbers describe file compatibility; they are separate from the app version.
- Version 10.11.0 creates schema 6 backups and continues to import schema 5, schema 4, and older supported backups automatically.
- Version 11 will evaluate authorized shared cloud data while retaining offline support and manual backups.

## Publishing

GitHub Pages publishes the repository's `main` branch from the repository root. The production site is:

`https://davidwhite1372.github.io/italy-2026-app/`

Release workflow:

1. Make and test changes on `develop`.
2. Merge the approved build into `main`.
3. Verify the live installed app and browser version.
4. Create a version tag and GitHub release as a rollback point.
5. Return to `develop` for the next change.

## Project files

- `index.html` — application layout, styling, and behavior.
- `data.js` — permanent trip content.
- `manifest.json` — installable PWA metadata.
- `sw.js` — offline application cache.
- `CHANGELOG.md` — release history.
- `docs/ROADMAP.md` — upcoming foundation and Version 11 work.
- `tests/` — automated regression checks for current app behavior.

## Testing

With Node.js installed, run:

```text
npm ci
npm test
```

GitHub Actions runs the same checks whenever changes are pushed to `develop` or `main`, and for pull requests targeting either branch.

Do not include the local `.git` directory in replacement-file or ZIP packages.
