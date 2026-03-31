type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={[
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        isCentered ? "text-center md:flex-col md:items-center" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={["space-y-3", isCentered ? "max-w-2xl" : "max-w-3xl"].join(" ")}>
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <h2 className="font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-foreground md:text-5xl">
          {title}
        </h2>
        {intro ? (
          <p className="max-w-2xl text-base leading-8 text-copy md:text-[1.0625rem]">
            {intro}
          </p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
