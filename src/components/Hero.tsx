import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Binary } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20">
      
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '4rem 4rem'
      }} />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-2">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold tracking-widest uppercase">Next-Generation Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-fuchsia-400">Future</span> of Enterprise AI.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            We engineer autonomous systems and intelligent workflows that multiply your workforce's capabilities. 
            <strong className="text-foreground font-medium"> Scale without the overhead.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button size="xl" className="group text-lg px-10 py-7 rounded-full shadow-glow bg-primary hover:bg-primary/90 text-white transition-all">
              Initiate Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group text-lg px-10 py-7 rounded-full border-border/50 bg-background/50 backdrop-blur-sm hover:bg-secondary transition-all">
              View Architecture
              <Binary className="w-5 h-5 ml-2 text-muted-foreground group-hover:text-primary transition-colors" />
            </Button>
          </div>
          
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
