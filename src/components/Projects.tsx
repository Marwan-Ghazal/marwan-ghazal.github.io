import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

interface Project {
  number: string;
  title: string;
  subtitle?: string;
  tagline: string;
  body: string;
  stack: string[];
  role: string;
  status?: "live" | "in-progress" | "research";
  github?: string;
  visualType: "diagram" | "screenshot";
  featured?: boolean;
  stats?: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: "P/01",
    title: "NeuroVista Pro",
    tagline: "A clinical neurofeedback analysis platform built in partnership with BioLife — turning raw EEG data into evidence-based protocol recommendations.",
    body: "Problem. Neurofeedback practitioners treat ADHD, anxiety, PTSD, and sleep disorders by analyzing EEG brainwave recordings session after session. Deciding what to do next — continue the protocol, adjust parameters, switch entirely, or reassess — requires synthesizing hours of data against patient history and clinical literature. Most clinicians do this manually with spreadsheets and intuition.\n\nApproach. A desktop application with a layered architecture that strictly separates clinical logic from infrastructure. The system includes a multi-format EEG parser (EDF, BioLife CSV, generic timestamped), a deterministic rule-based decision engine that ranks four treatment paths with full explainability, an agentic RAG clinical assistant using hybrid retrieval (pgvector + tsvector) with cross-encoder reranking over neurofeedback research, and a PHI de-identification pipeline that strips patient identifiers before any LLM call. Patient data stays on the clinic's local machine — only de-identified context ever leaves it.\n\nOutcome. The clinical decision engine, EEG parser, and rule-based recommendation logic are stable and unit-tested. Active work focuses on the RAG retrieval system, the Tauri desktop frontend, and the document ingestion pipeline for BioLife's research corpus.",
    stack: ["PYTHON", "FASTAPI", "POSTGRESQL", "PGVECTOR", "LLAMAINDEX", "TAURI", "REACT", "TYPESCRIPT"],
    role: "Solo — full-stack & ML | Industry partnership with BioLife",
    status: "in-progress",
    visualType: "diagram",
  },
  {
    number: "P/02",
    title: "Arabic ABSA",
    subtitle: "3rd Place — DeepX 2026 Hackathon",
    tagline: "A complete Aspect-Based Sentiment Analysis system for Arabic customer reviews. Built end-to-end in 12 hours.",
    body: "Problem. ABSA goes beyond standard sentiment classification — for each review, the system has to identify every aspect (food, service, price, delivery, ambiance) and classify the sentiment of each independently, even when a single review mixes positive and negative opinions. Arabic adds dialectal variation, code-switching, Arabizi, and severe class imbalance — eight of our 25 output classes had fewer than 20 training examples in the 1,871-row training set.\n\nApproach. A 25-head joint multi-label classifier on MARBERTv2, with each output head an independent sigmoid for one (aspect, polarity) pair — handling mixed-sentiment reviews natively. The pipeline includes a unified preprocessing contract used in training, inference, and the live demo (zero training-serving skew), multi-target translation augmentation expanding the training pool 6.9× via NLLB-200 and opus-mt, a custom training recipe for severe imbalance (Asymmetric Loss, layer-wise LR decay, EMA shadow weights, per-class threshold calibration), and a nine-rule post-processing layer.\n\nOutcome. 0.78 F1 on the hidden test set. The most consequential moment was a measurement, not a model change: we trained an XLM-R encoder intending to ensemble it with MARBERT for multilingual robustness, but the ensemble only produced 0.801 — a 0.0025 gain inside the noise floor. We shipped MARBERT alone. The simpler pipeline was the right answer.",
    stack: ["PYTHON", "PYTORCH", "MARBERTv2", "TRANSFORMERS", "NLLB-200", "FASTAPI", "REACT"],
    role: "Co-developed with a 3-person team (incl. Omar Amin) — DeepX 2026 Hackathon",
    status: "research",
    visualType: "diagram",
    stats: [
      { label: "HIDDEN TEST F1", value: "0.780" },
      { label: "VALIDATION PEAK", value: "0.798" },
      { label: "TRAINING ROWS", value: "1,871" },
      { label: "OUTPUT CLASSES", value: "25" },
      { label: "THROUGHPUT", value: "50–100/sec on GPU" },
    ],
  },
  {
    number: "P/03",
    title: "Smart Food Guardian",
    subtitle: "1st Place — Nile University UGRF",
    tagline: "Multimodal Nutri-Score classifier predicting product health ratings from packaging.",
    body: "A deep learning system that predicts a food product's Nutri-Score (A–E) by fusing three modalities — product images, textual metadata, and tabular nutrition values — under a strict no-leakage constraint: only signals readable from the package itself. The fusion architecture outperformed every unimodal baseline and won 1st place at Nile University's Undergraduate Research Forum.",
    stack: ["PYTHON", "PYTORCH", "TENSORFLOW", "XGBOOST", "OPENCV", "MULTIMODAL FUSION"],
    role: "Co-developed with Omar Amin — UGRF research project",
    status: "research",
    github: "https://github.com/omaramin-77/Smart-Food-Guardian/tree/MultiModal",
    visualType: "diagram",
    stats: [
      { label: "TEST ACCURACY", value: "0.87" },
      { label: "MACRO-F1", value: "0.83" },
      { label: "OUTPUT CLASSES", value: "5 (A–E)" },
      { label: "MODALITIES", value: "Image · Text · Tabular" },
    ],
  },
  {
    number: "P/04",
    title: "CV Ranking with Llama 3.1 + LoRA",
    subtitle: "National Training Academy — Internship Project",
    tagline: "A production CV-to-job ranking service returning structured JSON for hiring automation.",
    body: "A FastAPI/Flask service built on Llama 3.1 fine-tuned with LoRA for parameter-efficient adaptation. Ingests PDF resumes, returns structured JSON with an overall fit score, per-skill match breakdown, and skill-gap recommendations. Multilingual support handles Arabic and English CVs. Deployed end-to-end as part of NTA's digital transformation pipeline, replacing a manual shortlisting step.",
    stack: ["PYTHON", "LLAMA 3.1", "LORA", "PYTORCH", "FLASK", "REST"],
    role: "Co-developed with Omar Amin — NTA Internship",
    status: "live",
    github: "https://github.com/omaramin-77/LLM_Lora_CV_Ranker",
    visualType: "diagram",
  },
  {
    number: "P/05",
    title: "Egyptian National ID OCR",
    subtitle: "National Training Academy — Internship Project",
    tagline: "A hybrid OCR pipeline for Egyptian National ID cards, deployed as a real-time API.",
    body: "A FastAPI service implementing a hybrid OCR pipeline with explicit preprocessing (grayscale, adaptive thresholding, perspective correction), field-level ROI detection, and semantic validation of the 14-digit Egyptian ID format — including DOB parsing and governorate-code authenticity checks. Handles the noisy reality of phone-camera captures: angled, blurry, low-light. Deployed to automate ID extraction in workflows that previously required manual review.",
    stack: ["PYTHON", "FASTAPI", "OPENCV", "TESSERACT"],
    role: "Co-developed with Omar Amin — NTA Internship",
    status: "live",
    github: "https://github.com/Marwan-Ghazal/Egyptian-National-ID-Card-OCR-System",
    visualType: "diagram",
  },
  {
    number: "P/06",
    title: "CS Pathfinder",
    subtitle: "Career Guidance Platform",
    tagline: "A full-stack career guidance system combining quiz-based field recommendations with AI-powered CV analysis.",
    body: "A Flask web application with three core flows: a quiz-based recommendation engine that maps user responses to CS specialization clusters, a CV analysis pipeline using ChatPDF and the Gemini API for structured extraction and feedback, and persistent user profiles in PostgreSQL. Demonstrates LLM integration for structured output, multi-step user workflows, and end-to-end full-stack delivery.",
    stack: ["PYTHON", "FLASK", "POSTGRESQL", "GEMINI API", "CHATPDF API", "REST"],
    role: "Co-developed with Omar Amin",
    status: "live",
    github: "https://github.com/omaramin-77/cs-pathfinder",
    visualType: "diagram",
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
          {project.subtitle && (
            <p className="text-sm text-accent font-mono uppercase tracking-wide mb-2">{project.subtitle}</p>
          )}
          <p className="text-muted-foreground mb-5 leading-snug">{project.tagline}</p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6 whitespace-pre-line">{project.body}</p>

          {project.stats && (
            <div className="mb-6">
              <table className="w-full font-mono text-xs text-muted-foreground">
                <tbody>
                  {project.stats.map((stat, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-1 pr-4 uppercase tracking-wide">{stat.label}</td>
                      <td className="py-1 text-right font-semibold">{stat.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

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
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-base text-foreground hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                Repo
                <ArrowUpRight className="h-4 w-4" />
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
