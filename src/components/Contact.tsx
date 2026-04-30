import { ArrowUpRight, Download, FileText, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const channels = [
  { icon: Mail, label: "EMAIL", value: "marwanghazal002y@gmail.com", href: "mailto:marwanghazal002y@gmail.com" },
  { icon: Github, label: "GITHUB", value: "github.com/Marwan-Ghazal", href: "https://github.com/Marwan-Ghazal" },
  { icon: Linkedin, label: "LINKEDIN", value: "linkedin.com/in/marwan-ghazal-9690ba33a/", href: "https://www.linkedin.com/in/marwan-ghazal-9690ba33a/" },
  { icon: Phone, label: "PHONE", value: "+20 101 651 1889", href: "tel:+201016511889" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 border-t border-border relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full opacity-10 blur-[140px]"
        style={{ background: "hsl(var(--accent))" }}
      />
      <div className="container max-w-5xl relative">
<SectionHeader number="05" title="Let's Talk" caption="GET IN TOUCH" />
        
        <Reveal>
          <p className="text-2xl md:text-4xl font-medium tracking-tight leading-tight max-w-3xl mb-12">
            Open to AI/ML internships, applied AI roles, and interesting collaborations. Based in Sheikh Zayed, Egypt — happy to work remotely or relocate.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-3 mb-16">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 60}>
              <a
                href={c.href}
                className="group flex items-center justify-between py-5 border-t border-border hover:border-foreground transition-colors"
              >
                <div className="flex items-center gap-4">
                  <c.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-label mb-1">
                      {c.label}
                    </div>
                    <div className="text-foreground">{c.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mb-6 text-sm text-muted-foreground max-w-2xl">
            Download my CV or cover letter for a closer look.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/Marwan_Ghazal_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-[0.18em] rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              Download CV ↓
            </a>
            <a
              href="/Marwan_Ghazal_Cover_Letter.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 border border-border-strong text-foreground font-mono text-xs uppercase tracking-[0.18em] rounded-sm hover:border-foreground transition-colors"
            >
              <FileText className="h-3.5 w-3.5" />
              Download Cover Letter ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
      <span>© 2026 Marwan Ghazal · Built with React + Vite · Sheikh Zayed, Egypt</span>
      <div className="flex items-center gap-6">
        <span>Built with React + Vite</span>
      </div>
    </div>
  </footer>
);
