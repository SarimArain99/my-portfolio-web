"use client";

import { useEffect } from "react";

// Section entrances: marks [data-reveal] elements as in view once.
// Content stays visible without JS and under reduced motion (see globals.css).
export function Reveals() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting && e.boundingClientRect.top > 0) continue;
          e.target.setAttribute("data-in", "");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px 15% 0px" },
    );
    document.documentElement.classList.add("js");
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
