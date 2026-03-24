const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-mono font-bold uppercase tracking-[0.2em] text-foreground">
              POLEMOS LABS
            </h2>
            <p className="text-muted-foreground font-sans font-light text-sm leading-relaxed max-w-sm">
              We design and deploy autonomous AI frameworks that multiply your enterprise's capabilities without linearly scaling headcount.
            </p>
            <div className="pt-4 max-w-sm">
              <h3 className="text-foreground font-serif text-lg mb-2">Our Guiding Principle</h3>
              <p className="text-sm font-sans font-light text-muted-foreground leading-relaxed">
                We engineer scalable intelligence. Moving beyond experimental chatbots to deliver hardened, production-ready systems that generate undeniable operational value.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-4">
              {['Products', 'Services', 'Specialties', 'Methodology'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-foreground hover:text-muted-foreground text-sm font-sans font-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-4 text-sm font-sans font-light text-muted-foreground">
              <li>
                <a href="mailto:hello@polemoslabs.com" className="text-foreground hover:text-muted-foreground transition-colors">hello@polemoslabs.com</a>
              </li>
              <li>
                <a href="mailto:partners@polemoslabs.com" className="text-foreground hover:text-muted-foreground transition-colors">partners@polemoslabs.com</a>
              </li>
              <li className="pt-4">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  Engineering grid nominally active
                </span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} Polemos Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-mono text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-xs font-mono text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
