import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CardSurfaceOwnProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
  className?: string;
  featured?: boolean;
  hover?: boolean;
};

type CardSurfaceProps<C extends ElementType> = CardSurfaceOwnProps<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof CardSurfaceOwnProps<C>>;

export function CardSurface<C extends ElementType = "div">({
  as,
  children,
  className,
  featured = false,
  hover = false,
  ...props
}: CardSurfaceProps<C>) {
  const Component = as ?? "div";

  return (
    <Component
      className={[
        "editorial-card",
        hover ? "editorial-card-hover" : "",
        featured ? "editorial-card-featured" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
