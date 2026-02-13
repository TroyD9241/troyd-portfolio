# Portfolio Website Design Document

**Created:** February 12, 2026
**Profile Reference:** JS_REACT_TAILWIND (codex.md)

---

## Overview

A static React portfolio website designed to showcase fullstack development capabilities to local businesses and potential freelance clients. The site combines elegant, professional aesthetics with creative interactive elements to demonstrate technical skill while building trust with potential clients.

### Design Philosophy

- **Elegant & Professional with Creative Touches:** Sophisticated color palette, smooth transitions, premium feel, enhanced by subtle animations and interactive elements
- **First Impression Priority:** The homepage hero section immediately communicates value proposition and establishes credibility
- **Product Delivery Demonstration:** Every aspect of the site serves as proof of development capability—no placeholder thinking

---

## Architecture

### Technology Stack

| Component | Technology | Justification |
|-----------|------------|---------------|
| Build Tool | Vite | Fast builds, simple configuration, excellent developer experience |
| Framework | React 18+ | Component-based architecture, vast ecosystem, matches codex standards |
| Styling | Tailwind CSS | Utility-first approach, maintainable, rapid development |
| Animations | Framer Motion | Declarative animations, smooth transitions, professional polish |
| Email Handling | Formspree | Static-site friendly, no backend required, reliable delivery |
| Hosting | Vercel/Netlify | Free tier, automatic CI/CD, excellent performance |

### Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── hero-bg.jpg
│       └── projects/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/           # Generic, reusable components
│   │   ├── layout/       # Header, Footer, Section wrappers
│   │   └── sections/     # Hero, About, Services, Portfolio, Contact
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilities, constants, configurations
│   ├── data/              # Static content (projects, services)
│   ├── styles/            # Global styles, Tailwind directives
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── .env.example
```

---

## Design System

### Color Palette

**Primary:** Deep navy/slate (professional, trustworthy)
**Accent:** Gold/copper (elegant, premium feel)
**Background:** Off-white/warm gray (clean, readable)
**Text:** Dark gray (softer than pure black)

```
--color-primary: #1e293b
--color-accent: #d4a574
--color-background: #f8f5f2
--color-text: #334155
--color-text-light: #64748b
```

### Typography

- **Headings:** Serif font (elegant, sophisticated)
- **Body:** Sans-serif (clean, readable)
- **Scale:** Modular type scale for consistent hierarchy

### Animations

- Fade-in on scroll
- Smooth hover transitions (200-300ms)
- Parallax effects on hero
- Staggered list animations
- Page load entrance animations

---

## Page Sections

### 1. Hero Section

**Purpose:** Immediate value communication and trust building

**Elements:**
- Headline: Clear value proposition ("I build websites that grow local businesses")
- Subheadline: Brief explanation of services and approach
- CTA Button: Primary call-to-action
- Social Proof: Small logos or "trusted by" statement (optional)
- Visual: Animated hero element or subtle background animation

**Design:**
- Full viewport height
- Clean, uncluttered layout
- Strong typography focus
- Subtle animation on load

### 2. About Section

**Purpose:** Human connection and credibility establishment

**Elements:**
- Professional photo (optional, or elegant placeholder)
- Brief narrative: Who you are, your background, your approach
- Technical skills showcase (fullstack capabilities)
- Values statement: Why you do this work, what drives you

**Design:**
- Alternating layout (text-image-text-image)
- Smooth scroll-triggered fade-ins
- Skills displayed as elegant tags or icons

### 3. Services Section

**Purpose:** Clear offering communication for client decision-making

**Services to Showcase:**
- Fullstack Website Development
- Local Business Websites
- Short/Mid-term Contracts

**Each Service Includes:**
- Title
- Brief description
- Key features/bullet points
- Indicative pricing or "Get a quote" CTA

**Design:**
- Card-based layout
- Hover effects (lift, shadow)
- Consistent spacing and hierarchy
- Clear visual separation between tiers

### 4. Portfolio Section

**Purpose:** Proof of capability through demonstrated work

**Current State (Phase 1):**
- 2-3 showcase pieces (personal projects, open source, mock work)
- Elegant "Coming Soon" placeholders for future projects
- Each card displays:
  - Thumbnail image
  - Project title
  - Brief description
  - Tech stack badges
  - Links (demo, GitHub)

**Future Expansion (Phase 2):**
- Easy project addition via data file
- Case study format (problem → solution → results)
- Filter by project type

**Project Card Design:**
```
┌─────────────────────┐
│    [Thumbnail]      │
├─────────────────────┤
│  Project Title      │
│  Brief description  │
│  [React] [Node]     │
│  ↗ Live  ↘ GitHub  │
└─────────────────────┘
```

**Design:**
- Grid layout (responsive: 1→2→3 columns)
- Hover: lift + shadow + subtle zoom
- Smooth staggered entrance animation
- Empty states handled elegantly

### 5. Contact Section

**Purpose:** Conversion point for potential clients

**Elements:**
- Formspree-powered contact form
- Email address (optional, protected)
- Social links (LinkedIn, GitHub)
- Brief closing statement

**Form Fields:**
- Name
- Email
- Project type (dropdown)
- Message

**Design:**
- Clean, inviting layout
- Clear form labels and validation
- Success state after submission
- Responsive form design

### 6. Navigation

**Header (Fixed):**
- Logo/Name (left)
- Navigation links (right)
- Mobile: Hamburger menu with smooth transition

**Footer:**
- Copyright
- Social links
- Quick links

---

## Technical Implementation

### Components Breakdown

```
src/components/
├── ui/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Section.jsx
│   ├── SectionHeading.jsx
│   └── Badge.jsx
├── layout/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Navigation.jsx
└── sections/
    ├── Hero.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Portfolio.jsx
    └── Contact.jsx
```

### Data Structure (Static Content)

```javascript
// src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description of the project",
    image: "/images/projects/project1.jpg",
    techStack: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "https://...",
    githubUrl: "https://...",
    featured: true
  }
]

// src/data/services.js
export const services = [
  {
    id: 1,
    title: "Fullstack Website Development",
    description: "Complete web solutions built with modern technologies.",
    features: ["Custom design & development", "Responsive across devices", "SEO optimized"],
    price: "Starting at $X,XXX"
  }
]
```

### Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b',
        accent: '#d4a574',
        background: '#f8f5f2',
        text: '#334155',
        'text-light': '#64748b'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

### Accessibility Compliance

- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- WCAG AA color contrast
- Focus states visible
- Form labels associated correctly

---

## Formspree Integration

### Setup

1. Create Formspree account
2. Create new form
3. Get form endpoint URL
4. Add to `.env` as `VITE_FORMSPREE_ENDPOINT`

### Implementation

```jsx
// src/components/sections/Contact.jsx
export function Contact() {
  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch(formEndpoint, {
      method: "POST",
      body: new FormData(event.target)
    })
    if (response.ok) {
      // Show success message
    }
  }
  
  return <form onSubmit={handleSubmit}>...</form>
}
```

---

## Development Workflow

### Initial Setup

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install -D tailwindcss postcss autoprefixer eslint prettier
npx tailwindcss init -p
npm install framer-motion react-intersection-observer
```

### Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint src --ext js,jsx",
  "format": "prettier --write src"
}
```

### ESLint Configuration

Following codex standards (JS_REACT_TAILWIND profile):
- Functional components only
- React hooks for state
- Proper import grouping (stdlib / third-party / local)
- No console.log in production code

---

## Testing Strategy

### Unit Tests (Vitest + React Testing Library)

```bash
npm install -D vitest @testing-library/react @testing-library/user-event
```

**Priority Areas:**
- Custom hooks
- Utility functions
- Component rendering (with mock data)
- Form validation logic

### E2E Tests (Playwright)

```bash
npm install -D @playwright/test
```

**Test Coverage:**
- Navigation flow
- Contact form submission
- Mobile menu toggle
- Scroll animations trigger

### Testing Targets

- ~70% unit test coverage
- Critical paths covered by E2E tests
- Focus on user-visible behavior

---

## Deployment

### Vercel Deployment

1. Connect GitHub repository
2. Import project
3. Build settings auto-detected
4. Deploy button

### Environment Variables

```
VITE_FORMSPREE_ENDPOINT=your-formspree-url
```

---

## Future Enhancements (Phase 2)

- Content management system integration
- Blog section for SEO
- Project filtering by category
- Dark mode toggle
- Analytics integration
- Testimonials section
- Detailed case study pages

---

## Success Criteria

1. **Design Quality:** Site demonstrates professional, elegant aesthetic with creative touches
2. **Performance:** Lighthouse score 90+ for performance, accessibility, best practices
3. **Mobile:** Fully responsive from 320px to large screens
4. **Conversion:** Clear path for potential clients to initiate contact
5. **Maintainability:** Code follows codex standards, easy to update content
6. **Proof of Capability:** Every element serves as demonstration of development skill

---

## References

- codex.md (JS_REACT_TAILWIND profile)
- React 18+ documentation
- Tailwind CSS documentation
- Framer Motion documentation
- Formspree documentation
