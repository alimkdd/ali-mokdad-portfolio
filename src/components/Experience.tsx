"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/content";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.45"],
  });

  return (
    <section id="experience" className="scroll-mt-24 py-20">
      <Reveal>
        <SectionHeading set="03" title="Experience" />
      </Reveal>
      <div ref={timelineRef} className="relative space-y-12 pl-8">
        {/* base track + scroll-linked red line that draws itself */}
        <div className="absolute left-0 top-1.5 h-full w-px bg-edge" aria-hidden />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-0 top-1.5 h-full w-px origin-top bg-accent"
          aria-hidden
        />
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <article className="relative">
              <motion.span
                initial={{ scale: 0.3, opacity: 0.4 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(220,38,38,0.7)]"
                aria-hidden
              />
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded border border-edge bg-surface font-mono text-[10px] font-bold tracking-wider text-accent-bright"
                >
                  {job.badge}
                </span>
                <div>
                  <p className="font-mono text-xs tracking-widest text-faint">{job.period.toUpperCase()}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">
                    {job.title} <span className="text-accent">@</span> {job.company}
                  </h3>
                  <p className="mt-1 text-sm italic text-muted">{job.summary}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li key={t} className="rounded border border-edge bg-surface px-2.5 py-1 font-mono text-xs text-faint">
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
