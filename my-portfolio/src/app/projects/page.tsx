import Link from "next/link";
import { getProjects } from "@/lib/api";
import type { Project } from "@/types/portfolio";

export default async function ProjectsPage() {
  let projects: Project[] = [];

  try {
    projects = await getProjects();
  } catch (error) {
    console.error("Failed to load projects", error);
  }

  if (projects.length === 0) {
    return (
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-white/70">Project data is unavailable at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-white/70">
          A collection of my work and side projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-white/10 p-6 hover:border-white/20 hover:shadow-[0_0_30px_-15px_rgba(250,204,21,0.45)] transition"
          >
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold group-hover:text-primary">
                {project.title}
              </h2>
              {project.year && (
                <span className="text-sm text-white/50">{project.year}</span>
              )}
            </div>

            <p className="mt-3 text-white/70">{project.description}</p>

            {project.technologies && project.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs"
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
        ))}
      </div>
    </div>
  );
}
