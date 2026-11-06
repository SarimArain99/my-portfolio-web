# Muhammad Sarim — Portfolio (Rebuild)

A complete rebuild of Muhammad Sarim's portfolio, replacing the stale
2024 front-end-only site (`SarimArain99/my-portfolio-web`).

## Direction

Direction A from `~/workspace/portfolio-research.md` — **"Dark Minimal +
One AI Moment"** (Brittany Chiang × Paco Coursey): near-black `#050505`
background, white type, one electric-green accent (`#22c55e`),
typography-first, subtle animations only.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- No database, no API routes, no form backend — contact is via `mailto:` links

## Sections

- **Hero** — name, one-line value prop, CTAs, plus a client-side mock
  agent demo (typed terminal, 3 steps, no API calls)
- **Featured Projects** — exactly 4: Hackathon Todo Evolution, Physical AI
  & Humanoid Robotics, Data Encryption System, Crafted Visions
- **More projects** — ICLP only
- **About** — the School Admin story: 1,195 students, RISE SMS bugs, and
  building a better school system
- **Experience** — School Admin; GIAIC Cloud Applied Generative AI
  Engineering; DigiSkills freelancing certification
- **Contact** — email, GitHub, Instagram, LinkedIn (no form, no hardcoded keys)

## Content rules

Only verified facts are used. No invented jobs, clients, testimonials,
numbers or awards. Live/GitHub links appear only where verified:
Data Encryption System has a GitHub link and **no** live link (none was
verified). The 15 dead projects from the old site are not listed.

Photos `public/sa.jpg`, `public/sarim2.jpg`, `public/sarim3.jpg` are
Muhammad's own photos reused from the old repo
(`SarimArain99/my-portfolio-web`, public files). Only `sa.jpg` is shown
on the page (About section); the other two are kept as assets.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start    # serves the production build
```

## Deploy

Not deployed from this folder. The live site is
https://portfoliosarim.vercel.app (Vercel project `portfolio.sarim`,
repo `SarimArain99/my-portfolio-web`). Pushing this rebuild to GitHub
and deploying it is a separate, user-approved step.
