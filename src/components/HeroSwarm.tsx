"use client";

import { useEffect, useRef, useState } from "react";
import { FieldCanvas } from "@/components/field-canvas";
import { person } from "@/content/site";
import { wordLines } from "@/lib/field-math";

export const BUSINESS_EVENT = "sarim:business";

interface HeroSwarmProps {
  className?: string;
  /** Primary accent color for the particle field (e.g., "#00E5FF", "#6366F1", or CSS var) */
  primaryColor?: string;
  /** Secondary highlight/ambient color */
  secondaryColor?: string;
}

export function HeroSwarm({
  className = "",
  primaryColor = "#38bdf8", // Replace with your brand primary hex/var
  secondaryColor = "#818cf8", // Replace with your brand secondary hex/var
}: HeroSwarmProps) {
  // Default fallback if person.wordmark is not set to your name
  const defaultText = person?.wordmark || "Muhammad Sarim";
  const [text, setText] = useState(defaultText);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = (e: Event) =>
      setText((e as CustomEvent<string>).detail?.trim() || defaultText);

    window.addEventListener(BUSINESS_EVENT, on);
    return () => window.removeEventListener(BUSINESS_EVENT, on);
  }, [defaultText]);

  // Ensure "Muhammad" and "Sarim" sit cleanly on two lines if horizontal space is tight,
  // or let wordLines break by word boundaries to prevent character collision.
  const parsedLines = wordLines(text).length > 0 ? wordLines(text) : [text];

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={
        {
          "--field-color-primary": primaryColor,
          "--field-color-secondary": secondaryColor,
        } as React.CSSProperties
      }
    >
      <FieldCanvas
        className="block size-full"
        shape={{
          kind: "text",
          lines: parsedLines,
        }}
        label={`${text}, written in particles`}
        focus="[data-hero-focus]"
        // Reduced from 0.78 to ~0.62: prevents character merging & overlapping glyphs
        textScale={0.62}
        // If your FieldCanvas supports direct color/palette props:
        color={primaryColor}
        secondaryColor={secondaryColor}
        input="section"
        onReady={(ok) => {
          const section = ref.current?.closest("section");
          if (section) section.dataset.field = ok ? "on" : "off";
        }}
      />
    </div>
  );
}
