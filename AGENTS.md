# Italy 2026 App — standing project instructions

## Start of every work session

- Before editing, tell David to start from the latest `develop` branch and give the pull instructions: confirm the working tree is clean, then run `git checkout develop` and `git pull --ff-only origin develop`.
- If the working tree has uncommitted changes, preserve and inspect them before syncing. Do not discard or overwrite them to make the pull work.
- For GitHub's web UI, remind David to select `develop` in the branch selector and verify the latest commit before editing. Keep `main` for approved, tested releases.

## Every app handoff

- Provide the commit title and full commit description/body every time a build is ready for GitHub. Do not make David ask for commit information.
- Include exact develop commit/push and test steps with every handoff, followed by the main-branch merge steps only after the develop checks pass.
- Distinguish a complete review ZIP from changed source files. The ZIP is a full snapshot and contains unchanged files; list the actual changed paths separately so GitHub uploads do not create needless churn.
- Keep the review ZIP complete and exclude `.git` and `node_modules`.
- Preserve `main` as production. Do not deploy/merge to `main` unless David directs the release.

## Project workflow

- Develop and test on `develop`; run `npm test` before handoff.
- Preserve stable IDs and backup schema compatibility. Increment app metadata and update the changelog, README, manifest, package files, and service-worker cache when making a versioned app change.
- Keep uncertain travel facts marked as assumptions or pending until confirmed. Do not invent train numbers, hotel confirmation numbers, or event details.
