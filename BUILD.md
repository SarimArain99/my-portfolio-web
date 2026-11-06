# Build summary — Muhammad Sarim portfolio rebuild

**Built:** 2026-11-06, local only. **Not pushed to GitHub, not deployed to Vercel**
(parent agent to show to Muhammad first).

## What was built

A complete single-page Next.js portfolio in `~/workspace/portfolio-rebuild/`,
following Direction A from `~/workspace/portfolio-research.md`
("Dark Minimal + One AI Moment", Brittany Chiang × Paco Coursey).

- **Stack:** Next.js 16.4.5 (App Router) + React 19.3 + TypeScript 5,
  Tailwind CSS v4. Scaffolded with `create-next-app@latest`.
- **Design:** near-black `#050505` background, white type, ONE accent —
  electric green `#22c55e`, used consistently. Typography-first, subtle
  fade-up animation only, `prefers-reduced-motion` respected.
- **Sections:** Hero (name, value prop, "View work" + "Get in touch" CTAs,
  interactive agent demo) → Featured Projects (exactly 4) → More projects
  (ICLP) → About → Experience timeline → Contact (mailto links, no form).

## Files

```
src/app/layout.tsx          metadata / OG tags, nav + footer shell
src/app/page.tsx            all sections (single page)
src/app/globals.css         Tailwind v4 theme, accent, animations
src/app/sitemap.ts          /sitemap.xml → portfoliosarim.vercel.app
src/app/robots.ts           /robots.txt
src/app/icon.svg            "MS" favicon (green on near-black)
src/app/opengraph-image.tsx OG image (1200×630, generated)
src/components/Nav.tsx     sticky nav + mobile menu
src/components/Footer.tsx  social links, copyright
src/components/AgentDemo.tsx  typed terminal mock, 3-step mock agent task,
                               client-side only, no API calls
src/lib/data.ts             profile + project data (single source of truth)
public/sa.jpg               Muhammad's photo, shown in About
public/sarim2.jpg, sarim3.jpg  his photos, kept as assets (not shown)
README.md                   rebuild notes
BUILD.md                    this file
```

## Verification (all passed)

- `npm install` — clean (361 packages).
- `npm run build` — **passes**. One fix needed during the build:
  `opengraph-image.tsx` originally set `runtime = "edge"`, which Next 16
  rejects as deprecated/incompatible with `cacheComponents`; removed it
  (default Node runtime) and the build passed. Routes: `/`, `/icon.svg`,
  `/opengraph-image`, `/robots.txt`, `/sitemap.xml` — all static.
- `npm run start -p 3100` + curl: homepage **200**, contains
  "Muhammad Sarim", all 4 featured projects, email and Instagram handle.
  `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/icon.svg` all **200**.
  Server stopped afterwards.

## How to run

```bash
cd ~/workspace/portfolio-rebuild
npm install
npm run dev     # http://localhost:3000
npm run build
npm run start   # production build, default port 3000
```

## Content decisions made

1. **Accent:** electric green `#22c55e` (not violet) — matches the
   Brittany Chiang model and reads as "AI / terminal" against near-black.
2. **Photos:** the 3 photos from the old repo (`SarimArain99/my-portfolio-web`,
   `public/sa.jpg` etc.) were fetched from the public repo and reused —
   no generated/fake photos of Muhammad. Only `sa.jpg` is displayed
   (About); the other two are kept in `public/` as assets.
3. **Project cards:** no real screenshots were available, so cards use a
   CSS mock-browser-chrome header with project initials — deliberately
   not fake screenshots.
4. **Data Encryption System:** GitHub link only, **no live link** — none
   was verified. Do not invent one.
5. **Experience dates:** no start/end dates are shown — none were verified.
   School Admin is marked "Now"; GIAIC is phrased as in the old site
   ("currently pursuing Cloud Applied Generative AI Engineering under GIAIC");
   DigiSkills as "Certified in Freelancing under DigiSkills".
6. **No contact form:** mailto links only, per brief — the old site's
   hardcoded Web3Forms key was NOT copied or reused.
7. **No invented content:** no jobs, clients, testimonials, numbers or
   awards beyond the verified facts (1,195 students, the 4 featured
   projects + ICLP, the 8 skill tags shown on projects).
8. **Old site not copied:** none of the 15 dead projects, the old
   Instagram handle (`sarim_arain`), the orange palette, or the FAQs
   appear anywhere in the rebuild.
