"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProfileFrame } from "@/components/ProfileFrame";
import { TechPill } from "@/components/ui/TechPill";
import { fadeUpVariants, fadeUpTransition, scaleInVariants } from "@/lib/animations";
import type { PersonalInfo } from "@/types/portfolio";

type HeroSectionProps = {
  personalInfo: PersonalInfo;
};

export function HeroSection({ personalInfo }: HeroSectionProps) {
  const titleParts = ["Håvard", "Developer", "Technologist"];

  return (
    <section className="hero-diagonals editorial-section relative flex min-h-screen items-center pt-28" id="top">
      <div className="editorial-container relative z-10 grid items-center gap-16 lg:grid-cols-[minmax(0,0.6fr)_minmax(320px,0.4fr)]">
        <div className="max-w-[35rem]">
          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            className="inline-flex items-center gap-3 rounded-full border border-[var(--border-light)] bg-[var(--bg-secondary)] px-4 py-2 text-[13px] uppercase tracking-[0.08em] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--available-dot)]" />
            {personalInfo.availabilityLabel}
          </motion.div>

          <div className="mt-8 space-y-2">
            <motion.h1
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              transition={{ ...fadeUpTransition, delay: 0.1 }}
              className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-foreground md:text-6xl lg:text-[3.5rem]"
            >
              {titleParts[0]}
            </motion.h1>
            <motion.p
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              transition={{ ...fadeUpTransition, delay: 0.18 }}
              className="font-serif text-5xl font-normal italic leading-[1.05] tracking-[-0.02em] text-primary md:text-6xl lg:text-[3.5rem]"
            >
              {titleParts[1]} <span className="not-italic text-muted">&amp;</span>
            </motion.p>
            <motion.p
              variants={fadeUpVariants}
              initial="initial"
              animate="animate"
              transition={{ ...fadeUpTransition, delay: 0.26 }}
              className="font-serif text-5xl font-normal leading-[1.05] tracking-[-0.02em] text-copy md:text-6xl lg:text-[3.5rem]"
            >
              {titleParts[2]}
            </motion.p>
          </div>

          <motion.p
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            transition={{ ...fadeUpTransition, delay: 0.34 }}
            className="mt-8 max-w-[28rem] text-[1.0625rem] leading-8 text-copy"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            transition={{ ...fadeUpTransition, delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/#projects" className="editorial-button-primary">
              View projects
            </Link>
            <Link href="/#contact" className="editorial-button-secondary">
              Get in touch
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="initial"
            animate="animate"
            transition={{ ...fadeUpTransition, delay: 0.5 }}
            className="mt-12 border-t border-[var(--border-light)] pt-8"
          >
            <div className="flex flex-wrap gap-2.5">
              {personalInfo.technologies.map((technology) => (
                <TechPill key={technology}>{technology}</TechPill>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={scaleInVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center gap-6"
        >
          <ProfileFrame
            image={personalInfo.image}
            imageAlt={personalInfo.imageAlt}
            fallbackName={personalInfo.name}
          />
          <div className="text-center">
            <p className="font-serif text-[15px] italic text-copy">{personalInfo.location}</p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.16em] text-muted">
              NTNU · {personalInfo.nextRole?.company ?? "Portfolio"}
            </p>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-muted"
      >
        <span>Scroll</span>
        <span className="h-8 w-px bg-[linear-gradient(180deg,var(--text-muted),transparent)]" />
      </a>
    </section>
  );
}
