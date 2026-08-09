# tauseef1234.github.io

Personal portfolio site for Tauseef Ahmad — source for
[tauseef1234.github.io](https://tauseef1234.github.io). It's where I post write-ups on
AI and machine learning topics I have been digging into, along with hands-on projects and
learning notes. Not a portfolio built to pitch anything — just a place to keep track of
what I'm building and writing.

## What's on the site

- **About** ([index.html](index.html)) — a short bio and a feed of write-ups on applied
  AI topics: retrieval-augmented generation, prompt engineering, vision transformers,
  generative AI, and similar.
- **Learning** ([learning.html](learning.html)) — tutorials and notebooks from things
  I have worked through hands-on, from Python and Bokeh basics to deep learning cookbooks.
- **Projects** ([projects.html](projects.html)) — hands-on builds: object detectors,
  a weak-supervision labeling pipeline, a traffic sign classifier, interactive dashboards,
  and a data pipeline built pro bono for DataKind.

## Tech stack

Plain static HTML and CSS — no framework, no build step, no package manager. One shared
stylesheet (`assets/css/style.css`) drives the design system across all three pages, with
a small amount of vanilla JS (`assets/js/nav.js`) for the mobile nav toggle. Headings are
set in Archivo, body text in Inter. Hosted on GitHub Pages.

## Running locally

No build step needed — just serve the directory statically:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Connect with me

- [LinkedIn](https://www.linkedin.com/in/tauseef-ahmad/)
- [GitHub](https://github.com/tauseef1234)
- [Medium](https://medium.com/@tauseefahmad12)
- [tauseefahmad12@gmail.com](mailto:tauseefahmad12@gmail.com)
