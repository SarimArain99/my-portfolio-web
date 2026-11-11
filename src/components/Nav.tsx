"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { href: "#work", label: "Work", id: "work" },
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-nav" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="font-mono text-sm font-bold tracking-tight">
          <span className="text-ink">M.Sarim</span>
          <span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted sm:flex" aria-label="Main">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative pb-1 transition-colors hover:text-accent ${
                active === l.id ? "text-ink" : ""
              }`}
            >
              {l.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 ${
                  active === l.id ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-full border border-accent px-4 py-1.5 text-accent transition-colors hover:bg-accent hover:text-accent-ink"
          >
            Get in touch
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md border border-line px-3 py-1.5 text-sm text-ink sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line px-5 py-4 sm:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={active === l.id ? "text-accent" : "text-muted"}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${PROFILE.email}`} className="text-accent">
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
