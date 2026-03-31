"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { fadeUpVariants, revealViewport } from "@/shared/lib/animations";
import type { PersonalInfo } from "@/entities/portfolio/model/portfolio";

type AboutSectionProps = {
  personalInfo: PersonalInfo;
};

export function AboutSection({ personalInfo }: AboutSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, revealViewport);

  return (
    <motion.section
      id="about"
      ref={ref}
      variants={fadeUpVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="editorial-section scroll-mt-28"
    >
      <div className="editorial-container grid gap-12 lg:grid-cols-[minmax(220px,0.32fr)_minmax(0,0.68fr)]">
        <div className="space-y-4">
          <p className="font-serif text-7xl leading-none tracking-[-0.04em] text-primary md:text-[5.5rem]">
            {personalInfo.highlightMetric.value}
          </p>
          <p className="section-kicker">{personalInfo.highlightMetric.label}</p>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Profile"
            title="About"
            intro={personalInfo.title}
          />

          <div className="space-y-5 text-[1.0625rem] leading-8 text-copy">
            {personalInfo.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link href="/cv" className="editorial-link inline-flex items-center gap-2">
            Download CV
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
