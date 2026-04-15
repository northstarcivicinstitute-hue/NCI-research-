# Deploy this package over the old NCI site

## Before you replace anything
1. Download a backup of the current live site.
2. Keep a copy of the current repo or hosting directory before overwriting files.
3. Confirm where the live site is actually hosted: GitHub Pages, GoDaddy Web Hosting (cPanel), or another host.

## Option A: Replace the old site on GitHub Pages
1. Unzip this package on your computer.
2. Open the repo that currently publishes the site.
3. Delete or overwrite the old HTML, asset, and subfolder files with the files from this package.
4. Commit and push to the branch that GitHub Pages publishes from.
5. In GitHub, go to **Settings > Pages** and verify the publishing source is still the correct branch and folder.
6. If the site uses a custom domain, verify the custom domain is still set in **Settings > Pages**.

### If the repo already has a custom domain
- Do not remove the domain from the Pages settings unless you intend to change it.
- If a `CNAME` file already exists in the repo, keep it unless you are intentionally changing domains.

## Option B: Replace the old site on GoDaddy Web Hosting (cPanel)
1. Unzip this package on your computer.
2. In GoDaddy, open your product page.
3. Under **Web Hosting (cPanel)**, select **Manage** for the correct hosting account.
4. Open **File Manager** for the domain.
5. Go to the live web root for the site, usually `public_html` or the addon-domain root.
6. Make a backup of the old site files first. Easiest safe option: move the current files into a folder like `_backup-old-site`.
7. Upload the new files and folders from this package into the live web root.
8. If you upload a zip file, extract it inside the live web root.
9. Make sure `index.html` from this package ends up directly in the live root, not inside an extra nested folder.

## Option C: Replace the old site with FTP
1. Open your FTP client.
2. Connect to the hosting account.
3. Navigate to the live web root.
4. Backup the old site folder locally first.
5. Drag the new files from this package into the live web root and overwrite the old files.

## Important hosting note
If the current site is on GoDaddy **Websites + Marketing**, that platform does not provide the same file-manager workflow for uploading a static code package. In that case, move the site to GitHub Pages or to GoDaddy Web Hosting (cPanel) first.

## Post-upload checklist
- Home page loads
- Main nav works
- Briefs page shows all 6 briefs
- MSEEM page loads
- Community Equity Lab subsite loads
- Contact button opens the contact page
- Mobile nav opens and closes correctly
- No pages return 404
