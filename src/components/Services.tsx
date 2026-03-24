const products = [
  {
    title: "OmniGraph",
    subtitle: "Enterprise Knowledge Engine",
    description: "Unify your siloed company data into a dynamic knowledge graph that powers context-aware LLM agents across your entire organization seamlessly.",
  },
  {
    title: "NeuroTask",
    subtitle: "Autonomous Operations",
    description: "Deploy self-healing, intelligent agentic workflows that can autonomously handle tedious backend operations, data entry, and system monitoring.",
  }
];

const services = [
  {
    title: "Strategic AI Roadmaps",
    description: "We audit your existing technical debt and outline a phased, pragmatic blueprint for incorporating generative AI securely.",
  },
  {
    title: "LLM Fine-Tuning & Deployment",
    description: "Train foundational models securely on your proprietary data to ensure domain-specific accuracy and strict compliance.",
  },
  {
    title: "Predictive Intelligence",
    description: "Harness statistical modeling and machine learning to forecast trends, optimize supply chains, and mitigate risks proactively.",
  },
  {
    title: "Agentic Systems Engineering",
    description: "Construct multi-agent frameworks capable of advanced reasoning, tool selection, and robust task execution with minimal oversight.",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        
        {/* Products Section */}
        <div id="products" className="mb-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Flagship Innovations</h2>
            <p className="text-lg text-muted-foreground font-sans font-light">
              Proprietary platforms we’ve engineered to accelerate your AI adoption.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {products.map((product) => (
              <div key={product.title} className="bg-background p-8 md:p-12 hover:bg-muted/50 transition-colors">
                <span className="inline-block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  {product.subtitle}
                </span>
                <h3 className="text-2xl font-serif text-foreground mb-4">{product.title}</h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Core Competencies</h2>
            <p className="text-lg text-muted-foreground font-sans font-light">
              Bespoke consulting and engineering to fortify your competitive edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            {services.map((service) => (
              <div key={service.title} className="bg-background p-8 md:p-12 hover:bg-muted/50 transition-colors">
                <h3 className="text-xl font-serif text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
