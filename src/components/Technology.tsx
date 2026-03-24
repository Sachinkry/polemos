const technologies = [
  {
    title: "Deep Learning Architectures",
    description: "Proprietary transformer models and neural networks that form the backbone of our generative capabilities.",
  },
  {
    title: "Vector Retrieval Systems",
    description: "High-dimensional embeddings powering context-aware semantic search that understands true user intent.",
  },
  {
    title: "Ontological Mapping",
    description: "Robust knowledge graphs that establish dynamic, verifiable relationships across disparate enterprise data.",
  },
  {
    title: "Autonomous Workflows",
    description: "Multi-agent frameworks that perform intricate reasoning, tool use, and self-correction without human intervention.",
  },
  {
    title: "Foundation Orchestration",
    description: "Fine-tuned, domain-specific large language models optimized for low latency and maximal accuracy.",
  }
];

const Technology = () => {
  return (
    <section id="technology" className="py-32 bg-muted/20 border-t border-border relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6 block border-b border-border pb-4">
                [ 03 ] Infrastructure
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Advanced Infrastructure</h2>
              <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed">
                The minimal, bleeding-edge frameworks that power our enterprise intelligence solutions safely at scale.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 pt-4 lg:pt-0">
            <div className="grid md:grid-cols-2 gap-px bg-border">
              {technologies.map((tech) => (
                <div key={tech.title} className="bg-background p-8 md:p-12 hover:bg-muted/50 transition-colors h-full">
                  <h4 className="text-xl font-serif text-foreground mb-4">{tech.title}</h4>
                  <p className="text-muted-foreground font-sans font-light leading-relaxed">{tech.description}</p>
                </div>
              ))}
              {/* Fill the last grid slot if odd number of items to maintain perfect grid lines */}
              {technologies.length % 2 !== 0 && (
                <div className="bg-background hidden md:block border-l border-border h-full p-8 md:p-12 opacity-5">
                  <div className="w-full h-full border border-dashed border-border flex items-center justify-center">
                    <span className="text-xs font-mono uppercase tracking-widest">Available</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Technology;
