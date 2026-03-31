export function TechMarquee({ items }: { items: string[] }) {
  if (!items?.length) return null;

  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="marquee-track flex gap-3"
        aria-hidden
      >
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center rounded-lg border border-overlay-border bg-overlay-bg px-3 py-1.5 text-sm whitespace-nowrap"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
