"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeUpVariants, revealViewport } from "@/lib/animations";
import type { PersonalInfo } from "@/types/portfolio";

type ContactSectionProps = {
  personalInfo: PersonalInfo;
};

export function ContactSection({ personalInfo }: ContactSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, revealViewport);
  const github = personalInfo.social.github;
  const linkedin = personalInfo.social.linkedin;

  return (
    <motion.section
      id="contact"
      ref={ref}
      variants={fadeUpVariants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className="editorial-section scroll-mt-28"
    >
      <div className="editorial-container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Get in touch"
            intro="I’m interested in thoughtful product work, strong teams, and conversations about technology, design, and delivery."
          />

          <p className="mt-6 text-[13px] uppercase tracking-[0.16em] text-muted">
            {personalInfo.location}
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-8 inline-block font-serif text-3xl italic text-primary transition-opacity duration-200 hover:opacity-80 md:text-4xl"
          >
            {personalInfo.email}
          </a>

          <div className="mt-8 flex items-center justify-center gap-5 text-muted">
            {github ? (
              <Link
                href={github.url}
                aria-label={github.label}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-primary"
              >
                <FaGithub className="h-5 w-5" />
              </Link>
            ) : null}
            {linkedin ? (
              <Link
                href={linkedin.url}
                aria-label={linkedin.label}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-primary"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
