import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  number: string;
  title: string;
  caption?: string;
}

export const SectionHeader = ({ number, title, caption }: SectionHeaderProps) => (
  <Reveal>
    <div className="flex items-baseline gap-4 mb-10 md:mb-14">
      <span className="section-label">{number}</span>
      <div className="h-px flex-1 bg-border" />
      <span className="section-label hidden md:inline">{caption}</span>
    </div>
    <h2 className="section-heading mb-10 md:mb-14 max-w-3xl">{title}</h2>
  </Reveal>
);
