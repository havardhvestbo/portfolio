import { getPersonalInfo } from "@/lib/api";
import type { PersonalInfo } from "@/types/portfolio";

export default async function AboutPage() {
  let personalInfo: PersonalInfo | null = null;

  try {
    personalInfo = await getPersonalInfo();
  } catch (error) {
    console.error("Failed to load personal info", error);
  }

  return (
    <div className="space-y-16">
      <section>
        <h2 className="text-2xl font-semibold">About Me</h2>
        <div className="mt-6 space-y-4 text-white/80 text-lg leading-relaxed">
          <p>
            I’m {personalInfo?.name ?? "a Norwegian engineering student"}, originally from Varhaug just south of Stavanger,
            and currently pursuing an MSc in Management of Technology after a BSc in Computer Engineering.
            I’m aiming for a career as a full-stack developer or tech/project lead — roles where I can
            combine hands-on coding with guiding teams and seeing the bigger picture.
          </p>
          <p>
            Recently, I worked as a frontend summer intern at Bouvet ASA on a client project for Bane NOR,
            building React + React Router + TypeScript features in a collaborative team at their Oslo office.
            It gave me a taste of delivering production-ready code while keeping accessibility,
            maintainability, and deadlines in mind.
          </p>
          <p>
            I love solving problems, creating applications that make life easier, and working with others
            to bring ideas to life. My mix of software development skills and technology management
            training gives me an eye for the whole process — from initial concept to final deployment
            (and the inevitable “can we just add one more thing?” meeting).
          </p>
          <p>
            Outside of work and study, you’ll usually find me skiing or hiking — and during my exchange
            semester in Australia, attempting to stay on a surfboard for more than five seconds.
            Whether on the slopes, in the ocean, or in a codebase, I enjoy challenges that push me to grow.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">What I Value</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          <li className="rounded-xl border border-white/10 p-4">Teamwork and knowledge sharing</li>
          <li className="rounded-xl border border-white/10 p-4">Clear, maintainable code</li>
          <li className="rounded-xl border border-white/10 p-4">User-first, accessible design</li>
          <li className="rounded-xl border border-white/10 p-4">Solving real problems, not just “cool” ones</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Let’s Connect</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {personalInfo?.social?.github && (
            <a
              href={personalInfo.social.github.url}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5 font-medium transition"
            >
              GitHub
            </a>
          )}
          {personalInfo?.social?.linkedin && (
            <a
              href={personalInfo.social.linkedin.url}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5 font-medium transition"
            >
              LinkedIn
            </a>
          )}
          <a
            href="mailto:havardvestbo@icloud.com"
            className="px-5 py-2.5 rounded-xl bg-primary text-black font-medium hover:opacity-90 transition"
          >
            Email me
          </a>
        </div>
      </section>
    </div>
  );
}
