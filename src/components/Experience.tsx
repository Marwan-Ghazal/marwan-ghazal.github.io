import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    year: "2025",
    title: "AI Intern",
    org: "National Training Academy (NTA)",
    detail: "Co-built an Arabic document understanding pipeline deployed for internal review workflows.",
    type: "experience",
  },
  {
    year: "2025",
    title: "Junior Teaching Assistant",
    org: "Nile University — School of Information Technology & Computer Science",
    detail: "Supported intro programming and ML foundations courses; held weekly recitation sessions.",
    type: "experience",
  },
  {
    year: "2024 — Now",
    title: "Head of PR",
    org: "E-Club Nile University",
    detail: "Led a 12-person team running campus-wide tech events, sponsorships, and outreach.",
    type: "experience",
  },
  {
    year: "2026",
    title: "3rd Place — DeepX Hackathon",
    org: "MENA AI Competition",
    detail: "Vision-based ER triage prototype built in 48 hours with Grad-CAM explainability.",
    type: "award",
  },
  {
    year: "2025",
    title: "1st Place — UGRF",
    org: "Undergraduate Research Forum",
    detail: "Smart Food Guardian — real-time nutrition-label understanding system.",
    type: "award",
  },
  {
    year: "2025",
    title: "President's Honor List",
    org: "Nile University — Spring",
    detail: "Top academic standing across School of ITCS.",
    type: "award",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-5xl">
        <SectionHeader number="03" title="Experience & Achievements" caption="Timeline" />
        <ol className="relative">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 40}>
              <li className="grid grid-cols-12 gap-4 md:gap-8 py-6 border-t border-border first:border-t-0 group hover:bg-surface/50 transition-colors -mx-3 px-3 rounded-sm">
                <div className="col-span-12 md:col-span-2">
                  <span className="font-mono text-xs text-label">{it.year}</span>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="text-base md:text-lg font-medium text-foreground tracking-tight">
                    {it.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.org}</p>
                  <p className="text-sm text-muted-foreground/80 mt-2 leading-relaxed">{it.detail}</p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.18em] px-2 py-1 rounded-sm border ${
                      it.type === "award"
                        ? "text-accent border-accent/40"
                        : "text-muted-foreground border-border"
                    }`}
                  >
                    {it.type === "award" ? "Award" : "Role"}
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
