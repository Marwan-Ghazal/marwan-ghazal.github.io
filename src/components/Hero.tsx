import { ArrowDown, Download, FileText } from "lucide-react";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "hsl(var(--accent))" }}
      />

      <div className="container relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Portfolio · 2026
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.03em] leading-[0.95] mb-8">
            Marwan Ghazal<span className="text-accent">.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl leading-snug font-light mb-8">
            AI Engineering Student working across{" "}
            <span className="text-foreground">LLMs</span>,{" "}
            <span className="text-foreground">computer vision</span>, and{" "}
            <span className="text-foreground">end-to-end ML systems</span>, from data pipelines through deployment.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <p className="font-mono text-sm text-muted-foreground mb-12 max-w-2xl">
            Junior BSc. in Artificial Intelligence at Nile University (GPA 4.0/4.0, President's Honor). I design and ship systems that turn messy real-world inputs (EEG recordings, Arabic documents, nutrition labels, CVs) into reliable, structured outputs.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-[0.18em] rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              View Projects
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="/src/assets/Marwan_Ghazal_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 border border-border-strong text-foreground font-mono text-xs uppercase tracking-[0.18em] rounded-sm hover:border-foreground transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              Download CV
            </a>
            <a
              href="/src/assets/Marwan_Ghazal_Cover_Letter.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground font-mono text-xs uppercase tracking-[0.18em] rounded-sm hover:text-foreground hover:border-border-strong transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              Cover Letter
            </a>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-20 flex items-center gap-6 font-mono text-xs text-muted-foreground">
            <span>Sheikh Zayed, Egypt</span>
            <span className="h-px w-8 bg-border" />
            <span>2026</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
