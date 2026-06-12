"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks, site } from "@/data/content";
import useActiveSection from "./useActiveSection";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 140 && !open);
  });

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 border-b border-edge bg-bg/85 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          {site.initials}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`group relative font-mono text-xs tracking-widest transition-colors hover:text-accent-bright ${
                    isActive ? "text-accent-bright" : "text-muted"
                  }`}
                >
                  {link.label.toUpperCase()}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 group-hover:w-full ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={site.cv}
              download
              className="rounded border border-accent px-3 py-1.5 font-mono text-xs tracking-widest text-accent-bright transition-colors hover:bg-accent hover:text-white"
            >
              CV ↓
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <motion.span
            animate={open ? { y: 3.5, rotate: 45 } : { y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="h-px w-5 bg-ink"
          />
          <motion.span
            animate={open ? { y: -3.5, rotate: -45 } : { y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
            className="h-px w-5 bg-ink"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-edge px-5 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, delay: 0.05 + i * 0.05 }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono text-sm tracking-widest text-muted hover:text-accent-bright"
                >
                  <span className="mr-3 text-accent">/</span>
                  {link.label.toUpperCase()}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25, delay: 0.05 + navLinks.length * 0.05 }}
              className="pb-4"
            >
              <a href={site.cv} download className="block py-3 font-mono text-sm tracking-widest text-accent-bright">
                <span className="mr-3 text-accent">/</span>DOWNLOAD CV ↓
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
