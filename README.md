# Md Faisal Kabir — Academic Portfolio

Static site hosted on GitHub Pages.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Home: hero, about, selected publications, research, skills, projects, contact |
| `about.html` | Extended bio and academic path |
| `research.html` | Research interests and approach |
| `publications.html` | Full peer-reviewed publication list |
| `projects.html` | Selected applied projects |
| `blog.html` | Placeholder for future writing |
| `cv.html` | CV download + highlights |
| `404.html` | Custom not-found page |
| `assets/css/site.css` | Single shared stylesheet (design tokens, layout, dark mode) |
| `assets/js/site.js` | Mobile nav, scroll reveal, sticky header, back-to-top |

## Editing

- **Colors / spacing / radius:** the `:root` (and dark-mode) custom properties at the top of `assets/css/site.css`.
- **Navigation:** the `<ul class="nav-links">` block, identical on every page — update all pages when changing items.
- **Add a publication:** copy an `<article class="pub">` block in `publications.html`; add a shortened copy to the "Selected publications" list in `index.html` if it should be featured.

## Deploy

Publishes via GitHub Pages. For the site to live at `https://kabirfaisal.github.io/`,
the repository must be named **`kabirfaisal.github.io`** (rename in repo Settings → General).
All absolute URLs (`<link rel="canonical">`, `og:url`, `sitemap.xml`, `robots.txt`) assume that.

## Third-party bits to activate

- **Contact form** — `index.html` uses [Formspree](https://formspree.io). Create a free form,
  then replace `YOUR_FORM_ID` in the `<form action>` on `index.html`.
- **Analytics** — every page loads [GoatCounter](https://www.goatcounter.com) (privacy-friendly,
  no cookie banner). Sign up, then replace `MYCODE` in the `data-goatcounter` script tag on each page.

Both are inert until configured.

## Credits

The original design was based on *Massively* by HTML5 UP (CCA 3.0). The current layout is a custom rebuild; legacy template assets remain under `assets/` but are unused.
