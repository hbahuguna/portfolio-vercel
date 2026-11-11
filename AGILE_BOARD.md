# Agile Board – Personal Portfolio Website (Vercel)

## Project Overview
**Project:** New personal portfolio website for GitHub user `hbahuguna`, replacing/improving upon `hbahuguna.github.io`.  
**Goal:** Deliver a clean, professional, responsive, and performant portfolio that showcases projects (dynamically from GitHub and via manual entries), tells the owner's story, and provides an easy way to get in touch. The site will be deployed on Vercel (Hobby plan, non-commercial) with Git-based automatic deployments.

**Success criteria:**
- Live on a `*.vercel.app` domain with correct build/output configuration.
- Includes Hero/Intro, Projects, About, Contact, and Footer sections.
- Responsive across mobile/tablet/desktop with semantic, accessible markup and basic SEO (meta/OG tags).
- Projects section pulls public repositories from GitHub API and supports curated/manual project entries.
- Codebase is simple, maintainable, and documented for easy content updates.

**Proposed tech stack (lightweight/static-first):** Astro (static output) with vanilla CSS/JS where appropriate. No heavy backend; optional serverless function only if strictly required for contact (mailto preferred by default).

---

## Board Columns
| Column | Definition |
|---|---|
| **Backlog** | Identified work not yet prioritized for immediate execution. |
| **To Do** | Prioritized, ready-to-start work for upcoming implementation. |
| **In Progress** | Actively being implemented (only a small number at a time). |
| **Review** | Implemented and awaiting verification/review against acceptance criteria. |
| **Done** | Completed, verified, and committed. |

> **Initial state:** All items start in `Backlog` or `To Do` as indicated per story/task.

---

## Epics
1. **E1 – Project Setup & Repository**
2. **E2 – Design System & Layout Foundation**
3. **E3 – Core Pages & Content Sections**
4. **E4 – Projects Integration (GitHub + Manual)**
5. **E5 – Contact, SEO & Accessibility**
6. **E6 – Deployment, QA & Final Review**

---

## Epic 1: Project Setup & Repository

### US-001 – Initialize project repository and tooling
- **Epic:** E1 – Project Setup & Repository
- **Description:** As a developer, I want a properly initialized repository and project scaffold so that development can proceed consistently.
- **Acceptance Criteria:**
  - [x] New project initialized with chosen static-friendly stack (Astro preferred) and package manager config.
  - [x] `README.md` includes project purpose, local dev commands, build commands, and deployment notes.
  - [x] `.gitignore` configured for the stack (node_modules, build output, env files, OS artifacts).
  - [x] Project builds locally without errors using documented commands.
  - [x] Initial commit created with clear message (e.g., `chore: initialize portfolio project`).
- **Story Points:** 3
- **Priority:** High
- **Status:** Done
- **Notes:** Initialized Astro 5 static project (`portfolio-vercel`), customized README and package metadata, verified `npm run build` succeeds (output `dist/`), and prepared initial commit for push to `main`.

### US-002 – Establish GitHub repository and branch workflow
- **Epic:** E1 – Project Setup & Repository
- **Description:** As the site owner, I want the code hosted on GitHub so that changes are versioned and Vercel can auto-deploy.
- **Acceptance Criteria:**
  - [x] Repository created/confirmed under `hbahuguna` (e.g., `portfolio-vercel`) with owner approval if creation is required.
  - [x] Local repo connected to GitHub remote (`origin`) and default branch established (`main`).
  - [x] At least one push to GitHub succeeds.
  - [x] Commit conventions noted in README or CONTRIBUTING notes (concise conventional commits).
- **Story Points:** 2
- **Priority:** High
- **Status:** Done
- **Notes:** Confirmed `hbahuguna/portfolio-vercel` with `origin` tracking `main`, verified successful push, and documented concise Conventional Commit conventions and workflow in `README.md`.

### T-001 – Define environment and content placeholders
- **Epic:** E1 – Project Setup & Repository
- **Type:** Technical Task
- **Description:** Create a simple config/content structure for owner-editable data (name, bio, social links, manual projects).
- **Acceptance Criteria:**
  - [x] Central place for site metadata/content placeholders (e.g., `src/config/site.ts` or JSON/Markdown data file).
  - [x] Includes placeholders for bio, role/tagline, social links, contact email, and manual projects list.
  - [x] Documented where to edit content.
- **Story Points:** 2
- **Priority:** High
- **Status:** Done
- **Notes:** Added `src/config/site.ts` with typed placeholders for identity/intro, bio/about, contact email, social links, manual projects, and GitHub settings; documented editing location in `README.md`. Also update index in technical task table? T-001 status in table shows To Do - need to update for consistency. Let us fix.

---

## Epic 2: Design System & Layout Foundation

### US-003 – Create base layout and responsive navigation
- **Epic:** E2 – Design System & Layout Foundation
- **Description:** As a visitor, I want a clear, responsive navigation and consistent layout so that I can easily browse the site on any device.
- **Acceptance Criteria:**
  - [x] Shared layout with header, main content area, and footer.
  - [x] Responsive navigation links to Hero, Projects, About, and Contact sections/pages.
  - [x] Mobile-friendly navigation behavior (e.g., collapsible menu or stacked layout) without layout breakage.
  - [x] Keyboard-accessible navigation (focus states, logical tab order).
- **Story Points:** 3
- **Priority:** High
- **Status:** Done
- **Notes:** Added `BaseLayout.astro` with sticky header, mobile nav toggle, main content area, and footer; implemented keyboard-accessible focus indicators and skip link. Updated `index.astro` to use the shared layout and anchor sections. Verified build.

### US-004 – Implement design tokens and global styles
- **Epic:** E2 – Design System & Layout Foundation
- **Description:** As a developer, I want a consistent design system (colors, typography, spacing) so that the UI looks cohesive and is easy to maintain.
- **Acceptance Criteria:**
  - [x] Global CSS variables/tokens for colors, typography, spacing, and breakpoints.
  - [x] Clean, professional default theme with good contrast; optional light/dark mode support (toggle or `prefers-color-scheme`) implemented if low-risk.
  - [x] Reusable utility/classes or component styles for buttons, cards, sections, and containers.
  - [x] Styles are responsive and avoid horizontal scrolling on common viewport sizes.
- **Story Points:** 3
- **Priority:** Medium
- **Status:** Done
- **Notes:** Formalized design tokens (colors, typography, spacing, radius, container) with light/dark support via `prefers-color-scheme` and manual toggle (persisted in localStorage). Added reusable utility classes (`section`, `card`, `btn`, `muted`, `eyebrow`, `container-narrow`) and a theme toggle control in header. Verified build.

### T-002 – Add static assets and favicon placeholders
- **Epic:** E2 – Design System & Layout Foundation
- **Type:** Technical Task
- **Description:** Prepare basic assets required for branding and sharing.
- **Acceptance Criteria:**
  - [x] Favicon/app icons placeholders added and referenced.
  - [x] Placeholder Open Graph/social preview image added.
  - [x] Asset paths work in dev and production builds.
- **Story Points:** 1
- **Priority:** Medium
- **Status:** Done
- **Notes:** Added `public/og-image.svg` placeholder and referenced favicon/app icons + OG/Twitter meta tags in `BaseLayout.astro`. Verified assets are copied to `dist/` and build succeeds.

---

## Epic 3: Core Pages & Content Sections

### US-005 – Build Hero/Intro section
- **Epic:** E3 – Core Pages & Content Sections
- **Description:** As a visitor, I want an engaging hero/intro section so that I immediately understand who the portfolio belongs to and what they do.
- **Acceptance Criteria:**
  - [x] Hero includes name, role/tagline, short intro text (placeholders), and primary calls-to-action (e.g., View Projects, Contact).
  - [x] Visually prominent, responsive, and accessible (proper heading hierarchy).
  - [x] Content sourced from editable config/placeholders where practical.
- **Story Points:** 2
- **Priority:** High
- **Status:** Done
- **Notes:** Rebuilt hero in `index.astro` with responsive two-column layout, avatar placeholder, CTAs (View Projects, Get in Touch), and social links from `siteConfig`. Single H1 heading hierarchy preserved. Verified build.

### US-006 – Build About section/page
- **Epic:** E3 – Core Pages & Content Sections
- **Description:** As a visitor, I want to learn more about the owner so that I can understand their background and skills.
- **Acceptance Criteria:**
  - [x] About section includes bio placeholder, skills/technologies list, and optional highlights (experience/education placeholders).
  - [x] Clear structure with semantic headings and readable typography.
  - [x] Responsive layout (single column on mobile, enhanced on larger screens).
- **Story Points:** 2
- **Priority:** High
- **Status:** Done
- **Notes:** Expanded About section with bio, skills list (from `siteConfig.skills`), and Experience/Education placeholder cards. Added responsive grid layout and skill tags. Verified build.

### US-007 – Build Contact section with accessible contact method
- **Epic:** E3 – Core Pages & Content Sections
- **Description:** As a visitor, I want a simple way to contact the owner so that I can reach out easily.
- **Acceptance Criteria:**
  - [x] Contact section includes clear CTA and contact method (mailto link preferred; form UI optional but must not require complex backend).
  - [x] Displays placeholder email/social links from config.
  - [x] If a form is included, it degrades gracefully (e.g., mailto) or uses a Vercel-compatible serverless approach only if necessary and documented.
  - [x] Links are accessible and have descriptive labels.
- **Story Points:** 2
- **Priority:** High
- **Status:** Done
- **Notes:** Built Contact section with mailto CTA, social links from config, and a mailto-based form (no backend). Added accessible labels and focus styles. Verified build.

### US-008 – Build Footer with essential links and metadata
- **Epic:** E3 – Core Pages & Content Sections
- **Description:** As a visitor, I want a footer with useful links so that I can find social profiles and site info from anywhere.
- **Acceptance Criteria:**
  - [x] Footer includes copyright/name placeholder, GitHub/profile links, and quick navigation or contact link.
  - [x] Consistent styling with site theme and responsive behavior.
  - [x] Uses semantic `<footer>` element.
- **Story Points:** 1
- **Priority:** Medium
- **Status:** Done
- **Notes:** Enhanced footer in `BaseLayout.astro` with brand, quick nav links, social links, copyright, and build/deploy note. Responsive grid layout and theme-consistent styling. Verified build.

---

## Epic 4: Projects Integration (GitHub + Manual)

### US-009 – Display curated/manual project entries
- **Epic:** E4 – Projects Integration (GitHub + Manual)
- **Description:** As the site owner, I want to feature selected projects manually so that I can highlight my best work regardless of GitHub data.
- **Acceptance Criteria:**
  - [x] Projects section supports manually defined entries from config/data (title, description, tech/tags, repo/demo links, optional image).
  - [x] Project cards/list render responsively with clear CTAs (View Code / Live Demo when available).
  - [x] Empty states handled gracefully if no manual projects are provided.
- **Story Points:** 3
- **Priority:** High
- **Status:** Done
- **Notes:** Created `ProjectCard.astro` and `Projects.astro` components. Manual projects render from `siteConfig.manualProjects` with tags, CTAs, featured badge, and empty state. Responsive grid (1/2/3 columns). Verified build.

### US-010 – Fetch and display GitHub repositories dynamically
- **Epic:** E4 – Projects Integration (GitHub + Manual)
- **Description:** As a visitor, I want to see recent/public GitHub projects so that I can explore the owner's work.
- **Acceptance Criteria:**
  - [x] Client-side (or build-time, if appropriate) integration fetches public repositories for `hbahuguna` from GitHub API.
  - [x] Displays key repo info (name, description, language, stars, updated date, link) with sensible filtering/sorting (e.g., exclude forks/archived optionally, limit count).
  - [x] Handles loading, error, and rate-limit/empty states with user-friendly messages.
  - [x] Combined presentation with manual projects is clear (e.g., "Featured" and "From GitHub" subsections or merged with dedupe strategy).
- **Story Points:** 5
- **Priority:** High
- **Status:** Done
- **Notes:** Added client-side GitHub API fetch in `Projects.astro` (filtered forks/archived/private, deduped against manual projects, sorted by updated date, limited by config). Handles loading/error/rate-limit/empty states. Verified build.

### T-003 – Make project data easy to maintain
- **Epic:** E4 – Projects Integration (GitHub + Manual)
- **Type:** Technical Task
- **Description:** Ensure project content updates are straightforward for the owner.
- **Acceptance Criteria:**
  - [x] Document how to add/edit manual projects and configure GitHub username/repo filters.
  - [x] Reasonable defaults chosen (e.g., show top N repos) and easy to adjust.
- **Story Points:** 1
- **Priority:** Medium
- **Status:** Done
- **Notes:** Documented project maintenance in `README.md` (manual project fields, GitHub username/limit, defaults and filtering). Defaults: exclude forks/archived/private, dedupe manual, sort by updated, limit from config. Verified build.

---

## Epic 5: Contact, SEO & Accessibility

### US-011 – Implement basic SEO and social metadata
- **Epic:** E5 – Contact, SEO & Accessibility
- **Description:** As the site owner, I want basic SEO and social sharing tags so that the site is discoverable and previews well when shared.
- **Acceptance Criteria:**
  - [ ] Unique page title and meta description configured (with placeholders).
  - [ ] Open Graph and Twitter card meta tags included (title, description, image, URL placeholders).
  - [ ] Canonical URL strategy documented/configurable for production domain.
  - [ ] Semantic heading structure (single H1 per page/view context) maintained.
- **Story Points:** 2
- **Priority:** Medium
- **Status:** Backlog

### US-012 – Ensure baseline accessibility and performance hygiene
- **Epic:** E5 – Contact, SEO & Accessibility
- **Description:** As a visitor using assistive technology or mobile devices, I want an accessible and performant site so that I can use it comfortably.
- **Acceptance Criteria:**
  - [ ] Semantic HTML landmarks used (`header`, `nav`, `main`, `section`, `footer`).
  - [ ] Images include meaningful `alt` text (or empty alt for decorative images).
  - [ ] Sufficient color contrast and visible focus indicators for interactive elements.
  - [ ] No obvious performance anti-patterns; assets optimized/reasonably sized; Lighthouse/quick audit issues noted and addressed where feasible.
- **Story Points:** 3
- **Priority:** Medium
- **Status:** Backlog

### T-004 – Add robots and sitemap basics (as applicable)
- **Epic:** E5 – Contact, SEO & Accessibility
- **Type:** Technical Task
- **Description:** Provide basic crawl/indexing artifacts for static deployment.
- **Acceptance Criteria:**
  - [ ] `robots.txt` added (allow indexing by default, configurable).
  - [ ] Sitemap generated or static sitemap added if supported by chosen stack; otherwise documented.
- **Story Points:** 1
- **Priority:** Low
- **Status:** Backlog

---

## Epic 6: Deployment, QA & Final Review

### US-013 – Configure project for Vercel deployment
- **Epic:** E6 – Deployment, QA & Final Review
- **Description:** As the site owner, I want the project correctly configured for Vercel so that deployments succeed automatically.
- **Acceptance Criteria:**
  - [ ] Build command and output directory correctly configured for chosen stack (via Vercel settings and/or `vercel.json` if needed).
  - [ ] `vercel.json` added only if required (rewrites/headers/clean URLs); configuration is minimal and documented.
  - [ ] Local production build succeeds and matches expected output.
  - [ ] Documentation includes steps to connect GitHub repo to Vercel and verify auto-deploy on push.
- **Story Points:** 3
- **Priority:** High
- **Status:** Backlog

### US-014 – Perform cross-device QA and final content polish
- **Epic:** E6 – Deployment, QA & Final Review
- **Description:** As the site owner, I want a final quality pass so that the site is ready to share publicly.
- **Acceptance Criteria:**
  - [ ] Verify layout and functionality on mobile, tablet, and desktop widths.
  - [ ] Verify navigation, external links, GitHub projects loading behavior, and contact method.
  - [ ] Fix broken links, console errors, and obvious styling/accessibility issues found during QA.
  - [ ] Replace critical placeholders only where safe; ensure remaining placeholders are clearly marked for owner edits.
- **Story Points:** 3
- **Priority:** High
- **Status:** Backlog

### US-015 – Final review and project handoff
- **Epic:** E6 – Deployment, QA & Final Review
- **Description:** As the site owner, I want clear handoff notes so that I can maintain and update the portfolio after deployment.
- **Acceptance Criteria:**
  - [ ] Final board state reviewed; all completed items moved to `Done` with brief implementation notes.
  - [ ] README updated with content editing guide, local dev, build, and Vercel deployment/update workflow.
  - [ ] Known limitations/follow-ups listed (e.g., API rate limits, optional dark mode toggle enhancements).
  - [ ] Confirmation that site is ready for/verified on `*.vercel.app` (or documented final manual step if credentials/access required).
- **Story Points:** 2
- **Priority:** Medium
- **Status:** Backlog

---

## Technical Task Index (Cross-cutting)
| ID | Title | Epic | Points | Priority | Status |
|---|---|---|---|---|---|
| T-001 | Define environment and content placeholders | E1 | 2 | High | Done |
| T-002 | Add static assets and favicon placeholders | E2 | 1 | Medium | Backlog |
| T-003 | Make project data easy to maintain | E4 | 1 | Medium | Backlog |
| T-004 | Add robots and sitemap basics (as applicable) | E5 | 1 | Low | Backlog |

---

## Execution Notes (for Phase 2)
- Work sequentially by highest priority in `To Do` (then pull from `Backlog` into `To Do` as needed).
- For each item: move to `In Progress` → implement per acceptance criteria → commit with clear message → move to `Review`/`Done` with brief note.
- Keep changes small, verifiable, and aligned with Vercel Hobby/free-tier, static-first constraints.
- If GitHub repo creation/permissions or Vercel account access is required, pause and request confirmation/credentials from the owner.
