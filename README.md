# Italy 2026 Travel Companion

GitHub Pages deployment package for David and Melody's Italy 2026 Travel Companion.

## Current build

**Version 10.5.1 DEV — iPhone installation and night-mode readability repair**

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

## Version 10.4.0 DEV R5 — Home Page Order

- Preserved the existing countdown statistics bar exactly as designed.
- Moved the countdown bar above the Home/Italy clocks.
- Kept Next Up directly below the clocks.
- Left all other Home page content unchanged.



## Version 10.5 Development — Phase 2 Flights

- Added a master air booking record and six master flight records.
- Flight edits now originate from the Travel page or linked Timeline/Wallet controls.
- Timeline, Travel, Reservations, Confirmation Wallet, Maps routes, Home Next Up, and shared wallet text read from the same flight records.
- Existing duplicate flight data remains in the source as a rollback fallback, but is no longer used by the linked views.


## Version 10.5 DEV Phase 3 — Hotels

Hotel data is now unified into master hotel records. Editing a hotel from Reservations or the Confirmation Wallet updates hotel references in Home, Today, Timeline, Reservations, Wallet, and city cards.


## Version 10.5 DEV Phase 5

- Added one master shared record for each train, boat, bus, taxi, car/drive, walk, event, tour, and information item.
- Timeline, Travel, and linked Maps routes now read from the same shared travel records.
- Editing a shared travel item from Travel or Timeline updates all linked views.
- Existing local timeline edits are migrated into the new shared record layer on first use.


## Phase 4.5 Editing Experience

- Added clear data-owner banners to Travel, Reservations, Food, Packing, and Budget.
- Added linked Quick Tips on Home.
- Made Timeline shared records mostly read-only; Timeline retains Complete, Hide Event, Item Type, and Details controls.
- Timeline edit links now direct users to the page that owns the underlying record.


## Phase 5 Final Data Cleanup

- Migrates legacy Timeline, train, transfer, and master-owned reservation overrides into the current master records.
- Removes duplicate legacy data sources after migration.
- Removes unused legacy Timeline/train/transfer editor functions.
- Linked Maps routes now direct edits to Travel instead of creating a second route copy.
- Adds an on-device Single Source of Truth integrity check under More.
- Centralizes the visible app/data build label.


## Version 10.5.1 DEV — Install and Contrast Repair

- iPhone installation instructions now detect whether the site is open in Safari or another iOS browser.
- Non-Safari iPhone browsers direct the user to Safari and attempt to copy the site address.
- Timeline color-coded cards retain readable dark text in automatic night mode.
- Neutral Information cards continue to follow the normal dark theme.


## Version 10.5.2 DEV

- Fixed Timeline Details button contrast in automatic dark mode.
- Details button now uses a light background with dark text for reliable readability on all timeline card colors.
- Bumped the PWA cache so installed devices receive the update.
