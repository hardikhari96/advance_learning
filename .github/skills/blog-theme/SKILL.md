---
name: blog-theme
description: "Manage the shared visual theme, design system, and interactive component styles for all blogs. Use when: updating colors, typography, layout styles, adding new interactive component CSS/JS, ensuring visual consistency, or modifying the shared theme.css or theme.js files."
argument-hint: "Describe the theme change or new component to add"
---

# Blog Theme System

## When to Use
- Modifying shared CSS variables or design tokens
- Adding new interactive component styles
- Updating shared JavaScript for interactive elements
- Ensuring visual consistency across all blogs
- Adding responsive breakpoints or layout patterns

## Design Tokens

All theme values live in `assets/css/theme.css` as CSS custom properties:

```css
:root {
  /* Colors */
  --color-primary: #6C63FF;
  --color-primary-dark: #5A52D5;
  --color-secondary: #FF6584;
  --color-accent: #43E97B;
  --color-bg: #0F0E17;
  --color-bg-card: #1A1A2E;
  --color-bg-code: #16213E;
  --color-text: #FFFFFE;
  --color-text-muted: #A7A9BE;
  --color-success: #43E97B;
  --color-warning: #FFD93D;
  --color-error: #FF6B6B;
  --color-border: #2E2E48;

  /* Typography */
  --font-main: 'Segoe UI', system-ui, -apple-system, sans-serif;
  --font-code: 'Cascadia Code', 'Fira Code', 'Consolas', monospace;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-3xl: 2.5rem;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4rem;

  /* Layout */
  --max-width: 900px;
  --border-radius: 12px;
  --border-radius-sm: 8px;

  /* Animation */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
}
```

## Theme Architecture

### File Roles
| File | Purpose |
|------|---------|
| `assets/css/theme.css` | All shared styles: reset, layout, nav, components, responsive |
| `assets/js/theme.js` | All shared interactive behavior: quizzes, playgrounds, terminal, drag-drop |

### CSS Organization (in theme.css)
```
1. CSS Reset & Variables
2. Base Typography
3. Layout (nav, main, footer)
4. Blog Structure (header, sections, pagination)
5. Interactive Components (playground, quiz, terminal, etc.)
6. Utility Classes
7. Responsive Breakpoints
```

### JS Organization (in theme.js)
```
1. DOM Ready wrapper
2. Progress tracker
3. Code playground handler
4. Quiz handler
5. Step reveal handler
6. Drag and drop handler
7. Terminal simulator
8. Flip cards
9. Scroll animations
```

## Component Style Guidelines

### Interactive Components must have:
- A clear hover/focus state using `--color-primary`
- Smooth transitions using `--transition-base`
- A distinct active/selected state
- Feedback colors: `--color-success`, `--color-warning`, `--color-error`
- Rounded corners using `--border-radius-sm`
- Card-style backgrounds using `--color-bg-card`

### Responsive Breakpoints
```css
/* Mobile-first approach */
@media (min-width: 640px)  { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Wide */ }
```

## Procedure for Theme Changes

1. **Read current theme** — Check `assets/css/theme.css` and `assets/js/theme.js`
2. **Modify tokens** — Update CSS custom properties if needed
3. **Add component styles** — Follow existing naming conventions
4. **Update JS handlers** — Add behavior for new components
5. **Test across blogs** — Verify changes don't break existing posts
6. **Check mobile** — Test at 320px, 640px, and 1024px widths

## Naming Conventions
- CSS classes: BEM-like with `.blog-` prefix for blog-specific, direct names for components
- Component classes: `.quiz-card`, `.code-playground`, `.terminal-sim`
- State classes: `.is-active`, `.is-correct`, `.is-incorrect`, `.is-revealed`
- Utility classes: `.text-center`, `.mt-lg`, `.hidden`
