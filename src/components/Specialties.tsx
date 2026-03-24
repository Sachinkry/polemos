const specialties = [
  {
    id: "01}11}00011}00{",
    version: "v3.2.1",
    title: "RAG & Knowledge Systems",
    description: "Build systems that combine the power of large language models with your organization's proprietary data to deliver accurate, contextually relevant responses without hallucinations.",
    techs: ["vector-db", "embeddings", "context-window", "document-chunking", "semantic-search"],
    latency: "30ms",
    accuracy: "92%"
  },
  {
    id: "000{010}1101}01",
    version: "v3.2.1",
    title: "Model Fine-Tuning",
    description: "Customize state-of-the-art AI models like GPT, Claude, and Llama to excel in your specific domain with specialized knowledge and behaviors.",
    techs: ["parameter-efficient", "PEFT", "LoRA", "QLoRA", "adapter-tuning"],
    latency: "45ms",
    accuracy: "93%"
  },
  {
    id: "0011}001{1}}}1{",
    version: "v3.2.1",
    title: "Multimodal AI",
    description: "Create AI solutions that can understand, generate, and reason across multiple formats including text, images, audio, and video.",
    techs: ["vision-language", "audio-processing", "cross-modal", "multimodal-fusion", "CLIP"],
    latency: "60ms",
    accuracy: "94%"
  },
  {
    id: "{11}}1{}}0}1}0{",
    version: "v3.2.1",
    title: "Conversational Agents",
    description: "Build sophisticated AI assistants with memory, personalities, and the ability to handle complex conversations with natural language understanding.",
    techs: ["dialogue-management", "NLU", "memory-systems", "sentiment-analysis", "entity-extraction"],
    latency: "75ms",
    accuracy: "95%"
  },
  {
    id: "11101{1}0000}0}",
    version: "v3.2.1",
    title: "Synthetic Media",
    description: "Develop custom AI avatars, synthetic voices, and personalized video solutions that scale your video outreach and create compelling, individualized content experiences.",
    techs: ["synthetic-media", "voice-cloning", "real-time", "deepfake-detection", "temporal-consistency"],
    latency: "90ms",
    accuracy: "96%"
  },
  {
    id: "011000}1{}0{11}",
    version: "v3.2.1",
    title: "Autonomous Agents",
    description: "Develop intelligent agents that can reason, plan, and execute complex tasks autonomously while adapting to changing environments.",
    techs: ["planning", "reasoning", "tool-use", "MCTS", "ReAct"],
    latency: "105ms",
    accuracy: "97%"
  }
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our AI Specialties</h2>
          <p className="text-xl text-muted-foreground font-light">
            Core technologies and capabilities in enterprise-grade artificial intelligence.
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
            <div className="mx-auto text-xs text-muted-foreground font-sans">aphelion@ai-labs:~</div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 text-green-400 overflow-x-auto">
            
            {/* Command */}
            <div className="mb-6 flex flex-wrap gap-2 text-[#e6edf3]">
              <span className="text-green-400">aphelion@ai-labs</span>
              <span className="text-blue-400">:</span>
              <span className="text-blue-400">~/capabilities</span>
              <span className="text-white">$</span>
              <span>cat /usr/local/bin/ai-capabilities.sh | grep -i <span className="text-yellow-300">"enterprise"</span> --color=always</span>
            </div>

            <div className="text-[#8b949e] mb-8">
              Searching for enterprise AI capabilities...<br />
              Found 6 core specialties in 48ms. Displaying details:
            </div>

            {/* Loop through specialties */}
            <div className="flex flex-col gap-8">
              {specialties.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="text-[#8b949e]">// Last deployed: 24/03/2026</div>
                  <div className="flex items-center gap-4 text-[#e6edf3] font-bold text-base">
                    <span className="text-blue-400">•</span>
                    <span className="text-[#8b949e] text-xs px-2 py-0.5 border border-[#30363d] rounded">{item.version}</span>
                    <span className="text-white">{item.title}</span>
                  </div>
                  <div className="text-[#e6edf3] max-w-3xl ml-6 mb-2">
                    {item.description}
                  </div>
                  <div className="ml-6 flex items-start gap-2">
                    <span className="text-blue-400">&gt;</span>
                    <span className="text-[#8b949e]">Technologies:</span>
                    <div className="flex flex-wrap gap-2 text-yellow-300">
                      {item.techs.join(" ")}
                    </div>
                  </div>
                  <div className="ml-6 flex gap-8 text-[#8b949e]">
                    <span>Latency: <span className="text-green-400">{item.latency}</span></span>
                    <span>Accuracy: <span className="text-green-400">{item.accuracy}</span></span>
                    <span>Status: <span className="text-green-400">ACTIVE</span></span>
                  </div>
                  <div className="ml-6 text-xs text-[#30363d] tracking-widest mt-1">
                    {item.id}
                  </div>
                </div>
              ))}
            </div>

            {/* Next Prompt */}
            <div className="mt-8 flex flex-wrap gap-2 text-[#e6edf3]">
              <span className="text-green-400">aphelion@ai-labs</span>
              <span className="text-blue-400">:</span>
              <span className="text-blue-400">~/capabilities</span>
              <span className="text-white">$</span>
              <span className="animate-pulse">_</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Specialties;
