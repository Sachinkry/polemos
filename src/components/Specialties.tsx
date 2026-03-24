const specialties = [
  {
    id: "COG-NET-110",
    title: "Cognitive Knowledge Engines",
    description: "Develop secure RAG frameworks that synthesize vast corporate data siloes into a centralized intelligence layer.",
    techs: ["Graph Databases", "Dense Retrieval", "In-Context Learning", "Hybrid Search"],
    metrics: "Latency: 35ms | Accuracy: 96%"
  },
  {
    id: "MOD-CUS-892",
    title: "Domain-Optimized Models",
    description: "Tailor open-weight architectures safely on your internal data to outperform generic models on industry-specific tasks.",
    techs: ["DPO", "PEFT", "LoRA", "RLHF"],
    metrics: "Latency: 40ms | Accuracy: 94%"
  },
  {
    id: "AUT-AGT-554",
    title: "Agentic Swarms",
    description: "Orchestrate multi-agent networks capable of dividing complex goals, validating outputs, and self-correcting.",
    techs: ["LangGraph", "Tool Use", "Chain-of-Thought", "Supervisor Agents"],
    metrics: "Latency: 85ms | Accuracy: 97%"
  },
  {
    id: "NLU-SEM-991",
    title: "Semantic Analysis Protocols",
    description: "Extract actionable structured data from unstructured text streams to automate complex review workflows.",
    techs: ["NER", "Zero-Shot Extraction", "Sentiment Mapping"],
    metrics: "Latency: 45ms | Accuracy: 98%"
  }
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Technical Mastery</h2>
          <p className="text-lg text-muted-foreground font-sans font-light">
            Our established technological foundations for scaling enterprise intelligence.
          </p>
        </div>

        {/* Minimalist Data Table */}
        <div className="w-full overflow-hidden border border-border">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1.5fr] text-sm font-medium border-b border-border bg-muted/50 text-muted-foreground">
            <div className="p-4 md:p-6 hidden md:block">Module Profile</div>
            <div className="p-4 md:p-6 hidden md:block">Operational Parameters</div>
            <div className="p-4 md:p-6 hidden md:block">Frameworks</div>
          </div>
          
          <div className="divide-y divide-border bg-background">
            {specialties.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1.5fr] gap-4 md:gap-0 p-6 md:p-0 hover:bg-muted/30 transition-colors group">
                
                <div className="md:p-6 flex flex-col justify-center border-border md:border-r">
                  <div className="text-xs font-mono text-muted-foreground mb-1">{item.id}</div>
                  <h3 className="text-lg font-serif text-foreground">{item.title}</h3>
                </div>
                
                <div className="md:p-6 flex flex-col justify-center border-border md:border-r">
                  <p className="text-sm text-foreground/80 font-sans font-light leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="text-xs font-mono text-muted-foreground">
                    {item.metrics}
                  </div>
                </div>

                <div className="md:p-6 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2">
                    {item.techs.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-muted/50 text-foreground/70 text-xs font-mono border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Specialties;
