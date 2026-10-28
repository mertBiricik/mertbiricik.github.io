# Mert Biricik — Portfolio

Personal portfolio of Mert Biricik, cybersecurity researcher and Erasmus Mundus CyberMACS Scholar.

Live: https://mert.biricik.de

## Stack

- **Static site generator:** Eleventy (11ty) v2
- **Templating:** Nunjucks
- **Styling:** Tailwind CSS v3 + `@tailwindcss/typography`; Inter and JetBrains Mono are self-hosted from `src/assets/fonts/`
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
  _includes/      # Inline SVG icons, status badge, per-post chart SVGs
  _layouts/       # Nunjucks layouts (base, post)
  assets/         # Fonts, icons, blog media
  blog/           # Long-form Markdown posts (blog/tr/ holds Turkish versions)
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

The CV (`cv.tex`) is the source of truth for profile, education, experience and publications; it is git-ignored and never committed. Keep `profile.js` and `publications.js` in step with it.

## Notes

- No phone numbers anywhere in the repo or the site; email is the only contact channel.
- Blog posts set `date`, `description` and `tags`; a Turkish version lives under `src/blog/tr/` with `lang: tr` and `translation:` pointing at the English post (and vice versa).
- Icons are inline SVG includes under `src/_includes/icons/`; there is no icon font.
