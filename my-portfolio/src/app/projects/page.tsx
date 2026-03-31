import type { Metadata } from "next";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProjects } from "@/lib/api";
import { fallbackProjects } from "@/lib/portfolioFallback";
import type { Project } from "@/types/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected and archival projects by Håvard.",
};

export default async function ProjectsPage() {
  let projects: Project[] = fallbackProjects;

  try {
    projects = await getProjects();
  } catch (error) {
    console.error("Failed to load projects", error);
  }

  if (projects.length === 0) {
    return (
      <PageTransition>
        <div className="editorial-section">
          <div className="editorial-container text-center">
            <SectionHeading
              align="center"
              eyebrow="Archive"
              title="Projects"
              intro="Project data is unavailable at the moment."
            />
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="editorial-section">
        <div className="editorial-container">
          <SectionHeading
            eyebrow="Archive"
            title="Projects"
            intro="A broader view of product work, client delivery, coursework, and side projects across frontend and full-stack development."
          />

          <StaggerContainer className="mt-10 grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </PageTransition>
  );
}
