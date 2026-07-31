# Italy 2026 Travel Companion

## Version 10.4.0 Development Test — Revision 3

This development build preserves the existing app data and appearance while testing a cleaner Timeline workflow.

### Added

- Small Home and Italy clocks, displayed side by side on the Home page
- Timeline details collapsed by default with a single ▶ Details / ▼ Details toggle
- Completed timeline items remain in chronological position, show a checkmark, fade, and strike through
- Timeline automatically scrolls with the next unfinished item about one-third down the screen, leaving recent completed context above
- A subtle “NEXT” marker identifies the first unfinished timeline step
- The timeline action is labeled “Hide Event” to distinguish it from collapsing details

### Existing behavior preserved

- Timeline editing, hiding, restoring, search, filters, route links, and manual emphasis
- User-entered local data and backup/import tools
- GitHub Pages and installable PWA behavior

Publish and test this build from the `develop` branch before merging it into `main`.


### Revision 3 — Timeline Item Types

- Replaced the technical “Timeline emphasis” control with an easy “Item type” selector.
- Item types now control icons and default styling:
  - Flight — green and bold
  - Boat / Ferry — blue and bold
  - Train — orange and bold
  - Walk — purple and bold
  - Bus — brown and bold
  - Taxi — red and bold
  - Event / Tour — yellow and bold
  - Information — standard, without forced color or bold styling
- Existing timeline items are automatically classified from their mode/content until manually changed.
- Individual items can be changed to Information when a line should remain visually neutral.
