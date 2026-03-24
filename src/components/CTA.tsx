import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:w-1/2 text-left space-y-8">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Ignite Your <span className="text-primary">Enterprise</span> Transformation.
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Partner with Polemos Labs to architect autonomous systems that drive tangible efficiency and operational scale.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">General Inquiry</span>
                <span className="text-lg font-medium tracking-wide">hello@polemoslabs.com</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Partnerships</span>
                <span className="text-lg font-medium tracking-wide">partners@polemoslabs.com</span>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-card/80 border border-border/50 rounded-2xl p-8 md:p-10 shadow-2xl backdrop-blur-lg">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Initiator Name</label>
                    <input type="text" placeholder="Alex Carter" className="w-full h-10 px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Work Email</label>
                    <input type="email" placeholder="alex@company.com" className="w-full h-10 px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Organization</label>
                    <input type="text" placeholder="Acme Corp" className="w-full h-10 px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Timeline</label>
                    <input type="text" placeholder="e.g. Q3 2026" className="w-full h-10 px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Project Scope & Objectives</label>
                  <textarea placeholder="Outline your technical challenges or intended AI use-cases..." className="w-full min-h-[140px] px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all resize-y" />
                </div>
                
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 rounded-xl shadow-glow transition-all">
                  Request Consultation
                </Button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
