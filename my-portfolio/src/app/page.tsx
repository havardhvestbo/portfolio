import Image from "next/image";
import Link from "next/link";
import { personalInfo, featuredProjects, experiences } from "@/data";
import { TechChips } from "@/components/TechChips";

type HighlightItem = {
  id: string;
  title: string;
  description: string;
  kind: "project" | "experience";
};

export default function HomePage() {
  // Find Bouvet summer job by ID (ensure this matches your data entry)
  const bouvet = experiences.find((e) => e.id === "bouvet-asa");

  // Merge featured projects + Bouvet experience into one list
  const highlights: HighlightItem[] = [
    ...featuredProjects.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description ?? "",
      kind: "project" as const,
    })),
    ...(bouvet
      ? [
          {
            id: bouvet.id,
            title: `${bouvet.company} — ${bouvet.title}`,
            description: bouvet.description,
            kind: "experience" as const,
          },
        ]
      : []),
  ];

  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="hero-bg relative grid items-center gap-10 md:grid-cols-[180px_1fr]">
        {/* Replace with your portrait at public/me.jpeg */}
        <div className="relative h-44 w-44 md:h-48 md:w-48 overflow-hidden rounded-2xl ring-2 ring-primary/60 shadow-[0_0_40px_-10px_rgba(250,204,21,0.35)]">
          <Image
            src={personalInfo.image}
            alt={personalInfo.imageAlt}
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>

        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {personalInfo.status}
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            {personalInfo.name}
          </h1>

          <p className="mt-3 max-w-2xl text-white/80 text-lg">
            {personalInfo.title}. {personalInfo.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-xl bg-primary text-black font-medium hover:opacity-90"
            >
              View projects
            </Link>
            <Link
              href="/cv"
              className="px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5"
            >
              View CV
            </Link>
          </div>

          {/* Stack */}
          <div className="mt-6">
            <div className="text-sm opacity-75">Stack:</div>
            <TechChips items={personalInfo.technologies} max={8} className="mt-2" />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section>
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <Link href="/projects" className="text-sm link-underline">
            See all
          </Link>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <li
              key={item.id}
              className="group rounded-2xl border border-white/10 p-5 hover:border-white/20 hover:shadow-[0_0_30px_-15px_rgba(250,204,21,0.45)] transition"
            >
              <div className="mb-2">
                <span className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide opacity-80">
                  {item.kind === "project" ? "Project" : "Experience"}
                </span>
              </div>

              <h3 className="text-lg font-medium group-hover:text-primary">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-white/70">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
