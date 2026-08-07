# Italy 2026 Travel Companion Roadmap

## Version 10.2.1 — Stable GitHub Migration
Status: Complete

- Preserve the existing design, content, PWA installation, and offline behavior.
- Add pinch-to-zoom support.
- Move hosting from Netlify to GitHub Pages.
- Establish GitHub Desktop, `main`, and `develop` workflows.

## Versions 10.3.0–10.8.2 — Travel App Expansion
Status: Complete

- Added Timeline, Travel, reservations, wallet, maps, trip guidance, and live-trip tools.
- Added linked master trip records and on-device data-integrity checks.
- Added restaurant, attraction, packing, budget, journal, notes, search, weather, and backup features.
- Improved mobile, installed-PWA, dark-mode, and offline behavior.
- Released and tagged Version 10.8.2 as the stable pre-foundation rollback point.

## Version 10.9.0 — Pre-11 Foundation
Status: In progress on `develop`

- Clarify app, build, and backup-schema metadata.
- Clean current documentation and obsolete internal development labels.
- Introduce stable record IDs before multi-device synchronization.
- Migrate Timeline state and backup files away from numeric step identifiers.
- Define timestamps, deletion markers, and conflict behavior for mutable records.
- Preserve compatibility with existing local data and Version 4 backup files.
- Add automated regression coverage before shared-data work.
- Remove confirmed dead code separately from data-model migration.

## Version 11.0.0 — Shared Cloud Data
Status: Evaluation planned

- Shared online database for authorized phones.
- Synchronize selected user-entered data.
- Preserve offline cached operation and export/import as a manual backup.
- Add authentication, access control, timestamps, deletion markers, and a documented conflict policy.
- Separate shared trip data from device-only settings and caches.
- Protect the stable production app while the shared system is tested.
