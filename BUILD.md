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
  the previous electric-green accent, used consistently. Typography-first, subtle
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
src/components/  (the demo component listed here was removed in the
                2026-11-06 update below)
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

1. **Accent:** the previous electric-green accent (not violet) — matches the
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

---

## Update — Muhammad's edits, 2026-11-06 (local only, not pushed/deployed)

Applied exactly as requested:

1. **Hero lines removed:** the hero line about the school software he
   wished existed (hero + metadata/OG description in `layout.tsx`) and
   the line about using Claude Code daily — both gone, grep-verified.
2. **Teacher role added:** hero line and About section now say, in plain
   words, that Muhammad is a teacher who teaches students Website
   Development using Next.js, along with AI. Also added as a Teaching
   entry in the Experience timeline. No school, course name, or student
   numbers invented for the teaching.
3. **Experience stats strip added** (hero, prominent): 4 Years of
   experience in Web Development; 3 Years of experience in Agentic AI
   Development; 2 Years of Teaching Website Development and AI — exactly
   as Muhammad stated them.
4. **Agent demo deleted completely:** the demo component removed from
   `page.tsx`, its file deleted, no mock-run text remains anywhere.
5. **Parenthetical suffix removed everywhere:** the gender suffix
   removed from the college name in `page.tsx`, `layout.tsx` metadata,
   `data.ts` (ICLP description), `opengraph-image.tsx`, README — zero
   remaining occurrences, grep-verified.
6. **Old-system text removed completely:** both paragraphs about the
   school running on the old system and its bugs are gone, with no
   paraphrase left.
   About is rewritten around the School Admin role and teaching, with
   one short neutral line: "I'm also building a multi-school management
   system — software for schools, built from real experience running one."
7. **UI/UX polish:** accent changed from the previous electric-green
   accent to
   refined sea-green `#2dd4a7` (dim `#14b8a6`), used consistently across
   the site, favicon and OG image. Added staggered hero entrance,
   scroll-reveal sections (`src/components/Reveal.tsx`,
   IntersectionObserver, reduced-motion respected), hover lifts on
   project cards, smooth anchor scrolling, scroll-spy nav with
   active-section underline, larger display headings with tighter
   tracking and section eyebrows with a gradient rule, and a polished
   stats strip. No stock photos, fake screenshots, or invented content.
8. **Professional essentials added:** footer with copyright + back-to-top
   link, visible email/GitHub/Instagram/LinkedIn in Contact, and a
   "Currently" line (School Admin · Teaching Website Development & AI ·
   Building a multi-school management system). No contact form,
   testimonials, clients, or awards added.
9. **Photo replaced:** About now uses `public/profile.jpg` — the photo
   Muhammad uploaded on 2026-11-06 (verified JPEG, 720×1207, 93 KB),
   replacing `sa.jpg`. No generated or other photo of him is used.
   **Note for the push:** `profile.jpg` is a new binary file and cannot
   go through the GitHub snapshot push (`push_files` is UTF-8 only) — it
   must be uploaded to the repo separately when pushing.

## Verification (this update)

- `npm run build` — **passes** (Next.js 16.4.5, compiled in 7.9s, 7/7 static
  pages generated; one build failure fixed first: the STATS insert in
  `data.ts` had overwritten the `export type Project = {` line — restored
  it and the build passed).
- Production server on port 3101 + curl: homepage **HTTP 200, 64,858
  bytes**, contains "Muhammad Sarim", "4 Years", "3 Years", "2 Years",
  teaching text ("I teach students Website Development using Next.js,
  along with AI"), "Currently", "Back to top", and the new photo path
  `/profile.jpg`. `/sitemap.xml`, `/robots.txt`, `/opengraph-image`,
  `/icon.svg` all **200**. Server stopped afterwards.
- Grep counts (rendered homepage): removed hero phrase 0, removed
  daily-use phrase 0, parenthetical suffix 0, old-system name 0, agent
  demo component/name 0, mock-run text 0, old photo path `sa.jpg` 0.
- Grep counts (project source `src/` + `README.md` + `BUILD.md`):
  all six removed strings — 0 occurrences each.
