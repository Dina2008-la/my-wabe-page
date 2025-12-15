# Deploying to GitHub Pages

1. Create a public repository on GitHub and push your local project to it.
2. In the repository on GitHub, go to Settings → Pages (or Pages in the sidebar).
3. Under "Source" choose the branch `main` (or `master`) and the folder `/ (root)` or `/docs` depending on where your `HTML/` folder lives.
4. Save. GitHub will build and publish your site at `https://[YOUR_GITHUB_USERNAME].github.io` or `https://[YOUR_GITHUB_USERNAME].github.io/[REPO_NAME]` within a few minutes.
5. If your site files are inside an `HTML/` subfolder, make sure to set the Site source or move files to the repository root or `/docs`.

Notes
- Ensure `index.html` is reachable at the site root path used by Pages.
- If your repository name is `username.github.io`, your site will be served at `https://username.github.io/`.
- If you want to use a custom domain, add it in the Pages settings and configure DNS.
