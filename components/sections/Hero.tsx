"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { summary } from "@/lib/content";
import { ResumeModal } from "@/components/ResumeModal";

export function Hero() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100vh-120px)] max-w-[1000px] flex-col justify-center gap-6 pb-24 pt-28 md:min-h-[calc(100vh-100px)] md:pb-32 md:pt-32"
    >
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
      <motion.p
        className="font-mono text-lg text-green md:text-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        className="text-[clamp(40px,8vw,80px)] font-bold leading-[1.05] tracking-tight text-lightest-slate"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12 }}
      >
        {site.firstName} {site.lastName}.
      </motion.h1>
      <motion.p
        className="max-w-2xl text-lg leading-relaxed text-slate md:text-xl"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.22 }}
      >
        {summary}
      </motion.p>
      <motion.div
        className="pt-4"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.38 }}
      >
        <button
          type="button"
          onClick={() => setResumeOpen(true)}
          className="inline-flex cursor-pointer items-center gap-3 rounded border border-green bg-transparent px-7 py-4 font-mono text-sm text-green transition-all duration-250 hover:bg-green/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50"
        >
          Check Out My Resume!
        </button>
      </motion.div>
    </section>
  );
}
