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
