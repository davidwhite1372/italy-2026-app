## Version 10.7.5
- Added separate Tours and To-Dos filters on Travel.
- Reclassified operational itinerary tasks as To-Dos while keeping excursions and experiences under Tours.
- Renamed Maps & Links to Maps, Links & Travel Guide.
- Moved Local Transportation Guide and Travel Help / What If? into the renamed guide page.

## [10.7.1] - 2026-08-03

### Changed
- Replaced the development build label on Home with a compact `Italy App v10.7` About tab.
- Kept the tab in the existing bottom-right Home location.
- Moved app version, data version, and build details into a tap-to-open About panel.

## [10.7.0 DEV] - 2026-08-03

### Added
- Swipe left/right and Previous/Next controls on Today to move through trip days.
- Manual restaurant creation for discoveries made during the trip.
- GPS-assisted restaurant capture that saves coordinates, a Google Maps link, and the nearest trip city.
- Delete controls for manually added restaurants.

### Preserved
- Existing restaurant favorites, visited status, ratings, notes, filters, and backup/import behavior.

## [10.6D4] - 2026-08-03

### Added
- U.S. State Department 24/7 overseas emergency number.
- Tap-to-call buttons for Italy 112, the U.S. Embassy Rome, and the State Department.

### Changed
- Standardized the U.S. Embassy Rome phone number formatting.

## [10.6.0-dev-d3] - 2026-08-03

### Timeline step-label cleanup
- Removed visible Timeline step numbers from the interface.
- Preserved the underlying `step` field for completion tracking, hidden-item state, deep links, validation, and stable chronological tie-breaking.
- Deferred removal of the underlying field until the Version 11 cleanup and dependency review.

## [10.6.0-dev-d2] - 2026-08-03

### Flight duration correction
- Corrected SK3438 JFK to TPA duration from 3h 11m to 3h 23m.
- Kept the confirmed 7:50 PM departure and 11:13 PM arrival times unchanged.
- Updated Timeline, flight details, Travel, and Confirmation Wallet source data consistently.

## [10.6.0-dev-d1] - 2026-08-03

### Permanent trip-data updates
- Saved the TPA Economy Parking to Main Terminal SkyConnect leg as confirmed default trip data.
- Saved the current Rome to Florence PSA group-train plan and outstanding confirmation needs.
- Saved the confirmed Italo 8904 Club Executive details, coach, and seats for Florence to Venice.
- Made the exported Timeline item-type corrections permanent for travel items 3, 4, 8, and 10.
- Added David’s cell phone stand permanently to the checked-bag packing list.

## [10.6.0-dev-c] - 2026-08-03

### Travel page polish
- Rebuilt Travel cards around clearer routes, times, status, confirmations, instructions, and notes.
- Added fast section navigation for flights, trains, transfers, tours, and local transportation.
- Added a Travel readiness summary showing items ready versus items needing verification.
- Added dedicated confirmation blocks and copy-friendly booking information.
- Improved Google Maps and Apple Maps route buttons with clearer labels.
- Preserved Add Trip Item and all single-source-of-truth editing behavior.

## [10.6.0-dev-b2] - 2026-08-03

### Timeline polish
- Improved spacing and hierarchy throughout Timeline cards.
- Reformatted travel legs with labeled From/To points and endpoint times.
- Added sticky day headers with per-day completion counts and progress bars.
- Improved overall progress summary and highlighted the true NEXT step.
- Reorganized Details into clear What to do, Notes, and Maps & links sections.
- Improved mobile readability without changing Timeline data or architecture.

# Changelog

## [10.6.0-dev-b] - 2026-08-01

### Changed

- Added date dividers to separate each timeline day.
- Added compact From → To summaries to travel cards without opening Details.
- Improved timeline icons, spacing, time hierarchy, and mobile readability.
- Refined completed-step fading and strike-through styling.
- Preserved NEXT auto-scroll, full details, links, completion, hiding, and Item Type controls.

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

## [10.6B1 DEV] - 2026-08-01

### Changed

- Moved the add control from Timeline to Travel.
- Renamed Add a leg to Add Trip Item.
- Added a flexible Item Type-first form for travel, hotel, tour, event, and information entries.
- Added an Added Trip Items section on Travel for editing newly created records.


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


## [10.6.0 DEV C] - 2026-08-01

### Changed
- Redesigned Travel cards for faster scanning.
- Added prominent departure/arrival layout, confirmation and seat information, and Google/Apple Maps actions.
- Improved train, transfer, tour, event, and custom trip-item presentation.

## 10.7.2 — Travel filtering and search
- Replaced Travel section jump buttons with sticky type filters.
- Added filters for All, Flights, Trains, Transfers, Hotels, Tours, and Other.
- Added Travel search across airline, train, city, hotel, confirmation, route, and notes.
- Added hotels to the Travel view.
- Kept filtered results in date-and-time order and added a live result count.


## 10.7.3 — Wallet traveler identifiers
- Updated the Home About tab to display Italy App v10.7.3.
- Added David's TSA Known Traveler Number, Delta SkyMiles number, and SAS EuroBonus number to the Confirmation Wallet.
- Added Pending placeholders for Melody's corresponding numbers.
- Excluded passport numbers from permanent app data.

## 10.7.4 — Separate travel items from guidance
- Removed static Ground Transport and Contingency records from Travel filter results.
- Added Local Transportation Guide and Travel Help / What If? reference panels.
- Preserved actual custom and miscellaneous trip items under Other items.
- Updated the Home About tab to Italy App v10.7.4.
