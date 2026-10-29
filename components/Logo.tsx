"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { basePath } from "@/lib/basePath";

export function Logo({
  className = "h-8 w-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <motion.span
      className="relative inline-flex items-center"
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
        src={`${basePath}/logo-tricid-lab.png`}
        alt="Tricid Lab"
        width={900}
        height={424}
        priority={priority}
        className={`${className} select-none object-contain`}
      />
    </motion.span>
  );
}
