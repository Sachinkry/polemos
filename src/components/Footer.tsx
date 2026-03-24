import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl md:text-2xl font-mono font-bold uppercase tracking-[0.2em] text-foreground">
              POLEMOS<span className="text-primary ml-2">LABS</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              We design and deploy autonomous AI frameworks that multiply your enterprise's capabilities without linearly scaling headcount.
            </p>
            <div className="p-4 bg-background/50 rounded-xl border border-border/50 mt-4 max-w-sm">
              <h3 className="text-foreground font-bold mb-2">Our Guiding Principle</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We engineer scalable intelligence. Moving beyond experimental chatbots to deliver hardened, production-ready systems that generate undeniable operational value.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Products', 'Services', 'Specialties', 'Methodology'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-primary/50 group-hover:translate-x-1 group-hover:text-primary transition-all" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <strong className="block text-foreground mb-1">General Inquiry</strong>
                <a href="mailto:hello@polemoslabs.com" className="hover:text-primary transition-colors">hello@polemoslabs.com</a>
              </li>
              <li>
                <strong className="block text-foreground mb-1">Partnerships</strong>
                <a href="mailto:partners@polemoslabs.com" className="hover:text-primary transition-colors">partners@polemoslabs.com</a>
              </li>
              <li>
                <strong className="block text-foreground mb-1">System Status</strong>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Engineering grid strictly nominal
                </span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Polemos Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Infrastructure</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Service Level Agreements</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
