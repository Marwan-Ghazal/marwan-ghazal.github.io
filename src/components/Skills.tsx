import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    label: "LANGUAGES",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    label: "ML & DEEP LEARNING",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "XGBoost",
      "Transformers (Hugging Face)",
      "LoRA / Fine-Tuning",
      "Multimodal Fusion",
      "CNNs",
      "RNNs / LSTMs",
    ],
  },
  {
    label: "LLMs & RAG",
    items: [
      "OpenAI API",
      "Gemini API",
      "Claude API",
      "Locally hosted Llama-family models",
      "Prompt engineering (system prompts, schema-based JSON outputs)",
      "Embeddings",
      "Vector search (pgvector, Chroma)",
      "Hybrid retrieval",
      "Cross-encoder reranking",
      "Agentic RAG",
    ],
  },
  {
    label: "BACKEND & APIS",
    items: ["FastAPI", "Flask", "REST", "JSON", "async SQLAlchemy", "Pydantic"],
  },
  {
    label: "DATA & TOOLS",
    items: ["PostgreSQL", "MySQL", "Supabase", "Pandas", "NumPy", "OpenCV", "Tesseract", "Git / GitHub"],
  },
  {
    label: "DEV ENVIRONMENT",
    items: ["Cursor", "Windsurf", "Claude Code", "Copilot"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-5xl">
        <SectionHeader number="04" title="Skills" caption="STACK" />
        <div className="space-y-10">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 60}>
              <div className="grid grid-cols-12 gap-4 md:gap-8 py-5 border-t border-border">
                <div className="col-span-12 md:col-span-3">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-label">
                    {g.label}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="font-mono text-xs text-foreground border border-border px-3 py-1.5 rounded-sm hover:border-accent hover:text-accent transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
