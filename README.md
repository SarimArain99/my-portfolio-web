# Muhammad Sarim — Portfolio (Rebuild)

A complete rebuild of Muhammad Sarim's portfolio, replacing the stale
2024 front-end-only site (`SarimArain99/my-portfolio-web`).

## Direction

Direction A from `~/workspace/portfolio-research.md` — **"Dark Minimal"**
(Brittany Chiang × Paco Coursey): near-black `#050505` background, white
type, one sea-green accent (`#2dd4a7`, dim `#14b8a6`), typography-first,
with staggered hero entrance, scroll-reveal sections, hover lifts on
project cards, and a scroll-spy nav with active-section underline.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- No database, no API routes, no form backend — contact is via `mailto:` links

## Sections

- **Hero** — name, one-line value prop, teacher role, CTAs, a "Currently"
  line, and an experience stats strip (4 Years Web Development, 3 Years
  Agentic AI Development, 2 Years Teaching Website Development and AI)
- **Featured Projects** — exactly 4: Dayline (built as the Hackathon Todo
  Evolution project and renamed Dayline), Physical AI
  & Humanoid Robotics, Data Encryption System, Crafted Visions
- **More projects** — ICLP only
- **About** — School Admin at Islamic Science College (1,195 students),
  teacher of Website Development with Next.js and AI, and building a
  multi-school management system
- **Experience** — School Admin; Teacher of Website Development & AI;
  GIAIC Cloud Applied Generative AI Engineering; DigiSkills freelancing
  certification
- **Contact** — email, GitHub, Instagram, LinkedIn (no form, no hardcoded keys)

## Content rules

Only verified facts are used. No invented jobs, clients, testimonials,
numbers or awards. Live/GitHub links appear only where verified:
Data Encryption System has a GitHub link and **no** live link (none was
verified). The 15 dead projects from the old site are not listed.

The photo shown in About is `public/profile.jpg` — the photo Muhammad
uploaded on 2026-11-06. It is a new binary file: it cannot go through
the GitHub snapshot push (`push_files` is UTF-8 only), so it must be
uploaded to the repo separately when pushing. The older photos
`public/sa.jpg`, `public/sarim2.jpg`, `public/sarim3.jpg` are Muhammad's
own photos reused from the old repo and are kept as assets (not shown).

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
