const steps = [
  {
    number: "01",
    title: "Evaluate",
    description: "Deep dive into your operational bottlenecks to identify high-ROI AI opportunities.",
  },
  {
    number: "02",
    title: "Architect",
    description: "Design technical frameworks prioritizing data security, scalability, and seamless UI/UX.",
  },
  {
    number: "03",
    title: "Train",
    description: "Fine-tune and rigidly test intelligent agents on your domain-specific proprietary data.",
  },
  {
    number: "04",
    title: "Scale",
    description: "Deploy solutions into production with continuous monitoring and iterative refinement.",
  },
];

const Testimonials = () => {
  return (
    <section id="methodology" className="py-32 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6 block border-b border-border pb-4">
                [ 05 ] Methodology
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Engineered for Impact</h2>
              <p className="text-lg text-muted-foreground font-sans font-light leading-relaxed">
                We abandon the hype cycle in favor of a rigorous, engineering-first approach to guarantee reliable outcomes.
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 pt-4 lg:pt-0">
            <div className="grid sm:grid-cols-2 gap-px bg-border">
              {steps.map((step) => (
                <div key={step.number} className="bg-background p-8 md:p-12 hover:bg-muted/50 transition-colors flex flex-col justify-between h-full">
                  <div className="text-3xl font-serif text-muted-foreground mb-16 opacity-50">{step.number}</div>
                  <div>
                    <h4 className="text-2xl font-serif mb-4 text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground font-sans font-light leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
