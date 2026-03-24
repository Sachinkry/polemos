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
    <section id="services" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Products Section */}
        <div id="products" className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-40 relative">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6 block border-b border-border pb-4">
                [ 01 ] Platforms
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Flagship Innovations</h2>
              <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed">
                Proprietary platforms we’ve engineered natively to accelerate your AI adoption and minimize technical overhead.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 pt-4 lg:pt-0">
            <div className="grid md:grid-cols-2 gap-px bg-border">
              {products.map((product) => (
                <div key={product.title} className="bg-background p-8 md:p-12 hover:bg-muted/50 transition-colors h-full">
                  <span className="inline-block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4 border border-border px-2 py-1">
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
        </div>

        {/* Services Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6 block border-b border-border pb-4">
                [ 02 ] Competencies
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Core Competencies</h2>
              <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed">
                Bespoke consulting and intelligent engineering to fortify your competitive edge against market disruption.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 pt-4 lg:pt-0">
            <div className="grid md:grid-cols-2 gap-px bg-border">
              {services.map((service) => (
                <div key={service.title} className="bg-background p-8 md:p-12 hover:bg-muted/50 transition-colors h-full">
                  <h3 className="text-xl font-serif text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground font-sans font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
