"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BookCover, VaultDiagram } from "@/components/ProjectVisuals";
import { FEATURED_PROJECTS } from "@/lib/data";
import type { ShapeSpec } from "@/components/SwarmField";

const Swarm = dynamic(
  () => import("@/components/SwarmField").then((m) => m.SwarmField),
  { ssr: false },
);

const BULLETS: Record<string, string[]> = {
  Dayline: [
    "Five phases, in-memory to agent-driven",
    "AI assistant creates tasks from chat",
    "History saved per user in Neon",
  ],
  "Physical AI & Humanoid Robotics": [
    "RAG over 491 chunks, chapter and week citations",
    "Seven languages, browser-voice Listen",
    "Level rewrites cached per page",
  ],
  CipherVault: [
    "AES-256-GCM in the browser, keys never leave the device",
    "File encrypt and decrypt, plus a password generator",
    "Share links expire in 24 hours, after 5 views",
  ],
};

const LEADS: Record<string, string> = {
  Dayline:
    "Hackathon Todo Evolution, rebuilt in five phases into an AI agent system.",
  "Physical AI & Humanoid Robotics":
    "An online book on Physical AI and humanoid robotics, and how AI moves into real robots.",
  CipherVault:
    "A zero-knowledge vault that encrypts in the browser first, before anything is stored.",
};

const MARKS: ShapeSpec[] = [
  { kind: "mark", id: "clock" },
  { kind: "mark", id: "book" },
  { kind: "mark", id: "lock" },
];

const DISPLAY: Record<string, string> = {
  Dayline: "Dayline",
  "Physical AI & Humanoid Robotics": "Physical AI",
  CipherVault: "CipherVault",
};

/**
 * Featured work: the particle swarm stays in view and rebuilds itself
 * into the mark of whichever product is being read; the column beside
 * it scrolls. One full chapter per product, no cards, no grid.
 */
export function WorkScene() {
  const [active, setActive] = useState(0);
  const panels = useRef<(HTMLElement | null)[]>([]);
  const stage = useRef<HTMLDivElement>(null);
  const products = FEATURED_PROJECTS;

  useEffect(() => {
    const phone = window.matchMedia("(max-width: 899px)");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([e]) => {
      clearInterval(timer);
      if (e.isIntersecting && phone.matches && !reduced) {
        timer = setInterval(
          () => setActive((a) => (a + 1) % products.length),
          3200,
        );
      }
    });
    if (stage.current) io.observe(stage.current);
    return () => {
      io.disconnect();
      clearInterval(timer);
    };
  }, [products.length]);

  useEffect(() => {
    if (window.matchMedia("(max-width: 899px)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    panels.current.forEach((p) => p && io.observe(p));
    return () => io.disconnect();
  }, []);

  const current = products[active];

  return (
    <div className="work-grid">
      <div ref={stage} className="work-stage">
        <Swarm
          className="block size-full"
          shapes={MARKS}
          active={active}
          count={{ desktop: 7200, phone: 2800 }}
          label={`The ${current.title} mark, drawn in particles`}
        />
        <p className="work-stage-name text-body text-night-muted" aria-hidden>
          {current.title}
        </p>
      </div>

      <div className="work-column">
        {products.map((p, i) => (
          <article
            key={p.title}
            ref={(el) => {
              panels.current[i] = el;
            }}
            data-index={i}
            data-reveal
            className="work-panel"
          >
            <h3
              className="text-head"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              {DISPLAY[p.title] ?? p.title}
            </h3>
            <p
              className="text-lead mt-6 max-w-[34ch]"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              {LEADS[p.title]}
            </p>
            <ul
              className="mt-6 max-w-[52ch] space-y-2 text-body text-night-muted"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              {(BULLETS[p.title] ?? []).map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div
              className="mt-8"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              {p.visual.kind === "screenshot" && "src" in p.visual ? (
                <Image
                  src={p.visual.src}
                  alt={p.visual.alt}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="w-full"
                />
              ) : p.visual.kind === "cover" ? (
                <div className="flex justify-start">
                  <div className="h-[420px] w-auto">
                    <BookCover />
                  </div>
                </div>
              ) : (
                <div className="max-w-[560px]">
                  <VaultDiagram />
                </div>
              )}
            </div>
            <p
              className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-body"
              style={{ "--i": 4 } as React.CSSProperties}
            >
              {p.live && (
                <a
                  href={p.live}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live site
                  <span className="sr-only"> for {p.title} (opens in a new tab)</span>
                </a>
              )}
              <a
                href={p.github}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
                <span className="sr-only"> for {p.title} (opens in a new tab)</span>
              </a>
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
