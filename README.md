# Italy 2026 Travel Companion

GitHub Pages deployment package for David and Melody's Italy 2026 Travel Companion.

## Current build

**Version 10.7.9 DEV — Notes filter visibility fix**

The existing appearance, itinerary content, navigation, pinch-zoom behavior, backup/import tools, and installable PWA experience are preserved. Deployment-specific changes are limited to relative GitHub Pages paths, PWA scope/identity, cache isolation, and the `.nojekyll` marker.

## Publishing

Upload every file in this repository to the repository root. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, and save.

The published address will normally be:

`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/`

## Important data note

User-entered app data is stored locally in each browser/device. Before removing an older Netlify installation, export a backup from that installation and import it into the newly installed GitHub Pages app.



## Version 10.7.9 — Notes filter visibility fix

- Corrected inactive Journal/Notes tabs and note-category pills so their labels and icons remain visible.
- Preserved the selected green state and dark-mode styling.

## Version 10.7.8 — Journal & Notes

- Journal and reference notes now share one page with separate tabs.
- Notes are stored as separate editable entries and work fully offline.
- Notes support search, categories, pinning, editing, and deletion.
- The first permanent note covers sweet drink alternatives in Italy.
- Notes are included in backup export/import and cross-device merge.

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


## Version 10.6A DEV — Home Experience

- Preserved the existing countdown / days-and-nights bar at the top of Home.
- Kept the Home and Italy clocks directly below the countdown.
- Kept the Next Up card directly below the clocks.
- Activated linked Home Quick Tips for common editing and travel tasks.
- Added small mobile spacing improvements without redesigning the Home page.


## Version 10.6A1 DEV — Home Quick Tip Fix

- Removed the obsolete static Add-to-Home-Screen tip from the Home page.
- Removed the duplicate Quick Tip container that displayed as an empty blue bar.
- Preserved the active Quick Tip card at the top of the Home page.


## Version 10.6B DEV — Timeline Experience

- Added clear date dividers between timeline days.
- Added compact From → To route summaries directly on travel cards.
- Improved type icons, spacing, time hierarchy, and mobile scanability.
- Refined completed-step fading and strike-through behavior.
- Kept NEXT auto-scroll, Details, Hide Event, Item Type, and owner-page edit links.


## Version 10.6C DEV

- Moved trip-item creation from Timeline to Travel.
- Renamed **Add a leg** to **Add Trip Item**.
- Added support for travel, hotel, event, tour, and information items.
- New items remain linked to Timeline and Maps where applicable.


## Version 10.6C DEV

- Polished Travel page cards for flights, trains, transfers, tours, and events.
- Added prominent routes, times, confirmations, seat status, and map shortcuts.
- Preserved Add Trip Item and single-source-of-truth editing.


### Version display
The Home page uses a compact bottom-right About tab. Tap it to view app, data, and build versions without showing development notes in the main interface.

### Version 10.7.2
Travel now uses a sticky filter and search bar instead of section jump links. Results can be filtered by type, searched by key trip details, and remain ordered by date and time.


### Version 10.7.3
- Home About tab now displays the full three-part version number.
- Added TSA Known Traveler and Delta/SAS rewards numbers to the Confirmation Wallet.
- Passport information remains excluded from the app.

### Version 10.7.4
- Travel filters now contain only actual trip records.
- Moved general ground transportation advice into a dedicated Local Transportation Guide.
- Moved contingency planning into Travel Help / What If?
- Preserved all existing reference content without mixing it into searchable travel items.


### Version 10.7.5
- Split Travel activities into separate Tours and To-Dos filters.
- Classified operational tasks such as bag drop, security, and hotel check-in as To-Dos.
- Moved Local Transportation Guide and Travel Help / What If? from Travel to Maps, Links & Travel Guide.
- Kept Travel focused on actual itinerary items.

### Version 10.7.6
Maps, Links & Travel Guide now uses section filters instead of page jumps, the Trip Tools label matches the page name, and the Home outbound route includes FCO (Rome).

### Version 10.7.7
Travel cards are collapsed by default. Their essential route and status information remains visible, while confirmations, notes, maps, and edit controls expand directly below the status row.
