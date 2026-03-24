import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Layers, Cpu, Compass, Activity, Database, Zap } from "lucide-react";

const products = [
  {
    icon: Database,
    title: "OmniGraph",
    subtitle: "Enterprise Knowledge Engine",
    description: "Unify your siloed company data into a dynamic knowledge graph that powers context-aware LLM agents across your entire organization seamlessly.",
    link: "omnigraph.io",
    tag: "Data Infrastructure"
  },
  {
    icon: Zap,
    title: "NeuroTask",
    subtitle: "Autonomous Operations",
    description: "Deploy self-healing, intelligent agentic workflows that can autonomously handle tedious backend operations, data entry, and system monitoring.",
    link: "neurotask.ai",
    tag: "Workflow Automation"
  }
];

const services = [
  {
    icon: Compass,
    title: "Strategic AI Roadmaps",
    description: "We audit your existing technical debt and outline a phased, pragmatic blueprint for incorporating generative AI securely.",
  },
  {
    icon: Layers,
    title: "LLM Fine-Tuning & Deployment",
    description: "Train foundational models securely on your proprietary data to ensure domain-specific accuracy and strict compliance.",
  },
  {
    icon: Activity,
    title: "Predictive Intelligence",
    description: "Harness statistical modeling and machine learning to forecast trends, optimize supply chains, and mitigate risks proactively.",
  },
  {
    icon: Cpu,
    title: "Agentic Systems Engineering",
    description: "Construct multi-agent frameworks capable of advanced reasoning, tool selection, and robust task execution with minimal oversight.",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Products Section */}
        <div id="products" className="mb-32">
          <div className="max-w-4xl mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Flagship Innovations</h2>
            <p className="text-xl text-muted-foreground font-light">
              Proprietary platforms we’ve engineered to accelerate your AI adoption.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {products.map((product) => (
              <Card 
                key={product.title}
                className="group border border-border/50 hover:border-primary/50 shadow-soft transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-semibold py-1 px-3 rounded-full bg-secondary text-secondary-foreground border border-border">
                      {product.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-sm font-medium text-primary mb-4">{product.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-8">{product.description}</p>
                  <div className="flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer">
                    {product.link} <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <div className="max-w-4xl mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Core Competencies</h2>
            <p className="text-xl text-muted-foreground font-light">
              Bespoke consulting and engineering to fortify your competitive edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            {services.map((service) => (
              <Card 
                key={service.title}
                className="group border border-border/50 hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-accent/30 border border-border/50 flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
