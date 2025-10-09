import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Free consultation & proposal",
  "Custom design tailored to your brand",
  "Mobile-friendly & fast loading",
  "SEO optimized for local search",
  "Ongoing support & maintenance",
  "Launch in as little as 2 weeks",
];

const CTA = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Let's <span className="font-caveat text-primary">Brew</span> Something Amazing
          </h2>
          <p className="text-2xl text-muted-foreground font-light">
            Custom designs, seamless code, and websites that work
          </p>
        </div>
        
        <Card className="max-w-4xl mx-auto border-4 border-primary shadow-glow bg-card overflow-hidden animate-scale-in">
          <CardContent className="p-10 md:p-16">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left pb-8 border-b-2 border-border">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-primary" />
                    <span className="text-base font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center space-y-6">
                <p className="text-xl font-caveat text-primary">
                  "We craft with care, we code with pride. Your vision becomes our guiding light."
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                  <Button 
                    size="xl" 
                    className="group text-lg px-12 py-7 rounded-full shadow-glow"
                  >
                    Let's Get Started!
                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="xl"
                    className="text-lg px-12 py-7 rounded-full border-2"
                  >
                    Schedule a Call
                  </Button>
                </div>
                
                <p className="text-sm text-muted-foreground pt-6">
                  ✨ No credit card required • Response within 24 hours • Free consultation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
