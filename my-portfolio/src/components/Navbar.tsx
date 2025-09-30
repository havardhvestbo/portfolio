"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import type { NavLink as NavItem, SocialLink } from "@/types/portfolio";

type NavbarProps = {
  navLinks: NavItem[];
  social: Record<string, SocialLink>;
};

type LinkProps = NavItem & {
  onClick?: () => void;
};

function NavLink({ href, label, onClick }: LinkProps) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 rounded-lg transition hover:bg-white/5 block ${active ? "bg-white/10" : ""}`}
    >
      {label}
    </Link>
  );
}

export function Navbar({ navLinks, social }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const github = social?.github;
  const linkedin = social?.linkedin;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-background/80">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="font-semibold">Håvard</span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3 text-lg">
            {github && (
              <Link
                href={github.url}
                aria-label={github.label}
                className="opacity-80 hover:opacity-100"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </Link>
            )}
            {linkedin && (
              <Link
                href={linkedin.url}
                aria-label={linkedin.label}
                className="opacity-80 hover:opacity-100"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </Link>
            )}
          </div>

          <button
            className="sm:hidden text-xl"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden border-t border-white/10 bg-background/95 px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} onClick={() => setOpen(false)} />
          ))}
        </div>
      )}
    </header>
  );
}
