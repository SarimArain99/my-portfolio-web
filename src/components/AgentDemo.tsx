"use client";

import { useEffect, useRef, useState } from "react";

// Client-side mock only: no API calls, no real agent runs.
// It types out a 3-step mock agent task so visitors can see
// what "Agentic AI" means in 10 seconds.
const STEPS = [
  { label: "1 · Understand the request", detail: "Plan a school timetable for 1,195 students, 40 teachers, 6 days." },
  { label: "2 · Draft the plan", detail: "Assigning classes, teachers and rooms — checking for clashes as it goes." },
  { label: "3 · Verify & finish", detail: "0 clashes found. Timetable ready — saved as a draft for review." },
];

export default function AgentDemo() {
  const [running, setRunning] = useState(false);
  const [stepIndex, setStepIndex] = useState(-1);
  const [typed, setTyped] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  function run() {
    if (running) return;
    setRunning(true);
    setStepIndex(0);
    setTyped("");
    let step = 0;
    let char = 0;
    const tick = () => {
      const detail = STEPS[step].detail;
      if (char < detail.length) {
        char += 1;
        setTyped(detail.slice(0, char));
        timer.current = setTimeout(tick, 18);
      } else if (step < STEPS.length - 1) {
        timer.current = setTimeout(() => {
          step += 1;
          setStepIndex(step);
          char = 0;
          setTyped("");
          tick();
        }, 450);
      } else {
        setRunning(false);
      }
    };
    tick();
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#0c0c0c] text-left shadow-2xl">
      <div className="flex items-center justify-between border-b border-[#1f1f1f] px-4 py-3">
        <p className="font-mono text-xs text-zinc-400">
          <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
          agent-demo — mock run, client-side only
        </p>
        <button
          type="button"
          onClick={run}
          disabled={running}
          className="rounded-full bg-[#22c55e] px-4 py-1.5 font-mono text-xs font-bold text-black transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {running ? "Running…" : stepIndex >= 0 ? "Run again" : "Run agent ▸"}
        </button>
      </div>
      <div className="min-h-[180px] px-4 py-4 font-mono text-sm leading-relaxed">
        <p className="text-zinc-500">
          <span className="text-[#22c55e]">$</span> agent run --task &quot;plan-school-timetable&quot;
        </p>
        {stepIndex < 0 && (
          <p className="mt-4 text-zinc-400">
            Press <span className="text-white">Run agent</span> to watch a mock
            agent task in 3 steps. Nothing leaves your browser — this is a
            typed demo, not a live AI call.
          </p>
        )}
        {STEPS.map((s, i) => (
          <div key={s.label} className={i <= stepIndex ? "mt-4" : "hidden"}>
            <p className="text-[#22c55e]">{s.label}</p>
            <p className="text-zinc-300">
              {i === stepIndex ? typed : s.detail}
              {i === stepIndex && running && <span className="animate-blink">▌</span>}
            </p>
            {i === stepIndex && !running && i === STEPS.length - 1 && (
              <p className="mt-3 text-zinc-500">✓ done — 3 steps, 0 clashes, 1 draft ready.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
