# Mert Biricik — Portfolio

Personal portfolio of Mert Biricik, cybersecurity researcher and Erasmus Mundus CyberMACS Scholar.

Live: https://mert.biricik.de

## Stack

- **Static site generator:** Eleventy (11ty) v2
- **Templating:** Nunjucks
- **Styling:** Tailwind CSS v3 + `@tailwindcss/typography`
- **Hosting:** GitHub Pages (custom domain via CNAME)
- **CI/CD:** GitHub Actions

## Local development

```bash
npm install
npm run serve
```

This runs the Tailwind watcher and the Eleventy dev server in parallel.

## Production build

```bash
npm run build
```

Output is written to `_site/`.

## Project layout

```
src/
  _data/          # Site metadata, navigation, projects, publications, profile
  _layouts/       # Nunjucks layouts (base, post)
  blog/           # Long-form Markdown posts
  case-studies/   # Project case studies
  css/            # Tailwind input file
  demos/          # Embedded interactive demos
  js/             # Vanilla ES6 entry script
  *.njk           # Top-level pages (index, about, projects, publications, contact)
.eleventy.js      # Eleventy config
tailwind.config.js
postcss.config.js
```

## Content updates

Most content lives in `src/_data/`:

- `metadata.json` — site title, URL, social links
- `navigation.json` — top-level menu
- `profile.js` — bio, education, experience, skills, languages
- `projects.js` — portfolio entries
- `publications.js` — publication list
