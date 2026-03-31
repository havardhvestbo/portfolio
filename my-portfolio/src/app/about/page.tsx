import type { Metadata } from "next";
import { CardSurface } from "@/components/CardSurface";
import { PageTransition, StaggerContainer, StaggerItem } from "@/components/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPersonalInfo } from "@/lib/api";
import { fallbackPersonalInfo } from "@/lib/portfolioFallback";
import type { PersonalInfo } from "@/types/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: "Background, values, and editorial profile for Håvard.",
};

export default async function AboutPage() {
  let personalInfo: PersonalInfo = fallbackPersonalInfo;

  try {
    personalInfo = await getPersonalInfo();
  } catch (error) {
    console.error("Failed to load personal info", error);
  }

  return (
    <PageTransition>
      <div className="editorial-section">
        <div className="editorial-container space-y-16">
          <section className="grid gap-10 lg:grid-cols-[minmax(220px,0.32fr)_minmax(0,0.68fr)]">
            <div className="space-y-4">
              <p className="font-serif text-7xl leading-none tracking-[-0.04em] text-primary md:text-[5.5rem]">
                {personalInfo.highlightMetric.value}
              </p>
              <p className="section-kicker">{personalInfo.highlightMetric.label}</p>
            </div>

            <div className="space-y-8">
              <SectionHeading
                eyebrow="Longform Profile"
                title="About"
                intro={personalInfo.title}
              />

              <div className="space-y-5 text-[1.0625rem] leading-8 text-copy">
                {personalInfo.aboutParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Values"
              title="How I like to work"
              intro="The habits and priorities I try to bring into teams, products, and codebases."
            />

            <StaggerContainer className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                "Teamwork and knowledge sharing",
                "Clear, maintainable code",
                "User-first, accessible design",
                "Solving real problems, not just fashionable ones",
              ].map((value) => (
                <StaggerItem key={value}>
                  <CardSurface className="p-6 text-[1rem] leading-7 text-copy">{value}</CardSurface>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>

          <section className="grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(260px,0.35fr)]">
            <CardSurface featured className="p-7">
              <p className="section-kicker">Next Chapter</p>
              <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground">
                {personalInfo.nextRole?.label ?? "Open to the next challenge"}
              </h2>
              {personalInfo.nextRole ? (
                <p className="mt-4 text-[1rem] leading-7 text-copy">
                  Starting at {personalInfo.nextRole.company} in {personalInfo.nextRole.start}.
                </p>
              ) : null}
            </CardSurface>

            <CardSurface className="p-7">
              <p className="section-kicker">Connect</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-4 inline-block font-serif text-2xl italic text-primary"
              >
                {personalInfo.email}
              </a>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                {personalInfo.social.github ? (
                  <a href={personalInfo.social.github.url} target="_blank" rel="noreferrer" className="editorial-link">
                    GitHub
                  </a>
                ) : null}
                {personalInfo.social.linkedin ? (
                  <a href={personalInfo.social.linkedin.url} target="_blank" rel="noreferrer" className="editorial-link">
                    LinkedIn
                  </a>
                ) : null}
              </div>
            </CardSurface>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
