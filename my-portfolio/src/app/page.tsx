import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechMarquee } from "@/components/TechMarquee";
import { getPortfolioSnapshot } from "@/lib/api";

export default async function HomePage() {
  const snapshot = await getPortfolioSnapshot();

  const featuredProjects = snapshot.featuredProjects.length
    ? snapshot.featuredProjects
    : snapshot.projects.filter((project) => project.featured);
  const workExperience = snapshot.experiences.filter((experience) => experience.type === "work");

  return (
    <>
      <HeroSection personalInfo={snapshot.personalInfo} />
      <section
        aria-label="Tech stack"
        className="border-y border-border-light bg-background/90 backdrop-blur-sm"
      >
        <TechMarquee
          items={snapshot.personalInfo.technologies}
          className="mx-auto max-w-[1560px] px-4 lg:px-10"
        />
      </section>
      <AboutSection personalInfo={snapshot.personalInfo} />
      <ProjectsSection projects={featuredProjects} />
      <ExperienceSection experiences={workExperience.length ? workExperience : snapshot.experiences} />
      <ContactSection personalInfo={snapshot.personalInfo} />
    </>
  );
}
