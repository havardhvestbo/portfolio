import type { Metadata } from "next";
import { CardSurface } from "@/components/CardSurface";
import { PageTransition } from "@/components/PageTransition";
import { getEducation, getExperiences, getSkills } from "@/lib/api";
import type { Education, Experience, Skill } from "@/types/portfolio";

export const metadata: Metadata = {
  title: "CV",
  description: "Håvard's professional experience, education, and skills.",
};

function formatCategoryLabel(category: string) {
  return category.replace(/([A-Z])/g, " $1").replace(/^./, (value) => value.toUpperCase()).trim();
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const isBouvet = experience.id === "bouvet-asa";

  return (
    <CardSurface hover featured={isBouvet} className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-overlay-border bg-overlay-bg px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-overlay-text-muted">
              {experience.type}
            </span>
            <h3 className="text-xl font-semibold">{experience.title}</h3>
            {isBouvet && (
              <span className="rounded-full bg-primary/16 px-2 py-1 text-xs font-medium text-primary">
                Featured
              </span>
            )}
          </div>
          <p className="mt-2 text-primary">{experience.company}</p>
        </div>
        <span className="text-sm text-overlay-text-muted">{experience.period}</span>
      </div>

      <p className="mt-3 text-overlay-text">{experience.description}</p>

      {experience.technologies && experience.technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className={`rounded-lg border px-2 py-1 text-xs ${
                isBouvet
                  ? "border-primary/20 bg-primary/10 text-primary"
                  : "border-overlay-border bg-overlay-bg text-overlay-text"
              }`}
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </CardSurface>
  );
}

function EducationCard({ education }: { education: Education }) {
  return (
    <CardSurface hover className="p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{education.degree}</h3>
          <p className="text-primary">{education.institution}</p>
        </div>
        <span className="text-sm text-overlay-text-muted">{education.period}</span>
      </div>

      {education.description && (
        <p className="mt-3 text-overlay-text">{education.description}</p>
      )}

      {education.gpa && (
        <p className="mt-2 text-sm text-muted">GPA: {education.gpa}</p>
      )}
    </CardSurface>
  );
}

export default async function CVPage() {
  let experiences: Experience[] = [];
  let education: Education[] = [];
  let skills: Skill[] = [];

  try {
    [experiences, education, skills] = await Promise.all([
      getExperiences(),
      getEducation(),
      getSkills(),
    ]);
  } catch (error) {
    console.error("Failed to load CV data", error);
  }

  const groupedSkills = skills.reduce<Record<string, Skill[]>>((accumulator, skill) => {
    accumulator[skill.category] = accumulator[skill.category] ?? [];
    accumulator[skill.category].push(skill);
    return accumulator;
  }, {});

  return (
    <PageTransition>
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
          <p className="mt-2 text-muted">My professional experience, education, and skills.</p>
        </div>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
          <div className="space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}

            {experiences.length === 0 && (
              <p className="text-muted">Experience data is unavailable right now.</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Education</h2>
          <div className="space-y-6">
            {education.map((entry) => (
              <EducationCard key={entry.id} education={entry} />
            ))}

            {education.length === 0 && (
              <p className="text-muted">Education data is unavailable right now.</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <CardSurface key={category} className="p-6">
                <h3 className="mb-3 text-lg font-semibold">
                  {formatCategoryLabel(category)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-overlay-border bg-overlay-bg px-3 py-1.5 text-sm"
                    >
                      {skill.name}
                      {skill.level && (
                        <span className="ml-1 text-xs text-muted">({skill.level})</span>
                      )}
                    </span>
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
    </PageTransition>
  );
}
