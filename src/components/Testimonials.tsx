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
    <section id="methodology" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Engineered for Impact</h2>
          <p className="text-lg text-muted-foreground font-sans font-light">
            We abandon the hype cycle in favor of a rigorous, engineering-first approach. 
            Every deployment is meticulously crafted to ensure security and clear business outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {steps.map((step) => (
            <div key={step.number} className="bg-background p-8 md:p-10 hover:bg-muted/50 transition-colors flex flex-col justify-between h-full">
              <div className="text-2xl font-serif text-muted-foreground mb-12">{step.number}</div>
              <div>
                <h4 className="text-2xl font-serif mb-3 text-foreground">{step.title}</h4>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
