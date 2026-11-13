"use client";

import { useEffect, useRef, useState } from "react";
import { FieldCanvas } from "@/components/field-canvas";
import { person } from "@/content/site";
import { wordLines } from "@/lib/field-math";

export const BUSINESS_EVENT = "sarim:business";

/**
 * The hero's particle swarm: writes "Muhammad Sarim" (or whatever the
 * visitor types in the demo) into the hero's focus cell
 * (`[data-hero-focus]`). Without WebGL the section gets
 * `data-field="off"` and shows the wordmark as text instead.
 *
 * Structure follows the friend's HeroSwarm it was refactored from:
 * no colour props — the dots stay Signal Amber, the field's own
 * palette, not a prop. The event is Sarim's own ("sarim:business"),
 * and the name stays one line on phones.
 */
export function HeroSwarm({ className = "" }: { className?: string }) {
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

  const parsedLines = wordLines(text).length > 0 ? wordLines(text) : [text];

  return (
    <div ref={ref} className={className}>
      <FieldCanvas
        className="block size-full"
        shape={{
          kind: "text",
          lines: parsedLines,
        }}
        label={`${text}, written in particles`}
        focus="[data-hero-focus]"
        // The friend's value; FieldCanvas applies the house sizing
        // that renders the name clearly.
        textScale={0.78}
        input="section"
        onReady={(ok) => {
          const section = ref.current?.closest("section");
          if (section) section.dataset.field = ok ? "on" : "off";
        }}
      />
    </div>
  );
}
