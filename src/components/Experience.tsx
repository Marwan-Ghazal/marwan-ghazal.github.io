import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    year: "Aug 2025 – Sep 2025",
    title: "AI Intern",
    org: "National Training Academy (NTA)",
    detail: "Shipped two production AI systems for digital transformation workflows: a CV-to-job ranking service powered by Llama 3.1 + LoRA returning structured JSON, and an Egyptian National ID OCR pipeline with FastAPI, OpenCV, and Tesseract. Both deployed to replace manual review steps.",
    type: "experience",
  },
  {
    year: "Current",
    title: "Vice Head of Public Relations",
    org: "Microsoft Student Club, Nile University",
    detail: "Lead the PR team across the semester, owning team coordination, content direction, and execution of club initiatives. Part of the organizing team for DeepX 2026, the club's flagship hackathon, responsible for speaker logistics and communications end-to-end (outreach, scheduling, on-site coordination).",
    type: "experience",
  },
  {
    year: "Previous",
    title: "Head of Public Relations",
    org: "E-Club (Entrepreneurship Club), Nile University",
    detail: "Led PR strategy and execution for flagship events and club initiatives. Managed sponsor and guest-speaker outreach end-to-end, and trained PR team members on outreach messaging and brand consistency.",
    type: "experience",
  },
  {
    year: "Feb 2025 – Jun 2025",
    title: "Junior Teaching Assistant",
    org: "Nile University",
    detail: "Supported 50+ students through debugging, code review, and problem-solving sessions. Translated complex programming concepts into explanations that helped students unblock and ship their own work faster.",
    type: "experience",
  },
  {
    year: "",
    title: "1st Place, Nile University UGRF (Undergraduate Research Forum)",
    org: "",
    detail: "For Smart Food Guardian, multimodal Nutri-Score classifier.",
    type: "award",
  },
  {
    year: "",
    title: "President's Honor List, Nile University",
    org: "",
    detail: "Spring 2025 and Fall 2025. GPA 4.0 / 4.0.",
    type: "award",
  },
  {
    year: "",
    title: "DataCamp, Deep Learning in Python Specialization",
    org: "",
    detail: "Full track covering CNNs, RNNs/LSTMs, and Transformers on real datasets.",
    link: "https://www.datacamp.com/statement-of-accomplishment/track/643b4b709b3e9714758a0915b9851dd2f769e7a7?raw=1",
    type: "award",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-5xl">
        <SectionHeader number="03" title="Experience & Achievements" caption="WHAT I'VE DONE" />
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
                  {it.link && (
                    <a
                      href={it.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-accent hover:text-accent/80"
                    >
                      View certificate
                    </a>
                  )}
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
