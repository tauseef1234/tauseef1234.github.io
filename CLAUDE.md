# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A static personal portfolio site (Tauseef Ahmad) hosted on GitHub Pages at `tauseef1234.github.io`, built on the **HTML5 UP "Massively"** template. There is no build step, no package manager, and no JS framework — pages are plain HTML with a jQuery-based template runtime, and changes are published by editing HTML directly and pushing to `main`.

## Commands

There is no build/lint/test tooling in this repo. To preview locally, just open the HTML files directly in a browser or serve the directory statically, e.g.:

```
python3 -m http.server 8000
```

The compiled CSS (`assets/css/main.css`, `assets/css/noscript.css`) is checked in directly. SASS sources exist under `assets/sass/` but there is no configured compile command in this repo — if you edit `.scss` files, you must compile them with an external `sass` install and update the corresponding files in `assets/css/` yourself.

## Architecture

- **Pages** (each is a full standalone HTML document repeating the same header/nav/footer boilerplate — there is no templating/includes mechanism, so shared markup like the nav links and footer social icons must be edited in every page individually):
  - [index.html](index.html) — homepage / "ABOUT" tab: intro banner, bio blurb ("About Myself"), then a feed of Medium blog post cards. Paginates to `index2.html` for older posts.
  - [index2.html](index2.html) — page 2 of the About feed (older posts), same structure as `index.html`.
  - [learning.html](learning.html) — "Learning" nav tab: tutorial/foundational posts and notebooks.
  - [projects.html](projects.html) — project showcase cards (GitHub repos, dashboards).
- **Content unit**: each post/project is a hand-written `<article>` block inside `<section class="posts">` containing a header/title, a thumbnail `<img>` from `images/`, a description `<p>`, and an action button (`class="button"`) linking out to Medium or GitHub. Adding new content means copying an existing `<article>` block and editing its text/image/link.
- **Nav & footer**: the header nav (`<nav id="nav">`) and footer contact section are duplicated across all four pages, including LinkedIn/GitHub/Medium icon links and a `mailto:` contact form (no backend — the form just triggers the user's mail client). Keep these in sync manually when changing links across pages.
- **Assets**:
  - `assets/css/` — compiled, checked-in CSS (`main.css`, `noscript.css`, `fontawesome-all.min.css`).
  - `assets/sass/` — SASS sources organized as `base/` (reset, typography, page), `components/` (buttons, forms, icons, images, pagination, etc.), `layout/` (header, nav, intro, footer, wrapper), `libs/` (breakpoints, mixins, vars, vendor); not wired to any build command in this repo.
  - `assets/js/` — jQuery + template scripts (`main.js`, `util.js`, breakpoints/scrollex/scrolly plugins); drives the intro fade-in, scroll-to, and responsive nav panel behavior.
  - `images/` — all post/project thumbnails referenced by path from the HTML.
- `Bokeh_Basics.html` and `Bokeh_Part2.html` are standalone exported Jupyter notebooks (not part of the template/site chrome) linked to from project entries.
- `README.txt` and `LICENSE.txt` are the original HTML5 UP template boilerplate (CCA 3.0 license text) — not project-specific documentation.
