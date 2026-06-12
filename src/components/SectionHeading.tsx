"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  set,
  title,
}: {
  set: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <motion.p
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="font-mono text-xs tracking-[0.3em] text-accent"
      >
        SET {set}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        className="mt-2 font-display text-3xl font-bold sm:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        className="mt-4 h-px bg-accent"
      />
    </div>
  );
}
