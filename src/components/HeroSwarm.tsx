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
 * The hero swarm: writes "Muhammad Sarim" in particles and leaves it
 * there, in one place. No morphing through the product marks, no
 * rotation: the name stays put and stays readable. Typing a business
 * name in the live demo chapter rewrites the swarm to that name instead.
 * Without WebGL the section gets data-field="off" and shows the
 * wordmark as text.
 */
export function HeroSwarm({ className = "" }: { className?: string }) {
  const [text, setText] = useState("Muhammad Sarim");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = (e: Event) => {
      const name = (e as CustomEvent<string>).detail.trim();
      setText(name || "Muhammad Sarim");
    };
    window.addEventListener(BUSINESS_EVENT, on);
    return () => window.removeEventListener(BUSINESS_EVENT, on);
  }, []);

  // One shape only: the name. It never cycles away, so it is always
  // there to read.
  const shapes: ShapeSpec[] = [{ kind: "text", lines: [text] }];
  // The swarm canvas is full-bleed behind the hero; the focus cell (the
  // wordmark area) sits left and below the headline on desktop, centred
  // and lower on phones, so the shape is shifted into that cell.
  const offset =
    typeof window !== "undefined" && window.innerWidth >= 900
      ? { x: -1.3, y: -1.75 }
      : { x: 0, y: -0.9 };

  return (
    <div ref={ref} className={className}>
      <Swarm
        className="block size-full"
        shapes={shapes}
        active={0}
        offset={offset}
        count={{ desktop: 7000, phone: 3000 }}
        label={`${text}, written in particles`}
        onReady={(ok) => {
          const section = ref.current?.closest("section");
          if (section) section.dataset.field = ok ? "on" : "off";
        }}
      />
    </div>
  );
}
