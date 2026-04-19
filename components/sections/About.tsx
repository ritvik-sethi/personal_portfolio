import { Reveal } from "@/components/Reveal";
import { aboutParagraphs } from "@/lib/content";
import { SectionHeading } from "@/components/sections/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1000px] scroll-mt-28 py-24 md:scroll-mt-32 md:py-28"
    >
      <SectionHeading number="01" title="About" />
      <Reveal className="max-w-[720px] space-y-6 text-[17px] leading-relaxed text-slate md:text-lg">
        {aboutParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>
    </section>
  );
}
