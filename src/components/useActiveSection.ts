"use client";

import { useEffect, useState } from "react";

/** Returns the id of the section currently crossing the upper-middle band of the viewport. */
export default function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");
  const key = ids.join("|");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    key.split("|").forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);

  return active;
}
