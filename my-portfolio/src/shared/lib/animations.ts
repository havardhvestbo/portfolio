import type { Transition, UseInViewOptions, Variants } from "framer-motion";

export const editorialEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const editorialBounce: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

export const fadeUpTransition: Transition = {
  duration: 0.6,
  ease: editorialEase,
};

export const fadeUpVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: fadeUpTransition,
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const timelineContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

export const scaleInVariants: Variants = {
  initial: { opacity: 0, scale: 0.95, x: 24 },
  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: editorialEase,
    },
  },
};

export const revealViewport: UseInViewOptions = {
  once: true,
  margin: "-100px 0px -100px 0px",
};
