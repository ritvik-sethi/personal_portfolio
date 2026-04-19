"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const easeOut = [0.22, 1, 0.36, 1] as const;

const letter = {
  hidden: {
    opacity: 0,
    y: 72,
    rotate: -14,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: easeOut },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const INTRO_MS = 3200;

export function OpeningAnimation() {
  const reduceMotion = useReducedMotion() === true;
  const [show, setShow] = useState(!reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => setShow(false), INTRO_MS);
    return () => {
      window.clearTimeout(t);
    };
  }, [reduceMotion]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (reduceMotion) return null;

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {show ? (
        <motion.div
          key="intro-overlay"
          role="presentation"
          aria-hidden
          className="fixed inset-0 z-[180] flex cursor-default flex-col items-center justify-center overflow-hidden bg-navy"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0.85,
            transition: { duration: 0.85, ease: easeOut },
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(100,255,218,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_110%_80%,rgba(17,34,64,0.85),transparent),radial-gradient(ellipse_50%_40%_at_-10%_60%,rgba(35,53,84,0.5),transparent)]"
            aria-hidden
          />
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green/40 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.05, ease: easeOut }}
            aria-hidden
          />

          <motion.div
            className="relative flex flex-col items-center px-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <div className="flex items-baseline gap-1 sm:gap-2">
              <motion.span
                variants={letter}
                className="select-none text-[clamp(3.5rem,16vw,8.5rem)] font-bold leading-none tracking-tight text-green"
              >
                {site.firstName[0]}
              </motion.span>
              <motion.span
                variants={letter}
                className="select-none text-[clamp(3.5rem,16vw,8.5rem)] font-bold leading-none tracking-tight text-lightest-slate"
              >
                {site.lastName[0]}
              </motion.span>
            </div>

            <motion.div
              className="mt-8 h-[2px] w-[min(12rem,70vw)] max-w-full origin-center rounded-full bg-green shadow-[0_0_24px_rgba(100,255,218,0.35)]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.65, ease: easeOut }}
              aria-hidden
            />

            <motion.p
              className="mt-8 text-center font-mono text-sm font-medium tracking-[0.2em] text-light-slate sm:text-base"
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.95, duration: 0.55, ease: easeOut }}
            >
              {site.firstName} {site.lastName}
            </motion.p>

            <motion.p
              className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-slate/80 sm:text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 0.45 }}
            >
              Web Engineer
            </motion.p>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            aria-hidden
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
