"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { ProjectCard } from "@/entities/project/ui/ProjectCard";
import { fadeUpVariants, revealViewport, staggerContainer } from "@/shared/lib/animations";
import type { Project } from "@/entities/portfolio/model/portfolio";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, revealViewport);

  return (
    <section id="projects" ref={ref} className="editorial-section scroll-mt-28">
      <div className="editorial-container">
        <motion.div
          variants={fadeUpVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects"
            intro="A curated selection of work spanning client delivery, product thinking, and full-stack application development."
            action={
              <Link href="/projects" className="editorial-link">
                View all projects
              </Link>
            }
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="mt-10 grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeUpVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
