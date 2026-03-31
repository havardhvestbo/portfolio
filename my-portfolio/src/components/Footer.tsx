import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { SocialLink } from "@/types/portfolio";

type FooterProps = {
  social: Record<string, SocialLink>;
};

export function Footer({ social }: FooterProps) {
  const github = social?.github;
  const linkedin = social?.linkedin;

  return (
    <footer className="border-t border-overlay-border mt-20">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-sm text-muted">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-primary" />
          <span>&copy; {new Date().getFullYear()} Håvard</span>
        </div>

        <div className="flex items-center gap-4">
          {github && (
            <Link
              href={github.url}
              aria-label={github.label}
              className="opacity-70 hover:opacity-100 transition"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h-4 w-4" />
            </Link>
          )}
          {linkedin && (
            <Link
              href={linkedin.url}
              aria-label={linkedin.label}
              className="opacity-70 hover:opacity-100 transition"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
