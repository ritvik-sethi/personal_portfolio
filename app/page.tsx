import { OpeningAnimation } from "@/components/OpeningAnimation";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { SideEmail } from "@/components/layout/SideEmail";
import { SideSocial } from "@/components/layout/SideSocial";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-navy text-slate">
      <OpeningAnimation />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[220] focus:rounded focus:bg-green focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-navy"
      >
        Skip to Content
      </a>
      <HeaderNav />
      <SideSocial />
      <SideEmail />
      <main
        id="content"
        className="relative mx-auto max-w-[1000px] px-6 pb-32 sm:px-10 md:px-12 lg:px-16 xl:px-6"
      >
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
