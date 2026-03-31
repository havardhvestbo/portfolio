import { CardSurface } from "@/components/CardSurface";
import { TechPill } from "@/components/ui/TechPill";

type TimelineEntryProps = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  eyebrow?: string;
  technologies?: string[];
  featured?: boolean;
  align?: "left" | "right";
};

function TimelineCard({
  period,
  title,
  subtitle,
  description,
  eyebrow,
  technologies,
  featured,
}: Omit<TimelineEntryProps, "align">) {
  return (
    <CardSurface hover featured={featured} className="p-6 md:p-7">
      <div className="flex flex-wrap items-center gap-3">
        {eyebrow ? <span className="section-kicker">{eyebrow}</span> : null}
        {featured ? (
          <span className="rounded-full border border-[var(--border)] bg-[var(--bg-tertiary)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-primary">
            Highlight
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-muted">{period}</p>
      <h3 className="mt-3 text-[1.125rem] font-medium leading-7 tracking-[-0.01em] text-foreground">
        {title}
      </h3>
      <p className="mt-1 text-sm uppercase tracking-[0.12em] text-copy">{subtitle}</p>
      <p className="mt-4 text-sm leading-7 text-copy">{description}</p>

      {technologies && technologies.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <TechPill key={technology}>{technology}</TechPill>
          ))}
        </div>
      ) : null}
    </CardSurface>
  );
}

export function TimelineEntry({
  align = "right",
  ...props
}: TimelineEntryProps) {
  const card = <TimelineCard {...props} />;

  return (
    <>
      <div className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-5 md:hidden">
        <div className="relative flex justify-center">
          <span className="absolute inset-y-0 top-1 w-px bg-[var(--border-light)]" />
          <span className="relative mt-6 h-3 w-3 rounded-full bg-primary ring-[6px] ring-background" />
        </div>
        {card}
      </div>

      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] md:gap-6">
        {align === "left" ? card : <div />}

        <div className="relative flex justify-center">
          <span className="absolute inset-y-0 w-px bg-[var(--border-light)]" />
          <span className="relative mt-10 h-3 w-3 rounded-full bg-primary ring-[8px] ring-background" />
        </div>

        {align === "right" ? card : <div />}
      </div>
    </>
  );
}
