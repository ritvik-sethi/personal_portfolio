import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  number: string;
  title: string;
};

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 flex w-full max-w-[700px] items-center gap-4">
      <h2 className="flex shrink-0 items-baseline gap-2 font-mono text-xl font-semibold text-lightest-slate md:text-2xl">
        <span className="font-mono text-base text-green md:text-lg">{number}.</span>
        {title}
      </h2>
      <div className="h-px flex-1 bg-lightest-navy" aria-hidden />
    </Reveal>
  );
}
