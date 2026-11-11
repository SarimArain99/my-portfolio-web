// Portfolio palette tokens — "Ink & Paper Rust" (1A).
// Single source of truth for surfaces that cannot read CSS, notably the
// Open Graph image (next/og renders without a stylesheet, so it cannot
// use var(--color-*) — it imports these values instead). Keep in sync
// with the @theme tokens in src/app/globals.css.
export const PALETTE = {
  paper: "#FAF7F2",
  panel: "#EFE8DC",
  surface: "#FFFFFF",
  ink: "#22201C",
  muted: "#6E675C",
  line: "#D8CDB8",
  accent: "#9A3412",
  accentDim: "#7C2D12",
  gold: "#D6A85C",
} as const;
