"use client";

import { useEffect, useRef, useState } from "react";

export type ShapeSpec =
  | { kind: "text"; lines: string[] }
  | { kind: "mark"; id: "clock" | "lock" | "book" };

/**
 * Plain three.js particle field. Particles are sampled from a shape drawn
 * on an offscreen canvas (a wordmark, a clock, a padlock, an open book)
 * and spring toward their target points, so the swarm rebuilds itself
 * into a new mark whenever the active shape changes. The field never
 * rotates: the shape faces the viewer and stays in one place, and
 * particles near the pointer lean gently toward it and warm to amber
 * (fine pointers only).
 * Phones, coarse pointers, missing WebGL and reduced motion get a static
 * dot poster instead of a simulation; the parent shows its text fallback.
 */

const WORLD_W = 5.6;
const WORLD_H = 3.8;

function collectPoints(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  count: number,
): Float32Array {
  const data = ctx.getImageData(0, 0, w, h).data;
  const pts: number[] = [];
  for (let y = 0; y < h; y += 2) {
    for (let x = 0; x < w; x += 2) {
      if (data[(y * w + x) * 4 + 3] > 110) pts.push(x, y);
    }
  }
  const out = new Float32Array(count * 3);
  if (pts.length === 0) {
    for (let i = 0; i < count; i++) {
      out[i * 3] = (Math.random() - 0.5) * WORLD_W;
      out[i * 3 + 1] = (Math.random() - 0.5) * WORLD_H;
      out[i * 3 + 2] = (Math.random() - 0.5) * 1.2;
    }
    return out;
  }
  for (let i = 0; i < count; i++) {
    // One point per particle: x and y must come from the SAME sampled
    // pixel, or the shape smears into its bounding box. The mapping is
    // isotropic (one world-units-per-pixel scale), or circles render
    // as ellipses and glyphs stretch.
    const j = Math.floor(Math.random() * (pts.length / 2)) * 2;
    const scale = WORLD_W / w;
    out[i * 3] = (pts[j] - w / 2) * scale;
    out[i * 3 + 1] = (h / 2 - pts[j + 1]) * scale;
    out[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
  }
  return out;
}

function drawShape(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  shape: ShapeSpec,
): void {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#ffffff";
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const cx = w / 2;
  const cy = h / 2;
  if (shape.kind === "text") {
    const lines = shape.lines;
    let size = 150;
    ctx.font = `900 ${size}px "Mona Sans", "Hanken Grotesk", sans-serif`;
    const widest = Math.max(...lines.map((l) => ctx.measureText(l).width));
    if (widest > w - 40) size = Math.floor((size * (w - 40)) / widest);
    ctx.font = `900 ${size}px "Mona Sans", "Hanken Grotesk", sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Outlines only: filled 900-weight glyphs sample into a solid
    // mass of dots; stroked outlines read as letterforms. The stroke
    // is kept thick so the name samples into a dense, readable line
    // of dots rather than a faint trace.
    ctx.lineWidth = Math.max(3, size * 0.06);
    const total = lines.length * size * 0.95;
    lines.forEach((line, i) => {
      ctx.strokeText(line, cx, cy - total / 2 + size * 0.95 * (i + 0.5));
    });
    return;
  }
  if (shape.id === "clock") {
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.arc(cx, cy, 150, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx, cy - 95);
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + 70, cy + 40);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy, 12, 0, Math.PI * 2);
    ctx.fill();
    return;
  }
  if (shape.id === "lock") {
    ctx.beginPath();
    ctx.arc(cx, cy - 78, 72, Math.PI, 0);
    ctx.lineWidth = 18;
    ctx.stroke();
    // Body as an outline, not a fill: a filled body samples into a
    // solid block of dots. Keyhole stays a solid dot and slot.
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.roundRect(cx - 105, cy - 78, 210, 180, 18);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(cx, cy + 10, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(cx - 7, cy + 10, 14, 42);
    return;
  }
  // book: two open pages, outlines only for the same reason
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(cx, cy - 110);
  ctx.lineTo(cx - 165, cy - 140);
  ctx.lineTo(cx - 165, cy + 110);
  ctx.lineTo(cx, cy + 140);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, cy - 110);
  ctx.lineTo(cx + 165, cy - 140);
  ctx.lineTo(cx + 165, cy + 110);
  ctx.lineTo(cx, cy + 140);
  ctx.closePath();
  ctx.stroke();
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(cx, cy - 110);
  ctx.lineTo(cx, cy + 140);
  ctx.stroke();
}

function sampleShape(shape: ShapeSpec, count: number): Float32Array {
  // Text is wide: a 960x320 sheet lets the wordmark fill the world
  // width at a readable height. Marks stay on the square sheet.
  const w = shape.kind === "text" ? 960 : 480;
  const h = shape.kind === "text" ? 320 : 480;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new Float32Array(count * 3);
  drawShape(ctx, w, h, shape);
  const pts = collectPoints(ctx, w, h, count);
  if (shape.kind === "text") {
    // The name is the point of the hero: render it large enough to
    // read as letters, not a dense band. 1.4x keeps it inside the
    // frame at desktop aspects (see the focus-cell offset in
    // HeroSwarm) while making each glyph ~40% taller.
    for (let i = 0; i < count; i++) {
      pts[i * 3] *= 1.4;
      pts[i * 3 + 1] *= 1.4;
    }
  }
  return pts;
}

export function SwarmField({
  shapes,
  active,
  count = { desktop: 9000, phone: 3500 },
  label,
  className = "",
  offset = { x: 0, y: 0 },
  onReady,
}: {
  shapes: ShapeSpec[];
  active: number;
  count?: { desktop: number; phone: number };
  label: string;
  className?: string;
  /** World-space shift of every target point, to centre the shape in a focus cell. */
  offset?: { x: number; y: number };
  onReady?: (ok: boolean) => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);
  const [poster, setPoster] = useState(
    () =>
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth < 768),
  );

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const coarse =
      window.matchMedia("(pointer: coarse)").matches ||
      window.innerWidth < 768;
    if (coarse) {
      onReady?.(false);
      return;
    }
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      // Text shapes need the wordmark face; marks do not. Wait briefly.
      if (shapes.some((s) => s.kind === "text")) {
        await Promise.race([
          document.fonts?.ready ?? Promise.resolve(),
          new Promise((r) => setTimeout(r, 1500)),
        ]);
      }
      if (cancelled) return;
      let THREE: typeof import("three");
      try {
        THREE = await import("three");
      } catch {
        if (!cancelled) {
          queueMicrotask(() => {
            setPoster(true);
            onReady?.(false);
          });
        }
        return;
      }
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const small = window.innerWidth < 1024;
      const n = small ? count.phone : count.desktop;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        });
      } catch {
        if (!cancelled) {
          queueMicrotask(() => {
            setPoster(true);
            onReady?.(false);
          });
        }
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(host.clientWidth, host.clientHeight);
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.style.cssText =
        "position:absolute;inset:0;width:100%;height:100%;";
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        55,
        host.clientWidth / Math.max(1, host.clientHeight),
        0.1,
        100,
      );
      camera.position.z = 7.4;

      const targets = shapes.map((s) => {
        const t = sampleShape(s, n);
        for (let i = 0; i < n; i++) {
          t[i * 3] += offset.x;
          t[i * 3 + 1] += offset.y;
        }
        return t;
      });
      const positions = new Float32Array(targets[activeRef.current]);
      const velocities = new Float32Array(n * 3);
      const stiffness = new Float32Array(n);
      for (let i = 0; i < n; i++) stiffness[i] = 0.05 + Math.random() * 0.05;
      const colors = new Float32Array(n * 3);
      const base = new Float32Array(n * 3);
      const cream = new THREE.Color("#f5efe6");
      const amber = new THREE.Color("#f2a33c");
      const tmp = new THREE.Color();
      for (let i = 0; i < n; i++) {
        tmp.copy(cream);
        if (Math.random() < 0.18) tmp.lerp(amber, 0.85);
        base[i * 3] = tmp.r;
        base[i * 3 + 1] = tmp.g;
        base[i * 3 + 2] = tmp.b;
      }
      colors.set(base);

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const material = new THREE.PointsMaterial({
        size: 0.035,
        vertexColors: true,
        transparent: true,
        opacity: 0.92,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(geometry, material);
      const group = new THREE.Group();
      group.add(points);
      // No rotation, no tilt: the shape faces the viewer square-on
      // and stays in one place. Particles only lean toward the
      // pointer (below); their springs hold the shape.
      scene.add(group);

      let visible = true;
      let raf = 0;
      let pointer = { x: 999, y: 999 };
      let currentShape = activeRef.current;

      const onPointer = (e: PointerEvent) => {
        const rect = host.getBoundingClientRect();
        pointer = {
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: -(((e.clientY - rect.top) / rect.height) * 2 - 1),
        };
      };
      const onResize = () => {
        const w = host.clientWidth;
        const h = Math.max(1, host.clientHeight);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      const onVisibility = () => {
        visible = !document.hidden;
        if (visible && !reduced) raf = requestAnimationFrame(tick);
      };
      const io = new IntersectionObserver(
        ([entry]) => {
          const was = visible;
          visible = entry.isIntersecting && !document.hidden;
          if (visible && !was && !reduced) raf = requestAnimationFrame(tick);
        },
        { threshold: 0 },
      );
      io.observe(host);
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("resize", onResize);
      document.addEventListener("visibilitychange", onVisibility);

      const tick = () => {
        if (cancelled || !visible) return;
        if (currentShape !== activeRef.current) {
          currentShape = activeRef.current;
        }
        const target = targets[currentShape];
        const pos = geometry.attributes.position as import("three").BufferAttribute;
        const col = geometry.attributes.color as import("three").BufferAttribute;
        const arr = pos.array as Float32Array;
        const carr = col.array as Float32Array;
        const px = pointer.x * 3.4;
        const py = pointer.y * 2.2;
        for (let i = 0; i < n; i++) {
          const ix = i * 3;
          const k = stiffness[i];
          velocities[ix] += (target[ix] - arr[ix]) * k;
          velocities[ix + 1] += (target[ix + 1] - arr[ix + 1]) * k;
          velocities[ix + 2] += (target[ix + 2] - arr[ix + 2]) * k;
          const dx = arr[ix] - px;
          const dy = arr[ix + 1] - py;
          const d2 = dx * dx + dy * dy;
          // Lean toward the cursor, not away from it: a gentle pull
          // (far weaker than the springs, so the letters keep their
          // shape and the particles settle straight back when the
          // pointer moves on). Particles near the cursor also warm
          // to amber.
          if (d2 < 0.7 && d2 > 0.0001) {
            const d = Math.sqrt(d2);
            const pull = ((1 - d) * 0.012) / d;
            velocities[ix] -= dx * pull;
            velocities[ix + 1] -= dy * pull;
          }
          velocities[ix] *= 0.85;
          velocities[ix + 1] *= 0.85;
          velocities[ix + 2] *= 0.85;
          arr[ix] += velocities[ix];
          arr[ix + 1] += velocities[ix + 1];
          arr[ix + 2] += velocities[ix + 2];
          const warm = d2 < 1.44 ? (1 - Math.sqrt(d2) / 1.2) * 0.9 : 0;
          carr[ix] = base[ix] + (amber.r - base[ix]) * warm;
          carr[ix + 1] = base[ix + 1] + (amber.g - base[ix + 1]) * warm;
          carr[ix + 2] = base[ix + 2] + (amber.b - base[ix + 2]) * warm;
        }
        pos.needsUpdate = true;
        col.needsUpdate = true;
        renderer.render(scene, camera);
        if (!reduced) raf = requestAnimationFrame(tick);
      };

      onReady?.(true);
      if (reduced) {
        renderer.render(scene, camera);
      } else {
        raf = requestAnimationFrame(tick);
      }

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVisibility);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
    // Shapes are fixed per mount; active changes are read through activeRef.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={hostRef} className={className} role="img" aria-label={label}>
      {poster && <div aria-hidden="true" className="swarm-poster" />}
    </div>
  );
}
