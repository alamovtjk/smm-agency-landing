"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { basePath } from "@/lib/basePath";

export function Logo({
  className = "h-8 w-auto",
  priority = false,
  plaque = false,
}: {
  className?: string;
  priority?: boolean;
  /** Wrap the logo in a pill, styled like the "Обсудить проект" button. */
  plaque?: boolean;
}) {
  return (
    <motion.span
      className={`relative inline-flex items-center ${
        plaque
          ? "rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 transition hover:border-lime-500/40 hover:bg-white/10 hover:shadow-neon"
          : ""
      }`}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-10 animate-pulse-slow rounded-full bg-glow-lime opacity-60 blur-xl"
      />
      <Image
        src={`${basePath}/logo-triolab.png`}
        alt="TC"
        width={983}
        height={702}
        priority={priority}
        className={`${className} select-none object-contain`}
      />
    </motion.span>
  );
}
