"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { createPortal } from "react-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import { site } from "@/lib/site";

const easeOut = [0.22, 1, 0.36, 1] as const;

const letter = {
  hidden: {
    opacity: 0,
    y: 56,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.72, ease: easeOut },
  },
};

const letterReduced = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const INTRO_MS_FULL = 3200;
const INTRO_MS_REDUCED = 2000;

function lockScroll(lock: boolean) {
  const html = document.documentElement;
  const body = document.body;
  if (lock) {
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
  } else {
    html.style.overflow = "";
    body.style.overflow = "";
    body.style.touchAction = "";
  }
}

export function OpeningAnimation() {
  const prefersReduced = useReducedMotion() === true;
  const [show, setShow] = useState(true);
  /** Portal after mount so fixed layer is direct child of body (fixes iOS stacking / clipping). */
  const [portalReady, setPortalReady] = useState(false);

  const introMs = prefersReduced ? INTRO_MS_REDUCED : INTRO_MS_FULL;
  const letterVars = prefersReduced ? letterReduced : letter;

  useLayoutEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!portalReady) return;
    lockScroll(true);
    const t = window.setTimeout(() => setShow(false), introMs);
    return () => {
      window.clearTimeout(t);
    };
  }, [portalReady, introMs]);

  useEffect(() => {
    return () => {
      lockScroll(false);
    };
  }, []);

  const overlay = (
    <AnimatePresence
      onExitComplete={() => {
        lockScroll(false);
      }}
    >
      {show ? (
        <motion.div
          key="intro-overlay"
          role="presentation"
          aria-hidden
          className="fixed inset-0 z-[99999] flex min-h-[100dvh] min-h-[100svh] w-full max-w-[100vw] cursor-default touch-none flex-col items-center justify-center overflow-hidden bg-navy [transform:translateZ(0)] [-webkit-transform:translateZ(0)]"
          style={{ WebkitBackfaceVisibility: "hidden" }}
          initial={{ opacity: 1 }}
          exit={
            prefersReduced
              ? {
                  opacity: 0,
                  transition: { duration: 0.45, ease: easeOut },
                }
              : {
                  y: "-100%",
                  opacity: 0.85,
                  transition: { duration: 0.85, ease: easeOut },
                }
          }
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(100,255,218,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_110%_80%,rgba(17,34,64,0.85),transparent),radial-gradient(ellipse_50%_40%_at_-10%_60%,rgba(35,53,84,0.5),transparent)]"
            aria-hidden
          />
          <motion.div
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green/40 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: prefersReduced ? 0.5 : 1.1,
              delay: 0.05,
              ease: easeOut,
            }}
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
                variants={letterVars}
                className="select-none text-[clamp(3.5rem,16vw,8.5rem)] font-bold leading-none tracking-tight text-green will-change-transform"
              >
                {site.firstName[0]}
              </motion.span>
              <motion.span
                variants={letterVars}
                className="select-none text-[clamp(3.5rem,16vw,8.5rem)] font-bold leading-none tracking-tight text-lightest-slate will-change-transform"
              >
                {site.lastName[0]}
              </motion.span>
            </div>

            <motion.div
              className="mt-8 h-[2px] w-[min(12rem,70vw)] max-w-full origin-center rounded-full bg-green shadow-[0_0_24px_rgba(100,255,218,0.35)]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: prefersReduced ? 0.25 : 0.5,
                duration: prefersReduced ? 0.4 : 0.65,
                ease: easeOut,
              }}
              aria-hidden
            />

            <motion.p
              className="mt-8 text-center font-mono text-sm font-medium tracking-[0.2em] text-light-slate sm:text-base"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: prefersReduced ? 0.5 : 0.95,
                duration: 0.55,
                ease: easeOut,
              }}
            >
              {site.firstName} {site.lastName}
            </motion.p>

            <motion.p
              className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-slate/80 sm:text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: prefersReduced ? 0.65 : 1.25,
                duration: 0.45,
              }}
            >
              Product Engineer
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

  if (!portalReady || typeof document === "undefined") {
    return (
      <div
        className="fixed inset-0 z-[99999] min-h-[100dvh] w-full bg-navy [transform:translateZ(0)]"
        aria-hidden
      />
    );
  }

  return createPortal(overlay, document.body);
}
