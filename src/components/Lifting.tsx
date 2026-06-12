"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { lifting } from "@/data/content";

function Plates({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="h-5 w-1.5 rounded-sm bg-accent/80" />
      ))}
    </div>
  );
}

/** Sub-block of the "PRs — Personal Records" section: the records set in the gym. */
export default function Lifting() {
  const max = Math.max(...lifting.prs.map((p) => p.weight));

  return (
    <div id="lifting" className="mt-16 scroll-mt-24">
      <Reveal>
        <p className="font-mono text-xs tracking-[0.3em] text-accent">{lifting.heading.toUpperCase()}</p>
        <h3 className="mt-2 font-display text-2xl font-bold">Personal records of a different kind</h3>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{lifting.intro}</p>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        {lifting.prs.map((pr, i) => (
          <Reveal key={pr.lift} delay={i * 0.08}>
            <div className="rounded-lg border border-edge bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
              <p className="font-mono text-xs tracking-[0.25em] text-faint">{pr.lift.toUpperCase()}</p>
              <p className="mt-3 font-display text-4xl font-bold">
                <CountUp value={pr.weight} />
                <span className="text-lg text-accent">kg</span>
              </p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-raised">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(pr.weight / max) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-accent"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border border-accent/40 bg-surface px-6 py-5">
          <div className="flex items-center gap-4">
            <Plates count={4} />
            <span className="h-1 w-10 rounded-full bg-faint" aria-hidden />
            <Plates count={4} />
          </div>
          <p className="font-mono text-sm tracking-widest text-muted">
            POWERLIFTING TOTAL{" "}
            <span className="font-display text-2xl font-bold text-accent-bright">
              <CountUp value={lifting.total} duration={1.6} />
              kg
            </span>
          </p>
        </div>
      </Reveal>
    </div>
  );
}
