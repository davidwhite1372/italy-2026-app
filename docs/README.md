# Project Documentation

This folder contains planning and maintenance notes. It is not part of the visible app and does not change the production website.

- `ROADMAP.md` — planned versions and major feature goals.
- `RELEASE-CHECKLIST.md` — Version 10.9.0 validation, publishing, and rollback checks.

## Branch workflow

- `main` — stable production version published by GitHub Pages.
- `develop` — development and testing branch.

New work should be committed to `develop`. After testing, approved changes can be merged into `main`.
