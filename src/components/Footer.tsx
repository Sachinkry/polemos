import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold tracking-tight">
              Polemos<span className="text-primary font-black">Labs</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Since 2014, we've been creating AI solutions that deliver actual business impact, not just tech for tech's sake. A decade of AI excellence.
            </p>
            <div className="p-4 bg-background/50 rounded-xl border border-border/50 mt-4 max-w-sm">
              <h3 className="text-foreground font-bold mb-2">What Sets Us Apart</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We cut through the AI hype to build solutions that actually work. Real results. Real value. No bullshit.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Products', 'Services', 'Specialties', 'Technology'].map((item) => (
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
                <strong className="block text-foreground mb-1">Email</strong>
                <a href="mailto:hi@polemos.in" className="hover:text-primary transition-colors">hi@polemos.in</a>
              </li>
              <li>
                <strong className="block text-foreground mb-1">Phone</strong>
                <a href="tel:+918989656563" className="hover:text-primary transition-colors">+91 8989 6565 63</a>
              </li>
              <li>
                <strong className="block text-foreground mb-1">Status</strong>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Always open for inquiries
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
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
