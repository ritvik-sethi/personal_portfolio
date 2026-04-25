"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import {
  IconGitHub,
  IconGoodreads,
  IconLinkedIn,
} from "@/components/icons/SocialIcons";

const linkClass =
  "flex h-11 w-11 items-center justify-center text-light-slate transition-colors duration-250 hover:text-green focus-visible:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40";

export function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-[1000px] px-6 pb-14 sm:px-10 md:px-12 lg:px-16 xl:px-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] as const }}
        className="flex flex-col items-center gap-6 border-t border-lightest-navy/30 pt-10"
      >
        <nav aria-label="Footer social links">
          <ul className="flex items-center gap-4">
            <li>
              <a
                href={site.social.github}
                target="_blank"
                rel="noreferrer noopener"
                className={linkClass}
                aria-label="GitHub"
              >
                <IconGitHub className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className={linkClass}
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a
                href={site.social.goodreads}
                target="_blank"
                rel="noreferrer noopener"
                className={linkClass}
                aria-label="Goodreads"
              >
                <IconGoodreads className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </nav>

        <a
          href={`mailto:${site.email}`}
          className="font-mono text-xs tracking-widest text-light-slate transition-colors duration-250 hover:text-green focus-visible:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40"
        >
          {site.email}
        </a>
      </motion.div>
    </footer>
  );
}

