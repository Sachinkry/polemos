import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Box, BrainCircuit, Network, Cpu, LayoutTemplate, Video, Workflow } from "lucide-react";

const products = [
  {
    icon: LayoutTemplate,
    title: "Woodle",
    subtitle: "Prompt to Website",
    description: "Craft beautiful websites in minutes using just text prompts. Woodle leverages AI to transform your ideas into fully functional websites without coding.",
    link: "woodleai.com",
    tag: "AI Website Builder"
  },
  {
    icon: Video,
    title: "RiotJet",
    subtitle: "Tweet to Video",
    description: "Transform your tweets into engaging videos for TikTok, Reels, and Shorts. Supercharge your social media content distribution with automated video creation.",
    link: "riotjet.com",
    tag: "Social Media Amplifier"
  }
];

const services = [
  {
    icon: Box,
    title: "Custom AI Products",
    description: "We build effective AI products from scratch, tailored to solve your specific business challenges.",
  },
  {
    icon: Network,
    title: "Enterprise AI Integration",
    description: "Seamlessly integrate advanced AI capabilities into your existing enterprise systems and workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI Enablement",
    description: "Transform your organization with the tools, training, and infrastructure needed to leverage AI effectively.",
  },
  {
    icon: Workflow,
    title: "AI-Powered Automation",
    description: "Transform workflows with intelligent AI agents that learn, adapt, and execute complex processes.",
  },
  {
    icon: Video,
    title: "AI Video Marketing Solutions",
    description: "Create personalized, engaging video content at scale with AI avatars, custom voices, and dynamic personalization.",
  },
  {
    icon: Cpu,
    title: "AI Strategy & Consulting",
    description: "Strategic guidance on implementing cutting-edge AI solutions that deliver exceptional business value.",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Products Section */}
        <div id="products" className="mb-32">
          <div className="max-w-4xl mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our AI Products</h2>
            <p className="text-xl text-muted-foreground font-light">
              Innovative AI solutions we've built to solve real-world problems.
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
                    <span className="text-xs font-semibold py-1 px-3 rounded-full bg-secondary text-secondary-foreground">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Services</h2>
            <p className="text-xl text-muted-foreground font-light">
              AI solutions for enterprise-level product development and operational transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {services.map((service) => (
              <Card 
                key={service.title}
                className="group border border-border/50 hover:border-primary/50 bg-card/30 backdrop-blur-sm transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
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
