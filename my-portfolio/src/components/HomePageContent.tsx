"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CardSurface } from "@/components/CardSurface";
import { FolderGit2, FileText, Mail } from "lucide-react";
import { TechMarquee } from "@/components/TechMarquee";
import type { Experience, PersonalInfo, Project } from "@/types/portfolio";

type HighlightItem = {
  id: string;
  title: string;
  description: string;
  kind: "project" | "experience";
};

type HomePageContentProps = {
  personalInfo: PersonalInfo;
  featuredProjects: Project[];
  experiences: Experience[];
};

export function HomePageContent({ personalInfo, featuredProjects, experiences }: HomePageContentProps) {
  const bouvet = experiences.find((experience) => experience.id === "bouvet-asa");
  const statusLabel = personalInfo.status ?? personalInfo.availabilityLabel;

  const highlights: HighlightItem[] = [
    ...featuredProjects.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description ?? "",
      kind: "project" as const,
    })),
    ...(bouvet
      ? [
          {
            id: bouvet.id,
            title: `${bouvet.company} — ${bouvet.title}`,
            description: bouvet.description,
            kind: "experience" as const,
          },
        ]
      : []),
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55 },
  };

  const staggerList = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const card = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  };

  return (
    <div className="space-y-24">
      <section className="relative min-h-[78vh] md:min-h-[86vh] grid md:grid-cols-[260px_1fr] items-start gap-6 md:gap-10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <motion.div
          aria-hidden
          initial={{ y: 0 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="order-1 md:order-1 relative h-48 w-48 md:h-60 md:w-60 overflow-hidden rounded-2xl ring-2 ring-primary/60 shadow-[0_0_50px_-12px_var(--color-glow-strong)] self-start mx-auto md:mx-0"
        >
          <Image
            src={personalInfo.image ?? "/me.jpeg"}
            alt={personalInfo.imageAlt ?? "Portrait"}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 240px, 192px"
            priority
          />
        </motion.div>

        <div className="order-2 md:order-2 text-center md:text-left">
          {statusLabel && (
            <motion.span
              {...fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-overlay-border bg-overlay-bg px-3 py-1 text-xs"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {statusLabel}
            </motion.span>
          )}

          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.05 }}
            className="mt-5 text-5xl md:text-7xl font-extrabold leading-[1.05]"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="mt-4 max-w-2xl text-overlay-text text-xl md:text-2xl"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-primary text-primary-contrast font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 inline-flex items-center gap-2"
            >
              <FolderGit2 className="h-4 w-4" />
              View projects
            </Link>
            <Link
              href="/cv"
              className="px-6 py-3 rounded-xl border border-overlay-border-strong hover:bg-overlay-bg-hover font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 inline-flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              View CV
            </Link>
            <Link
              href="mailto:havardvestbo@icloud.com"
              className="px-6 py-3 rounded-xl border border-overlay-border-strong hover:bg-overlay-bg-hover font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.28 }}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-overlay-border bg-overlay-bg px-3 py-1.5 text-xs text-overlay-text"
          >
            <span className="h-2 w-2 rounded-full bg-success" />
            Bouvet ASA — Frontend intern on a client project for Bane NOR (React + TS)
          </motion.div>
        </div>

        <a
          href="#tech"
          aria-label="Scroll to tech stack"
          className="absolute left-1/2 -translate-x-1/2 bottom-6 opacity-70 hover:opacity-100 text-xs tracking-wide"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="block">Scroll</span>
            <span className="h-5 w-px bg-overlay-text-muted animate-pulse" />
          </motion.div>
        </a>
      </section>

      <section id="tech" aria-label="Tech stack" className="scroll-mt-20">
        <TechMarquee
          items={[
            "React",
            "TypeScript",
            "Next.js",
            "React Router",
            "Tailwind CSS",
            "Spring Boot",
            ".NET MAUI",
            "PostgreSQL",
            "MySQL",
            "Flutter",
            "Unity",
          ]}
        />
      </section>

      <section id="highlights" className="scroll-mt-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold">Highlights</h2>
          <Link href="/projects" className="text-sm link-underline">
            See all
          </Link>
        </div>

        <motion.ul
          variants={staggerList}
          initial="initial"
          animate="animate"
          className="mt-6 grid gap-6 md:grid-cols-2"
        >
          {highlights.map((highlight) => (
            <motion.li
              key={highlight.id}
              variants={card}
            >
              <CardSurface className="p-5">
                <span className="text-xs uppercase tracking-wide text-overlay-text-muted">
                  {highlight.kind}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-muted text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardSurface>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
}
