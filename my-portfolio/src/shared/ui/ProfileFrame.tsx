"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { editorialBounce } from "@/shared/lib/animations";

type ProfileFrameProps = {
  image?: string;
  imageAlt?: string;
  fallbackName: string;
};

export function ProfileFrame({ image, imageAlt, fallbackName }: ProfileFrameProps) {
  const fallbackLetter = fallbackName.trim().charAt(0).toUpperCase() || "H";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.4, ease: editorialBounce }}
      className="profile-frame relative h-[220px] w-[220px] md:h-[260px] md:w-[260px]"
    >
      <div className="absolute inset-0 rounded-full border-[3px] border-[var(--frame-outer)] p-1.5 shadow-[0_8px_32px_var(--frame-shadow),0_2px_8px_var(--frame-shadow)]">
        <div className="h-full w-full rounded-full border-[1.5px] border-[var(--frame-inner)] p-1">
          <div className="relative h-full w-full overflow-hidden rounded-full bg-[var(--bg-secondary)]">
            {image ? (
              <Image
                src={image}
                alt={imageAlt ?? "Profile portrait"}
                fill
                sizes="(min-width: 1024px) 260px, 220px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center font-serif text-6xl font-normal text-primary/70">
                {fallbackLetter}
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_2px_12px_var(--frame-shadow)]" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 right-4 h-3 w-3 rotate-45 bg-primary/70" />
    </motion.div>
  );
}
