"use client";

import { useCallback, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/lib/content";
import { SectionHeading } from "@/components/sections/SectionHeading";

const DATE_SEP = " — ";

function parseDateRange(range: string) {
  const i = range.indexOf(DATE_SEP);
  if (i === -1) {
    return { from: range, to: null as string | null };
  }
  return {
    from: range.slice(0, i),
    to: range.slice(i + DATE_SEP.length),
  };
}

function ExternalArrow({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

function ExperienceDate({ dateRange }: { dateRange: string }) {
  const { from, to } = parseDateRange(dateRange);
  const mono =
    "font-mono text-[11px] font-semibold uppercase text-slate tracking-[0.06em] md:tracking-[0.14em]";

  if (!to) {
    return (
      <p className={`text-left ${mono} md:text-right`}>
        <span className="inline-block max-w-full leading-snug">{from}</span>
      </p>
    );
  }

  return (
    <div className={`${mono} text-left md:text-right`}>
      {/* Mobile: two lines, same left edge (no decorative border on one row) */}
      <p className="flex flex-col gap-1 leading-[1.35] md:hidden">
        <span className="block w-full">{from}</span>
        <span className="block w-full">{to}</span>
      </p>
      {/* md+: single line */}
      <p className="hidden leading-snug md:block md:whitespace-nowrap">
        {from}
        {DATE_SEP}
        {to}
      </p>
    </div>
  );
}

type SpotlightCardProps = {
  children: React.ReactNode;
};

function SpotlightCard({ children }: SpotlightCardProps) {
  /** Treat `null` as “unknown” → allow spotlight until we know user prefers reduced motion. */
  const reduceMotion = useReducedMotion() === true;
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const updateSpot = useCallback((clientX: number, clientY: number) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setSpot({
      x: clientX - r.left,
      y: clientY - r.top,
    });
  }, []);

  const onEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setHovered(true);
      updateSpot(e.clientX, e.clientY);
    },
    [updateSpot],
  );

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      updateSpot(e.clientX, e.clientY);
    },
    [updateSpot],
  );

  const onLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const showSpotlight = hovered && !reduceMotion;

  return (
    <div
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group/card relative overflow-hidden rounded-xl border border-transparent p-4 transition-[border-color,box-shadow] duration-200 ease-out hover:border-lightest-navy/50 hover:shadow-[0_8px_30px_-12px_rgba(2,12,27,0.55)] md:p-6"
    >
      {/* Base hover wash (similar to reference) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl bg-light-navy/0 transition-colors duration-200 group-hover/card:bg-light-navy/55"
        aria-hidden
      />
      {/* Cursor-following radial highlight (brittanychiang.com-style) */}
      {!reduceMotion && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover/card:opacity-100"
          style={
            showSpotlight
              ? {
                  background: `radial-gradient(580px circle at ${spot.x}px ${spot.y}px, rgba(100, 255, 218, 0.14), rgba(100, 255, 218, 0.04) 28%, transparent 55%)`,
                }
              : undefined
          }
          aria-hidden
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1000px] scroll-mt-28 py-24 md:scroll-mt-32 md:py-28"
    >
      <SectionHeading number="02" title="Experience" />
      <div className="flex flex-col">
        {experience.map((job, index) => {
          const hasLink = "companyUrl" in job && Boolean(job.companyUrl);
          const url = hasLink ? job.companyUrl : undefined;

          return (
            <motion.article
              key={`${job.role}-${job.company}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
                ease: [0.215, 0.61, 0.355, 1] as const,
              }}
              className="grid grid-cols-1 gap-5 border-b border-lightest-navy/30 py-12 last:border-b-0 md:grid-cols-[minmax(0,120px)_minmax(0,1fr)] md:gap-10 md:py-14"
            >
              <div className="shrink-0 pt-0.5 md:pt-2">
                <ExperienceDate dateRange={job.dateRange} />
              </div>
              <div className="min-w-0">
                <SpotlightCard>
                  <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-lightest-slate transition-colors duration-200 group-hover/card:text-green md:text-lg">
                    {hasLink ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5 outline-none hover:text-green focus-visible:text-green focus-visible:ring-2 focus-visible:ring-green/40"
                      >
                        <span>{job.role}</span>
                        <span className="text-light-slate group-hover/card:text-green/90">
                          ·
                        </span>
                        <span className="inline-flex items-center gap-1">
                          {job.company}
                          <ExternalArrow className="inline h-4 w-4 shrink-0 translate-x-0 translate-y-0.5 transition-transform duration-200 group-hover/card:-translate-y-px group-hover/card:translate-x-px" />
                        </span>
                      </a>
                    ) : (
                      <span className="inline-flex flex-wrap items-center gap-x-1.5">
                        <span>{job.role}</span>
                        <span className="text-light-slate">·</span>
                        <span>{job.company}</span>
                      </span>
                    )}
                  </h3>
                  <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-slate md:text-[15px]">
                    {job.bullets.map((b) => (
                      <p key={b}>{b}</p>
                    ))}
                  </div>
                  <ul
                    className="mt-6 flex flex-wrap gap-2"
                    aria-label="Technologies used"
                  >
                    {job.skills.map((skill) => (
                      <li key={skill}>
                        <span className="inline-flex rounded-full border border-green/25 bg-green/[0.12] px-3 py-1.5 font-mono text-[11px] font-medium leading-none text-green md:text-xs">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
