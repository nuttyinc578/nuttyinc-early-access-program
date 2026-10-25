# Nuttyinc Early Access Program

A website for early access to new NuttyVR projects, Mora (Nuttyinc’s encryption app), and upcoming features.

Website: https://nuttyinc578.github.io/nuttyinc-early-access-program/

## Publish with GitHub Pages

The site is plain HTML, CSS, JavaScript, and SVG. No dependencies, build, tokens, or backend are needed.

1. Commit these files to the repository’s `main` branch, keeping `index.html` at the root.
2. Open **Settings → Pages** in the repository.
3. Choose **Deploy from a branch**, **main**, and **/(root)**, then save.
4. Wait for the **pages build and deployment** action to finish.

The repository already has Pages enabled. Confirm its existing publishing source is `main` / `/(root)` before changing it. See [GitHub’s publishing source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Preview locally

```sh
python3 -m http.server 8000 --directory .
```

Open http://localhost:8000. The custom 404 page uses the production repository path.

## Early access requests

The website’s form opens a GitHub issue form with the selected interest and optional note prefilled. The visitor reviews it, acknowledges the public request, and submits on GitHub. The website does not claim access has been granted, collect email addresses, save submissions, or issue downloads. The GitHub account is the visitor’s contact method. The card links select the matching project in the request form; that enhancement is the only site JavaScript.

Keep Issues enabled in this repository. Request and feedback forms are in `.github/ISSUE_TEMPLATE/`. Published builds belong in GitHub Releases; until builds exist, release links may show an empty list. NuttyVR, Mora, and feature availability should be updated in `index.html` as releases are announced.

## Files

- `index.html`: page content, accessible request form, and native FAQ disclosures.
- `styles.css`: responsive layout, original CSS illustrations, and reduced motion support.
- `app.js`: preselects a project when a visitor follows a project card.
- `assets/`: original SVG brand marks.
- `404.html`: custom GitHub Pages error page.
- `.nojekyll`: publishes static files directly.
- `.github/ISSUE_TEMPLATE/`: access request and feedback forms.

The site uses local assets and system fonts and works without JavaScript. The existing repository license is preserved.
