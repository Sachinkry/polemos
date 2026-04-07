const SectionLabel = ({ children }: { children: string }) => (
  <div className="mb-4 flex items-center gap-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-gold">
    <span className="h-px w-6 bg-gold" aria-hidden="true" />
    {children}
  </div>
);

export default SectionLabel;
