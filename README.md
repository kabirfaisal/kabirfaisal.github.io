# Md Faisal Kabir — Academic Portfolio

Personal academic website of Md Faisal Kabir, live at **https://kabirfaisal.de** (served by GitHub Pages from this repository).

This README is the developer guide: what every file does, how the pages are put together, and step-by-step recipes for the changes you will make most often.

---

## Contents

1. [How the site works](#1-how-the-site-works)
2. [Project structure](#2-project-structure)
3. [Page by page](#3-page-by-page)
4. [Common changes (recipes)](#4-common-changes-recipes)
5. [The blog](#5-the-blog)
6. [Design system: CSS and JavaScript](#6-design-system-css-and-javascript)
7. [English and German versions](#7-english-and-german-versions)
8. [Preview, publish, and verify](#8-preview-publish-and-verify)
9. [Third-party services](#9-third-party-services)
10. [Known issues and cleanup candidates](#10-known-issues-and-cleanup-candidates)

---

## 1. How the site works

There is no build tool, framework, or package manager. The site is plain HTML, one CSS file, and one JavaScript file. GitHub Pages runs **Jekyll** on every push, but Jekyll only does real work for the blog.

There are two kinds of pages:

| Kind | Files | How they are built |
| --- | --- | --- |
| **Hand-written pages** | `index.html`, `research.html`, `publications.html`, `projects.html`, `contact.html`, `404.html`, and their twins in `de/` | Complete HTML documents. Each one contains its own `<head>`, header/menu and footer. Jekyll copies them as they are. |
| **Blog pages** | `blog/*.html` | Short HTML files with Jekyll *front matter*. Jekyll wraps them in `_layouts/` and fills them with entries from the `_papers/`, `_related_work/`, `_algorithms/` and `_math/` folders. |

> **Important:** because the hand-written pages each contain their own copy of the header, menu and footer, a change to the menu or footer must be made **in every page file**. See [Change the menu](#change-the-menu).

---

## 2. Project structure

```text
kabirfaisal.github.io/
├── index.html              Home page (EN)
├── research.html           Research page (EN)
├── publications.html       Full publication list (EN)
├── projects.html           Projects (EN)
├── contact.html            Contact form + contact details (EN)
├── 404.html                "Page not found" page (EN)
│
├── about.html              Redirect → index.html#about   (old page, kept so old links work)
├── cv.html                 Redirect → the CV PDF          (old page, kept so old links work)
├── blog.html               Redirect → blog/index.html     (old page, kept so old links work)
│
├── de/                     German versions of the pages above (same file names)
│   ├── index.html  research.html  publications.html  projects.html  contact.html  404.html
│   └── about.html  cv.html          German redirect stubs
│
├── blog/                   Blog pages (English only, built by Jekyll)
│   ├── index.html          Blog overview
│   ├── paper-summaries.html   ← lists entries from _papers/
│   ├── related-work.html      ← lists entries from _related_work/
│   ├── algorithms.html        ← lists entries from _algorithms/
│   ├── math.html              ← lists entries from _math/
│   ├── glossary.html          (content written directly in the file)
│   └── reading-list.html      (content written directly in the file)
│
├── _papers/                One Markdown file per summary of your own paper
├── _related_work/          One file per note on someone else's paper
├── _algorithms/            One file per algorithm explainer
├── _math/                  One file per formula
│
├── _layouts/
│   ├── default.html        Page skeleton for blog pages (head, menu, footer)
│   └── blog-page.html      Blog banner + section tabs, placed inside default.html
├── _includes/
│   ├── head-meta.html      <head> contents for blog pages (title, fonts, CSS)
│   ├── nav.html            Header + menu for blog pages
│   ├── footer.html         Footer + scripts for blog pages
│   └── blog-catnav.html    The blog's section tabs (Overview, My papers, …)
├── _config.yml             Jekyll settings: collections, blog layout default, excluded files
│
├── assets/
│   ├── css/site.css        THE stylesheet: every page uses only this file
│   ├── js/site.js          THE script: menu, animations, 3D banners, contact-form note
│   └── (everything else)   Unused leftovers from the old template; see section 10
│
├── images/
│   ├── profile.jpg         Your portrait (home page, social previews)
│   ├── kit2.svg            KIT2 project illustration (home + projects)
│   └── *.jpg / *.png       Project thumbnails
├── Md_Faisal_Kabir_CV_english.pdf   The CV that the "CV" menu item downloads
│
├── sitemap.xml             Page list for search engines
├── robots.txt              Tells search engines where the sitemap is
├── CNAME                   Custom domain (kabirfaisal.de) for GitHub Pages
├── bibliography/library.bib   BibTeX library (not used by the site)
├── LICENSE.txt, README.txt     License and readme of the original HTML5 UP template
└── README.md               This guide
```

---

## 3. Page by page

### Home: `index.html` / `de/index.html`

The home page is split into `<section>` blocks. Each one has an `id`, which you can use to find it quickly in the file and to link to it (for example `index.html#education`).

| Order | Section `id` | What it shows |
| --- | --- | --- |
| 1 | *(hero)* `class="hero hero-home"` | Headline badge, name, affiliation line, short bio, buttons, social links, portrait |
| 2 | `focus` | The three numbered "Research focus" cards |
| 3 | `publications` | "Latest publication": **one** featured paper |
| 4 | `projects` | "Latest project": the featured KIT2 card with its illustration |
| 5 | `about` | "Who I am" text + the **Quick facts** card (role, location, emails, profiles, languages) |
| 6 | `orientation` | "Research orientation" and "Professional approach" cards |
| 7 | `education` | Education timeline |
| 8 | `employment` | Employment timeline |

The `<head>` also contains a `<script type="application/ld+json">` block. It holds structured data that search engines read (name, job title, emails, affiliation, profile links). Visitors never see it, but keep it up to date when those facts change.

### Other pages

| File | Contents |
| --- | --- |
| `research.html` | Banner, research focus text, "Current research focus" and "Research strengths" lists, research theme tags, research approach |
| `publications.html` | Every publication, grouped into *Journal articles* and *Conference proceedings & book chapters*. Each paper is one `<article class="pub">` |
| `projects.html` | KIT2 research project in detail, then a grid of applied projects. Each project is one `<article class="… project-card">` |
| `contact.html` | Message form, Email card and Online card |
| `404.html` | Shown by GitHub Pages for any URL that does not exist |

### Redirect stubs

`about.html`, `cv.html`, `blog.html` and `de/about.html`, `de/cv.html` contain no content. They immediately forward visitors (and are hidden from search engines with `noindex`) so that old links and bookmarks keep working. **Do not delete them.**

---

## 4. Common changes (recipes)

All file paths are relative to the repository root. "Both languages" means: make the same change in the English file and in its twin under `de/`.

### Change your headline, name, or bio

- **Badge above your name:** in `index.html`, the `<p class="eyebrow">` inside the hero, for example `Research Assistant &bull; AI Engineer &bull; PhD Student`.
- **Affiliation line:** `<p class="hero-role">` directly below the name.
- **Short bio:** `<p class="hero-bio">`.
- **Browser-tab and link-preview title:** `<title>` and `<meta property="og:title">` at the top of the file.
- **Search-engine description:** `<meta name="description">` and `<meta property="og:description">`.

Both languages.

### Change an email address, profile link, or other contact detail

Contact details appear in several places. Search the whole project for the old value (VS Code: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>F</kbd>) and replace every hit. The places are:

| Where | Files |
| --- | --- |
| Hero social links (LinkedIn, GitHub, Email) | `index.html`, `de/index.html` |
| Quick facts card | `index.html`, `de/index.html` |
| Structured data (`"email"`, `"sameAs"`) in `<head>` | `index.html`, `de/index.html` |
| Email and Online cards | `contact.html`, `de/contact.html` |
| Footer icons (ORCID, Scholar, ResearchGate, LinkedIn, GitHub) | **every** page, plus `_includes/footer.html` |

The **contact form's delivery address** is separate. See [Contact form](#contact-form-formsubmit).

### Replace your photo

Overwrite `images/profile.jpg` with the new photo, keeping the same file name. A portrait (taller than wide) of about 800 × 1000 px works best; the home page crops it to 4:5. The photo is also used for link previews on LinkedIn and other sites.

### Update the CV

Overwrite `Md_Faisal_Kabir_CV_english.pdf` with the new PDF, keeping the same file name. Nothing else needs to change: the menu's **CV** item, the "Download CV" button and the old `cv.html` link all point to this file.

If you add a German CV, put it next to the English one and change the `Lebenslauf` links in the `de/` pages (and `de/cv.html`) to point to it.

### Add a publication

1. Open `publications.html` and copy an existing block from the right group:

   ```html
   <article class="pub" data-reveal>
       <h3>Paper title</h3>
       <p class="meta"><span class="year">2026</span> M. F. Kabir, A. Coauthor, S. Tomforde</p>
       <p class="meta">Venue — publisher, pages.</p>
       <p class="summary">One or two sentences: what the paper does.</p>
       <p class="ref">Full citation in APA style.</p>
       <div class="links"><a href="https://doi.org/…" target="_blank" rel="noopener">DOI: … &rarr;</a></div>
   </article>
   ```

   Newest papers go first within each group.
2. Make the same change in `de/publications.html`, translating the summary.
3. If it is now your newest paper, replace the single `<article class="pub">` in the `publications` section of `index.html` and `de/index.html`.
4. Optional: add a plain-language summary to the blog (see [Add a paper summary](#add-a-paper-summary)).

### Add or change a project

- **Projects page:** copy an `<article class="card card-hover project-card">` block in `projects.html` (and `de/projects.html`). Put the image in `images/` and point `<img src="images/…">` to it. Use 800 × 450 px (16:9) images; in the `de/` pages the path starts with `../images/`.
- **Featured project on the home page:** the `projects` section in `index.html` / `de/index.html` (the card with the extra class `feature`, which puts the image and text side by side).

### Edit the About, education, or employment content

All of it is on the home page, in the sections `about`, `orientation`, `education` and `employment` of `index.html` and `de/index.html`. Timelines are lists. To add an entry, copy one `<li>`:

```html
<li><strong>2022&ndash;present &bull; Role or degree, Institution</strong><p>One-line description.</p></li>
```

Newest entries go first.

### Change the research page

Edit `research.html` and `de/research.html` directly. Research theme tags are `<span>` elements inside `<div class="tags">`.

### Change the menu

The menu (`<ul class="nav-links">`) is copied into every page. To add, remove or rename an item, edit it in **all** of these files:

- English: `index.html`, `research.html`, `publications.html`, `projects.html`, `contact.html`
- German: `de/index.html`, `de/research.html`, `de/publications.html`, `de/projects.html`, `de/contact.html`, `de/404.html`
- Blog: `_includes/nav.html` (uses absolute links that start with `/`)

On each page, the item for that page has `class="active"` on its `<li>`.

| English | German | Link |
| --- | --- | --- |
| Home | Start | `index.html` |
| Research | Forschung | `research.html` |
| Publications | Publikationen | `publications.html` |
| Projects | Projekte | `projects.html` |
| Blog | Blog | `blog/index.html` (from `de/`: `../blog/index.html`) |
| Contact | Kontakt | `contact.html` |
| CV | Lebenslauf | The PDF, with a `download` attribute so it downloads straight away |

If you add a new page, also add it to `sitemap.xml`.

### Change the footer

The footer (`<footer class="site-footer">`) is also copied into every page, plus `_includes/footer.html` for the blog. Edit it in the same files as the menu. (The English `404.html` is a minimal page with no menu or footer.)

### Change the KIT2 illustration

`images/kit2.svg` is a hand-written SVG drawing: open it in VS Code and edit the text and colours directly. To use a picture instead, save it as `images/kit2.png` (800 × 450 px) and change `kit2.svg` to `kit2.png` in `index.html`, `projects.html` and their `de/` twins.

---

## 5. The blog

The blog is English-only and the only part of the site that Jekyll actually builds. **It cannot be previewed by opening the files directly.** See [Preview](#preview-locally).

### How it fits together

```text
blog/paper-summaries.html            (front matter + a loop over site.papers)
   └─ layout: blog-page              (_layouts/blog-page.html — banner + section tabs)
        └─ layout: default           (_layouts/default.html — head, menu, footer)
             ├─ _includes/head-meta.html
             ├─ _includes/nav.html
             └─ _includes/footer.html
```

`_config.yml` makes `blog-page` the default layout for everything under `blog/`. Each blog page starts with front matter like this:

```yaml
---
title: "Mathematical foundations | Md Faisal Kabir"   # browser tab + link previews
description: "…"                                      # search engines
permalink: /blog/math.html                            # final URL
h1: "Mathematical foundations"                        # banner heading
hero_bio: "…"                                         # banner sub-line
---
```

> The blog pages are `.html`, not `.md`, on purpose. Their content is indented HTML, and Markdown would turn indented HTML into visible code.

### Add a paper summary

Create a new file in `_papers/`, for example `_papers/my-new-paper.md`:

```markdown
---
order: 6                                  # position on the page (1 = first)
slug: p-my-new-paper                      # anchor id, so you can link to it with #p-my-new-paper
tags: ["2027", "Journal name", "Topic"]   # small pills above the title
title: "Plain-language title"
authors: "Official paper title &mdash; M. F. Kabir, …"
reference: "Kabir, M. F., … (2027). Full APA reference."
link: "https://doi.org/…"
link_text: "Read the paper"
---
<p><em>The question the paper answers.</em></p>
<p><strong>The problem.</strong> …</p>
<p><strong>What I did.</strong> …</p>
<p><strong>What came out.</strong> …</p>
```

It appears on `blog/paper-summaries.html` automatically. Write the body as HTML, matching the existing files.

### Add a related-work note

Same as a paper summary, but in `_related_work/`. It uses the same fields (`order`, `slug`, `tags`, `title`, `authors`, `reference`, `link`, `link_text`).

### Add an algorithm explainer

Create a file in `_algorithms/` with `order` and `title` in the front matter, and the explanation as HTML below it. It appears on `blog/algorithms.html`.

### Add a formula

Create a file in `_math/` with `order` and `title`. Show the formula inside `<code class="formula">…</code>` and add a short explanation below it.

- `order` **below 100** puts it under *Mathematical foundations*.
- `order` **100 or higher** puts it under *Evaluation metrics for recommendation systems*.

### Edit the glossary or reading list

These have no folder of entries. Edit `blog/glossary.html` and `blog/reading-list.html` directly.

### Add a whole new blog section

1. Create `blog/new-section.html` with front matter (copy one of the existing pages).
2. Add a tab for it to `_includes/blog-catnav.html`.
3. Add a card for it to `blog/index.html`.
4. Add its URL to `sitemap.xml`.
5. If it needs its own folder of entries, add a collection to `_config.yml` (with `output: false`, like the others).

---

## 6. Design system: CSS and JavaScript

### `assets/css/site.css`

Every page uses this one stylesheet. It is organised in commented blocks (`/* ---------- Cards ---------- */` and so on).

**To change colours, shadows or corner rounding,** edit the variables in the `:root { … }` block at the top of the file:

| Variable | Used for |
| --- | --- |
| `--accent` / `--accent-bright` | Main green: links, labels, highlights |
| `--violet`, `--amber` | Secondary colours (focus cards, glows) |
| `--text`, `--muted`, `--heading` | Body text, secondary text, headings |
| `--surface`, `--border` | Card backgrounds and outlines |
| `--shadow-sm/md/lg` | Shadow depths |
| `--radius`, `--radius-lg` | Corner rounding |
| `--maxw` | Maximum content width |

**The page background** (dark at the top, lighter towards the bottom, with coloured glows) is set on `body` near the top of the file.

**Fonts:** headings use *Source Serif 4* and body text uses *Inter*. Both are loaded from Google Fonts by a `<link>` in each page's `<head>` (and in `_includes/head-meta.html`).

#### Building blocks

| Class | What it is |
| --- | --- |
| `section` / `section alt` | A full-width page band; `alt` gets a slightly different background. Alternate them. |
| `container` | Centres content at the maximum width |
| `section-head` + `eyebrow` | Small coloured label above a section heading |
| `card` | Frosted-glass box |
| `card-hover` | Card that highlights its border on hover |
| `grid cols-2` / `cols-3` / `split` | Two-column, three-column, or wide/narrow layouts (single column on phones) |
| `pub` | Publication entry |
| `project-card` (+ `feature`) | Project card (side-by-side variant) |
| `timeline` | Education/employment list with dots and a line |
| `tick-list` | Bullet list with coloured dots |
| `info-list` | Label/value list (Quick facts) |
| `tags` | Row of pill labels |
| `btn btn-primary` / `btn-outline` / `btn-ghost` | Buttons |
| `data-reveal` (attribute) | Fades the element in when it scrolls into view |

### `assets/js/site.js`

| Feature | What it does |
| --- | --- |
| Mobile menu | Opens and closes the ☰ menu on small screens |
| Sticky header | Adds a shadow to the header after scrolling |
| Back-to-top button | Shows the ↑ button after scrolling down |
| Reveal on scroll | Fades in elements with `data-reveal` |
| Contact-form note | Shows "Thanks — your message has been sent" when the URL contains `?sent=1` |
| 3D banner network | Draws the rotating 3D node network on the right of each inner page's banner |
| Portrait tilt | Tilts the home-page portrait toward the mouse |

**3D banner shapes:** the shape is picked from the page's URL, in the `shapes` object near the top of the 3D code:

```js
research: layersShape, publications: helixShape,
projects: torusShape, blog: waveShape, contact: sphereShape
```

To give a new page a shape, add its file name to that object **and** to the list in the `location.pathname.match(…)` line just above it. Pages not in the list get the sphere.

Animations are skipped for visitors whose system has *reduce motion* turned on. On Windows that is *Settings → Accessibility → Visual effects → Animation effects*. If you have that setting off, you will not see the animations on your own computer.

### Cache-busting: always bump the version

Browsers cache `site.css` and `site.js`. Every page loads them with a version number, for example:

```html
<link rel="stylesheet" href="assets/css/site.css?v=10" />
<script src="assets/js/site.js?v=9"></script>
```

**After changing either file, raise its number on every page**, otherwise visitors keep seeing the old version. The pages include `_includes/head-meta.html` and `_includes/footer.html`. From Git Bash, in the repository folder:

```bash
# Example: CSS v10 → v11 on every page
grep -rl "site.css?v=10" --include=*.html . | xargs sed -i 's/site\.css?v=10/site.css?v=11/'
```

---

## 7. English and German versions

- English pages are at the root and German pages are in `de/`, with the **same file names**.
- Every page has an **EN | DE** switch in its header, and `<link rel="alternate" hreflang="…">` tags in its `<head>` that tell search engines the two pages belong together.
- `de/` pages reach shared files one folder up: `../images/…`, `../assets/…`, `../Md_Faisal_Kabir_CV_english.pdf`.
- The blog is English only. The German menu's "Blog" item links to the English blog.
- **Rule:** whenever you change content on an English page, make the matching change on its German twin, and the other way round.

---

## 8. Preview, publish, and verify

### Preview locally

- **Hand-written pages:** double-click `index.html` (or any other page) to open it in a browser. Everything works except the contact form, which only delivers from the live site.
- **Blog:** needs Jekyll. Install [Ruby](https://www.ruby-lang.org/) and then:

  ```bash
  gem install jekyll
  jekyll serve
  ```

  Open http://localhost:4000/blog/. There is no `Gemfile`, so the local Jekyll version can differ slightly from GitHub's.

### Publish

Commit and push to `main`. GitHub Pages rebuilds the site automatically, usually within a minute:

```bash
git add -A
git commit -m "Describe the change"
git push origin main
```

Watch the build under the repository's **Actions** tab ("pages build and deployment"). A red ✗ means the build failed. Click it to see the error; it is almost always a typo in front matter or a Liquid `{% … %}` tag in a blog file.

### Checklist before pushing

- [ ] The change is made in **both languages**.
- [ ] Menu or footer changes are made in **every** page and in `_includes/`.
- [ ] If `site.css` or `site.js` changed, the `?v=` number is raised everywhere.
- [ ] New pages are added to `sitemap.xml`.
- [ ] Images are in `images/` and every `<img>` has a meaningful `alt` text.
- [ ] After the push, hard-refresh the live site (<kbd>Ctrl</kbd>+<kbd>F5</kbd>) and check the changed pages on a desktop and a phone.

---

## 9. Third-party services

### Contact form (FormSubmit)

`contact.html` and `de/contact.html` send the form to [FormSubmit](https://formsubmit.co), which emails every message to **faisal.kabir.sca@gmail.com**. The settings are hidden fields inside the `<form>`:

| Field | Purpose |
| --- | --- |
| `action="https://formsubmit.co/…"` | Delivery address. Change the email here to change where messages go. |
| `_subject` | Subject line of the email you receive |
| `_template` | `table` lays the message out as a table |
| `_next` | Where the visitor goes after sending (back to the Contact page with `?sent=1`) |
| `_honey` | Hidden spam trap; leave it empty and hidden |

The **first** message sent to a new address triggers a one-time activation email from FormSubmit. Click **Activate Form** in it; messages are delivered from then on.

### Analytics (GoatCounter, not active yet)

Every page has a GoatCounter `<script>` with the placeholder `MYCODE`. To turn on privacy-friendly visitor counting, create a free account at https://www.goatcounter.com and replace `MYCODE` with your site code on every page (and in `_includes/footer.html`). Until then it does nothing.

### Fonts

Inter and Source Serif 4 are loaded from Google Fonts.

### Domain and hosting

- `CNAME` contains `kabirfaisal.de`, which tells GitHub Pages to serve the site on that domain. The DNS records are managed at your domain registrar.
- The repository must stay named `kabirfaisal.github.io`.

---

## 10. Known issues and cleanup candidates

| Item | Detail | Suggested fix |
| --- | --- | --- |
| Canonical domain | `<link rel="canonical">`, `og:url`, `hreflang`, `sitemap.xml` and `robots.txt` use `https://kabirfaisal.github.io/…`, but the site is served on `https://kabirfaisal.de/`. | Replace `kabirfaisal.github.io` with `kabirfaisal.de` in those places. |
| Unused template files | `assets/css/main.css`, `noscript.css`, `fontawesome-all.min.css`, `assets/js/` (everything except `site.js`), `assets/sass/`, `assets/webfonts/` are from the old HTML5 UP template and no page loads them. | Safe to delete. |
| Unused images | `images/Dashboard.png`, `images/Md Faisal Kabir.jpg`, `images/data analysis.png` (with a space), `images/webservice.jpg` are not referenced. | Delete, or use them. |
| German CV | The German pages download the English CV. | Add a German PDF and update the `de/` links. |
| Analytics | GoatCounter still has the `MYCODE` placeholder. | See [Analytics](#analytics-goatcounter-not-active-yet). |
| Line endings | Files use Windows line endings (CRLF). Search-and-replace scripts must allow for `\r\n`. | Keep consistent; optionally add a `.gitattributes`. |

---

## Credits

The original design was based on *Massively* by [HTML5 UP](https://html5up.net) (CCA 3.0, see `LICENSE.txt`). The current site is a custom rebuild that no longer uses the template's code.
