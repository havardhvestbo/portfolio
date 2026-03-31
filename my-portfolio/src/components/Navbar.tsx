"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { NavLink as NavItem, SocialLink } from "@/types/portfolio";

type NavbarProps = {
  navLinks: NavItem[];
  social: Record<string, SocialLink>;
};

type NavigationLinkProps = {
  link: NavItem;
  active: boolean;
  onClick?: () => void;
};

function NavigationLink({ link, active, onClick }: NavigationLinkProps) {
  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={[
        "rounded-full px-3 py-2 text-[13px] uppercase tracking-[0.08em] transition-colors duration-200",
        active ? "text-primary" : "text-copy hover:text-primary",
      ].join(" ")}
    >
      {link.label}
    </Link>
  );
}

export function Navbar({ navLinks, social }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const primaryLinks = useMemo(
    () => navLinks.filter((link) => link.group === "primary"),
    [navLinks],
  );
  const secondaryLinks = useMemo(
    () => navLinks.filter((link) => link.group === "secondary"),
    [navLinks],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink = mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const github = social.github;
  const linkedin = social.linkedin;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border-light/80 bg-[var(--navbar-bg)] backdrop-blur-md">
        <div className="editorial-container flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-1 font-serif text-xl font-semibold tracking-[-0.02em] text-foreground">
            <span>havard</span>
            <span className="text-primary">.</span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
            {primaryLinks.map((link) => (
              <NavigationLink key={link.href} link={link} active={false} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            {secondaryLinks.map((link) => (
              <NavigationLink
                key={link.href}
                link={link}
                active={pathname === link.href}
              />
            ))}

            <div className="mx-2 h-6 w-px bg-border-light" />

            <ThemeToggle />

            <div className="ml-1 flex items-center gap-3 text-muted">
              {github ? (
                <Link
                  href={github.url}
                  aria-label={github.label}
                  className="transition-colors duration-200 hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="h-4 w-4" />
                </Link>
              ) : null}
              {linkedin ? (
                <Link
                  href={linkedin.url}
                  aria-label={linkedin.label}
                  className="transition-colors duration-200 hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="h-4 w-4" />
                </Link>
              ) : null}
            </div>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-copy hover:border-primary hover:text-primary"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            className="absolute inset-0 bg-[rgba(20,16,10,0.18)]"
            onClick={() => setOpen(false)}
          />

          <div
            ref={mobileMenuRef}
            className="absolute right-0 top-0 h-full w-[min(22rem,90vw)] border-l border-border bg-background px-6 pb-8 pt-20 shadow-[0_20px_60px_rgba(20,16,10,0.18)]"
          >
            <div className="space-y-8">
              <div>
                <p className="section-kicker">Navigate</p>
                <div className="mt-4 space-y-2">
                  {primaryLinks.map((link) => (
                    <NavigationLink key={link.href} link={link} active={false} onClick={() => setOpen(false)} />
                  ))}
                </div>
              </div>

              <div>
                <p className="section-kicker">Detail Pages</p>
                <div className="mt-4 space-y-2">
                  {secondaryLinks.map((link) => (
                    <NavigationLink
                      key={link.href}
                      link={link}
                      active={pathname === link.href}
                      onClick={() => setOpen(false)}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted">
                {github ? (
                  <Link
                    href={github.url}
                    aria-label={github.label}
                    className="transition-colors duration-200 hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="h-5 w-5" />
                  </Link>
                ) : null}
                {linkedin ? (
                  <Link
                    href={linkedin.url}
                    aria-label={linkedin.label}
                    className="transition-colors duration-200 hover:text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
