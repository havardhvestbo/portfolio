"use client";

import {
  useState,
  type CSSProperties,
  type ComponentPropsWithoutRef,
  type ElementType,
  type MouseEvent,
  type FocusEvent,
  type ReactNode,
} from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  const componentProps = props as {
    onMouseEnter?: (event: MouseEvent<Element>) => void;
    onMouseLeave?: (event: MouseEvent<Element>) => void;
    onFocus?: (event: FocusEvent<Element>) => void;
    onBlur?: (event: FocusEvent<Element>) => void;
    [key: string]: unknown;
  };

  const {
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...restProps
  } = componentProps;

  const showHoverState = hover && isHovered;
  const background = featured
    ? "var(--card-background-featured)"
    : showHoverState
      ? "var(--card-background-hover)"
      : "var(--card-background)";
  const borderColor = featured
    ? "var(--card-border-featured)"
    : showHoverState
      ? "var(--card-border-hover)"
      : "var(--card-border)";
  const boxShadow = featured
    ? "var(--card-shadow-featured)"
    : showHoverState
      ? "var(--card-shadow-hover)"
      : "var(--card-shadow)";

  const cardStyle: CSSProperties = {
    color: "var(--theme-foreground)",
    border: `1px solid ${borderColor}`,
    borderRadius: "1rem",
    background,
    boxShadow,
    backdropFilter: "blur(18px)",
    transform: showHoverState ? "translateY(-6px)" : undefined,
    transition:
      "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), " +
      "box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1), " +
      "background 0.35s cubic-bezier(0.4, 0, 0.2, 1), " +
      "border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), " +
      "color 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  };

  return (
    <Component
      className={className}
      style={cardStyle}
      onMouseEnter={(event) => {
        if (hover) {
          setIsHovered(true);
        }
        onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        if (hover) {
          setIsHovered(false);
        }
        onMouseLeave?.(event);
      }}
      onFocus={(event) => {
        if (hover) {
          setIsHovered(true);
        }
        onFocus?.(event);
      }}
      onBlur={(event) => {
        if (hover) {
          setIsHovered(false);
        }
        onBlur?.(event);
      }}
      {...restProps}
    >
      {children}
    </Component>
  );
}
