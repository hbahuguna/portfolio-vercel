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

This project is intended for **Vercel** with Git integration (Hobby plan, non-commercial).

### Connect the repository
1. Push the repository to GitHub (`hbahuguna/portfolio-vercel`) — already done for `main`.
2. Go to [vercel.com](https://vercel.com) → **Add New → Project**.
3. **Import** the `hbahuguna/portfolio-vercel` repository (authorize GitHub if prompted).
4. Vercel auto-detects **Astro**. Confirm these settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Install command:** `npm install`
   - **Node.js version:** 20.x or 22.x (recommended)
5. Click **Deploy**. You'll receive a `*.vercel.app` URL (e.g., `portfolio-vercel-xxx.vercel.app`).

### Auto-deploy on push
- Every push to `main` triggers a new production deployment automatically.
- Pull requests create preview deployments with unique URLs.

### Configuration files
- **`vercel.json`** (minimal): enables clean URLs and disables trailing slashes.
- **`astro.config.mjs`**: sets `site` URL for canonical/OG/sitemap generation. Update to your final Vercel domain after first deploy.
- **`.gitignore`**: excludes `dist/`, `.astro/`, `node_modules/`.

### Post-deploy checklist
- [ ] Update `siteConfig.siteUrl` in `src/config/site.ts` to your live `*.vercel.app` URL.
- [ ] Update `site` in `astro.config.mjs` to the same URL.
- [ ] Replace placeholder content (name, bio, email, social links, projects).
- [ ] Verify `robots.txt` and sitemap resolve at the live URL.
- [ ] Run a Lighthouse audit on the live site.

## Project structure

```text
/
├── public/              # Static assets (favicon, OG image, robots.txt)
├── src/
│   ├── components/      # Astro components (ProjectCard, Projects)
│   ├── config/          # site.ts - central content/metadata config
│   ├── layouts/         # BaseLayout.astro
│   ├── pages/           # index.astro (single-page portfolio)
│   └── styles/          # global.css (design tokens + utilities)
├── astro.config.mjs     # Astro config (site URL, sitemap)
├── vercel.json          # Vercel config (clean URLs)
├── AGILE_BOARD.md       # Project plan and progress tracking
└── package.json
```

## Known limitations & follow-ups

- **GitHub API rate limits:** The client-side fetch uses the unauthenticated GitHub API (60 requests/hour per IP). For high-traffic sites, consider a build-time fetch or a serverless proxy with a token.
- **Placeholder content:** All bio, project, social, and contact data are placeholders in `src/config/site.ts`. Replace before sharing publicly.
- **Node version:** Developed on Node v22.22.2 with Astro 5. Vercel supports Node 20.x/22.x. If you upgrade Astro, ensure Node version compatibility.
- **Single page:** The site is a single page. Add new pages under `src/pages/` if needed (Astro file-based routing).
- **Dark mode toggle:** Theme preference is stored in `localStorage` and respects `prefers-color-scheme` by default.
- **Image optimization:** Project images use native `<img>` with lazy loading. For heavy images, consider Astro's `<Image />` component.

## SEO & canonical URL

- Set your production domain in `src/config/site.ts` via `siteConfig.siteUrl` (e.g., `https://yourname.vercel.app`).
- The `BaseLayout` generates a **canonical URL** from `siteUrl` + the current path.
- Override per-page with the `canonical` prop on `BaseLayout` if needed.
- Open Graph and Twitter card tags (title, description, image, URL) are generated automatically.

## Content updates

Edit **`src/config/site.ts`** to update portfolio content in one place:

- **Identity & intro:** `name`, `role`, `tagline`, `bio`
- **About:** `about`, `skills`
- **Contact & socials:** `contactEmail`, `socialLinks`
- **Projects:** `manualProjects` (curated entries) and `githubUsername` / `githubReposLimit` (dynamic GitHub repos)
- Replace placeholder URLs/text with your own information as you customize the site.

### Maintaining projects

**Manual/curated projects** (`manualProjects` array in `src/config/site.ts`):
Each entry supports:
- `title` (string, required)
- `description` (string, required)
- `tags` (string array) – technologies shown on the card
- `repoUrl` (optional) – "View Code" link
- `demoUrl` (optional) – "Live Demo" link
- `image` (optional) – preview image path/URL
- `featured` (optional boolean) – highlights the card

To add a project, append a new object to the `manualProjects` array. To remove one, delete its entry.

**Dynamic GitHub projects** (fetched client-side):
- `githubUsername` – GitHub username to fetch repos from (default: `hbahuguna`).
- `githubPinnedRepos` – array of repository names to display (pinned repos from your GitHub profile). Update this list to change which repos appear.

Defaults applied by the fetcher:
- Fetches only the repos listed in `githubPinnedRepos`.
- Excludes **forks**, **archived**, and **private** repositories.
- Deduplicates repos already listed in `manualProjects` (by URL).
- Shows language, stars, and last-updated date.

To change filtering/sorting, edit the script in `src/components/Projects.astro`.

## Repository & commit conventions

- **Repository:** [`hbahuguna/portfolio-vercel`](https://github.com/hbahuguna/portfolio-vercel)
- **Default branch:** `main` (connected to `origin`; Vercel Git integration should deploy from `main`)
- **Commits:** Use concise [Conventional Commits](https://www.conventionalcommits.org/) where practical, e.g.
  - `chore: initialize portfolio project`
  - `feat: implement responsive navigation`
  - `fix: correct GitHub API error handling`
  - `docs: update content editing guide`

Keep commits focused per story/task and push to `main` after each completed story so deployments stay in sync.
