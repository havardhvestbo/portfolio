"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { NavLink as NavItem, SocialLink } from "@/entities/portfolio/model/portfolio";

type NavbarProps = {
  navLinks: NavItem[];
  social: Record<string, SocialLink>;
};

type NavigationLinkProps = {
  link: NavItem;
  active: boolean;
  onClick?: () => void;
};

type DrawerNavigationLinkProps = {
  link: NavItem;
  emphasis: "primary" | "secondary";
  active?: boolean;
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

function DrawerNavigationLink({
  link,
  emphasis,
  active = false,
  onClick,
}: DrawerNavigationLinkProps) {
  if (emphasis === "primary") {
    return (
      <Link href={link.href} onClick={onClick} className="mobile-nav-primary-link">
        {link.label}
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      onClick={onClick}
      className={[
        "mobile-nav-secondary-link",
        active ? "mobile-nav-secondary-link-active" : "",
      ].join(" ")}
    >
      <span>{link.label}</span>
      <span aria-hidden className="mobile-nav-secondary-link-mark" />
    </Link>
  );
}

export function Navbar({ navLinks, social }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollYRef = useRef(0);

  const primaryLinks = useMemo(
    () => navLinks.filter((link) => link.group === "primary"),
    [navLinks],
  );
  const secondaryLinks = useMemo(
    () => navLinks.filter((link) => link.group === "secondary"),
    [navLinks],
  );

  const openMenu = () => {
    setIsVisible(true);
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (!open) {
      return;
    }

    const { body } = document;
    const originalOverflow = body.style.overflow;
    const originalMobileNavOpen = body.dataset.mobileNavOpen;
    body.style.overflow = "hidden";
    body.dataset.mobileNavOpen = "true";
    const firstFocusable = mobileMenuRef.current?.querySelector<HTMLElement>(
      "button, a, [tabindex]:not([tabindex='-1'])",
    );
    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      body.style.overflow = originalOverflow;
      if (originalMobileNavOpen === undefined) {
        delete body.dataset.mobileNavOpen;
      } else {
        body.dataset.mobileNavOpen = originalMobileNavOpen;
      }
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    let ticking = false;

    const updateVisibility = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 24) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollYRef.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollYRef.current) {
        setIsVisible(false);
      }

      lastScrollYRef.current = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const github = social.github;
  const linkedin = social.linkedin;

  return (
    <>
      <header
        aria-hidden={open}
        className={[
          "fixed inset-x-0 top-0 z-50 border-b border-border-light/80 bg-[var(--navbar-bg)] backdrop-blur-md transition-[transform,opacity] duration-300 ease-out will-change-transform",
          open
            ? "translate-y-0 opacity-0 pointer-events-none"
            : isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-100",
        ].join(" ")}
      >
        <div className="editorial-container flex h-16 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center gap-1 font-serif text-xl font-semibold tracking-[-0.02em] text-foreground">
            <span>Håvard</span>
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
            {open ? (
              <span aria-hidden className="inline-flex h-10 w-10 shrink-0" />
            ) : (
              <button
                type="button"
                onClick={openMenu}
                aria-expanded={false}
                aria-label="Open navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-copy hover:border-primary hover:text-primary"
              >
                <Menu className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </header>

      {open ? (
        <div className="mobile-nav-overlay fixed inset-0 z-[80] isolate lg:hidden">
          <button
            type="button"
            aria-label="Close navigation overlay"
            className="mobile-nav-backdrop fixed inset-0 z-0"
            onClick={closeMenu}
          />

          <div
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="mobile-nav-sheet fixed inset-y-0 right-0 z-10 flex h-full w-[min(24rem,92vw)] flex-col overflow-y-auto overscroll-contain px-5 pb-6 pt-6 sm:px-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker">Menu</p>
                <p className="mt-3 font-serif text-3xl leading-none tracking-[-0.03em] text-foreground">
                  Navigate
                </p>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-copy hover:border-primary hover:text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 flex flex-1 flex-col">
              <div>
                <p className="section-kicker">Navigate</p>
                <div className="mt-5 space-y-1">
                  {primaryLinks.map((link) => (
                    <DrawerNavigationLink
                      key={link.href}
                      link={link}
                      emphasis="primary"
                      onClick={closeMenu}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <p className="section-kicker">Detail Pages</p>
                <div className="mt-5 space-y-3">
                  {secondaryLinks.map((link) => (
                    <DrawerNavigationLink
                      key={link.href}
                      link={link}
                      emphasis="secondary"
                      active={pathname === link.href}
                      onClick={closeMenu}
                    />
                  ))}
                </div>
              </div>

              <div className="mobile-nav-utility">
                <div className="flex items-center justify-between gap-4">
                  <p className="section-kicker">Elsewhere</p>
                  <div className="flex items-center gap-3">
                    {github ? (
                      <Link
                        href={github.url}
                        aria-label={github.label}
                        className="mobile-nav-social-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaGithub className="h-[18px] w-[18px]" />
                      </Link>
                    ) : null}
                    {linkedin ? (
                      <Link
                        href={linkedin.url}
                        aria-label={linkedin.label}
                        className="mobile-nav-social-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaLinkedin className="h-[18px] w-[18px]" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
