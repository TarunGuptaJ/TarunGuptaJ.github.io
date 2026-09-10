# TarunGuptaJ.github.io

Personal portfolio site. Plain HTML/CSS/JS, no build step — deployed directly via GitHub Pages.

## Structure

```
index.html          Homepage — hero, Education, and condensed highlights of
                     Experience / Projects / Accolades / Side Quest, each
                     linking to its own full page. Placeholder content.
experience.html      Full work experience timeline
projects.html        Full projects grid
accolades.html        Full awards / certifications / competitions grid
sidequest.html        Blog posts, experiments, and for-fun side projects
                       (see the HTML comment in this file for how to add entries)
css/style.css        Design system (dark/terminal theme, adapted from ezstack)
js/main.js           Nav behavior, active-page/tab highlighting, scroll reveal,
                       back-to-top, terminal typing effect
img/favicon.svg      Favicon
```

Every page shares the same top nav. `experience.html`, `projects.html`,
`accolades.html`, and `sidequest.html` also share a sticky pill sub-nav
directly under the header so you can jump between those four sections without
going back through the homepage first.

## Local preview

No build tools needed. From this folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000 — and make sure to hard-refresh
(Ctrl/Cmd+Shift+R) if you're re-testing after editing files, since browsers
aggressively cache CSS/JS on plain `http.server`.

## Publishing

Since this repo is named `TarunGuptaJ.github.io`, pushing to the `main` branch
publishes automatically at https://tarunguptaj.github.io — no GitHub Pages
config needed.

```
git init
git remote add origin https://github.com/TarunGuptaJ/TarunGuptaJ.github.io.git
git add .
git commit -m "Initial portfolio base"
git branch -M main
git push -u origin main
```

## Next steps

All content is placeholder — marked with `[Your ...]` / `[Company Name]` style
brackets. Sections to fill in, by file:

- `index.html` — hero (title/subtitle, resume link), Education, Contact
  (email + LinkedIn), plus trimming the highlight previews to your actual
  best 1 experience / 3 projects / 2 accolades
- `experience.html` — full roles, companies, bullet points
- `projects.html` — full project name, description, tags, GitHub/live links
- `accolades.html` — awards, certifications, competition results
- `sidequest.html` — blog posts, weekend builds, experiments; copy a
  `.sidequest-card` block per new entry (see comment in the file)
