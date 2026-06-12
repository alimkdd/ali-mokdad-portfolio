"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Touch-friendly snap carousel below the `sm` breakpoint; renders the items
 * as a plain grid (via gridClassName) on larger screens. Dots track the
 * active slide and can be tapped to navigate.
 */
export default function Carousel({
  items,
  gridClassName = "",
  ariaLabel,
}: {
  items: React.ReactNode[];
  gridClassName?: string;
  ariaLabel: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const childCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  }, []);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    const child = track?.children[i] as HTMLElement | undefined;
    if (!track || !child) return;
    track.scrollTo({
      left: child.offsetLeft - (track.clientWidth - child.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <div role="region" aria-label={ariaLabel}>
      <div
        ref={trackRef}
        onScroll={onScroll}
        className={`no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 ${gridClassName}`}
      >
        {items.map((item, i) => (
          <div key={i} className="flex w-[86%] shrink-0 snap-center sm:w-auto sm:shrink">
            {item}
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2 sm:hidden">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to item ${i + 1} of ${items.length}`}
            aria-current={active === i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              active === i ? "w-6 bg-accent" : "w-1.5 bg-edge"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
