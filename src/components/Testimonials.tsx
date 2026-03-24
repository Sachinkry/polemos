import { Lightbulb, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Lightbulb,
    title: "Discovery",
    description: "Understanding your business needs and goals.",
  },
  {
    number: "2",
    icon: PenTool,
    title: "Design",
    description: "Crafting custom AI solutions for your specific challenges.",
  },
  {
    number: "3",
    icon: Code,
    title: "Development",
    description: "Building robust, scalable AI implementations.",
  },
  {
    number: "4",
    icon: Rocket,
    title: "Deployment",
    description: "Seamless integration and continuous improvement.",
  },
];

const Testimonials = () => {
  return (
    <section id="how-we-work" className="py-24 bg-background border-t border-border/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">How We Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Results That Matter</h3>
          <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto">
            We don't just implement AI - we deliver measurable outcomes that transform how your business operates.
            Our methodical approach ensures that every AI project delivers tangible business value while minimizing implementation risks.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0" />
          
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center mb-6 shadow-glow group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <step.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 w-full h-full">
                <div className="text-primary font-bold text-lg mb-2">Phase {step.number}</div>
                <h4 className="text-2xl font-bold mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
