# Aklesh Ramola — Personal Portfolio SPA

A subtle, professional single-page application built with modern Angular (standalone components, Angular Router, Signals, and Reactive Forms). Tailored for an enterprise software developer with an ERP and backend-heavy background (ASP.NET, C#, SQL Server, Entity Framework, ADO.NET, and modern frontend technologies).

## Design Philosophy

- **Clean · Technical · Mature · Minimal · Professional**
- Dedicated Dark Theme with a refined slate & teal technical palette
- Strong typography (Inter + JetBrains Mono)
- Respects `prefers-reduced-motion`
- Floating social dock on the left-hand side (middle viewport), responsive and unobtrusively sized on mobile
- No gimmicks, no oversized animated blobs, no inflated marketing buzzwords
- Fully responsive across mobile (320px+), tablet, and desktop viewports

---

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   ├── models/
│   │   │   └── portfolio.model.ts          # TypeScript interfaces (Projects, Experiences, Skills, Domains)
│   │   └── services/
│   │       ├── portfolio-data.service.ts   # ★ SINGLE SOURCE OF TRUTH for all data & links
│   │       └── theme.service.ts            # Dark theme management
│   │
│   ├── shared/
│   │   └── components/
│   │       ├── header/                     # Sticky header with desktop nav & mobile drawer
│   │       ├── footer/                     # Minimalist footer with copyright and profiles
│   │       ├── floating-social/            # Floating social links dock on left-hand middle
│   │       └── project-modal/              # Architecture specification dialog for projects
│   │
│   ├── features/
│   │   ├── home/                           # Restrained hero, about, domain matrix, preview cards
│   │   ├── experience/                     # ERP systems (BM-CRM, BM-ERP, BM-TASK, BM-WMS) & lifecycle flow
│   │   ├── projects/                       # Filterable projects grid with details modal
│   │   └── contact/                        # Form with client validation + direct channels (email copy)
│   │
│   ├── app.ts                              # Root component
│   ├── app.routes.ts                       # Lazy-loaded route configuration
│   └── app.html                            # Semantic application layout
│
├── styles.scss                             # Global design system & CSS variables (Dark Theme)
└── index.html                              # Web fonts & semantic metadata
```

---

## How to Customize Your Content

All data is separated from the view templates in **[`src/app/core/services/portfolio-data.service.ts`](src/app/core/services/portfolio-data.service.ts)**.

### 1. Update Contact & Social URLs
Replace the placeholder values in `portfolio-data.service.ts`:
- `email`: Change `'aklesh.ramola@example.com'` to your real email.
- `github`: Change `'https://github.com/your-username'` to your profile URL.
- `linkedin`: Change `'https://linkedin.com/in/your-profile'` to your LinkedIn profile URL.

### 2. Update or Add Personal Projects
Inside `projects = signal<Project[]>([...])`:
- Modify `Expense Tracker`, `Fleet Management System`, or replace the `Personal Project` placeholder with your own repositories and live links.
- Add additional projects by appending objects adhering to the `Project` interface.

### 3. Add or Modify Skills & Domain Areas
- Update `skillCategories` to append any additional tools or backend libraries.
- Update `domainItems` to add any new business modules or operational domains.

---

## Development Commands

### Start Local Development Server
```bash
npm start
# or: ng serve
```
Open `http://localhost:4200/` in your browser.

### Run Unit Tests
```bash
npm test
# or: ng test --watch=false
```

### Build Production Bundle
```bash
npm run build
```
Build output is generated into `dist/portfolio/browser`.
