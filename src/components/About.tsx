import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container max-w-5xl">
        <SectionHeader number="01" title="About" caption="Who I am" />

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm an AI/ML undergraduate at Nile University focused on the unglamorous middle of applied AI:
              taking messy, real-world signals and shaping them into systems that actually run in production.
              My work spans clinical EEG analysis, Arabic OCR pipelines, and nutrition-label understanding —
              problems where the input is noisy and the output has to be trustworthy.
            </p>
            <p>
              I care about end-to-end ownership: data pipelines, model selection, evaluation, deployment, and
              the boring but critical glue in between. I've shipped projects solo, co-built systems during my
              internship at the National Training Academy, and led teams through hackathons and research
              competitions across the MENA region.
            </p>
          </Reveal>

          <Reveal className="md:col-span-5" delay={120}>
            <div className="border-l-2 border-accent pl-6 py-2 mb-8">
              <p className="text-xl md:text-2xl font-medium tracking-tight text-foreground leading-snug">
                "I don't stop at notebooks — I ship."
              </p>
            </div>

            <dl className="font-mono text-xs space-y-3 border-t border-border pt-6">
              {[
                ["GPA", "3.85 / 4.0"],
                ["Expected", "Spring 2027"],
                ["Location", "Sheikh Zayed, EG"],
                ["Focus", "Applied AI · LLMs · Signals"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="uppercase tracking-[0.18em] text-label">{k}</dt>
                  <dd className="text-foreground text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
