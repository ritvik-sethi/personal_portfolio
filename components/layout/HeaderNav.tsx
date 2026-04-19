"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

const items = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 border-b border-lightest-navy/35 bg-navy ${menuOpen ? "z-[100]" : "z-50"}`}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.215, 0.61, 0.355, 1] as const,
        }}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4 md:px-10 md:py-5 lg:px-12">
          <a
            href="#hero"
            className="group relative flex h-10 w-10 shrink-0 items-center justify-center rounded border border-lightest-slate/40 text-green transition-colors duration-250 hover:border-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50"
            aria-label="Home"
            onClick={closeMenu}
          >
            <span className="font-mono text-sm font-bold leading-none text-green transition-transform duration-250 group-hover:-translate-y-px">
              {site.firstName[0]}
              {site.lastName[0]}
            </span>
          </a>

          <nav
            className="hidden min-w-0 md:block"
            aria-label="Primary"
          >
            <ol className="flex items-center justify-end gap-8">
              {items.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group inline-flex items-center gap-1 font-mono text-xs text-light-slate transition-colors duration-250 hover:text-green focus-visible:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40"
                  >
                    <span className="text-green">0{i + 1}.</span>
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-green transition-all duration-250 group-hover:w-full group-focus-visible:w-full" />
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <button
            type="button"
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-lightest-slate/40 text-light-slate transition-colors hover:border-green hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              className={`block h-0.5 w-5 origin-center rounded-full bg-current transition-transform duration-200 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 origin-center rounded-full bg-current transition-transform duration-200 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              key="mobile-menu-backdrop"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed bottom-0 left-0 right-0 top-[73px] z-[90] bg-navy/90 md:hidden"
              aria-label="Close menu"
              onClick={closeMenu}
            />
            <motion.nav
              key="mobile-menu-panel"
              id="mobile-menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
              className="fixed bottom-0 right-0 top-[73px] z-[95] flex w-[min(100%,300px)] flex-col border-l border-lightest-navy/40 bg-navy shadow-[-12px_0_40px_rgba(0,0,0,0.35)] md:hidden"
              aria-label="Primary mobile"
            >
              <ol className="flex flex-col gap-1 px-5 pb-8 pt-6">
                {items.map((item, i) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-baseline gap-3 border-b border-lightest-navy/20 py-4 font-mono text-sm text-light-slate transition-colors hover:text-green focus-visible:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40"
                      onClick={closeMenu}
                    >
                      <span className="text-green">0{i + 1}.</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
