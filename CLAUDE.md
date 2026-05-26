# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

Next.js 14 marketing website using the **Pages Router** (`pages/`), JavaScript (no TypeScript), and React 18.

### Pages

| Route | File | Content |
|-------|------|---------|
| `/` | `pages/index.js` | Home — hero, "We help you" cards, AI Courses section |
| `/ai-invest` | `pages/ai-invest.js` | AI Invest product page |
| `/solutions` | `pages/solutions.js` | Problem/solution for investor screening |
| `/about` | `pages/about.js` | Team bios (Andrew Gaule, Denis Bidinost) and mission |
| `/contact` | `pages/contact.js` | Contact information |

### Styling conventions

- **All styles are inline** (`style={{ ... }}` objects) — no CSS modules, no Tailwind, no external stylesheets.
- Primary gradient: `#667eea` → `#764ba2`; accent gold: `#FFD700`; dark background: `#1a1a2e`
- Max-width containers: `960px` (content) or `1200px` (wider sections)
- Logo is served from Firebase Storage (external URL in every page header)

### Component model

There is **no shared components directory**. Navigation headers, footers, and all UI are copy-pasted inline into each page file. When adding a new page, replicate the nav/footer pattern from an existing page.

### Navigation

Every page includes the same nav links: Home (`/`), AI Courses (`/#courses`), AI Invest (`/ai-invest`), Our Solution (`/solutions`), About (`/about`), Contact (`/contact`). Keep all pages in sync when adding nav items.
