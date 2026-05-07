const SectionLabel = ({ children }: { children: string }) => (
  <div className="t-eyebrow mb-4 flex items-center justify-center gap-3 text-gold">
    <span aria-hidden="true" className="flex h-6 items-end gap-[4px]">
      <span className="block h-4 w-px bg-gold/50" />
      <span className="block h-6 w-px bg-gold" />
      <span className="block h-5 w-px bg-gold/70" />
      <span className="block h-3 w-px bg-gold/40" />
    </span>
    {children}
  </div>
);

export default SectionLabel;
