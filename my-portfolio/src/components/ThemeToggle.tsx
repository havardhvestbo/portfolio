"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";

const modes = ["system", "light", "dark"] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="h-8 w-8" />;
  }

  const cycle = () => {
    const idx = modes.indexOf(theme as (typeof modes)[number]);
    setTheme(modes[(idx + 1) % modes.length]);
  };

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <button
      onClick={cycle}
      aria-label={`Theme: ${theme}`}
      className="rounded-lg p-1.5 text-muted hover:text-foreground hover:bg-overlay-bg-hover transition"
    >
      <Icon className="h-4 w-4" />
    </button>
  );
}
