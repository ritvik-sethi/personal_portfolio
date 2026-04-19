"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { IconGitHub, IconGoodreads, IconLinkedIn } from "@/components/icons/SocialIcons";

const linkClass =
  "group flex h-11 w-11 items-center justify-center text-light-slate transition-colors duration-250 hover:text-green focus-visible:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40";

export function SideSocial() {
  return (
    <div className="fixed bottom-0 left-6 z-30 hidden w-10 xl:flex xl:flex-col xl:items-center xl:gap-6">
      <motion.ul
        className="flex flex-col gap-5"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <li>
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer noopener"
            className={linkClass}
            aria-label="GitHub"
          >
            <IconGitHub className="h-5 w-5" />
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
            <IconLinkedIn className="h-5 w-5" />
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
            <IconGoodreads className="h-5 w-5" />
          </a>
        </li>
      </motion.ul>
      <div
        className="mt-2 h-24 w-px bg-lightest-navy"
        aria-hidden
      />
    </div>
  );
}
