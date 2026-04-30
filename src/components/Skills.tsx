import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "C++", "SQL", "Bash"],
  },
  {
    label: "ML & Deep Learning",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "ONNX", "MNE-Python", "OpenCV", "YOLOv8"],
  },
  {
    label: "LLMs & RAG",
    items: ["LangChain", "LlamaIndex", "vLLM", "Qwen2.5", "BGE-M3", "Qdrant", "Cohere Rerank"],
  },
  {
    label: "Backend & APIs",
    items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Docker", "Nginx"],
  },
  {
    label: "Data & Tools",
    items: ["Pandas", "NumPy", "Polars", "DuckDB", "W&B", "Git", "Linux"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-5xl">
        <SectionHeader number="04" title="Toolkit" caption="What I work with" />
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
