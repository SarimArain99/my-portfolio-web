"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { ShapeSpec } from "@/components/SwarmField";

export const BUSINESS_EVENT = "sarim:business";

const Swarm = dynamic(
  () => import("@/components/SwarmField").then((m) => m.SwarmField),
  { ssr: false },
);

/**
 * Inserts unicode thin spaces (\u2009) between letters to introduce 
 * kerning/tracking so adjacent glyph stems (like 'M', 'u', 'h') don't merge.
 */
function addGlyphTracking(word: string): string {
  return word.split("").join("\u2009");
}

export function HeroSwarm({ className = "" }: { className?: string }) {
  const [text, setText] = useState("Muhammad Sarim");
  const [isPhone, setIsPhone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const on = (e: Event) => {
      const name = (e as CustomEvent<string>).detail.trim();
      setText(name || "Muhammad Sarim");
    };
    window.addEventListener(BUSINESS_EVENT, on);
    return () => window.removeEventListener(BUSINESS_EVENT, on);
  }, []);

  // Split words into separate lines and add spacing between individual glyphs
  const words = text.trim().split(/\s+/);
  const formattedLines = words.map(addGlyphTracking);

  const shapes: ShapeSpec[] = [
    {
      kind: "text",
      lines: formattedLines,
    },
  ];

  const offset = isPhone ? { x: 0, y: -0.9 } : { x: -1.3, y: -1.75 };

  return (
    <div ref={ref} className={className}>
      <Swarm
        key={`${text}-${isPhone ? "phone" : "desktop"}`}
        className="block size-full"
        shapes={shapes}
        active={0}
        offset={offset}
        // Scaled to preserve letterform negative space
        textScale={isPhone ? 0.75 : 1.15}
        minHalfWidth={isPhone ? 2.2 : 0}
        // Lower density prevents dense letters (M, u, h, m) from over-saturating
        count={{ desktop: 4200, phone: 2200 }}
        label={`${text}, written in particles`}
        onReady={(ok) => {
          const section = ref.current?.closest("section");
          if (section) section.dataset.field = ok ? "on" : "off";
        }}
      />
    </div>
  );
}
