"use client";

import Image from "next/image";
import Link from "next/link";
import { personalInfo, featuredProjects, experiences } from "@/data";
import { TechMarquee } from "@/components/TechMarquee";
import { motion } from "framer-motion";
import { FolderGit2, FileText, Mail } from "lucide-react";

type HighlightItem = {
  id: string;
  title: string;
  description: string;
  kind: "project" | "experience";
};

export default function HomePage() {
  // Find Bouvet summer job by ID
  const bouvet = experiences.find((e) => e.id === "bouvet-asa");

  // Merge featured projects + Bouvet experience into one list
  const highlights: HighlightItem[] = [
    ...featuredProjects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description ?? "",
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

  // Motion helpers
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
      {/* HERO */}
      <section className="relative min-h-[78vh] md:min-h-[86vh] grid md:grid-cols-[260px_1fr] items-start gap-10">
        {/* Glow background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </div>

        {/* Portrait */}
        <motion.div
          aria-hidden
          initial={{ y: 0 }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="order-2 md:order-1 relative h-48 w-48 md:h-60 md:w-60 overflow-hidden rounded-2xl ring-2 ring-primary/60 shadow-[0_0_50px_-12px_rgba(250,204,21,0.35)] self-start"
        >
          <Image
            src={personalInfo.image}
            alt={personalInfo.imageAlt}
            fill
            className="object-cover"
            sizes="240px"
            priority
          />
        </motion.div>

        {/* Headline + CTAs */}
        <div className="order-1 md:order-2">
          <motion.span
            {...fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {personalInfo.status}
          </motion.span>

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
            className="mt-4 max-w-2xl text-white/80 text-xl md:text-2xl"
          >
            I’m a Master’s student in Management of Technology and a Computer Engineering grad,
            growing into a frontend & full-stack developer — and a future tech/project lead.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 inline-flex items-center gap-2"
            >
              <FolderGit2 className="h-4 w-4" />
              View projects
            </Link>
            <Link
              href="/cv"
              className="px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 inline-flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              View CV
            </Link>
            <Link
              href="mailto:havardvestbo@icloud.com"
              className="px-6 py-3 rounded-xl border border-white/15 hover:bg-white/5 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 inline-flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </motion.div>

          {/* Bouvet badge */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.28 }}
            className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Bouvet ASA — Frontend intern on a client project for Bane NOR (React + TS)
          </motion.div>
        </div>

        {/* Scroll cue */}
        <a
          href="#tech"
          className="absolute left-1/2 -translate-x-1/2 bottom-6 opacity-70 hover:opacity-100 text-xs tracking-wide"
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="block">Scroll</span>
            <span className="h-5 w-px bg-white/50 animate-pulse" />
          </motion.div>
        </a>
      </section>

      {/* TECH MARQUEE */}
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

      {/* HIGHLIGHTS */}
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
          whileInView="animate"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((item) => (
            <motion.li
              key={item.id}
              variants={card}
              className="group rounded-2xl border border-white/10 hover:border-white/20 hover:shadow-[0_0_30px_-15px_rgba(250,204,21,0.45)] transition"
            >
              <Link
                href={`/projects#${item.id}`}
                className="block p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rounded-2xl"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide opacity-80">
                    {item.kind === "project" ? "Project" : "Experience"}
                  </span>
                  {item.kind === "experience" && (
                    <span className="text-[11px] rounded-md border border-amber-400/20 bg-amber-400/10 px-2 py-0.5">
                      New
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-medium group-hover:text-primary">
                  {item.title}
                </h3>

                <p
                  className="mt-2 text-sm text-white/70"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {item.description}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
}
