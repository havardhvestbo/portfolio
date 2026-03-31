import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CardSurface } from "@/components/CardSurface";
import { TechPill } from "@/components/ui/TechPill";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <CardSurface
      as="article"
      hover
      featured={project.featured}
      className={["editorial-project-card group p-7 md:p-8", className].filter(Boolean).join(" ")}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] opacity-55" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.year ? <span className="section-kicker">{project.year}</span> : null}
            {project.featured ? (
              <span className="rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary">
                Selected
              </span>
            ) : null}
          </div>

          <div>
            <h3 className="text-[1.125rem] font-medium leading-7 tracking-[-0.01em] text-foreground transition-colors duration-300 group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-copy">{project.description}</p>
          </div>
        </div>

        <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--border-light)] bg-[var(--surface)] text-primary transition-transform duration-300 group-hover:-translate-y-1 md:flex">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      {project.technologies && project.technologies.length > 0 ? (
        <div className="relative mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechPill key={technology}>{technology}</TechPill>
          ))}
        </div>
      ) : null}

      {project.links ? (
        <div className="relative mt-6 flex flex-wrap gap-4 text-sm text-primary">
          {project.links.github ? (
            <Link href={project.links.github} target="_blank" rel="noreferrer" className="editorial-link">
              GitHub
            </Link>
          ) : null}
          {project.links.demo ? (
            <Link href={project.links.demo} target="_blank" rel="noreferrer" className="editorial-link">
              Demo
            </Link>
          ) : null}
          {project.links.website ? (
            <Link href={project.links.website} target="_blank" rel="noreferrer" className="editorial-link">
              Website
            </Link>
          ) : null}
        </div>
      ) : null}
    </CardSurface>
  );
}
