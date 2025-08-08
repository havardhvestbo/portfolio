"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link
      href={href}
      className={
        "px-3 py-2 rounded-lg transition hover:bg-white/5 " + (active ? "bg-white/10" : "")
      }
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-background/80">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <span className="font-semibold">Håvard</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.href} {...l} />
          ))}
        </nav>
        <div className="flex items-center gap-3 text-lg">
          <Link
            href="https://github.com/havardhvestbo"
            aria-label="GitHub"
            className="opacity-80 hover:opacity-100"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/h%C3%A5vard-hetland-vestb%C3%B8-0a9324151/"
            aria-label="LinkedIn"
            className="opacity-80 hover:opacity-100"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </header>
  );
}