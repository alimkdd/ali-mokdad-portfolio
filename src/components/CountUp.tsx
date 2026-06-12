"use client";

import { useEffect, useRef, useState } from "react";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Renders the final value by default (so SSR, crawlers, and print always show
 * real numbers) and animates 0 → value only once the element is confirmed visible.
 */
export default function CountUp({
  value,
  duration = 1.2,
  delay = 0,
}: {
  value: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (started || !entries.some((e) => e.isIntersecting)) return;
        started = true;
        io.disconnect();
        setDisplay(0);
        const t0 = performance.now() + delay * 1000;
        const tick = (now: number) => {
          const p = Math.min(1, Math.max(0, (now - t0) / (duration * 1000)));
          setDisplay(Math.round(easeOutCubic(p) * value));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "-40px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, delay]);

  return <span ref={ref}>{display}</span>;
}
