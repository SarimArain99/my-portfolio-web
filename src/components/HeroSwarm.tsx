"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { ShapeSpec } from "@/components/SwarmField";

export const BUSINESS_EVENT = "sarim:business";

const Swarm = dynamic(
  () => import("@/components/SwarmField").then((m) => m.SwarmField),
  { ssr: false },
);

const MARKS: ShapeSpec[] = [
  { kind: "mark", id: "clock" },
  { kind: "mark", id: "lock" },
  { kind: "mark", id: "book" },
];

/**
 * The hero swarm: writes "Muhammad Sarim" in particles, then rebuilds
 * itself into the mark of each product in turn. Typing a business name
 * in the live demo chapter rewrites the swarm to that name instead.
 * Without WebGL the section gets data-field="off" and shows the
 * wordmark as text.
 */
export function HeroSwarm({ className = "" }: { className?: string }) {
  const [text, setText] = useState("Muhammad Sarim");
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = (e: Event) => {
      const name = (e as CustomEvent<string>).detail.trim();
      setText(name || "Muhammad Sarim");
      setActive(0);
    };
    window.addEventListener(BUSINESS_EVENT, on);
    return () => window.removeEventListener(BUSINESS_EVENT, on);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % (MARKS.length + 1)),
      5200,
    );
    return () => clearInterval(t);
  }, []);

  const shapes: ShapeSpec[] = [{ kind: "text", lines: [text] }, ...MARKS];
  // The swarm canvas is full-bleed behind the hero; the focus cell (the
  // wordmark area) sits left and below the headline on desktop, centred
  // and lower on phones, so the shape is shifted into that cell.
  const offset =
    typeof window !== "undefined" && window.innerWidth >= 900
      ? { x: -1.9, y: -1.75 }
      : { x: 0, y: -0.9 };

  return (
    <div ref={ref} className={className}>
      <Swarm
        className="block size-full"
        shapes={shapes}
        active={active}
        offset={offset}
        count={{ desktop: 5500, phone: 2500 }}
        label={`${text}, written in particles`}
        onReady={(ok) => {
          const section = ref.current?.closest("section");
          if (section) section.dataset.field = ok ? "on" : "off";
        }}
      />
    </div>
  );
}
