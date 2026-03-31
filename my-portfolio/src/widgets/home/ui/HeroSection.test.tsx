// @vitest-environment jsdom

import { render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { describe, expect, it, vi } from "vitest";
import { HeroSection } from "@/widgets/home/ui/HeroSection";
import type { PersonalInfo } from "@/entities/portfolio/model/portfolio";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: ComponentProps<"a">) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("framer-motion", () => ({
  motion: new Proxy(
    {},
    {
      get: () =>
        ({
          children,
          variants,
          initial,
          animate,
          transition,
          whileHover,
          ...props
        }: ComponentProps<"div"> & {
          variants?: unknown;
          initial?: unknown;
          animate?: unknown;
          transition?: unknown;
          whileHover?: unknown;
        }) => <div {...props}>{children}</div>,
    },
  ),
}));

vi.mock("@/shared/ui/ProfileFrame", () => ({
  ProfileFrame: ({ fallbackName }: { fallbackName: string }) => (
    <div data-testid="profile-frame">{fallbackName}</div>
  ),
}));

const basePersonalInfo: PersonalInfo = {
  name: "Havard",
  title: "Developer",
  description: "Builds products.",
  email: "havard@example.com",
  location: "Oslo",
  availabilityLabel: "Available soon",
  image: "/me.jpeg",
  imageAlt: "Portrait of Havard",
  social: {
    github: { url: "https://github.com/example", label: "GitHub" },
    linkedin: { url: "https://linkedin.com/in/example", label: "LinkedIn" },
  },
  highlightMetric: { value: "5+", label: "Years shipping" },
  nextRole: { company: "Bouvet", start: "August 2026", label: "Starting at Bouvet" },
  aboutParagraphs: ["Paragraph"],
  technologies: ["React", "TypeScript"],
};

describe("HeroSection", () => {
  it("prefers status over availability label for the hero badge", () => {
    render(
      <HeroSection
        personalInfo={{
          ...basePersonalInfo,
          status: "Developer at Bouvet ASA",
          availabilityLabel: "Available August 2026",
        }}
      />,
    );

    expect(screen.getByText("Developer at Bouvet ASA")).toBeInTheDocument();
    expect(screen.queryByText("Available August 2026")).not.toBeInTheDocument();
  });

  it("falls back to availability label when status is missing", () => {
    render(
      <HeroSection
        personalInfo={{
          ...basePersonalInfo,
          status: undefined,
          availabilityLabel: "Available August 2026",
        }}
      />,
    );

    expect(screen.getByText("Available August 2026")).toBeInTheDocument();
  });
});
