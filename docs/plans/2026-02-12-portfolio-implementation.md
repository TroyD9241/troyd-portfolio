# Portfolio Implementation Plan

**Date:** February 12, 2026
**Based on:** docs/plans/2026-02-12-portfolio-design.md

---

## Phase 1: Project Setup

### Step 1.1: Initialize Vite React Project

```bash
# Commands to run
npm create vite@latest . -- --template react
npm install
```

### Step 1.2: Install Core Dependencies

```bash
# Runtime dependencies
npm install framer-motion react-intersection-observer clsx tailwind-merge

# Dev dependencies
npm install -D tailwindcss@3 postcss autoprefixer eslint@9 prettier eslint-plugin-react eslint-plugin-react-hooks @eslint/js
```

### Step 1.3: Configure Tailwind CSS

```bash
npx tailwindcss init -p
```

**Files to create/update:**
- `tailwind.config.js` - Add custom colors, fonts, typography
- `postcss.config.js` - Standard config (autoprefixer)
- `src/index.css` - Tailwind directives + custom base styles

---

## Phase 2: Linting & Formatting

### Step 2.1: ESLint Configuration

**File:** `eslint.config.js`

Based on codex.md standards:
- React hooks rules enabled
- Import grouping (stdlib / third-party / local)
- No console.log in production
- React refresh enabled

### Step 2.2: Prettier Configuration

**File:** `.prettierrc`

- Single quotes
- Trailing commas
- Print width 100
- Semi-colons

---

## Phase 3: Project Structure

### Step 3.1: Create Directory Structure

```
src/
├── assets/          # Static images, fonts
├── components/
│   ├── ui/          # Generic components (Button, Card, Badge)
│   ├── layout/      # Header, Footer, Navigation
│   └── sections/    # Hero, About, Services, Portfolio, Contact
├── hooks/           # Custom hooks
├── lib/             # Utilities, constants
├── data/            # Static content (projects, services)
├── styles/          # Global styles
├── App.jsx
└── main.jsx
```

### Step 3.2: Create Data Files

**`src/data/projects.js`** - Portfolio projects array
**`src/data/services.js`** - Services offerings array

---

## Phase 4: UI Components

### Step 4.1: Shared UI Components

Each component in its own file with clear exports:

**`src/components/ui/Section.jsx`**
- Wrapper for page sections
- ID for navigation
- Padding and spacing

**`src/components/ui/Button.jsx`**
- Primary and secondary variants
- Sizes (sm, md, lg)
- Hover effects
- Ripple/micro-interaction

**`src/components/ui/Card.jsx`**
- Elevated card design
- Hover lift effect
- Border radius, shadow

**`src/components/ui/Badge.jsx`**
- Tech stack tags
- Small, rounded
- Accent colors

**`src/components/ui/SectionHeading.jsx`**
- Elegant section titles
- Subheadings
- Decorative underline

---

## Phase 5: Layout Components

### Step 5.1: Header

**`src/components/layout/Header.jsx`**
- Fixed position
- Smooth scroll navigation
- Mobile hamburger menu
- Active section highlighting

### Step 5.2: Footer

**`src/components/layout/Footer.jsx`**
- Copyright
- Social links
- Quick navigation links

---

## Phase 6: Page Sections

### Step 6.1: Hero Section

**`src/components/sections/Hero.jsx`**

Structure:
- Full viewport height
- Headline with animated text
- Subheadline
- CTA buttons
- Background animation

Animations:
- Text fade-in on load
- Staggered children
- Subtle parallax

### Step 6.2: About Section

**`src/components/sections/About.jsx`**

Structure:
- Alternating layout (image/text)
- Professional narrative
- Skills showcase

### Step 6.3: Services Section

**`src/components/sections/Services.jsx`**

Structure:
- Grid of service cards
- Each card: title, description, features, pricing
- Hover effects on cards

### Step 6.4: Portfolio Section

**`src/components/sections/Portfolio.jsx`**

Structure:
- Responsive grid (1→2→3 columns)
- Project cards with hover effects
- Empty state handling

### Step 6.5: Contact Section

**`src/components/sections/Contact.jsx`**

Structure:
- Formspree form integration
- Form fields: name, email, project type, message
- Success/error states
- Social links

---

## Phase 7: App Assembly

### Step 7.1: Main App Component

**`src/App.jsx`**
- Compose all sections
- Smooth scroll behavior
- Meta tags for SEO

### Step 7.2: Entry Point

**`src/main.jsx`**
- Mount App
- Global styles import

---

## Phase 8: Animations

### Step 8.1: Scroll Animations

Create reusable animation variants:

```javascript
// In lib/animations.js
export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

### Step 8.2: Apply Animations

- Hero: Entrance animations on load
- Sections: Fade-in on scroll (useIntersectionObserver)
- Cards: Hover lift, shadow
- Navigation: Smooth transitions

---

## Phase 9: Testing Setup

### Step 9.1: Vitest Configuration

```bash
npm install -D vitest @testing-library/react @testing-library/user-event jsdom
```

**`vite.config.js`** - Add Vitest test environment

**`src/test/setup.js`** - Test utilities, custom renders

### Step 9.2: Playwright Setup

```bash
npm install -D @playwright/test
npx playwright install chromium
```

**`playwright.config.js`** - Browser testing config

**Tests:**
- Navigation accessibility
- Contact form presence
- Mobile responsiveness check

---

## Phase 10: Build & Verification

### Step 10.1: Production Build

```bash
npm run build
```

### Step 10.2: Verification

- Lighthouse audit (90+ scores)
- Mobile viewport test
- Form functionality test
- All links working

---

## File Manifest

### New Files to Create

```
eslint.config.js
.prettierrc
tailwind.config.js
postcss.config.js
src/index.css
src/lib/animations.js
src/lib/utils.js
src/data/projects.js
src/data/services.js
src/components/ui/Section.jsx
src/components/ui/Button.jsx
src/components/ui/Card.jsx
src/components/ui/Badge.jsx
src/components/ui/SectionHeading.jsx
src/components/layout/Header.jsx
src/components/layout/Footer.jsx
src/components/sections/Hero.jsx
src/components/sections/About.jsx
src/components/sections/Services.jsx
src/components/sections/Portfolio.jsx
src/components/sections/Contact.jsx
src/App.jsx
src/main.jsx
.env.example
```

### Files to Update

```
package.json (scripts)
vite.config.js (test integration)
index.html (meta tags)
```

---

## Dependencies Summary

**Runtime:**
- `framer-motion` - Animations
- `react-intersection-observer` - Scroll detection
- `clsx` - Conditional class names
- `tailwind-merge` - Tailwind class merging

**Dev:**
- `tailwindcss@3` - Styling
- `eslint@9` - Linting
- `prettier` - Formatting
- `vitest` - Unit testing
- `@testing-library/react` - React testing
- `@playwright/test` - E2E testing

---

## Estimated Time

- Phase 1-3: 30 minutes
- Phase 4-7: 2 hours
- Phase 8: 30 minutes
- Phase 9-10: 30 minutes

**Total: ~4 hours**

---

## Success Criteria

1. All sections render correctly
2. Animations smooth and professional
3. Mobile responsive (320px+)
4. Form submits successfully
5. Lighthouse 90+
6. Tests pass
