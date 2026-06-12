"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently crossing the upper-middle band of
 * the viewport. When nested sections intersect at once (e.g. #lifting inside
 * #projects), the one latest in the ids list — the innermost — wins.
 */
export default function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  const key = ids.join("|");

  useEffect(() => {
    const ordered = key.split("|");
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        for (let i = ordered.length - 1; i >= 0; i--) {
          if (visible.has(ordered[i])) {
            setActive(ordered[i]);
            return;
          }
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    ordered.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
}
