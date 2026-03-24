const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 item-start">
          
          {/* Left Text */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-foreground">
              Ignite your enterprise transformation.
            </h2>
            <p className="text-xl text-muted-foreground font-sans font-light max-w-lg leading-relaxed">
              Partner with Polemos Labs to architect autonomous systems that drive tangible efficiency and operational scale.
            </p>
            <div className="space-y-6 pt-8 border-t border-border max-w-sm">
              <div>
                <span className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">General Inquiry</span>
                <span className="text-lg font-serif">hello@polemoslabs.com</span>
              </div>
              <div>
                <span className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Partnerships</span>
                <span className="text-lg font-serif">partners@polemoslabs.com</span>
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-background border border-border p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Initiator Name</label>
                    <input type="text" className="w-full h-12 px-4 rounded-none border border-border bg-background focus:outline-none focus:border-foreground text-sm transition-colors text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Work Email</label>
                    <input type="email" className="w-full h-12 px-4 rounded-none border border-border bg-background focus:outline-none focus:border-foreground text-sm transition-colors text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Organization</label>
                    <input type="text" className="w-full h-12 px-4 rounded-none border border-border bg-background focus:outline-none focus:border-foreground text-sm transition-colors text-foreground" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Timeline</label>
                    <input type="text" className="w-full h-12 px-4 rounded-none border border-border bg-background focus:outline-none focus:border-foreground text-sm transition-colors text-foreground" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Project Scope & Objectives</label>
                  <textarea className="w-full min-h-[160px] px-4 py-3 rounded-none border border-border bg-background focus:outline-none focus:border-foreground text-sm transition-colors text-foreground resize-y" />
                </div>
                
                <button className="w-full bg-foreground hover:bg-muted-foreground text-background font-medium text-sm py-4 transition-colors">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;
