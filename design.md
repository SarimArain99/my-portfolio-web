# Design — Muhammad Sarim portfolio (editorial chapters)

Ahsan-style editorial chapters in the Signal Amber palette. This file
locks the house style so later pages inherit it instead of re-arguing it.

## Shape

- Chapters with alternating full-bleed grounds: night `#141210`,
  paper `#F5EFE6`, amber `#F2A33C`, grey. Content caps at 1520px on
  wide screens; grounds always bleed edge to edge.
- One idea per chapter. No cards, no grids of projects: each of the
  three featured projects (Dayline, Physical AI book, CipherVault)
  is its own full chapter with a sticky particle stage.
- Square corners everywhere. One button style (square, amber fill,
  dark text, 48px); `.btn-ink` is its outline inverse, used only
  where amber cannot sit on amber. Five type steps only, headlines
  two lines max, section gap 160px desktop / 96px phone.
- Motion only transform + opacity, ease-out, entrances heading →
  text → picture, 70ms stagger, rise 24px, 280ms, once. Reduced
  motion gets a still frame. Content is visible with JavaScript off:
  reveal hiding is scoped under `html.js`.
- The particle swarm is plain three.js, DPR ≤ 1.5, one hero canvas
  and one work stage. Shapes are sampled from outlines, one point
  per particle, isotropic mapping — filled glyphs sample into a
  solid mass, and independent x/y sampling smears a shape into its
  bounding box. The hero wordmark is the name, in one place, always:
  it never cycles or rotates; its particles only lean gently toward
  the pointer and warm to amber near it — the pointer maps to its true
  world position, so the reaction sits exactly under the cursor. On
  phones the name stays one line and the camera pulls back until it
  fits, so the letters are as large as the screen allows; the field
  runs live there too, driven by a small, slow drift plus finger
  drags, weak enough that the name still settles and reads. The static
  dot poster is only for missing WebGL or reduced motion, where the
  wordmark shows as text.

## Waived Hallmark reflex gates (on the record in `src/app/globals.css`)

- **39b** — the demo business name input is display type by design;
  its hit target exceeds 44px. The small text links in the same
  finding got a 44px hit area.
- **59** — hero and work share the night ground and flow
  continuously; the hero's own bottom padding is the separation.
- **77** — contact is a narrow centred 560px form by design; its
  mass is the form itself.
- **26b** — the demo submit is never disabled and carries no
  aria-disabled; there is no disabled state to style.

## Facts that must not be invented

No prices, testimonials, client logos, metrics or reviews. Services
use scoped-quote language only. Only the three featured projects
above; Crafted Visions is not showcased. ICLP appears once, as a
secondary row in the index.
