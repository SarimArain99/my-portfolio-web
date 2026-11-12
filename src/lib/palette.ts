// Portfolio palette tokens, Signal Amber.
// Single source of truth for surfaces that cannot read CSS, notably the
// Open Graph image (next/og renders without a stylesheet, so it cannot
// use var(--color-*) — it imports these values instead). Keep in sync
// with the @theme tokens in src/app/globals.css.
export const PALETTE = {
  paper: "#141210",
  panel: "#1C1813",
  surface: "#211D19",
  ink: "#F5EFE6",
  muted: "#C9BBA6",
  line: "#3D362C",
  accent: "#F2A33C",
  accentDim: "#C9832A",
  accentInk: "#141210",
  gold: "#F2A33C",
} as const;
