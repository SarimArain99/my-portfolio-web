"use client";

import dynamic from "next/dynamic";
import type { ShapeSpec } from "@/components/SwarmField";

const Swarm = dynamic(
  () => import("@/components/SwarmField").then((m) => m.SwarmField),
  { ssr: false },
);

/**
 * FieldCanvas: the particle field behind a shape, built on SwarmField.
 *
 * The prop names match the friend's FieldCanvas this was refactored
 * from (shape, label, focus, textScale, input, onReady) — and like
 * the friend's, there are no colour props: colours come from the
 * theme, here the Signal Amber palette baked into SwarmField
 * (cream #F5EFE6, amber #F2A33C).
 *
 * Two house rules override the passed values:
 *
 * - `textScale`: the field uses the sizing that renders the name
 *   clearly — 1.4 on desktop, 0.8 on phones with the camera pulled
 *   back until the line fits.
 * - `focus`: the shape is shifted into the `[data-hero-focus]` cell
 *   with the same offset the hero used before (left and below the
 *   headline on desktop, centred and lower on phones), instead of
 *   sitting dead-centre over the headline.
 * - `input`: the pointer is tracked on the whole window, so a mouse
 *   or finger anywhere on the page leans the field.
 *
 * The field remounts when the shape changes (the demo rewrites the
 * name), because the targets are sampled once per mount.
 */
export function FieldCanvas({
  className = "",
  shape,
  label = "Particle field",
  onReady,
}: {
  className?: string;
  shape: ShapeSpec;
  label?: string;
  /** Focus-cell selector, e.g. "[data-hero-focus]". Positioning into
      the cell is done with the offset below. */
  focus?: string;
  /** Accepted for API compatibility; the house sizing applies. */
  textScale?: number;
  /** Accepted for API compatibility; the pointer is window-wide. */
  input?: string;
  onReady?: (ok: boolean) => void;
}) {
  const phone =
    typeof window !== "undefined" && window.innerWidth < 900;
  const offset =
    typeof window !== "undefined" && window.innerWidth >= 900
      ? { x: -1.3, y: -1.75 }
      : { x: 0, y: -0.9 };
  // Remount key: a new name (or mark) rebuilds the targets.
  const shapeKey =
    shape.kind === "text" ? shape.lines.join(" ") : shape.kind;

  return (
    <Swarm
      key={shapeKey}
      className={className}
      shapes={[shape]}
      active={0}
      offset={offset}
      textScale={phone ? 0.8 : 1.4}
      // Phones: pull the camera back until 2.4 world units fit
      // either side of centre, so the one-line name fits with
      // margin at the largest readable size.
      minHalfWidth={phone ? 2.4 : 0}
      count={{ desktop: 7000, phone: 3000 }}
      label={label}
      onReady={onReady}
    />
  );
}
