# InnoveX Website — Maintenance Notes

## Important
This package is the final approved version. Do not change the existing HTML,
CSS, JavaScript, assets, links, text, layout, colors, animations, or responsive
behavior unless a future change is explicitly requested.

## Project structure
- `index.html` — main landing page
- `contact.html` — contact page
- `team.html` — team page
- `styles.css` — landing/shared visual styles
- `contact.css` — contact-page styles
- `team.css` — team-page styles
- `main-nav-footer.css` — shared navigation/footer styles
- `*.js` — page behavior/scripts
- `assets/` — images and other static assets

## Safe future-change workflow
1. Make a backup of the current ZIP before editing.
2. Change only the file and selector/component required for the requested update.
3. Do not replace the complete stylesheet or page when a small override is enough.
4. Preserve all existing links and asset paths.
5. Check desktop and mobile layouts after every visual change.
6. Test all three pages before creating a new ZIP.
7. Keep comments for future custom sections clearly marked, for example:
   `/* FUTURE CUSTOMIZATION: ... */`
8. Do not remove existing working code simply because it is not currently visible.

## Footer social buttons
The footer currently contains Instagram, LinkedIn, and Email buttons.
Their visual treatment and hover effects are intentionally defined in
`main-nav-footer.css`. Modify those rules only when a future request is
specifically about the footer social buttons.

## Final-version rule
When creating a future ZIP, keep the same filenames and folder structure unless
a requested feature genuinely requires a new file.

## Temporary Team Names
Team member names are temporarily hidden and replaced with “Will be updated soon”.
When finalized, replace only the placeholder text in `team.html`; do not change
the existing card layout or styling.
