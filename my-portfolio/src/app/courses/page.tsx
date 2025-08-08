import { courses } from "@/data";
import { TechChips } from "@/components/TechChips";

type Level = "bachelor" | "master" | "phd" | "certificate" | "online";
type Category =
  | "programming"
  | "mathematics"
  | "engineering"
  | "management"
  | "research"
  | "design"
  | "other";

// ---- Local helpers (avoid importing missing exports) ----
const getCoursesByLevel = (level: Level) =>
  courses.filter((c) => c.level === level);

const getCoursesByCategory = (category: Category) =>
  courses.filter((c) => c.category === category);

const formatCredits = (credits?: number) => (credits ? `${credits} ECTS` : "");

const formatSemester = (
  semester?: "spring" | "fall" | "summer",
  year?: string
) =>
  semester && year
    ? `${semester.charAt(0).toUpperCase() + semester.slice(1)} ${year}`
    : year || "";

// ECTS-weighted average (A=5, B=4, C=3, D=2, E=1, F=0). Ignores Pass/No grade.
const letterToPoints: Record<string, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
  F: 0,
};
function calcWeightedAverageECTS() {
  let pts = 0;
  let ects = 0;
  for (const c of courses) {
    if (!c.grade || !(c.grade in letterToPoints) || !c.credits) continue;
    pts += letterToPoints[c.grade] * c.credits;
    ects += c.credits;
  }
  if (ects === 0) return null;
  return pts / ects;
}

export default function CoursesPage() {
  const bachelorCourses = getCoursesByLevel("bachelor");
  const masterCourses = getCoursesByLevel("master");

  const coursesByCategory: Partial<Record<Category, typeof courses>> = {
    programming: getCoursesByCategory("programming"),
    mathematics: getCoursesByCategory("mathematics"),
    engineering: getCoursesByCategory("engineering"),
    management: getCoursesByCategory("management"),
    research: getCoursesByCategory("research"),
    // include the others if you later add them:
    // design: getCoursesByCategory("design"),
    // other: getCoursesByCategory("other"),
  };

  const totalECTS = courses.reduce((sum, c) => sum + (c.credits || 0), 0);
  const weightedAvg = calcWeightedAverageECTS();

  return (
    <div className="space-y-16">
      {/* HEADER */}
      <section>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">Courses</h1>
        <p className="mt-3 text-white/80 text-lg">
          Academic coursework from my Bachelor&apos;s and Master&apos;s degree programs.
        </p>
      </section>

      {/* OVERVIEW STATS */}
      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 p-5">
            <div className="text-2xl font-bold text-primary">{bachelorCourses.length}</div>
            <div className="text-sm text-white/70">Bachelor Courses</div>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <div className="text-2xl font-bold text-primary">{masterCourses.length}</div>
            <div className="text-sm text-white/70">Master Courses</div>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <div className="text-2xl font-bold text-primary">{totalECTS}</div>
            <div className="text-sm text-white/70">Total ECTS</div>
          </div>
          <div className="rounded-2xl border border-white/10 p-5">
            <div className="text-2xl font-bold text-primary">
              {weightedAvg ? weightedAvg.toFixed(2) : "—"}
            </div>
            <div className="text-sm text-white/70">
              ECTS‑weighted average (A=5…F=0)
            </div>
          </div>
        </div>
      </section>

      {/* BACHELOR'S COURSES */}
      <section>
        <h2 className="text-2xl font-semibold">Bachelor&apos;s Degree</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {bachelorCourses.map((course) => (
            <li
              key={course.id}
              className="group rounded-2xl border border-white/10 p-5 hover:border-white/20 hover:shadow-[0_0_30px_-15px_rgba(250,204,21,0.45)] transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-white/50">
                      {course.code}
                    </span>
                    {course.grade && (
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary">
                        {course.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-medium group-hover:text-primary">{course.title}</h3>
                  <p className="text-sm text-primary">{course.institution}</p>
                </div>
                <div className="text-right text-sm text-white/70">
                  <div>{formatSemester(course.semester, course.year)}</div>
                  <div>{formatCredits(course.credits)}</div>
                </div>
              </div>

              {course.description && (
                <p className="mt-2 text-sm text-white/70">{course.description}</p>
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

      {/* MASTER'S COURSES */}
      <section>
        <h2 className="text-2xl font-semibold">Master&apos;s Degree</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {masterCourses.map((course) => (
            <li
              key={course.id}
              className="group rounded-2xl border border-white/10 p-5 hover:border-white/20 hover:shadow-[0_0_30px_-15px_rgba(250,204,21,0.45)] transition"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-white/50">
                      {course.code}
                    </span>
                    {course.grade && (
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary">
                        {course.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-medium group-hover:text-primary">{course.title}</h3>
                  <p className="text-sm text-primary">{course.institution}</p>
                </div>
                <div className="text-right text-sm text-white/70">
                  <div>{formatSemester(course.semester, course.year)}</div>
                  <div>{formatCredits(course.credits)}</div>
                </div>
              </div>

              {course.description && (
                <p className="mt-2 text-sm text-white/70">{course.description}</p>
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

      {/* COURSES BY CATEGORY */}
      <section>
        <h2 className="text-2xl font-semibold">By Category</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(coursesByCategory).map(([category, categoryCourses]) =>
            categoryCourses && categoryCourses.length > 0 ? (
              <div
                key={category}
                className="rounded-2xl border border-white/10 p-5"
              >
                <h3 className="text-lg font-medium capitalize mb-3">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <div className="space-y-2">
                  {categoryCourses.map((course) => (
                    <div key={course.id} className="text-sm">
                      <div className="font-medium">{course.title}</div>
                      <div className="text-white/50 text-xs">
                        {course.code} • {formatSemester(course.semester, course.year)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>

      {/* NOTE */}
      {/* Remove this once you're happy with the data */}
      {/* <section className="text-center">
        <p className="text-sm text-white/50">
          * Placeholder data - update with your actual course information
        </p>
      </section> */}
    </div>
  );
}
