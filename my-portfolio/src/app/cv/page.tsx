import type { Metadata } from "next";
import { getEducation, getExperiences, getSkills } from "@/entities/portfolio/api/portfolio-api";
import type { Education, Skill } from "@/entities/portfolio/model/portfolio";
import { TimelineEntry } from "@/entities/experience/ui/TimelineEntry";
import { CardSurface } from "@/shared/ui/CardSurface";
import { PageTransition } from "@/shared/ui/PageTransition";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { TechPill } from "@/shared/ui/TechPill";

export const metadata: Metadata = {
  title: "CV",
  description: "Håvard's professional experience, education, and skills.",
};

function formatCategoryLabel(category: string) {
  return category.replace(/([A-Z])/g, " $1").replace(/^./, (value) => value.toUpperCase()).trim();
}

function EducationCard({ education }: { education: Education }) {
  return (
    <CardSurface hover className="p-6 md:p-7">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="section-kicker">Education</p>
          <h3 className="mt-3 text-[1.125rem] font-medium leading-7 text-foreground">{education.degree}</h3>
          <p className="mt-1 text-sm uppercase tracking-[0.12em] text-copy">{education.institution}</p>
        </div>
        <span className="text-sm text-muted">{education.period}</span>
      </div>

      {education.description && (
        <p className="mt-4 text-sm leading-7 text-copy">{education.description}</p>
      )}

      {education.gpa && (
        <p className="mt-2 text-sm text-muted">GPA: {education.gpa}</p>
      )}
    </CardSurface>
  );
}

export default async function CVPage() {
  const [experiences, education, skills] = await Promise.all([
    getExperiences(),
    getEducation(),
    getSkills(),
  ]);

  const groupedSkills = skills.reduce<Record<string, Skill[]>>((accumulator, skill) => {
    accumulator[skill.category] = accumulator[skill.category] ?? [];
    accumulator[skill.category].push(skill);
    return accumulator;
  }, {});

  return (
    <PageTransition>
      <div className="editorial-section">
        <div className="editorial-container space-y-16">
          <SectionHeading
            eyebrow="Curriculum Vitae"
            title="Experience, education, and skills"
            intro="A fuller record of the work, studies, and technical areas that shape how I approach software projects."
          />

          <section className="space-y-8">
            <SectionHeading
              eyebrow="Timeline"
              title="Experience"
              intro="Roles that developed my communication, adaptability, and ability to contribute in teams."
            />

            <div className="space-y-8">
            {experiences.map((experience) => (
                <TimelineEntry
                  key={experience.id}
                  align={experience.id === "bouvet-asa" ? "right" : "left"}
                  period={experience.period}
                  title={experience.title}
                  subtitle={experience.company}
                  description={experience.description}
                  eyebrow={experience.type}
                  technologies={experience.technologies}
                  featured={experience.id === "bouvet-asa"}
                />
            ))}

            {experiences.length === 0 && (
              <p className="text-muted">Experience data is unavailable right now.</p>
            )}
            </div>
          </section>

          <section className="space-y-8">
            <SectionHeading eyebrow="Study" title="Education" />
            <div className="grid gap-6 lg:grid-cols-2">
            {education.map((entry) => (
              <EducationCard key={entry.id} education={entry} />
            ))}

            {education.length === 0 && (
              <p className="text-muted">Education data is unavailable right now.</p>
            )}
            </div>
          </section>

          <section className="space-y-8">
            <SectionHeading eyebrow="Capabilities" title="Skills" />
            <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <CardSurface key={category} className="p-6 md:p-7">
                  <p className="section-kicker">{formatCategoryLabel(category)}</p>
                  <h3 className="mt-3 text-[1.125rem] font-medium leading-7 text-foreground">
                  {formatCategoryLabel(category)}
                </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                      <TechPill key={skill.name}>
                      {skill.name}
                      {skill.level && (
                          <span className="ml-1 text-[11px] uppercase tracking-[0.1em] text-muted">
                            {skill.level}
                          </span>
                      )}
                      </TechPill>
                  ))}
                </div>
              </CardSurface>
            ))}

            {skills.length === 0 && (
              <p className="text-muted">Skill data is unavailable right now.</p>
            )}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
