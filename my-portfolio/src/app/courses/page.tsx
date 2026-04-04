import type { Metadata } from "next";
import { getCourses, loadPortfolioData } from "@/entities/portfolio/api/portfolio-api";
import type { Course, CourseCategory, CourseLevel, CourseSemester } from "@/entities/portfolio/model/portfolio";
import { CardSurface } from "@/shared/ui/CardSurface";
import { PageTransition } from "@/shared/ui/PageTransition";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { TechPill } from "@/shared/ui/TechPill";

export const metadata: Metadata = {
  title: "Courses",
  description: "Academic coursework from Håvard's Bachelor's and Master's degrees.",
};

type CoursesByCategory = Partial<Record<CourseCategory, Course[]>>;

const letterToPoints: Record<string, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

const positiveGrades = new Set(["A", "B", "PASSED", "PASS"]);
const formatCategoryLabel = (value: string) =>
  value.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase()).trim();

const formatCredits = (credits?: number) => (credits ? `${credits} ECTS` : "");

const formatSemester = (semester?: CourseSemester, year?: string) =>
  semester && year
    ? `${semester.charAt(0).toUpperCase() + semester.slice(1)} ${year}`
    : year || "";

const groupByLevel = (courses: Course[], level: CourseLevel) =>
  courses.filter((course) => course.level === level);

const buildCategories = (courses: Course[]): CoursesByCategory => {
  const buckets: CoursesByCategory = {};

  for (const course of courses) {
    const key = course.category;
    if (!buckets[key]) {
      buckets[key] = [];
    }
    buckets[key]!.push(course);
  }

  return buckets;
};

const getGradeBadgeStyle = (grade?: string) => {
  const isPositive = grade ? positiveGrades.has(grade.trim().toUpperCase()) : false;

  return ["grade-badge", isPositive ? "grade-badge-positive" : "grade-badge-default"].join(" ");
};

function calcWeightedAverageECTS(courses: Course[]) {
  let points = 0;
  let ects = 0;

  for (const course of courses) {
    if (!course.grade || !(course.grade in letterToPoints) || !course.credits) {
      continue;
    }

    points += letterToPoints[course.grade] * course.credits;
    ects += course.credits;
  }

  if (ects === 0) {
    return null;
  }

  return points / ects;
}

function CourseList({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return <p className="mt-6 text-muted">No courses available in this section right now.</p>;
  }

  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {courses.map((course) => {
        const semester = formatSemester(course.semester, course.year);
        const credits = formatCredits(course.credits);

        return (
          <CardSurface as="li" key={course.id} hover className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-mono text-muted">{course.code}</span>
                  {course.grade && (
                    <span className={getGradeBadgeStyle(course.grade)}>
                      {course.grade}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-medium leading-7 text-foreground">{course.title}</h3>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted">
              <span>{course.institution}</span>
              {semester && <span>{semester}</span>}
              {credits && <span>{credits}</span>}
            </div>

            {course.description && (
              <p className="mt-4 text-sm leading-7 text-copy">{course.description}</p>
            )}

            {course.topics && course.topics.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {course.topics.slice(0, 6).map((topic) => (
                  <TechPill key={topic}>{topic}</TechPill>
                ))}
              </div>
            )}
          </CardSurface>
        );
      })}
    </ul>
  );
}

export default async function CoursesPage() {
  const courses = await loadPortfolioData("courses page data", () => getCourses(), []);

  if (courses.length === 0) {
    return (
      <PageTransition>
        <div className="editorial-section">
          <div className="editorial-container text-center">
            <SectionHeading
              align="center"
              eyebrow="Academic Record"
              title="Courses"
              intro="Course information is unavailable at the moment."
            />
          </div>
        </div>
      </PageTransition>
    );
  }

  const bachelorCourses = groupByLevel(courses, "bachelor");
  const masterCourses = groupByLevel(courses, "master");
  const coursesByCategory = buildCategories(courses);
  const totalECTS = courses.reduce((sum, course) => sum + (course.credits ?? 0), 0);
  const weightedAverage = calcWeightedAverageECTS(courses);

  return (
    <PageTransition>
      <div className="editorial-section">
        <div className="editorial-container space-y-16">
          <section>
            <SectionHeading
              eyebrow="Academic Record"
              title="Courses"
              intro="Academic coursework from my Bachelor’s and Master’s degree programs."
            />
          </section>

          <section>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CardSurface className="p-5">
                <div className="text-3xl font-medium text-primary">{bachelorCourses.length}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Bachelor Courses</div>
            </CardSurface>
            <CardSurface className="p-5">
                <div className="text-3xl font-medium text-primary">{masterCourses.length}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Master Courses</div>
            </CardSurface>
            <CardSurface className="p-5">
                <div className="text-3xl font-medium text-primary">{totalECTS}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">Total ECTS</div>
            </CardSurface>
            <CardSurface className="p-5">
                <div className="text-3xl font-medium text-primary">
                {weightedAverage ? weightedAverage.toFixed(2) : "-"}
              </div>
                <div className="mt-2 text-sm uppercase tracking-[0.12em] text-muted">ECTS-weighted Average</div>
              </CardSurface>
            </div>
          </section>

          <section>
            <SectionHeading eyebrow="Undergraduate" title="Bachelor’s Degree" />
            <CourseList courses={bachelorCourses} />
          </section>

          <section>
            <SectionHeading eyebrow="Graduate" title="Master’s Degree" />
            <CourseList courses={masterCourses} />
          </section>

          <section>
            <SectionHeading eyebrow="Browse" title="By Category" />
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(coursesByCategory).map(([category, entries]) =>
              entries && entries.length > 0 ? (
                  <CardSurface key={category} className="p-5 md:p-6">
                    <p className="section-kicker">{formatCategoryLabel(category)}</p>
                    <h3 className="mt-3 text-lg font-medium text-foreground">
                      {formatCategoryLabel(category)}
                    </h3>
                    <div className="mt-5 space-y-4">
                    {entries.map((course) => {
                      const semester = formatSemester(course.semester, course.year);

                      return (
                        <div
                          key={course.id}
                            className="border-b border-border-light pb-4 last:border-b-0 last:pb-0"
                        >
                            <div className="font-medium text-foreground">{course.title}</div>
                            <div className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                            {course.code}
                            {semester ? ` • ${semester}` : ""}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardSurface>
              ) : null
            )}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
