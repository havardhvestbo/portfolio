"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { navLinks, personalInfo } from "@/data";

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={
        "px-3 py-2 rounded-lg transition hover:bg-white/5 block " +
        (active ? "bg-white/10" : "")
      }
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-background/80">
      <div className="container-page flex items-center justify-between py-3">
        {/* Left: logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="font-semibold">Håvard</span>
        </Link>

        {/* Center (desktop): nav links */}
        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>

        {/* Right cluster: icons (always visible) + hamburger (mobile) */}
        <div className="flex items-center gap-3">
          {/* Social icons: always visible, left of the hamburger on mobile */}
          <div className="flex items-center gap-3 text-lg">
            <Link
              href={personalInfo.social.github.url}
              aria-label={personalInfo.social.github.label}
              className="opacity-80 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </Link>
            <Link
              href={personalInfo.social.linkedin.url}
              aria-label={personalInfo.social.linkedin.label}
              className="opacity-80 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </Link>
          </div>

          {/* Hamburger: only on mobile, aligned to the far right */}
          <button
            className="sm:hidden text-xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown: only the page links */}
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-background/95 px-4 py-3 space-y-2">
          {navLinks.map((l) => (
            <NavLink key={l.href} {...l} onClick={() => setOpen(false)} />
          ))}
        </div>
      )}
    </header>
  );
}
