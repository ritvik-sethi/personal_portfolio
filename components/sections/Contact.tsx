"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[700px] scroll-mt-28 py-32 md:scroll-mt-32 md:py-40"
    >
      <Reveal className="mb-10 flex w-full items-center justify-center gap-4">
        <div
          className="hidden h-px max-w-[140px] flex-1 bg-lightest-navy sm:block"
          aria-hidden
        />
        <h2 className="flex shrink-0 items-baseline gap-2 font-mono text-xl font-semibold text-lightest-slate md:text-2xl">
          <span className="font-mono text-base text-green md:text-lg">05.</span>
          Contact
        </h2>
        <div
          className="hidden h-px max-w-[140px] flex-1 bg-lightest-navy sm:block"
          aria-hidden
        />
      </Reveal>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{
          duration: 0.55,
          ease: [0.215, 0.61, 0.355, 1] as const,
        }}
        className="flex flex-col items-center text-center"
      >
        <h3 className="text-[clamp(36px,7vw,52px)] font-bold tracking-tight text-lightest-slate">
          Get In Touch
        </h3>
        <a
          href={`mailto:${site.email}`}
          className="mt-12 inline-flex rounded border border-green px-8 py-5 font-mono text-sm text-green transition-all duration-250 hover:bg-green/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
}
