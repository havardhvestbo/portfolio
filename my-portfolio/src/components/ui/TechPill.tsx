type TechPillProps = {
  children: React.ReactNode;
  className?: string;
};

export function TechPill({ children, className }: TechPillProps) {
  return (
    <span className={["editorial-pill", className].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}
