import type { Metadata } from "next";
import { getEducation, getExperiences, getSkills } from "@/lib/api";
import { PageTransition } from "@/components/PageTransition";
import type { Education, Experience, Skill } from "@/types/portfolio";

export const metadata: Metadata = {
  title: "CV",
  description: "Håvard's professional experience, education, and skills.",
};

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

  const groupedSkills = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    acc[skill.category] = acc[skill.category] ?? [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <PageTransition>
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl font-bold">Curriculum Vitae</h1>
          <p className="mt-2 text-muted">
            My professional experience, education, and skills.
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp) => {
              const isBouvet = exp.id === "bouvet-asa";
              return (
                <div
                  key={exp.id}
                  className={`rounded-2xl border p-6 transition-all ${
                    isBouvet
                      ? "border-primary/30 bg-primary/5 shadow-[0_0_30px_-15px_var(--color-glow)] ring-1 ring-primary/20"
                      : "border-overlay-border"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        {isBouvet && (
                          <span className="rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className={isBouvet ? "text-primary font-medium" : "text-primary"}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-overlay-text-muted">{exp.period}</span>
                  </div>
                  <p className="mt-3 text-overlay-text">{exp.description}</p>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-lg border px-2 py-1 text-xs ${
                            isBouvet
                              ? "border-primary/20 bg-primary/10 text-primary"
                              : "border-overlay-border bg-overlay-bg"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {experiences.length === 0 && (
              <p className="text-muted">Experience data is unavailable right now.</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-2xl border border-overlay-border p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-primary">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-overlay-text-muted">{edu.period}</span>
                </div>
                {edu.description && (
                  <p className="mt-3 text-overlay-text">{edu.description}</p>
                )}
                {edu.gpa && (
                  <p className="mt-2 text-sm text-muted">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}

            {education.length === 0 && (
              <p className="text-muted">Education data is unavailable right now.</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div
                key={category}
                className="rounded-2xl border border-overlay-border p-6"
              >
                <h3 className="text-lg font-semibold capitalize mb-3">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-lg border border-overlay-border bg-overlay-bg px-3 py-1.5 text-sm"
                    >
                      {skill.name}
                      {skill.level && (
                        <span className="ml-1 text-xs text-overlay-text-muted">
                          ({skill.level})
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
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
