"use client";

import { motion } from "framer-motion";
import { Sparkle } from "lucide-react";

type Spark = {
  top: string;
  left: string;
  size: number;
  delay: number;
  className?: string;
};

export function Sparks({
  items,
}: {
  items: Spark[];
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {items.map((s, i) => (
        <motion.div
          key={i}
          className={`absolute ${s.className ?? "text-white/60"}`}
          style={{ top: s.top, left: s.left }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1.1, 0.85] }}
          transition={{
            duration: 2.6 + (i % 3) * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: s.delay,
          }}
        >
          <Sparkle size={s.size} fill="currentColor" strokeWidth={0} />
        </motion.div>
      ))}
    </div>
  );
}
