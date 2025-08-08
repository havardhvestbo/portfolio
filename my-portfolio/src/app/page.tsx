import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="hero-bg relative grid items-center gap-10 md:grid-cols-[180px_1fr]">
        {/* Replace with your portrait at public/me.jpg */}
        <div className="relative h-44 w-44 md:h-48 md:w-48 overflow-hidden rounded-2xl ring-2 ring-primary/60 shadow-[0_0_40px_-10px_rgba(250,204,21,0.35)]">
          <Image
            src="/me.jpeg"
            alt="Portrait of Håvard"
            fill
            className="object-cover"
            sizes="192px"
          />
        </div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Available for projects
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Håvard Vestbø
          </h1>
          <p className="mt-3 max-w-2xl text-white/80 text-lg">
            Computer Engineering (BSc) &amp; Management of Technology (MSc).
            I build clean, pragmatic web apps with a focus on UX and reliability.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/projects" className="px-5 py-2.5 rounded-xl bg-primary text-black font-medium hover:opacity-90">
              View projects
            </Link>
            <Link href="/cv" className="px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5">
              View CV
            </Link>
          </div>
          <div className="mt-6 text-sm opacity-75">
            <span className="mr-2">Stack:</span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1">Next.js</span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 ml-2">TypeScript</span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 ml-2">Tailwind</span>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section>
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Highlights</h2>
          <Link href="/projects" className="text-sm link-underline">See all</Link>
        </div>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Bane NOR – Design System", text: "Integrated DS, bridged gaps with MUI, a11y-focused." },
            { title: "Entur Realtime (SIRI)", text: "Realtime endpoints, subscription flows, monitoring UI." },
            { title: "Bachelor Project", text: "Data collection pipeline with React, .NET MAUI, Spring." },
          ].map((card) => (
            <li key={card.title} className="group rounded-2xl border border-white/10 p-5 hover:border-white/20 hover:shadow-[0_0_30px_-15px_rgba(250,204,21,0.45)] transition">
              <h3 className="text-lg font-medium group-hover:text-primary">{card.title}</h3>
              <p className="mt-2 text-sm text-white/70">{card.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}