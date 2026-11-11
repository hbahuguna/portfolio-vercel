# Portfolio Website (hbahuguna)

A clean, responsive, static-first personal portfolio website for GitHub user **`hbahuguna`**, built with [Astro](https://astro.build/) and deployed on [Vercel](https://vercel.com/) (Hobby plan, non-commercial).

This project showcases an intro/hero, projects (curated/manual entries and public GitHub repositories), about, and contact sections.

## Project purpose

- Provide an improved portfolio experience (successor to `hbahuguna.github.io`) hosted on a `*.vercel.app` domain.
- Keep the site fast, accessible, and easy to maintain with editable content placeholders.

## Prerequisites

- **Node.js** (LTS recommended; Astro 7 requires a modern Node runtime)
- **npm**

## Local development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Astro serves the site locally at **http://localhost:4321** by default.

To preview a production build locally:

```bash
npm run build
npm run preview
```

## Build

Create a production build:

```bash
npm run build
```

Build output is generated in **`./dist/`** (static assets ready for deployment).

## Deployment (Vercel)

This project is intended for **Vercel** with Git integration:

1. Push the repository to GitHub (`hbahuguna/portfolio-vercel`).
2. In Vercel, **Import Project** from the GitHub repository.
3. Use the Astro defaults (or configure explicitly):
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Deploy to receive a `*.vercel.app` URL. Subsequent pushes to `main` trigger automatic deployments.

> No `vercel.json` is required for the default static Astro setup; add one only if custom rewrites/headers are needed later.

## Project structure

```text
/
├── public/          # Static assets
├── src/
│   └── pages/       # File-based routes (.astro)
├── astro.config.mjs
├── package.json
└── AGILE_BOARD.md   # Project plan and progress tracking
```

## Content updates

Edit **`src/config/site.ts`** to update portfolio content in one place:

- **Identity & intro:** `name`, `role`, `tagline`, `bio`
- **About:** `about`
- **Contact & socials:** `contactEmail`, `socialLinks`
- **Projects:** `manualProjects` (curated entries) and `githubUsername` / `githubReposLimit` (dynamic GitHub repos)
- Replace placeholder URLs/text with your own information as you customize the site.

## Repository & commit conventions

- **Repository:** [`hbahuguna/portfolio-vercel`](https://github.com/hbahuguna/portfolio-vercel)
- **Default branch:** `main` (connected to `origin`; Vercel Git integration should deploy from `main`)
- **Commits:** Use concise [Conventional Commits](https://www.conventionalcommits.org/) where practical, e.g.
  - `chore: initialize portfolio project`
  - `feat: implement responsive navigation`
  - `fix: correct GitHub API error handling`
  - `docs: update content editing guide`

Keep commits focused per story/task and push to `main` after each completed story so deployments stay in sync.
