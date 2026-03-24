import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-24 pb-12">
      
      {/* Background Compass / Radar Pattern (Polemos Strategic Theme) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04] dark:opacity-[0.07] z-0">
        <svg viewBox="0 0 1000 1000" className="w-[150vw] md:w-[80vw] h-auto animate-[spin_120s_linear_infinite]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Concentric rings */}
          <circle cx="500" cy="500" r="150" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="500" cy="500" r="280" stroke="currentColor" strokeWidth="1" />
          <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="500" cy="500" r="480" stroke="currentColor" strokeWidth="1" />
          
          {/* Crosshairs */}
          <line x1="0" y1="500" x2="1000" y2="500" stroke="currentColor" strokeWidth="1" />
          <line x1="500" y1="0" x2="500" y2="1000" stroke="currentColor" strokeWidth="1" />
          
          {/* Diagonal lines */}
          <line x1="146" y1="146" x2="854" y2="854" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeDasharray="4 4" />
          <line x1="146" y1="854" x2="854" y2="146" stroke="currentColor" strokeWidth="1" opacity="0.6" strokeDasharray="4 4" />

          {/* Strategic Markers */}
          <circle cx="500" cy="20" r="4" fill="currentColor" />
          <circle cx="500" cy="980" r="4" fill="currentColor" />
          <circle cx="20" cy="500" r="4" fill="currentColor" />
          <circle cx="980" cy="500" r="4" fill="currentColor" />
          
          {/* Inner orbit element */}
          <circle cx="650" cy="500" r="6" fill="currentColor" />
          <circle cx="500" cy="220" r="8" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
      
      {/* Fixed Grid overlay for architectural blueprint structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="max-w-4xl space-y-12">
          
          <div className="space-y-6">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 bg-background/50">
              Polemos Logic Engine v4.0
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif leading-[1.05] text-foreground tracking-tight">
              Architecting the future of enterprise AI.
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-sans font-light max-w-2xl leading-relaxed">
            We engineer autonomous systems and intelligent workflows that multiply your workforce's capabilities. 
            <span className="text-foreground"> Scale without the overhead.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-medium hover:bg-muted-foreground transition-colors group">
              Initiate Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#technology" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors">
              View Architecture
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
