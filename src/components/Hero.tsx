const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl space-y-12">
          
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-serif leading-[1.1] text-foreground">
            Architecting the future of enterprise AI.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-sans font-light max-w-2xl leading-relaxed">
            We engineer autonomous systems and intelligent workflows that multiply your workforce's capabilities. 
            <span className="text-foreground"> Scale without the overhead.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background text-sm font-medium hover:bg-muted-foreground transition-colors">
              Initiate Project
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
