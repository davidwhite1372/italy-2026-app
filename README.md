# Italy 2026 Travel Companion

Private, offline-capable travel companion for David and Melody's 2026 Italy trip.

## Current development build

**Version 10.14.1 - Guide and airport usability release**

Version 10.14.1 adds the Copenhagen passport-wait links, combines the two-page FCO arrival guide into a swipeable offline card, and orders the guide library chronologically to match the travel timeline. It retains the reviewed traveler identifiers, corrected Google Translate launch path, receipt-backed Travelpro carry-on budget entry, merged PDF/graphic guide cards, reconciled phone changes, offline support, and backup schema 6.

Version 10.12.0 included the Timeline and Travel Details corrections, receipt sourced expenses, work expense report tracking, CPH and Venice offline guides, the Quick Guides & Maps page, Italian phrase playback, Google Translate access, separate Favorite and Want to try restaurant states, corrected sticky headers, expanded note editing, and the reviewed phone-data reconciliation while retaining schema 6 compatibility.

Version 10.14.0 is the previous release. Version 10.14.1 is developed and tested on `develop` before its approved merge to `main`.

Production remains on the stable `main` branch. New work is developed and tested on `develop` before release.

## Data and backups

User-entered information is currently stored locally in each browser or installed app. Changes made on one phone do not automatically appear on another phone.

- Export a fresh backup before changing devices, clearing browser data, or reinstalling the app.
- Backup schema numbers describe file compatibility; they are separate from the app version.
- Version 10.14.1 creates schema 6 backups and continues to import schema 5, schema 4, and older supported backups automatically.
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
