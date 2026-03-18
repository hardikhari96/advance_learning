---
name: interactive-blog
description: "Create interactive learning blog posts with hands-on elements. Use when: writing a new blog, adding interactive sections, creating quizzes, building code playgrounds, making drag-and-drop exercises, or adding visualizations to any blog post."
argument-hint: "Describe the blog topic, category, and key concepts to cover"
---

# Interactive Blog Creation

## When to Use
- Creating a new blog post for any category/topic
- Adding interactive elements to existing posts
- Building code playgrounds, quizzes, or visualizations
- Structuring a blog for maximum engagement with minimal text

## Blog Design Philosophy
1. **Show, don't tell** — every concept gets a visual or interactive demo
2. **Progressive disclosure** — reveal complexity in layers, not walls of text
3. **Instant feedback** — user actions produce immediate visible results
4. **Minimal text** — use 1-2 sentence intros, then jump to interaction

## Interactive Element Toolkit

Use these components (defined in the theme) throughout every blog:

### 1. Code Playground
```html
<div class="code-playground" data-language="javascript">
  <div class="code-editor" contenteditable="true">// User writes code here</div>
  <button class="run-btn">Run</button>
  <div class="code-output"></div>
</div>
```

### 2. Interactive Quiz
```html
<div class="quiz-card" data-correct="2">
  <p class="quiz-question">What does Node.js use for async I/O?</p>
  <div class="quiz-options">
    <button class="quiz-option" data-index="1">Threads</button>
    <button class="quiz-option" data-index="2">Event Loop</button>
    <button class="quiz-option" data-index="3">Processes</button>
  </div>
  <div class="quiz-feedback"></div>
</div>
```

### 3. Step-by-Step Reveal
```html
<div class="step-reveal">
  <div class="step" data-step="1">
    <h3>Step 1: Understanding the basics</h3>
    <div class="step-content"><!-- content --></div>
  </div>
  <div class="step" data-step="2">
    <h3>Step 2: Going deeper</h3>
    <div class="step-content"><!-- content --></div>
  </div>
  <button class="next-step-btn">Next Step →</button>
</div>
```

### 4. Interactive Diagram / Visualization
```html
<div class="visual-demo" id="unique-demo-id">
  <canvas></canvas>
  <div class="demo-controls">
    <button class="demo-btn">Start</button>
    <input type="range" class="demo-slider" min="1" max="10">
  </div>
</div>
```

### 5. Drag and Drop
```html
<div class="drag-drop-zone">
  <div class="drag-items">
    <div class="drag-item" draggable="true" data-value="a">Item A</div>
  </div>
  <div class="drop-targets">
    <div class="drop-target" data-accept="a">Drop here</div>
  </div>
  <div class="drag-feedback"></div>
</div>
```

### 6. Toggle / Flip Cards
```html
<div class="flip-card-grid">
  <div class="flip-card">
    <div class="flip-front">Question or concept</div>
    <div class="flip-back">Answer or explanation</div>
  </div>
</div>
```

### 7. Interactive Terminal Simulation
```html
<div class="terminal-sim">
  <div class="terminal-header">Terminal</div>
  <div class="terminal-body">
    <div class="terminal-output"></div>
    <div class="terminal-input-line">
      <span class="terminal-prompt">$ </span>
      <input type="text" class="terminal-input" placeholder="Type a command...">
    </div>
  </div>
</div>
```

### 8. Progress Tracker
```html
<div class="blog-progress">
  <div class="progress-bar">
    <div class="progress-fill"></div>
  </div>
  <span class="progress-text">0% Complete</span>
</div>
```

## Blog HTML Template

Every blog must follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Blog Title} — Advance Learning</title>
  <link rel="stylesheet" href="../../../assets/css/theme.css">
</head>
<body>
  <nav class="blog-nav">
    <a href="../../../index.html" class="nav-logo">Advance Learning</a>
    <div class="nav-breadcrumb">
      <a href="../../../index.html">Home</a> /
      <a href="../../index.html">{Category}</a> /
      <a href="index.html">{Topic}</a>
    </div>
  </nav>

  <main class="blog-container">
    <article class="blog-post">
      <header class="blog-header">
        <div class="blog-meta">
          <span class="blog-category">{Category}</span>
          <span class="blog-difficulty">{Beginner|Intermediate|Advanced}</span>
        </div>
        <h1>{Blog Title}</h1>
        <p class="blog-subtitle">{One-line description}</p>
        <div class="blog-progress">
          <div class="progress-bar"><div class="progress-fill"></div></div>
          <span class="progress-text">0% Complete</span>
        </div>
      </header>

      <!-- Sections: each section = one concept + one interaction -->
      <section class="blog-section" id="section-1">
        <h2>{Section Title}</h2>
        <p>{1-2 sentence intro}</p>
        <!-- Interactive element here -->
      </section>

      <!-- Repeat sections -->

      <section class="blog-section blog-summary" id="summary">
        <h2>What You Learned</h2>
        <!-- Summary quiz or recap interaction -->
      </section>
    </article>

    <nav class="blog-pagination">
      <a href="#" class="prev-blog">← Previous</a>
      <a href="index.html" class="blog-index">All {Topic} Blogs</a>
      <a href="#" class="next-blog">Next →</a>
    </nav>
  </main>

  <footer class="blog-footer">
    <p>Advance Learning — Learn by doing</p>
  </footer>

  <script src="../../../assets/js/theme.js"></script>
</body>
</html>
```

## Procedure

1. **Identify topic & concepts** — List 5-8 key concepts the blog will cover
2. **Choose interactions** — Map each concept to an interactive element type
3. **Create the HTML file** — Use the template above, numbered (`01-slug.html`)
4. **Build sections** — Each section: short intro (1-2 sentences) + interactive element
5. **Add summary section** — Recap quiz or interactive review at the end
6. **Add custom JS** — Blog-specific interactions in a `<script>` at the bottom
7. **Test responsiveness** — Ensure all interactions work on mobile
8. **Update topic index** — Add the blog to the topic's `index.html`

## Content Guidelines
- Maximum 30 words per paragraph
- Every section MUST have at least one interactive element
- Use code highlighting with the `.code-highlight` class
- Prefer animations and transitions over static images
- Use color-coded hints: green = success, amber = warning, red = error
