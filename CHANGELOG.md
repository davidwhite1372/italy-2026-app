## [10.6A1 DEV] - 2026-08-01

### Fixed

- Removed the obsolete Home Screen installation tip from the bottom of Home.
- Removed the duplicate empty Quick Tip container/blue bar.
- Preserved the working Quick Tip section at the top of Home.

# Changelog

## [10.6A DEV] - 2026-08-01

### Added

- Activated the Home Quick Tip card with direct links to the correct app sections.
- Added mobile-friendly Quick Tip button layout.

### Preserved

- Existing countdown / days-and-nights bar at the top of Home.
- Home and Italy clocks directly below the countdown.
- Next Up directly below the clocks.
- All Version 10.5.2 dark-mode and iPhone-install repairs.

## [10.5.2] - 2026-08-01

### Fixed

- Corrected unreadable Timeline `Details` button text in automatic dark mode.
- Added high-contrast normal, active, and keyboard-focus states for the Details toggle.
- Bumped the service-worker cache identity so installed apps receive the repair.


## [10.5.1 DEV] - 2026-07-31

### Fixed

- Added browser-aware iPhone installation guidance. Chrome, Edge, Firefox, and Opera on iPhone now clearly direct the user to Safari.
- Safari now shows the exact Share → Add to Home Screen installation steps.
- Improved Timeline night-mode contrast by keeping colored tiles light and forcing dark readable content text.
- Kept neutral Information cards native to the dark theme.
- Bumped the service-worker cache so installed devices receive the repair.

## [10.5.0 DEV Phase 5] - 2026-07-31

### Changed

- Completed the single-source-of-truth cleanup for flights, hotels, shared travel, activities, Timeline links, and linked Maps routes.
- Migrated and removed legacy duplicate Timeline, train, transfer, and master-owned reservation overrides.
- Removed unused legacy duplicate editor functions.
- Centralized the app/data version label.

### Added

- Data Integrity check under More to verify master references and legacy override cleanup.


## [10.5.0 DEV Phase 4.5] - 2026-07-31

### Added

- Data-owner guidance banners on editable pages.
- Linked Home Quick Tips for common update tasks.
- Timeline links to the correct source page for flight, hotel, and shared travel changes.

### Changed

- Timeline is now mostly read-only for shared records.
- Timeline retains completion, visibility, item-type, and detail controls.


## [10.5.0 DEV Phase 4] - 2026-07-31

### Changed

- Unified trains, transfers, walks, boats, buses, taxis, car/drive legs, tours, events, and information items into shared master travel records.
- Travel, Timeline, and Maps now stay synchronized when those records are edited.
- Added a Tours, Events & Information section to the Travel page.
- Updated the visible app version label to Phase 4.


## [10.5.0-dev-phase2-flights] - 2026-07-31

### Added

- Master air booking and flight records.
- Flight editor on the Travel page, Timeline, and Confirmation Wallet.

### Changed

- Timeline flight legs, Reservations, Wallet, Maps routes, Home Next Up, and shared wallet text now read from the same flight records.
- Editing a flight number, route, date, time, cabin, status, or notes updates all linked flight views.

All notable changes to the Italy 2026 Travel Companion will be documented here.

## [10.4.0-dev-r5] - 2026-07-31

### Changed

- Moved the existing countdown statistics bar to the top of the Home page.
- Preserved the countdown and days/nights design unchanged.
- Home page order is now Countdown, Home/Italy clocks, then Next Up.

## [Unreleased]

### Added — Version 10.5 DEV Phase 3 Hotels

- Added four master hotel records.
- Unified hotel names, dates, confirmations, addresses, room details, payment notes, taxes, breakfast notes and map links.
- Hotel edits now flow to Home, Today, Timeline, Reservations, Confirmation Wallet and city cards.
- Preserved existing duplicate source data as a rollback safety net during development.


## [10.4.0 DEV R2] - 2026-07-31

### Changed

- Rebuilt timeline data from the approved cleanup workbook.
- Replaced legacy color/emphasis guessing with explicit Item Types.
- Split Event and Tour into separate types.
- Classified train-like people movers as Train.
- Removed rows marked REMOVE until final agendas are available.
- Added stronger visual separation between timeline cards.

### Version 10.4.0 Development R1

- Added side-by-side Home and Italy clocks.
- Added collapsible timeline details.
- Added NEXT marker and automatic scroll to the first unfinished timeline item.
- Completed items remain in place with faded strike-through styling.
- Preserved the repaired Version 10.3 timeline color logic and all existing trip content.


- Continue quality-of-life improvements on the `develop` branch.
- Evaluate shared cloud data and multi-device synchronization for Version 11.

## [10.2.1] - 2026-07-30

### Added

- Pinch-to-zoom support.
- GitHub Pages deployment package.
- GitHub Desktop workflow.
- Stable `main` branch and working `develop` branch.
- GitHub Pages PWA scope and cache isolation.
- `.nojekyll` marker.

### Preserved

- Existing appearance, navigation, trip content, timeline editing, backup/import tools, and PWA behavior.

### Hosting

- Migrated production hosting from Netlify to GitHub Pages.
- Production URL: `https://davidwhite1372.github.io/italy-2026-app/`


## [10.4.0-dev-r3] - 2026-07-31

### Added
- Home Next Up timeline summary.
- Timeline route-flow details.
- Google and Apple Maps quick actions.
- Wallet copy controls and larger confirmation display.
- Expanded budget-at-a-glance totals.
- Cell Phone Stand to David's Travel Gear packing list.

### Fixed
- Removed obsolete Timeline Emphasis code remaining after Item Type migration.
