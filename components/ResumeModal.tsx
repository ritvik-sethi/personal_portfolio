"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useId, useRef } from "react";
import { site } from "@/lib/site";

const easeOut = [0.22, 1, 0.36, 1] as const;

type ResumeModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ResumeModal({ open, onClose }: ResumeModalProps) {
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    // focus close button so keyboard users are placed in modal
    closeBtnRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="resume-modal"
          className="fixed inset-0 z-[120] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            aria-label="Close resume"
            onClick={onClose}
            className="absolute inset-0 bg-navy/90"
          />

          <motion.div
            className="relative z-[1] flex h-[min(80vh,720px)] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-lightest-navy/50 bg-light-navy shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]"
            initial={{ y: 22, scale: 0.985, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 18, scale: 0.99, opacity: 0 }}
            transition={{ duration: 0.28, ease: easeOut }}
          >
            <div className="flex items-center justify-between gap-4 border-b border-lightest-navy/40 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <h2
                  id={titleId}
                  className="truncate font-mono text-xs font-semibold tracking-[0.14em] text-lightest-slate"
                >
                  Resume
                </h2>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={site.resumePath}
                  download={site.resumeDownloadName}
                  className="inline-flex items-center rounded border border-green/60 bg-green/10 px-3 py-2 font-mono text-xs font-medium text-green transition-colors hover:bg-green/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50"
                >
                  Download
                </a>
                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center rounded border border-lightest-navy/70 bg-transparent px-3 py-2 font-mono text-xs font-medium text-light-slate transition-colors hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="relative flex-1 bg-navy">
              <iframe
                src={site.resumePath}
                title="Resume PDF"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

