"use client";

import { useEffect, useState } from "react";
import { Moon, Monitor, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const modes = ["system", "light", "dark"] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-8 w-8" />;
  }

  const cycleTheme = () => {
    const currentIndex = modes.indexOf(theme);
    setTheme(modes[(currentIndex + 1) % modes.length]);
  };

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label={`Theme: ${theme}`}
      className="rounded-lg p-1.5 text-muted transition hover:bg-overlay-bg-hover hover:text-foreground"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
