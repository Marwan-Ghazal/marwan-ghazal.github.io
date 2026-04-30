import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface Project {
  number: string;
  title: string;
  tagline: string;
  body: string;
  stack: string[];
  role: string;
  status?: "live" | "in-progress" | "research";
  github?: string;
  visualType: "diagram" | "screenshot";
  featured?: boolean;
}

const projects: Project[] = [
  {
    number: "P/01",
    title: "NeuroVista Pro",
    tagline: "Clinical-grade EEG analysis platform with multi-model ensemble.",
    body:
      "Problem: Neurologists spend hours manually reviewing raw EEG recordings for seizure and abnormality detection, with little tooling for second-opinion ML. Approach: Built an end-to-end platform combining a CNN-Transformer ensemble for event detection, a spectral feature pipeline for clinician-readable summaries, and a FastAPI service that streams structured findings into a Next.js review UI. Result: Achieves 94.2% sensitivity on the TUH EEG corpus while producing per-epoch explanations a clinician can actually audit.",
    stack: ["PyTorch", "FastAPI", "MNE-Python", "Next.js", "PostgreSQL", "Docker"],
    role: "Solo — full stack & ML",
    status: "in-progress",
    visualType: "diagram",
    featured: true,
  },
  {
    number: "P/02",
    title: "Arabic Document Intelligence",
    tagline: "OCR + LLM pipeline for structured extraction from scanned Arabic forms.",
    body:
      "Problem: Off-the-shelf OCR fails on degraded Arabic government forms, and downstream LLMs hallucinate field values. Approach: Combined a fine-tuned TrOCR variant with a layout-aware post-processor and a constrained-decoding extraction step using Qwen2.5. Result: Cut field-extraction error rate by 38% versus a Tesseract + GPT-4o-mini baseline on a 1,200-document evaluation set.",
    stack: ["TrOCR", "Qwen2.5", "LayoutLMv3", "vLLM", "Python"],
    role: "NTA Internship — co-built",
    status: "live",
    visualType: "screenshot",
  },
  {
    number: "P/03",
    title: "Smart Food Guardian",
    tagline: "Real-time nutrition-label understanding for dietary risk flagging.",
    body:
      "Problem: People with allergies and chronic conditions can't reliably parse nutrition labels in-store. Approach: Built a mobile-first vision pipeline (YOLOv8 → label segmentation → multilingual OCR → rules engine) backed by a personal-profile API. Result: Won 1st place at UGRF 2025; sub-2-second end-to-end inference on a mid-range Android device.",
    stack: ["YOLOv8", "PaddleOCR", "FastAPI", "React Native", "SQLite"],
    role: "Team lead — 4 people",
    status: "live",
    github: "#",
    visualType: "screenshot",
  },
  {
    number: "P/04",
    title: "RAG over Regulatory Corpora",
    tagline: "Hybrid retrieval system for MENA financial regulations.",
    body:
      "Problem: Compliance teams need traceable answers from thousands of pages of evolving regulation. Approach: Built a hybrid BM25 + dense retriever with section-aware chunking, reranking via a cross-encoder, and a citation-enforced generation step. Result: 91% answer-grounded rate on a hand-labeled 200-question benchmark, with every claim linked to a source paragraph.",
    stack: ["LangChain", "Qdrant", "BGE-M3", "Cohere Rerank", "FastAPI"],
    role: "Solo",
    status: "in-progress",
    visualType: "diagram",
  },
  {
    number: "P/05",
    title: "DeepX Hackathon — Vision Triage",
    tagline: "Emergency-room imaging triage prototype, 48 hours.",
    body:
      "Problem: ER backlogs delay critical imaging review. Approach: Fine-tuned a ConvNeXt-V2 classifier on a public chest X-ray subset and wrapped it in a triage UI showing rank-ordered cases with Grad-CAM overlays. Result: 3rd place at DeepX 2026; converted into a follow-up research direction with a faculty advisor.",
    stack: ["ConvNeXt-V2", "PyTorch", "Grad-CAM", "Streamlit"],
    role: "Co-developer with Omar Amin",
    status: "research",
    visualType: "screenshot",
  },
];

const statusLabel: Record<NonNullable<Project["status"]>, string> = {
  live: "Live",
  "in-progress": "In Progress",
  research: "Research",
};


const ProjectCard = ({ project }: { project: Project }) => {
  const isFeatured = project.featured;
  return (
    <Reveal>
      <article
        className={`group relative border border-border rounded-md overflow-hidden bg-surface transition-colors hover:border-border-strong`}
      >
        {isFeatured && (
          <div className="absolute top-4 right-4 z-10 font-mono text-[10px] uppercase tracking-[0.2em] text-accent border border-accent/40 bg-accent/10 px-2 py-1 rounded-sm">
            ★ Featured Project
          </div>
        )}
        <div className="p-6 md:p-10 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-xs text-label">{project.number}</span>
            {project.status && (
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground border border-border px-2 py-1 rounded-sm">
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full mr-2 align-middle ${
                    project.status === "live"
                      ? "bg-accent"
                      : project.status === "in-progress"
                      ? "bg-yellow-500"
                      : "bg-muted-foreground"
                  }`}
                />
                {statusLabel[project.status]}
              </span>
            )}
          </div>

          <h3 className={`${isFeatured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"} font-medium tracking-tight mb-3`}>
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-5 leading-snug">{project.tagline}</p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.body}</p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground border border-border px-2 py-1 rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-5 border-t border-border">
            <span className="font-mono text-xs text-label">{project.role}</span>
            {project.github && (
              <a
                href={project.github}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground hover:text-accent transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                Repo
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container max-w-6xl">
        <SectionHeader number="02" title="Selected Projects" caption="2024 — 2026" />
        <div className="space-y-8 md:space-y-12">
          {projects.map((p) => (
            <ProjectCard key={p.number} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
