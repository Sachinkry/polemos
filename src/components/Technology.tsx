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
    title: "Foundation Model Orchestration",
    description: "Fine-tuned, domain-specific large language models optimized for low latency and maximal accuracy.",
  }
];

const Technology = () => {
  return (
    <section id="technology" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Advanced Infrastructure</h2>
          <p className="text-lg text-muted-foreground font-sans font-light">
            The minimal, bleeding-edge frameworks that power our enterprise intelligence solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {technologies.map((tech) => (
            <div key={tech.title} className="bg-background p-8 md:p-12 hover:bg-muted/50 transition-colors">
              <h4 className="text-xl font-serif text-foreground mb-3">{tech.title}</h4>
              <p className="text-muted-foreground font-sans font-light leading-relaxed">{tech.description}</p>
            </div>
          ))}
          {/* Fill the last grid slot if odd number of items to maintain perfect grid lines */}
          {technologies.length % 2 !== 0 && (
            <div className="bg-background hidden md:block"></div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Technology;
