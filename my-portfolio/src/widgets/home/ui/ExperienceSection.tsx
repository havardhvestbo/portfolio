"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { TimelineEntry } from "@/entities/experience/ui/TimelineEntry";
import { fadeUpVariants, revealViewport, timelineContainer } from "@/shared/lib/animations";
import type { Experience } from "@/entities/portfolio/model/portfolio";

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, revealViewport);

  return (
    <section id="experience" ref={ref} className="editorial-section scroll-mt-28">
      <div className="editorial-container">
        <motion.div
          variants={fadeUpVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <SectionHeading
            eyebrow="Experience"
            title="A timeline of work and growth"
            intro="A mix of consulting, production, service, and operational work that shaped how I communicate, deliver, and collaborate."
            action={
              <Link href="/cv" className="editorial-link">
                View full CV
              </Link>
            }
          />
        </motion.div>

        <motion.div
          variants={timelineContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="mt-10 space-y-8"
        >
          {experiences.map((experience, index) => (
            <motion.div key={experience.id} variants={fadeUpVariants}>
              <TimelineEntry
                align={index % 2 === 0 ? "right" : "left"}
                period={experience.period}
                title={experience.title}
                subtitle={experience.company}
                description={experience.description}
                eyebrow={experience.type}
                technologies={experience.technologies}
                featured={experience.id === "bouvet-asa"}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
