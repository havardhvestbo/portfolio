"use client";

import { motion } from "framer-motion";

export function TechMarquee({ items }: { items: string[] }) {
  if (!items?.length) return null;

  // duplicate list to create a seamless loop
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        className="flex gap-3"
        aria-hidden
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
      >
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
