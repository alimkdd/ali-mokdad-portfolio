"use client";

import { useEffect, useState } from "react";
import { lifting } from "@/data/content";
import useActiveSection from "./useActiveSection";

const BAR = 20; // empty barbell, kg
const PLATE_STEPS = 12;

const SECTION_IDS = ["about", "skills", "experience", "projects", "education", "contact"];
const SECTION_LABELS: Record<string, string> = {
  about: "ABOUT",
  skills: "SKILLS",
  experience: "EXPERIENCE",
  projects: "LIFTINGS",
  education: "EDUCATION",
  contact: "FINAL SET",
};

/**
 * Scroll-progress indicator themed as a barbell being loaded:
 * the page starts at an empty 20kg bar and reaches Ali's 470kg
 * powerlifting total at the bottom.
 */
export default function BarLoader() {
  const [progress, setProgress] = useState(0);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const weight = Math.round((BAR + progress * (lifting.total - BAR)) / 2.5) * 2.5;
  const plates = Math.round(progress * PLATE_STEPS);

  return (
    <aside aria-hidden className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
      <span className="font-mono text-[10px] tracking-widest text-accent [writing-mode:vertical-rl]">
        {SECTION_LABELS[active] ?? "WARM-UP"}
      </span>
      <div className="flex flex-col items-center gap-1.5">
        {Array.from({ length: PLATE_STEPS }, (_, i) => {
          const filled = i >= PLATE_STEPS - plates;
          return (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                filled ? "w-6 bg-accent" : "w-3 bg-edge"
              }`}
            />
          );
        })}
        {/* the bar itself */}
        <span className="mt-1 h-6 w-1 rounded-full bg-faint" />
      </div>
      <span className="font-mono text-[10px] font-bold tracking-widest text-accent-bright">
        {weight}KG
      </span>
    </aside>
  );
}
