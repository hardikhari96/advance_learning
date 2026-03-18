# Advance Learning — Project Guidelines

## Overview
An interactive learning website hosted on GitHub Pages. Category-wise blogs with heavy interactivity and minimal text. All content is plain HTML/CSS/JS — no build tools, no frameworks.

## Architecture
```
/
├── index.html                    # Landing page with category navigation
├── assets/
│   ├── css/theme.css             # Shared theme styles
│   ├── js/theme.js               # Shared interactive components
│   └── images/                   # Shared images
├── blogs/
│   └── <category>/
│       └── <topic>/
│           ├── index.html        # Blog listing for the topic
│           ├── 01-<slug>.html    # Individual blog posts (numbered)
│           └── assets/           # Blog-specific assets (optional)
└── .github/
    └── skills/                   # Copilot skills for content creation
```

## Code Style
- Plain HTML5, CSS3, vanilla JavaScript only — no frameworks, no npm
- Semantic HTML: `<article>`, `<section>`, `<nav>`, `<header>`, `<main>`, `<footer>`
- CSS custom properties for theming (defined in `assets/css/theme.css`)
- Mobile-first responsive design
- All interactive elements must work without JavaScript (progressive enhancement)

## Blog Content Rules
- **Less text, more interaction** — every concept must have a hands-on element
- Use interactive code playgrounds, quizzes, drag-and-drop, visualizations
- Each blog is a standalone `.html` file linking shared theme assets
- Number blog files for ordering: `01-`, `02-`, etc.
- Every blog must import `../../assets/css/theme.css` and `../../assets/js/theme.js`

## Conventions
- File names: lowercase, hyphenated (`event-loop.html`, not `EventLoop.html`)
- Category folders: lowercase singular (`programming`, `design`)
- Topic folders: lowercase (`nodejs`, `python`, `react`)
- Use relative paths for all internal links (GitHub Pages compatible)
- No external CDN dependencies — all assets must be local
