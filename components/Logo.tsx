"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { basePath } from "@/lib/basePath";

export function Logo({
  className = "h-7 w-auto",
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
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <Image
        src={`${basePath}/logo-triocrash.png`}
        alt="TRIOCRASH"
        width={1516}
        height={240}
        priority={priority}
        className={`${className} select-none object-contain`}
      />
    </motion.span>
  );
}
