# Version 12.0.2 — Approved bag-drop sequence

Prepared October 3, 2026 at 11:22 AM EDT. Main remains v12.0.0 until David directs the reviewed release.

| Oct 4 card | Updated planning window |
| --- | --- |
| Delta bag drop | 09:30–09:55 |
| Security / departure gate | 09:55–10:30 |

The first-load correction changes only the reviewed old saved clock fields. Private notes and later intentional edits survive. The existing Rome walking guide and PDF remain included in develop.

## Commit title and full description

v12.0.2: Move Oct 4 bag drop to 09:30

Set Delta bag drop to 09:30–09:55 and the following security/gate walk to 09:55–10:30. Correct only the reviewed old saved clock fields once on first load, preserving all other fields and subsequent user edits.

Keep stable IDs, backup schema 6, the five-page Rome guide, and local-only photo storage. Update version, timestamp, release notes, and handoff together. Other phone timing conflicts remain pending; main is unchanged.

Validation: 45/45 npm tests pass, including later Save/reload preservation. Both Oct 3 phone simulations have the approved clock windows and preserve every unrelated exported value. Physical-phone and airplane-mode review remains pending.

## Changed file paths

- `CHANGELOG.md`
- `ITALY-PROJECT-HANDOFF.md`
- `README.md`
- `data.js`
- `docs/RELEASE-CHECKLIST.md`
- `docs/UPDATE-12.0.2.md`
- `index.html`
- `manifest.json`
- `package-lock.json`
- `package.json`
- `sw.js`
- `tests/app.test.js`

## Phone-only review

After an approved main release, open the existing app online and confirm About shows 12.0.2. Inspect Oct 4 in Timeline and Travel Details on each phone: bag drop 9:30–9:55, followed by security/gate walk 9:55–10:30. No JSON import is required. Let loading finish before airplane-mode review. Preserve the existing installation and locally attached photos.

Next pending decision: Oct 5 registration is 1:30 PM on David Cell and 1:01 PM on David Work Cell. Other export differences remain separate for individual review.
