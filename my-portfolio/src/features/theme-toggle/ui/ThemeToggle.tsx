"use client";

import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type ThemeChoice = "light" | "dark" | "system";

const THEME_ORDER: ThemeChoice[] = ["light", "dark", "system"];

const THEME_META: Record<ThemeChoice, { icon: LucideIcon; label: string }> = {
  light: { icon: Sun, label: "Light" },
  dark: { icon: Moon, label: "Dark" },
  system: { icon: Monitor, label: "System" },
};

function getNextTheme(theme: ThemeChoice) {
  const currentIndex = THEME_ORDER.indexOf(theme);
  return THEME_ORDER[(currentIndex + 1) % THEME_ORDER.length];
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const syncMobileNavState = () => {
      setMobileNavOpen(document.body.dataset.mobileNavOpen === "true");
    };

    syncMobileNavState();

    const observer = new MutationObserver(syncMobileNavState);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-mobile-nav-open"],
    });

    return () => {
      observer.disconnect();
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="floating-theme-toggle">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-light bg-surface-muted/70 shadow-[0_12px_32px_-18px_rgba(20,16,10,0.28)]" />
      </div>
    );
  }

  const currentTheme: ThemeChoice = theme === "light" || theme === "dark" ? theme : "system";
  const nextTheme = getNextTheme(currentTheme);
  const { icon: Icon, label } = THEME_META[currentTheme];
  const nextLabel = THEME_META[nextTheme].label;
  const resolvedLabel = resolvedTheme === "dark" ? "dark" : "light";
  const title =
    currentTheme === "system"
      ? `Theme: ${label} (${resolvedLabel}). Click to switch to ${nextLabel}.`
      : `Theme: ${label}. Click to switch to ${nextLabel}.`;

  return (
    <div className="floating-theme-toggle">
      <button
        type="button"
        onClick={() => setTheme(nextTheme)}
        disabled={mobileNavOpen}
        aria-label={title}
        title={title}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface text-copy shadow-[0_14px_32px_-18px_rgba(20,16,10,0.28)] backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary hover:text-primary"
      >
        <Icon className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}
