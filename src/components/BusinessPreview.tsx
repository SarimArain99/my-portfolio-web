"use client";

import { useEffect, useState } from "react";
import { BUSINESS_EVENT } from "@/components/HeroSwarm";
import { LIVE } from "@/lib/data";

// The live demo: type a business, see the first screen and chat greeting
// Sarim would start from, and send it to him as a prefilled email.
// The example shown is real: Islamic Science College, the school Sarim
// administers and built the ICLP portal for — no invented businesses.
export function BusinessPreview() {
  const [name, setName] = useState(LIVE.placeholder);
  const [touched, setTouched] = useState(false);
  const display = name.trim() || LIVE.placeholder;

  useEffect(() => {
    if (!touched) return;
    const t = setTimeout(
      () =>
        window.dispatchEvent(
          new CustomEvent(BUSINESS_EVENT, { detail: name }),
        ),
      300,
    );
    return () => clearTimeout(t);
  }, [name, touched]);

  const choose = (value: string) => {
    setTouched(true);
    setName(value);
  };

  const email =
    `mailto:sarimarain99@gmail.com?subject=${encodeURIComponent(`Website for ${display}`)}` +
    `&body=${encodeURIComponent(
      `Hi Sarim,\n\nI run ${display}. I would like a website and an AI assistant like the preview on your site.\n\nA bit about us:\n\n`,
    )}`;

  return (
    <form
      action={email}
      method="get"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = email;
      }}
    >
      <label htmlFor="business" className="sr-only">
        Your business name
      </label>
      <div data-ui className="live-input-wrap">
        <input
          id="business"
          value={name}
          onChange={(e) => choose(e.target.value)}
          onFocus={(e) => {
            // The field starts with the demo name as its value; select
            // it on first focus so typing replaces it instead of
            // appending to it.
            if (!touched) e.target.select();
          }}
          maxLength={40}
          autoComplete="organization"
          spellCheck={false}
          className="live-input text-display leading-none"
        />
      </div>

      <div data-ui className="live-answer mt-12" aria-live="polite">
        <p className="text-small">Demo preview</p>
        <div className="live-site">
          <p className="text-lead font-medium">{display}</p>
          <p className="mt-1 text-body">
            Admissions, timetable, attendance.
          </p>
          <span className="live-site-btn text-small">Visit the portal</span>
        </div>
        <p className="live-chat text-body">
          Hi, welcome to {display}. How can I help: admissions, timetable, or attendance?
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <button type="submit" className="btn btn-ink">
          Ask Sarim to build this
        </button>
        <p className="flex flex-wrap gap-x-5 gap-y-2 text-body">
          {LIVE.examples.map((ex) => (
            <button key={ex} type="button" onClick={() => choose(ex)} className="link">
              {ex}
            </button>
          ))}
        </p>
      </div>
    </form>
  );
}
