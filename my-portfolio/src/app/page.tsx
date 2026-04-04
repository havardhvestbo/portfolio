import { getPortfolioSnapshot, loadPortfolioData } from "@/entities/portfolio/api/portfolio-api";
import { PageTransition } from "@/shared/ui/PageTransition";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { AboutSection } from "@/widgets/home/ui/AboutSection";
import { ContactSection } from "@/widgets/home/ui/ContactSection";
import { ExperienceSection } from "@/widgets/home/ui/ExperienceSection";
import { HeroSection } from "@/widgets/home/ui/HeroSection";
import { ProjectsSection } from "@/widgets/home/ui/ProjectsSection";
import { TechMarquee } from "@/widgets/home/ui/TechMarquee";

export default async function HomePage() {
  const snapshot = await loadPortfolioData("homepage snapshot", () => getPortfolioSnapshot(), null);

  if (!snapshot) {
    return (
      <PageTransition>
        <div className="editorial-section">
          <div className="editorial-container">
            <SectionHeading
              eyebrow="Unavailable"
              title="Portfolio data is unavailable"
              intro="The site rendered successfully, but the portfolio API could not be reached while generating this page."
            />
          </div>
        </div>
      </PageTransition>
    );
  }

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
