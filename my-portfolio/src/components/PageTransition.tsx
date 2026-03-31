"use client";

import { motion } from "framer-motion";
import { editorialEase } from "@/lib/animations";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: editorialEase }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {},
        animate: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: editorialEase } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
