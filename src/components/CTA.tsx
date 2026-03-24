import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:w-1/2 text-left space-y-8">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Ready to <span className="text-primary">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Let's discuss how our practical AI solutions can enhance your operations and drive growth. Start your transformation journey today.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Phone</span>
                <span className="text-lg font-medium">+91 8989 6565 63</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Email</span>
                <span className="text-lg font-medium">hi@polemos.in</span>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Your Name *</label>
                    <input type="text" placeholder="John Doe" className="w-full h-10 px-3 py-2 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address *</label>
                    <input type="email" placeholder="john@example.com" className="w-full h-10 px-3 py-2 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company</label>
                    <input type="text" placeholder="Company Name" className="w-full h-10 px-3 py-2 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Designation</label>
                    <input type="text" placeholder="Your Role" className="w-full h-10 px-3 py-2 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full h-10 px-3 py-2 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Message *</label>
                  <textarea placeholder="Tell us about your project..." className="w-full min-h-[120px] px-3 py-2 rounded-md border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm placeholder:text-muted-foreground transition-all" />
                </div>
                
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg py-6 rounded-xl shadow-glow transition-all">
                  Send Message
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
