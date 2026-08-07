# Italy 2026 Travel Companion

Private, offline-capable travel companion for David and Melody's 2026 Italy trip.

## Current development build

**Version 10.9.0 DEV — Pre-11 Foundation**

Version 10.9.0 prepares the existing app for the larger Version 11 shared-data work. It focuses on clear version metadata, stable record identities, storage migration, and regression protection while preserving the current design and offline behavior.

Production remains on the stable `main` branch. New work is developed and tested on `develop` before release.

## Data and backups

User-entered information is currently stored locally in each browser or installed app. Changes made on one phone do not automatically appear on another phone.

- Export a fresh backup before changing devices, clearing browser data, or reinstalling the app.
- Backup schema numbers describe file compatibility; they are separate from the app version.
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

Do not include the local `.git` directory in replacement-file or ZIP packages.
