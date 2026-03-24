import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Fingerprint, Network, Bot, Cpu } from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    title: "Deep Learning Architectures",
    description: "Proprietary transformer models and neural networks that form the backbone of our generative capabilities.",
  },
  {
    icon: Fingerprint,
    title: "Vector Retrieval Systems",
    description: "High-dimensional embeddings powering context-aware semantic search that understands true user intent.",
  },
  {
    icon: Network,
    title: "Ontological Mapping",
    description: "Robust knowledge graphs that establish dynamic, verifiable relationships across disparate enterprise data.",
  },
  {
    icon: Bot,
    title: "Autonomous Workflows",
    description: "Multi-agent frameworks that perform intricate reasoning, tool use, and self-correction without human intervention.",
  },
  {
    icon: Cpu,
    title: "Foundation Model Orchestration",
    description: "Fine-tuned, domain-specific large language models optimized for low latency and maximal accuracy.",
  }
];

const Technology = () => {
  return (
    <section id="technology" className="py-32 bg-background relative overflow-hidden border-t border-border/10">
      
      {/* Background Effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mb-16 animate-fade-in">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Advanced Infrastructure</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Technology Stack</h3>
          <p className="text-xl text-muted-foreground font-light">
            The bleeding-edge frameworks that power our enterprise intelligence solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {technologies.map((tech) => (
            <Card 
              key={tech.title}
              className="group border border-border/50 hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 shadow-card hover:shadow-glow"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <tech.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{tech.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
