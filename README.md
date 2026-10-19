# SEEP Website
Static site (HTML, CSS, vanilla JS) for SEEP, the Self Enhancement & Empowerment Program. No build step, backend or paid service.

## Files
- `index.html`, `about.html`, `programs.html`, `j-k-sir.html`, `resources.html`, `contact.html`: pages
- `students-focus-blueprint.html`: the program landing page
- `404.html`: custom not-found page (assumes a GitHub *project* site; see note below)
- `assets/css/style.css`: all styling and colours (variables at top)
- `assets/js/config.js`: **the one file to edit**: Students Focus Blueprint URL
- `assets/js/script.js`: mobile menu and program button links
- `assets/images/`: put your photos and logo here (see its README)

## Students Focus Blueprint landing page
`students-focus-blueprint.html` is your landing page, included in this site. All program buttons point to it through `sfbUrl` in `assets/js/config.js`.
**Waitlist button:** it opens your Google Form. To change the form, edit `GOOGLE_FORM_URL` near the bottom of `students-focus-blueprint.html`.

## Contact details and site text
Your supplied address, phone, email, social links, bio, mission and vision are written directly into the pages (`contact.html`, `j-k-sir.html`, `about.html`, `index.html`) and the footer, which is generated into every page. To change one, edit it in each page that shows it. There is deliberately no contact form: a static site cannot send messages. No values section was supplied, so none is shown.

## Publish on GitHub Pages
1. Sign in at github.com (create a free account if needed).
2. Click **+** (top right), then **New repository**. Name it, e.g. `seep-website`. Choose **Public**, then **Create repository**.
3. Click **uploading an existing file**.
4. Unzip the download. Open the `seep-website` folder and drag everything inside it (files **and** the `assets` folder) into the browser. Do not upload the zip itself.
5. Click **Commit changes**.
6. Go to **Settings**, then **Pages** (left menu).
7. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**, then **Save**.
8. Wait 1-2 minutes and refresh. Your site appears at `https://YOUR-USERNAME.github.io/seep-website/`.
To edit later: open a file in the repository, click the pencil icon, change it, then **Commit changes**.

*404 note:* `404.html` works for project sites (`/repo-name/`). If you rename the repo to `YOUR-USERNAME.github.io` (root site), remove the `<script>` in its `<head>`.
