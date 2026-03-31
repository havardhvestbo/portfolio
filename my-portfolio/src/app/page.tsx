import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { getPortfolioSnapshot } from "@/lib/api";
import { fallbackPortfolioSnapshot } from "@/lib/portfolioFallback";

export default async function HomePage() {
  let snapshot = fallbackPortfolioSnapshot;

  try {
    snapshot = await getPortfolioSnapshot();
  } catch (error) {
    console.error("Failed to load home page data", error);
  }

  const featuredProjects = snapshot.featuredProjects.length
    ? snapshot.featuredProjects
    : snapshot.projects.filter((project) => project.featured);
  const workExperience = snapshot.experiences.filter((experience) => experience.type === "work");

  return (
    <>
      <HeroSection personalInfo={snapshot.personalInfo} />
      <AboutSection personalInfo={snapshot.personalInfo} />
      <ProjectsSection projects={featuredProjects} />
      <ExperienceSection experiences={workExperience.length ? workExperience : snapshot.experiences} />
      <ContactSection personalInfo={snapshot.personalInfo} />
    </>
  );
}
