"use client";

import { motion } from "framer-motion";
import { skillsCategories } from "@/lib/content";
import { SectionHeading } from "@/components/sections/SectionHeading";

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] as const },
  },
};

export function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-[1000px] scroll-mt-28 py-24 md:scroll-mt-32 md:py-28"
    >
      <SectionHeading number="03" title="Technical Skills" />
      <motion.div
        className="max-w-[900px] space-y-10 md:space-y-12"
        variants={listContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        aria-label="Technical skills by category"
      >
        {skillsCategories.map((block) => (
          <motion.div key={block.category} variants={listItem}>
            <h3 className="mb-3 font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-green md:text-sm">
              {block.category}
            </h3>
            <p className="text-[15px] leading-[1.75] text-slate md:text-base md:leading-[1.8]">
              {block.items.map((item, i) => (
                <span key={item}>
                  {i > 0 ? (
                    <span className="text-lightest-navy" aria-hidden>
                      {" "}
                      ·{" "}
                    </span>
                  ) : null}
                  <span className="text-lightest-slate/95">{item}</span>
                </span>
              ))}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
