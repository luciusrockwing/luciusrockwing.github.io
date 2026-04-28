# LRW Portfolio Design Overhaul

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the LRW portfolio from a generic Unemployables template into a distinctive, text-driven dark editorial site with refined typography, smooth animations, and proper accessibility — then audit it against Web Interface Guidelines.

**Architecture:** Replace the flat white Unemployables aesthetic with a dark, editorial-themed design system. Use CSS custom properties for theming, Google Fonts (Archivo + Space Grotesk) for distinctive typography, Intersection Observer for scroll-triggered entrance animations, and `prefers-reduced-motion` for accessibility. The text-only link format stays — we elevate it with spacing, contrast, and motion rather than adding cards/images.

**Tech Stack:** Vanilla HTML/CSS/JS, Google Fonts, CSS custom properties, Intersection Observer API

**Design System (from ui-ux-pro-max):**
- **Pattern:** Portfolio Grid (adapted to text-only links)
- **Style:** Motion-Driven Dark Editorial
- **Colors:** Primary `#18181B`, Secondary `#3F3F46`, CTA `#2563EB`, Background `#09090B`, Text `#FAFAFA`
- **Typography:** Heading: Archivo (300-700), Body: Space Grotesk (300-700)
- **Effects:** Scroll entrance animations, hover transitions (200-300ms), staggered reveals

---

### Task 1: CSS Custom Properties & Dark Theme Foundation

**Files:**
- Modify: `css/layout.css`
- Modify: `css/typography.css`
- Modify: `css/utilities.css`

**Step 1: Add CSS custom properties to `layout.css`**

Add at the very top, before any existing rules:

```css
:root {
  --color-bg: #09090B;
  --color-surface: #18181B;
  --color-border: #27272A;
  --color-text: #FAFAFA;
  --color-text-muted: #A1A1AA;
  --color-text-dim: #71717A;
  --color-accent: #2563EB;
  --color-accent-hover: #3B82F6;
  --color-cta-text: #FAFAFA;
  --font-heading: 'Archivo', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --transition-fast: 150ms var(--ease-out);
  --transition-base: 250ms var(--ease-out);
  --transition-slow: 400ms var(--ease-in-out);
  --gap-section: 120px;
  --gap-content: 24px;
  --max-width: 720px;
}
```

**Step 2: Apply dark theme to body and main layout in `layout.css`**

Replace the `body` rule with:

```css
body {
  margin: 0;
  background-color: var(--color-bg);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

Replace `#main-content` margins with centered max-width:

```css
#main-content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 160px 24px;
  display: flex;
  flex-direction: column;
  gap: var(--gap-section);
}
```

**Step 3: Update responsive breakpoints in `layout.css`**

Replace ALL existing media queries with:

```css
@media only screen and (max-width: 800px) {
  #main-content {
    padding: 120px 20px;
    gap: 80px;
  }
  #portfolio-header {
    flex-direction: column;
    gap: 24px;
  }
}

@media only screen and (max-width: 600px) {
  #main-content {
    padding: 100px 16px;
    gap: 64px;
  }
}
```

**Step 4: Update `#about-section` spacing**

```css
#about-section {
  display: flex;
  flex-direction: column;
  gap: var(--gap-content);
}

.about-section-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

**Step 5: Commit**

```bash
git add css/layout.css
git commit -m "feat: dark theme custom properties and layout refactor"
```

---

### Task 2: Typography Overhaul (Archivo + Space Grotesk)

**Files:**
- Modify: `css/typography.css`

**Step 1: Add Google Fonts import and replace all font rules**

Replace entire `typography.css` with:

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.65;
  color: var(--color-text);
}

.nav-title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 20px;
  letter-spacing: -0.02em;
  color: var(--color-text);
}

.button-text {
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.image-caption {
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 400;
  color: var(--color-text-muted);
}

.main-title {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--color-text);
}

.subheader-text {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.body-text {
  font-family: var(--font-body);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.65;
  color: var(--color-text);
}

.body-text a {
  color: var(--color-accent);
  transition: color var(--transition-fast);
}

.body-text a:hover {
  color: var(--color-accent-hover);
}

/* Responsive typography */
@media only screen and (max-width: 600px) {
  .main-title {
    font-size: 36px;
  }
}
```

**Step 2: Commit**

```bash
git add css/typography.css
git commit -m "feat: Archivo + Space Grotesk typography system"
```

---

### Task 3: Utilities & Component Styling (Dark Theme)

**Files:**
- Modify: `css/utilities.css`

**Step 1: Replace entire `utilities.css` with dark-themed components**

```css
/* ===== Navbar ===== */

.navbar {
  width: 100%;
  padding: 24px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background: linear-gradient(to bottom, var(--color-bg), transparent);
  mix-blend-mode: normal;
}

.nav-title-link {
  color: var(--color-text);
  text-decoration: none;
  transition: opacity var(--transition-fast);
}

.nav-title-link:hover {
  opacity: 0.7;
}

@media only screen and (max-width: 800px) {
  .navbar {
    padding: 16px 20px;
  }
}


/* ===== Button ===== */

a.button {
  padding: 8px 20px;
  border: 1px solid var(--color-border);
  border-radius: 100px;
  color: var(--color-text);
  text-decoration: none;
  width: fit-content;
  display: flex;
  gap: 8px;
  align-items: center;
  transition: border-color var(--transition-fast), background-color var(--transition-fast);
  cursor: pointer;
}

a.button:hover {
  border-color: var(--color-text-muted);
  background-color: var(--color-surface);
  text-decoration: none;
}


/* ===== Icons ===== */

.right-arrow-icon {
  width: 14px;
  height: 14px;
  transition: transform var(--transition-fast);
}

a.button:hover .right-arrow-icon {
  transform: translateX(3px);
}

.footer-icon {
  width: 18px;
  height: 18px;
  opacity: 0.5;
  transition: opacity var(--transition-fast), transform var(--transition-base);
}

a.icon-link {
  display: flex;
  cursor: pointer;
}

a.icon-link:hover .footer-icon {
  opacity: 1;
  transform: translateY(-2px);
}


/* ===== Footer ===== */

#footer {
  width: 100%;
  display: flex;
  padding: 40px 32px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-top: 1px solid var(--color-border);
}

@media only screen and (max-width: 800px) {
  #footer {
    padding: 32px 20px;
  }
}


/* ===== Links ===== */

a.no-underline {
  text-decoration: none;
  color: var(--color-accent);
  cursor: pointer;
  transition: color var(--transition-fast);
}

a.no-underline:hover {
  color: var(--color-accent-hover);
  text-decoration: none;
}


/* ===== Showcase List ===== */

.showcase-list .body-text {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
  transition: padding-left var(--transition-base);
}

.showcase-list .body-text:first-child {
  padding-top: 0;
}

.showcase-list .body-text:last-child {
  border-bottom: none;
}

.showcase-list .body-text:hover {
  padding-left: 8px;
}
```

**Step 2: Commit**

```bash
git add css/utilities.css
git commit -m "feat: dark theme utilities — navbar, buttons, links, showcase list"
```

---

### Task 4: HTML Structure Updates (Semantic + Dark-Ready)

**Files:**
- Modify: `index.html`
- Modify: `showcase/index.html`

**Step 1: Update `index.html` head and portfolio header**

Replace the `<head>` section to add meta theme-color:

```html
<head>
  <meta charset="utf-8">
  <link rel="icon" href="./assets/images/1311.png" />
  <title>LRW — Portfolio</title>
  <meta name="description" content="Showcase portfolio of LRW @luciusrockwing.">
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#09090B" />
  <meta name="color-scheme" content="dark" />

  <link rel="stylesheet" href="./css/typography.css">
  <link rel="stylesheet" href="./css/layout.css">
  <link rel="stylesheet" href="./css/utilities.css">

  <script defer src="./js/script.js"></script>
</head>
```

**Step 2: Remove the header image, keep text-only header**

Replace the entire `#portfolio-header` div with:

```html
<div id="portfolio-header">
  <div id="portfolio-header-text-container">
    <div class="header-text">
      <span class="main-title">Hey, I'm LRW.</span>
      <div class="body-text">I make things. Some of them work. This is where I keep the ones I'm not embarrassed about.</div>
    </div>
    <a class="button" id="my-work-link" href="#showcase-section">
      <span class="button-text">See my work</span>
      <image src="./assets/icons/arrow-right.svg" class="right-arrow-icon"/>
    </a>
  </div>
</div>
```

**Step 3: Add proper section IDs and nav link**

- Change Showcase section `id="about-section"` → `id="showcase-section"`
- The "See my work" button now links to `#showcase-section` via href

**Step 4: Update `showcase/index.html` head similarly**

Add `<meta name="theme-color" content="#09090B" />` and `<meta name="color-scheme" content="dark" />`.
Reorder CSS imports: typography.css first, then layout.css, then utilities.css.

**Step 5: Commit**

```bash
git add index.html showcase/index.html
git commit -m "feat: semantic HTML updates, dark meta tags, text-only header"
```

---

### Task 5: Scroll Entrance Animations (Intersection Observer)

**Files:**
- Create: `js/animations.js`
- Modify: `js/script.js`
- Modify: `index.html`
- Modify: `showcase/index.html`

**Step 1: Create `js/animations.js`**

```javascript
// Scroll entrance animations via Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  // Respect reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // Add fade-in class to all animated sections
  const animatedElements = document.querySelectorAll(
    '#portfolio-header, #about-section, #showcase-section, #project-header, #project-details'
  );
  
  animatedElements.forEach((el, index) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = prefersReducedMotion ? '0ms' : `${index * 80}ms`;
  });

  if (prefersReducedMotion) {
    // Skip animations entirely
    animatedElements.forEach(el => el.classList.add('fade-in--visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  animatedElements.forEach(el => observer.observe(el));
});
```

**Step 2: Add fade-in CSS to `layout.css`**

Append at the end of `layout.css`:

```css
/* ===== Scroll Entrance Animations ===== */

.fade-in {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 600ms var(--ease-out), transform 600ms var(--ease-out);
}

.fade-in--visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .fade-in {
    transition: none;
    opacity: 1;
    transform: none;
  }
}
```

**Step 3: Update `script.js` — fix broken my-work-link scroll**

Replace entire `script.js`:

```javascript
// Smooth scroll for "See my work" button
document.addEventListener('DOMContentLoaded', () => {
  const myWorkLink = document.getElementById('my-work-link');
  if (myWorkLink) {
    myWorkLink.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('showcase-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
```

**Step 4: Add `animations.js` to both HTML files**

In both `index.html` and `showcase/index.html`, after the existing script tag:

```html
<script defer src="./js/script.js"></script>
<script defer src="./js/animations.js"></script>
```

(Use `../js/` path for showcase/index.html)

**Step 5: Commit**

```bash
git add js/animations.js js/script.js index.html showcase/index.html css/layout.css
git commit -m "feat: scroll entrance animations with prefers-reduced-motion support"
```

---

### Task 6: SVG Icon Inversion (Light → Dark)

**Files:**
- Modify: `assets/icons/arrow-right.svg`
- Modify: `assets/icons/twitter.svg`
- Modify: `assets/icons/instagram.svg`
- Modify: `assets/icons/mail.svg`

**Step 1: Invert all SVG icons from black to white**

For each SVG file, change `fill="#141414"` or `stroke="#141414"` or any dark fill to `fill="currentColor"`.
If the SVG has `fill="none"` with a stroke, change `stroke` to `currentColor`.
If no fill/stroke attribute exists, add `fill="currentColor"`.

This makes icons inherit the text color (`var(--color-text)`) from their parent element.

**Step 2: Commit**

```bash
git add assets/icons/
git commit -m "fix: SVG icons use currentColor for dark theme compatibility"
```

---

### Task 7: Portfolio Header Image Removal Cleanup

**Files:**
- Modify: `css/layout.css`

**Step 1: Remove unused portfolio-header-image-container styles**

Delete or comment out these selectors (no longer used after Task 4):
- `#portfolio-header-image-container`
- `.portfolio-header-image`
- `#portfolio-header-text-container` (update to full-width)

Replace `#portfolio-header-text-container` with:

```css
#portfolio-header-text-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

Remove `#portfolio-header` gap and flex-basis rules, simplify:

```css
#portfolio-header {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

**Step 2: Commit**

```bash
git add css/layout.css
git commit -m "refactor: clean up unused header image layout rules"
```

---

### Task 8: Showcase Page Dark Theme Sync

**Files:**
- Modify: `showcase/index.html`
- Modify: `css/utilities.css` (if needed for showcase-specific styles)

**Step 1: Verify showcase/index.html uses the same dark classes and structure**

Ensure:
- Same `<meta>` tags (theme-color, color-scheme)
- CSS import order: typography → layout → utilities
- `#project-header` and `#project-details` have `.fade-in` class for animations
- `.project-details-content .body-text` items have the same showcase-list hover effect

**Step 2: Add showcase-list hover style to project-details-content in utilities.css**

```css
.project-details-content .body-text {
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border);
  transition: padding-left var(--transition-base);
}

.project-details-content .body-text:first-child {
  padding-top: 0;
}

.project-details-content .body-text:last-child {
  border-bottom: none;
}

.project-details-content .body-text:hover {
  padding-left: 8px;
}
```

**Step 3: Commit**

```bash
git add showcase/index.html css/utilities.css
git commit -m "feat: showcase page dark theme sync + hover effects"
```

---

### Task 9: Web Interface Guidelines Audit

**Files:**
- Audit: `index.html`
- Audit: `showcase/index.html`
- Audit: `css/layout.css`
- Audit: `css/typography.css`
- Audit: `css/utilities.css`

**Step 1: Fetch the latest Web Interface Guidelines**

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

**Step 2: Read all project files and check against every rule**

Apply all rules from the fetched guidelines to:
- `index.html`
- `showcase/index.html`
- `css/layout.css`
- `css/typography.css`
- `css/utilities.css`
- `js/script.js`
- `js/animations.js`

**Step 3: Output findings in `file:line` format**

Document all issues found — accessibility, semantics, performance, UX.

**Step 4: Fix all CRITICAL and HIGH severity findings**

Address any issues before final commit.

**Step 5: Commit fixes**

```bash
git add -A
git commit -m "fix: web interface guidelines audit fixes"
```

---

### Task 10: Final Push & Verification

**Step 1: Push all commits to GitHub**

```bash
git push origin main
```

**Step 2: Verify site renders at https://luciusrockwing.github.io**

- Check dark theme renders correctly
- Verify typography loads (Archivo + Space Grotesk)
- Test scroll animations work
- Test hover states on links, buttons, icons
- Test responsive at 375px, 768px, 1024px, 1440px
- Test `prefers-reduced-motion` (Settings → Accessibility → Reduce Motion)
- Check showcase subpage

**Step 3: Report audit results to user**
