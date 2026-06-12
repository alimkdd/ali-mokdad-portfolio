"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { site, heroStats } from "@/data/content";

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative -mx-5 px-5 pb-20 pt-16 sm:-mx-8 sm:px-8 sm:pt-24">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 md:flex-row md:items-start md:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl text-center md:text-left"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-accent">
            {site.role.toUpperCase()} · {site.location.toUpperCase()}
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            {site.name}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{site.tagline}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="rounded bg-accent px-5 py-2.5 font-mono text-sm font-bold text-white transition-colors hover:bg-accent-bright"
            >
              View Work
            </a>
            <a
              href={site.cv}
              download
              className="rounded border border-edge px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent-bright"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="rounded border border-edge px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent-bright"
            >
              Get in Touch
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-6 md:justify-start">
            {heroStats.map((stat, i) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold text-ink">
                  <CountUp value={stat.value} duration={1.4} delay={0.3 + i * 0.15} />
                  {stat.suffix}
                  <span className="mt-1 block font-sans text-xs font-normal text-faint">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div className="absolute -inset-2 rounded-full bg-accent/15 blur-2xl" />
          {/* overflow-hidden + slight zoom crops out the white ring baked into the source photo */}
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-accent/60 sm:h-56 sm:w-56">
            <Image
              src="/profile.jpg"
              alt="Ali Mokdad"
              fill
              sizes="224px"
              priority
              className="scale-[1.12] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
