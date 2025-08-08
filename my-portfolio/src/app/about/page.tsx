import { personalInfo } from "@/data";

export default function AboutPage() {
  return (
    <div className="space-y-16">
    
      {/* ABOUT SECTION */}
      <section>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <div className="mt-6 space-y-4">
          <p className="text-white/80 text-lg leading-relaxed">
            I&apos;m a passionate developer with a background in Computer Engineering and Management of Technology. 
            I enjoy building user-friendly applications that solve real problems and create meaningful experiences.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            My approach combines technical expertise with strategic thinking, allowing me to not only build 
            great software but also understand the broader business context and user needs.
          </p>
          <p className="text-white/80 text-lg leading-relaxed">
            When I&apos;m not coding, you can find me exploring new technologies, contributing to open source 
            projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </section>

      {/* CONNECT SECTION */}
      <section>
        <h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={personalInfo.social.github.url}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5 font-medium transition"
          >
            GitHub
          </a>
          <a
            href={personalInfo.social.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5 font-medium transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
