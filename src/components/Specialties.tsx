const specialties = [
  {
    id: "COG-NET-110",
    version: "v4.0.0",
    title: "Cognitive Knowledge Engines",
    description: "Develop secure RAG frameworks that synthesize vast corporate data siloes into a centralized intelligence layer, prioritizing factual accuracy and traceability.",
    techs: ["graph-databases", "dense-retrieval", "in-context-learning", "hybrid-search"],
    latency: "35ms",
    accuracy: "96%"
  },
  {
    id: "MOD-CUS-892",
    version: "v4.0.0",
    title: "Domain-Optimized Models",
    description: "Tailor open-weight architectures (Llama, Mistral) on your internal data securely. Outperform generic models on your industry-specific tasks and nomenclature.",
    techs: ["DPO", "parameter-efficient-tuning", "LoRA", "RLHF"],
    latency: "40ms",
    accuracy: "94%"
  },
  {
    id: "AUT-AGT-554",
    version: "v4.0.0",
    title: "Agentic Swarms",
    description: "Orchestrate multi-agent networks capable of dividing complex goals, delegating tasks, validating outputs, and self-correcting in real-time.",
    techs: ["langgraph", "tool-use", "chain-of-thought", "supervisor-agents"],
    latency: "85ms",
    accuracy: "97%"
  },
  {
    id: "VIS-GEN-303",
    version: "v4.0.0",
    title: "Spatial & Temporal Generation",
    description: "Build generative pipelines that produce high-fidelity imagery and coherent video sequences aligned with your brand's unique design language.",
    techs: ["diffusion-models", "temporal-consistency", "latent-space-manipulation"],
    latency: "110ms",
    accuracy: "95%"
  },
  {
    id: "NLU-SEM-991",
    version: "v4.0.0",
    title: "Semantic Analysis Protocols",
    description: "Extract actionable structured data from unstructured text streams. Automate compliance, legal review, and customer sentiment triage.",
    techs: ["named-entity-recognition", "zero-shot-extraction", "sentiment-mapping"],
    latency: "45ms",
    accuracy: "98%"
  }
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Technical Mastery</h2>
          <p className="text-xl text-muted-foreground font-light">
            Our established technological foundations for scaling enterprise intelligence.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-border/50 bg-[#0d1117] shadow-2xl font-mono text-sm leading-relaxed">
          
          {/* Terminal Header */}
          <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-border/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="mx-auto text-xs text-muted-foreground font-sans">root@polemos-labs:~</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 text-[#10b981] overflow-x-auto">
            
            {/* Command */}
            <div className="mb-6 flex flex-wrap gap-2 text-[#e6edf3]">
              <span className="text-[#a855f7] font-bold">root@polemos-labs</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-blue-400">/sys/intelligence</span>
              <span className="text-white">#</span>
              <span>cat core_systems.yaml | grep <span className="text-yellow-300">"active"</span> --color=auto</span>
            </div>

            <div className="text-[#8b949e] mb-8">
              Initializing scan of proprietary subroutines...<br />
              Located 5 primary technological modules. Outputting diagnostics:
            </div>

            {/* Loop through specialties */}
            <div className="flex flex-col gap-8">
              {specialties.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="text-[#8b949e]">// System Check: PASS | Last validated: T-minus 2 hours</div>
                  <div className="flex items-center gap-4 text-[#e6edf3] font-bold text-base">
                    <span className="text-[#a855f7]">❯</span>
                    <span className="text-[#8b949e] text-xs px-2 py-0.5 border border-[#30363d] rounded">{item.version}</span>
                    <span className="text-white">{item.title}</span>
                  </div>
                  <div className="text-[#e6edf3] max-w-3xl ml-6 mb-2">
                    {item.description}
                  </div>
                  <div className="ml-6 flex items-start flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-[#8b949e]">Frameworks:</span>
                    <div className="flex flex-wrap gap-2 text-[#38bdf8]">
                      {item.techs.map(t => `<${t}>`).join(" ")}
                    </div>
                  </div>
                  <div className="ml-6 flex gap-8 text-[#8b949e]">
                    <span>Latency: <span className="text-[#10b981]">{item.latency}</span></span>
                    <span>Accuracy: <span className="text-[#10b981]">{item.accuracy}</span></span>
                    <span>Node: <span className="text-[#10b981]">ONLINE</span></span>
                  </div>
                  <div className="ml-6 text-xs text-[#30363d] tracking-widest mt-1">
                    {item.id}
                  </div>
                </div>
              ))}
            </div>

            {/* Next Prompt */}
            <div className="mt-8 flex flex-wrap gap-2 text-[#e6edf3]">
              <span className="text-[#a855f7] font-bold">root@polemos-labs</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-blue-400">/sys/intelligence</span>
              <span className="text-white">#</span>
              <span className="animate-pulse">_</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Specialties;
