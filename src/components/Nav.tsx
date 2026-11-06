"use client";

import { useState } from "react";
import Link from "next/link";
import { PROFILE } from "@/lib/data";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#1f1f1f] bg-[#050505]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link href="#top" className="font-mono text-sm font-bold tracking-tight">
          <span className="text-white">M.Sarim</span>
          <span className="text-[#22c55e]">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-zinc-400 sm:flex" aria-label="Main">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="rounded-full border border-[#22c55e] px-4 py-1.5 text-[#22c55e] transition-colors hover:bg-[#22c55e] hover:text-black"
          >
            Get in touch
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md border border-[#1f1f1f] px-3 py-1.5 text-sm text-zinc-300 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#1f1f1f] px-5 py-4 sm:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-3 text-sm">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className="text-zinc-300">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`mailto:${PROFILE.email}`} className="text-[#22c55e]">
                Get in touch →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
