import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="container max-w-5xl">
        <SectionHeader number="01" title="About" caption="WHO I AM" />

        <div className="space-y-8 md:space-y-12">
          <Reveal className="space-y-5 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p>
              I'm an AI undergraduate at Nile University focused on the part of applied AI that doesn't fit on a slide:
              the data pipeline that handles real input, the model choices that survive contact with messy data, and the
              deployment work that turns a notebook into something a real person can use. My work spans clinical EEG
              analysis, Arabic NLP, OCR pipelines for government documents, and multimodal product classification, domains
              where the input is noisy, the output has to be trustworthy, and the engineering matters as much as the model.
            </p>
            <p>
              I've shipped systems solo and in teams: a clinical neurofeedback platform I'm building independently with a real
              industry partner, two production AI systems deployed during my internship at the National Training Academy, a
              1st-place multimodal research project at Nile University's UGRF, and a 3rd-place Arabic ABSA pipeline at the DeepX
              2026 hackathon. Outside of building, I serve as Vice Head of PR at Microsoft Student Club at Nile University,
              after leading PR for the university's E-Club, work that's taught me as much about communicating technical ideas as
              the engineering itself.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border/70 bg-muted/10 p-5 shadow-sm shadow-border/10">
              <div className="border-l-2 border-accent pl-5 pb-3">
                <p className="text-xl md:text-2xl font-medium tracking-tight text-foreground leading-snug">
                  "I don't stop at notebooks, I ship."
                </p>
              </div>

              <dl className="font-mono text-sm md:text-base space-y-3 border-t border-border pt-4 mt-4">
                {[
                  ["GPA", "4.0 / 4.0 (President's Honor, Spring 2025)"],
                  ["EXPECTED", "2027"],
                  ["LOCATION", "Sheikh Zayed, EG"],
                  ["FOCUS", "Applied AI · LLMs · Production Systems"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="uppercase tracking-[0.18em] text-label text-[0.75rem] md:text-sm">{k}</dt>
                    <dd className="text-foreground text-right text-sm md:text-base">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
