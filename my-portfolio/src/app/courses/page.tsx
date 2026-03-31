import type { Metadata } from "next";
import { TechChips } from "@/components/TechChips";
import { getCourses } from "@/lib/api";
import { PageTransition } from "@/components/PageTransition";
import type { Course, CourseCategory, CourseLevel, CourseSemester } from "@/types/portfolio";

export const metadata: Metadata = {
  title: "Courses",
  description: "Academic coursework from Håvard's Bachelor's and Master's degrees.",
};

type CoursesByCategory = Partial<Record<CourseCategory, Course[]>>;

const formatCredits = (credits?: number) => (credits ? `${credits} ECTS` : "");

const formatSemester = (semester?: CourseSemester, year?: string) =>
  semester && year
    ? `${semester.charAt(0).toUpperCase() + semester.slice(1)} ${year}`
    : year || "";

const letterToPoints: Record<string, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};

function calcWeightedAverageECTS(courses: Course[]) {
  let points = 0;
  let ects = 0;

  for (const course of courses) {
    if (!course.grade || !(course.grade in letterToPoints) || !course.credits) continue;
    points += letterToPoints[course.grade] * course.credits;
    ects += course.credits;
  }

  if (ects === 0) return null;
  return points / ects;
}

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

export default async function CoursesPage() {
  let courses: Course[] = [];

  try {
    courses = await getCourses();
  } catch (error) {
    console.error("Failed to load courses", error);
  }

  if (courses.length === 0) {
    return (
      <div className="space-y-4 text-center py-20">
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="text-muted">Course information is unavailable at the moment.</p>
        <a href="/courses" className="inline-block mt-2 px-5 py-2.5 rounded-xl bg-primary text-primary-contrast font-medium hover:opacity-90 transition">
          Try again
        </a>
      </div>
    );
  }

  const bachelorCourses = groupByLevel(courses, "bachelor");
  const masterCourses = groupByLevel(courses, "master");
  const coursesByCategory = buildCategories(courses);
  const totalECTS = courses.reduce((sum, course) => sum + (course.credits ?? 0), 0);
  const weightedAvg = calcWeightedAverageECTS(courses);

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Courses</h1>
        <p className="mt-3 text-white/80 text-lg">
          Academic coursework from my Bachelor&apos;s and Master&apos;s degree programs.
        </p>
      </section>

      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="card p-5">
            <div className="text-2xl font-bold text-primary">{bachelorCourses.length}</div>
            <div className="text-sm text-white/70">Bachelor Courses</div>
          </div>
          <div className="card p-5">
            <div className="text-2xl font-bold text-primary">{masterCourses.length}</div>
            <div className="text-sm text-white/70">Master Courses</div>
          </div>
          <div className="card p-5">
            <div className="text-2xl font-bold text-primary">{totalECTS}</div>
            <div className="text-sm text-white/70">Total ECTS</div>
          </div>
          <div className="card p-5">
            <div className="text-2xl font-bold text-primary">
              {weightedAvg ? weightedAvg.toFixed(2) : "—"}
            </div>
            <div className="rounded-2xl border border-overlay-border p-5">
              <div className="text-2xl font-bold text-primary">{totalECTS}</div>
              <div className="text-sm text-muted">Total ECTS</div>
            </div>
            <div className="rounded-2xl border border-overlay-border p-5">
              <div className="text-2xl font-bold text-primary">
                {weightedAvg ? weightedAvg.toFixed(2) : "—"}
              </div>
              <div className="text-sm text-muted">
                ECTS‑weighted average (A=5…F=0)
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Bachelor&apos;s Degree</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {bachelorCourses.map((course) => (
            <li
              key={course.id}
              className="card card-hover group p-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-white/50">{course.code}</span>
                    {course.grade && (
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary">
                        {course.grade}
                      </span>
                    )}
                  </div>
                </div>

                {course.description && (
                  <p className="mt-2 text-sm text-muted">{course.description}</p>
                )}

              {course.topics && course.topics.length > 0 && (
                <div className="mt-3">
                  <TechChips items={course.topics} max={6} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Master&apos;s Degree</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {masterCourses.map((course) => (
            <li
              key={course.id}
              className="card card-hover group p-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-white/50">{course.code}</span>
                    {course.grade && (
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary">
                        {course.grade}
                      </span>
                    )}
                  </div>
                </div>

                {course.description && (
                  <p className="mt-2 text-sm text-muted">{course.description}</p>
                )}

              {course.topics && course.topics.length > 0 && (
                <div className="mt-3">
                  <TechChips items={course.topics} max={6} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">By Category</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(coursesByCategory).map(([category, entries]) =>
            entries && entries.length > 0 ? (
              <div key={category} className="card p-5">
                <h3 className="text-lg font-medium capitalize mb-3">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="space-y-2">
                  {entries.map((course) => (
                    <div key={course.id} className="text-sm">
                      <div className="font-medium">{course.title}</div>
                      <div className="text-white/50 text-xs">
                        {course.code} • {formatSemester(course.semester, course.year)}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
