import { Reveal } from "@/components/Reveal";
import { featuredProject } from "@/lib/content";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1000px] scroll-mt-28 py-24 md:scroll-mt-32 md:py-28"
    >
      <SectionHeading number="04" title="Projects" />
      <Reveal>
        <article className="relative grid gap-6 rounded-xl bg-light-navy/80 p-6 shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] ring-1 ring-lightest-navy/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.65)] md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:gap-10 md:p-8">
          <div className="order-2 flex flex-col justify-center md:order-1">
            <div className="mb-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-lightest-slate md:text-[28px]">
                  {featuredProject.title}
                </h3>
                <p className="mt-2 font-mono text-[13px] font-medium tracking-wide text-light-slate md:text-sm">
                  {featuredProject.subtitle}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs sm:shrink-0">
                <a
                  href={featuredProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-slate transition-colors hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50"
                >
                  llmagnet.in ↗
                </a>
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-slate transition-colors hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {featuredProject.bullets.map((line) => (
                <li
                  key={line}
                  className="relative pl-7 text-base leading-relaxed text-slate before:absolute before:left-0 before:top-2 before:text-green before:content-['▹']"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={featuredProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/img relative order-1 block min-h-[220px] overflow-hidden rounded-lg border border-lightest-navy/50 bg-[#0c1829] outline-none ring-lightest-navy/40 transition-shadow focus-visible:ring-2 md:order-2 md:min-h-[280px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featuredProject.image}
              alt={`${featuredProject.title} logo`}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover/img:scale-[1.02]"
            />
          </a>
        </article>
      </Reveal>
    </section>
  );
}
