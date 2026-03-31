export function TechMarquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  if (!items?.length) return null;

  const loop = [...items, ...items];

  return (
    <div className={`relative overflow-hidden py-4 ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10" />

      <div
        className="marquee-track flex min-w-max gap-3"
        aria-hidden
      >
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center whitespace-nowrap rounded-full border border-border-light bg-surface px-4 py-2 text-sm text-copy"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
