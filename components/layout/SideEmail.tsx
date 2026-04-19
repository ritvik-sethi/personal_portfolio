"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function SideEmail() {
  return (
    <div className="fixed bottom-0 right-6 z-30 hidden w-10 xl:flex xl:flex-col xl:items-center">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <a
          href={`mailto:${site.email}`}
          className="font-mono text-xs tracking-widest text-light-slate transition-colors duration-250 [writing-mode:vertical-rl] hover:text-green focus-visible:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40"
        >
          {site.email}
        </a>
        <div className="h-24 w-px bg-lightest-navy" aria-hidden />
      </motion.div>
    </div>
  );
}
