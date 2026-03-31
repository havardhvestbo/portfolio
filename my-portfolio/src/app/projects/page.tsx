import type { Metadata } from "next";
import Link from "next/link";
import { getProjects } from "@/lib/api";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import type { Project } from "@/types/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects and side work by Håvard.",
};

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    projects = await getProjects();
  } catch (error) {
    console.error("Failed to load projects", error);
  }

  if (projects.length === 0) {
    return (
      <div className="space-y-4 text-center py-20">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-muted">Project data is unavailable at the moment.</p>
        <a href="/projects" className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-primary text-primary-contrast font-medium hover:opacity-90 transition">
          Try again
        </a>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="mt-2 text-muted">
            A collection of my work and side projects.
          </p>
        </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="card card-hover group p-6"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold group-hover:text-primary">
                {project.title}
              </h2>
              {project.year && (
                <span className="text-sm text-white/50">{project.year}</span>
              )}
            </div>

                <p className="mt-3 text-muted">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-overlay-border bg-overlay-bg px-2 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.links && (
                  <div className="mt-4 flex gap-3">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm link-underline"
                      >
                        GitHub
                      </Link>
                    )}
                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm link-underline"
                      >
                        Demo
                      </Link>
                    )}
                    {project.links.website && (
                      <Link
                        href={project.links.website}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm link-underline"
                      >
                        Website
                      </Link>
                    )}
                  </div>
                )}
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  );
}
