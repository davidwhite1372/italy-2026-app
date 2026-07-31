# Italy 2026 Travel Companion

GitHub Pages deployment package for David and Melody's Italy 2026 Travel Companion.

## Current build

**Version 10.3.0 — Timeline mode formatting**

The existing appearance, itinerary content, navigation, pinch-zoom behavior, backup/import tools, and installable PWA experience are preserved. Deployment-specific changes are limited to relative GitHub Pages paths, PWA scope/identity, cache isolation, and the `.nojekyll` marker.

## Publishing

Upload every file in this repository to the repository root. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, and save.

The published address will normally be:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

## Important data note

User-entered app data is stored locally in each browser/device. Before removing an older Netlify installation, export a backup from that installation and import it into the newly installed GitHub Pages app.


## Version 10.3.0

Automatic timeline emphasis defaults:

- Flight: green + bold
- Train: blue + bold
- Boat/ferry/water transport: purple + bold
- Bus/coach: orange + bold
- Taxi/cab: black + bold
- Walk: standard existing appearance

Each timeline item can still be manually changed using Timeline emphasis.


## Version 10.4.0 Development R1

- Added compact Home and Italy clocks on the Home page.
- Timeline details are collapsed by default and can be expanded per item.
- Completed timeline items stay in place, fade, and show strike-through formatting.
- The first unfinished item is marked NEXT.
- Opening Timeline automatically scrolls near the last completed item and next unfinished item.
- Existing Version 10.3 timeline emphasis and trip content are preserved for this first test.


## Version 10.4.0 DEV R2 — Timeline Data Cleanup

- Replaced legacy timeline emphasis guessing with explicit Item Types.
- Added separate Event and Tour types.
- Classified SkyConnect people-mover legs as Train.
- Removed timeline rows marked REMOVE in the review workbook.
- Added visible separation between timeline events.
- Applied the approved timeline review data, including the ATVO departure split.


## Version 10.4.0 DEV R3 — Experience Polish

- Added Home-page Next Up card sourced from the first unfinished timeline item.
- Added clearer From → To route flow inside timeline details.
- Added Google Maps and Apple Maps shortcuts to routes and hotels.
- Polished Confirmation Wallet with prominent confirmations and copy buttons.
- Added Today, Trip Total, and Personal Budget Left summary cards.
- Preserved restaurant favorites, ratings, visit logging, and packing progress.
- Added David's Cell Phone Stand under Travel Gear.
- Removed the last obsolete Timeline Emphasis editor code.
