// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import type { ComponentProps } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { NavLink, SocialLink } from "@/entities/portfolio/model/portfolio";
import { ThemeToggle } from "@/features/theme-toggle/ui/ThemeToggle";
import { Navbar } from "@/widgets/navigation/ui/Navbar";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: ComponentProps<"a">) => (
    <a href={typeof href === "string" ? href : ""} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/about",
}));

vi.mock("next-themes", () => ({
  useTheme: () => ({
    resolvedTheme: "light",
    setTheme: vi.fn(),
    theme: "light",
  }),
}));

const navLinks: NavLink[] = [
  { href: "/", label: "Home", group: "primary" },
  { href: "/projects", label: "Projects", group: "primary" },
  { href: "/about", label: "About", group: "secondary" },
  { href: "/cv", label: "CV", group: "secondary" },
];

const social: Record<string, SocialLink> = {
  github: { url: "https://github.com/example", label: "GitHub" },
  linkedin: { url: "https://linkedin.com/in/example", label: "LinkedIn" },
};

function renderNavbar() {
  render(
    <>
      <Navbar navLinks={navLinks} social={social} />
      <ThemeToggle />
    </>,
  );
}

async function openMenu() {
  fireEvent.click(screen.getByRole("button", { name: /open navigation menu/i }));
  await screen.findByRole("dialog", { name: /mobile navigation/i });
  await waitFor(() => {
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.body.dataset.mobileNavOpen).toBe("true");
  });
}

async function expectMenuClosed() {
  await waitFor(() => {
    expect(screen.queryByRole("dialog", { name: /mobile navigation/i })).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
    expect(document.body.dataset.mobileNavOpen).toBeUndefined();
  });
}

afterEach(() => {
  cleanup();
  document.body.style.overflow = "";
  delete document.body.dataset.mobileNavOpen;
});

describe("Navbar mobile navigation", () => {
  it("shows a single close control and marks the body as open", async () => {
    renderNavbar();

    await openMenu();

    expect(document.querySelector("header")).toHaveAttribute("aria-hidden", "true");
    expect(screen.queryByRole("button", { name: /open navigation menu/i })).not.toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /close navigation menu/i })).toHaveLength(1);
  });

  it("closes from the drawer close button and restores body state", async () => {
    renderNavbar();

    await openMenu();
    fireEvent.click(screen.getByRole("button", { name: /close navigation menu/i }));

    await expectMenuClosed();
  });

  it("closes from the backdrop", async () => {
    renderNavbar();

    await openMenu();
    fireEvent.click(screen.getByRole("button", { name: /close navigation overlay/i }));

    await expectMenuClosed();
  });

  it("closes when a mobile navigation link is pressed", async () => {
    renderNavbar();

    await openMenu();
    const dialog = screen.getByRole("dialog", { name: /mobile navigation/i });
    fireEvent.click(within(dialog).getByRole("link", { name: "Projects" }));

    await expectMenuClosed();
  });

  it("makes floating theme controls non-interactive while the menu is open", async () => {
    renderNavbar();
    const themeToggle = await screen.findByRole("button", { name: /theme:/i });

    await openMenu();

    await waitFor(() => {
      expect(themeToggle).toBeDisabled();
    });
  });
});
