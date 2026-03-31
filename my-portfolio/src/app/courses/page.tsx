import type { Metadata } from "next";
import { CardSurface } from "@/components/CardSurface";
import { PageTransition } from "@/components/PageTransition";
import { TechChips } from "@/components/TechChips";
import { getCourses } from "@/lib/api";
import type { Course, CourseCategory, CourseLevel, CourseSemester } from "@/types/portfolio";

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

  return {
    borderRadius: "9999px",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
    fontWeight: 600,
    backgroundColor: isPositive ? "rgba(34,197,94,0.24)" : "rgba(250,204,21,0.18)",
    color: isPositive ? "#4ade80" : "#facc15",
    border: isPositive ? "1px solid rgba(74,222,128,0.28)" : "1px solid rgba(250,204,21,0.18)",
  };
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
          <CardSurface as="li" key={course.id} hover className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-mono text-overlay-text-muted">{course.code}</span>
                  {course.grade && (
                    <span className="px-2 py-0.5 text-xs" style={getGradeBadgeStyle(course.grade)}>
                      {course.grade}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold">{course.title}</h3>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted">
              <span>{course.institution}</span>
              {semester && <span>{semester}</span>}
              {credits && <span>{credits}</span>}
            </div>

            {course.description && (
              <p className="mt-3 text-sm text-overlay-text">{course.description}</p>
            )}

            {course.topics && course.topics.length > 0 && (
              <div className="mt-4">
                <TechChips items={course.topics} max={6} />
              </div>
            )}
          </CardSurface>
        );
      })}
    </ul>
  );
}

export default async function CoursesPage() {
  let courses: Course[] = [];

  try {
    courses = await getCourses();
  } catch (error) {
    console.error("Failed to load courses", error);
  }

  if (courses.length === 0) {
    return (
      <PageTransition>
        <div className="space-y-4 py-20 text-center">
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted">Course information is unavailable at the moment.</p>
          <a
            href="/courses"
            className="inline-block rounded-xl bg-primary px-5 py-2.5 font-medium text-primary-contrast transition hover:opacity-90"
          >
            Try again
          </a>
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
      <div className="space-y-16">
        <section>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">Courses</h1>
          <p className="mt-3 text-lg text-muted">
            Academic coursework from my Bachelor&apos;s and Master&apos;s degree programs.
          </p>
        </section>

        <section>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CardSurface className="p-5">
              <div className="text-2xl font-bold text-primary">{bachelorCourses.length}</div>
              <div className="text-sm text-muted">Bachelor Courses</div>
            </CardSurface>
            <CardSurface className="p-5">
              <div className="text-2xl font-bold text-primary">{masterCourses.length}</div>
              <div className="text-sm text-muted">Master Courses</div>
            </CardSurface>
            <CardSurface className="p-5">
              <div className="text-2xl font-bold text-primary">{totalECTS}</div>
              <div className="text-sm text-muted">Total ECTS</div>
            </CardSurface>
            <CardSurface className="p-5">
              <div className="text-2xl font-bold text-primary">
                {weightedAverage ? weightedAverage.toFixed(2) : "-"}
              </div>
              <div className="text-sm text-muted">ECTS-weighted average (A=5 to F=0)</div>
            </CardSurface>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Bachelor&apos;s Degree</h2>
          <CourseList courses={bachelorCourses} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Master&apos;s Degree</h2>
          <CourseList courses={masterCourses} />
        </section>

        <section>
          <h2 className="text-2xl font-semibold">By Category</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(coursesByCategory).map(([category, entries]) =>
              entries && entries.length > 0 ? (
                <CardSurface key={category} className="p-5">
                  <h3 className="mb-3 text-lg font-medium capitalize">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h3>
                  <div className="space-y-3">
                    {entries.map((course) => {
                      const semester = formatSemester(course.semester, course.year);

                      return (
                        <div
                          key={course.id}
                          className="border-b border-overlay-border pb-3 last:border-b-0 last:pb-0"
                        >
                          <div className="font-medium">{course.title}</div>
                          <div className="mt-1 text-xs text-muted">
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
    </PageTransition>
  );
}
