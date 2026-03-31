import type { Metadata } from "next";
import Link from "next/link";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import { getProjects } from "@/lib/api";
import type { Project } from "@/types/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects and side work by Håvard.",
};

function ProjectLinks({ project }: { project: Project }) {
  if (!project.links) {
    return null;
  }

  return (
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
  );
}

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    projects = await getProjects();
  } catch (error) {
    console.error("Failed to load projects", error);
  }

  if (projects.length === 0) {
    return (
      <PageTransition>
        <div className="space-y-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-muted">Project data is unavailable at the moment.</p>
          <a
            href="/projects"
            className="inline-block rounded-xl bg-primary px-5 py-2.5 font-medium text-primary-contrast transition hover:opacity-90"
          >
            Try again
          </a>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="mt-2 text-muted">A collection of my work and side projects.</p>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article
                className={`card card-hover group p-6 ${
                  project.featured ? "card-featured" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold transition group-hover:text-primary">
                        {project.title}
                      </h2>
                      {project.featured && (
                        <span className="rounded-full bg-primary/15 px-2 py-1 text-xs font-medium text-primary">
                          Featured
                        </span>
                      )}
                    </div>
                    {project.year && (
                      <p className="mt-1 text-sm text-muted">{project.year}</p>
                    )}
                  </div>
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

                <ProjectLinks project={project} />
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  );
}
