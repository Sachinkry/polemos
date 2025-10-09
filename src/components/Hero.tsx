import { Button } from "@/components/ui/button";
import { ArrowRight, Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Coffee Bean Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8z' fill='%23000000' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/20 border-2 border-accent text-foreground mb-6">
            <Coffee className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-wide">FRESHLY BREWED DIGITAL EXPERIENCES</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            Your Digital Success
            <span className="block font-caveat text-primary text-7xl md:text-9xl -mt-4">
              Starts Here
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            We design, build, and craft <span className="text-primary font-semibold">creative websites</span> customized 
            according to your users' needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button size="xl" className="group text-lg px-10 py-7 rounded-full shadow-glow">
              Get Started
              <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="text-lg px-10 py-7 rounded-full border-2">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative coffee steam effects */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default Hero;
