# NCI GitHub site package (v4)

This static package is ready for GitHub Pages or standard static hosting.

## What changed in v4
- added a final typography and spacing polish pass for a more premium, editorial feel
- refined card, hero, footer, and brief-page styling without changing the content structure
- kept the portfolio architecture from v3 intact
- added deployment instructions for replacing an older live site

## Fastest way to replace the old site
Read `DEPLOY-OVER-OLD-SITE.md`.

## GitHub Pages
1. Open the repository that currently serves the site.
2. Replace the existing site files with the files in this package.
3. Commit the changes to the publishing branch.
4. In **Settings > Pages**, make sure the site is publishing from the correct branch and folder.

## Standard hosting
Upload these files into the live web root for the site, replacing the old site files.

## Notes
- The contact form uses `mailto:` so it works on static hosting.
- The site includes `.nojekyll` for GitHub Pages compatibility.
- Community Equity Lab remains included as a subfolder microsite.
