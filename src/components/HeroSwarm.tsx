"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { ShapeSpec } from "@/components/SwarmField";

export const BUSINESS_EVENT = "sarim:business";

const Swarm = dynamic(
  () => import("@/components/SwarmField").then((m) => m.SwarmField),
  { ssr: false },
);

export function HeroSwarm({ className = "" }: { className?: string }) {
  const [text, setText] = useState("Muhammad Sarim");
  const [isPhone, setIsPhone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Responsive check that won't cause SSR/hydration mismatches
  useEffect(() => {
    const checkPhone = () => setIsPhone(window.innerWidth < 900);
    checkPhone();
    window.addEventListener("resize", checkPhone);
    return () => window.removeEventListener("resize", checkPhone);
  }, []);

  useEffect(() => {
    const on = (e: Event) => {
      const name = (e as CustomEvent<string>).detail.trim();
      setText(name || "Muhammad Sarim");
    };
    window.addEventListener(BUSINESS_EVENT, on);
    return () => window.removeEventListener(BUSINESS_EVENT, on);
  }, []);

  // Split into separate lines if multiple words exist to prevent merging
  const lines = text.trim().split(/\s+/);
  const shapes: ShapeSpec[] = [{ kind: "text", lines }];

  const offset = isPhone ? { x: 0, y: -0.9 } : { x: -1.3, y: -1.75 };

  return (
    <div ref={ref} className={className}>
      <Swarm
        key={`${text}-${isPhone ? "phone" : "desktop"}`}
        className="block size-full"
        shapes={shapes}
        active={0}
        offset={offset}
        // Scaled appropriately for multi-line text
        textScale={isPhone ? 0.75 : 1.1}
        minHalfWidth={isPhone ? 2.2 : 0}
        // Slightly reduced density prevents particles from blurring together
        count={{ desktop: 4500, phone: 2400 }}
        label={`${text}, written in particles`}
        onReady={(ok) => {
          const section = ref.current?.closest("section");
          if (section) section.dataset.field = ok ? "on" : "off";
        }}
      />
    </div>
  );
}
