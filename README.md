# My Web Page

This repository contains a small personal website with the following pages under the `HTML/` folder:

- `index.html` — Home page (profile + intro)
- `about.html` — About page (background, skills)
- `projects.html` — Projects page (Project 1 + optional Project 2)
- `style.css` — Main stylesheet (renamed for portability)

How to preview locally

1. Open the `HTML/index.html` file in your browser, or use VS Code Live Server (install extension and click "Go Live").

2. Edit content in `HTML/*.html` and images in `HTML/img/`.

Git workflow (example)

```bash
git status
git add HTML/INDEX.HTML HTML/ABOUT.HTML HTML/PROJECTS.HTML HTML/style.css HTML/img/* README.md
git commit -m "Add page content, project sections, icons, and README"
git push origin main
```

Notes

- Replace placeholder text and images (`HTML/img/*.svg`) with your actual profile photo and project screenshots.
- If your hosting is case-sensitive, consider renaming `STYLE.CSS` to `style.css` and update the HTML links accordingly.
- Update the "Website repo" link in the footer to the actual GitHub repository URL once created.
 - Update the "Website repo" link in the footer to the actual GitHub repository URL once created.

Submission checklist for the course (add these to your repo before submission):

- Website link (GitHub Pages): `https://[YOUR_GITHUB_USERNAME].github.io` or `https://[YOUR_GITHUB_USERNAME].github.io/[REPO_NAME]`
- Public GitHub repository with the website code (make sure it's public)
- Exported AI chat markdown file (save as `ai-chat-export.md` and commit it)
- Multiple Git commits showing development progress

See `DEPLOY.md` for GitHub Pages instructions and `AI_CHAT_EXPORT.md` for how to export your chat.
