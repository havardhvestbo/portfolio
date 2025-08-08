"use client";

import { useState } from "react";

export function TechChips({
  items = [],
  max = 8,
  className = "",
}: {
  items?: string[];
  max?: number;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, max);
  const hiddenCount = Math.max(items.length - max, 0);

  if (!items?.length) return null;

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {visible.map((tech) => (
        <span
          key={tech}
          className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs"
        >
          {tech}
        </span>
      ))}

      {hiddenCount > 0 && !expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="text-xs rounded-lg border border-white/10 bg-white/5 px-2 py-1 hover:border-white/20"
        >
          +{hiddenCount} more
        </button>
      )}

      {expanded && items.length > max && (
        <button
          type="button"
          onClick={() => setExpanded(false)}
          className="text-xs opacity-70 hover:opacity-100 underline underline-offset-2"
        >
          Show less
        </button>
      )}
    </div>
  );
}
