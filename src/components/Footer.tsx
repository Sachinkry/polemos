const footerLinks = [
  { label: "Work", href: "/#outcomes" },
  { label: "Accelerators", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
];

const Footer = () => (
  <footer className="border-t border-white/7 bg-canvas px-5 py-16 md:px-16">
    <div className="mx-auto w-full max-w-[1220px]">
      <div className="grid gap-12 md:grid-cols-[1fr_auto_auto]">

        {/* Brand */}
        <div className="space-y-4">
          <div className="font-serif text-[1.1rem] font-semibold uppercase tracking-[0.1em] text-gold">
            POLEMOS LABS
          </div>
          <p className="max-w-[260px] text-[0.8rem] leading-[1.7] text-warm-muted">
            Enterprise AI implementation for operational workflows, private data, agents, and secure model deployment.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="mb-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-warm-muted">
            Navigation
          </p>
          <ul className="space-y-3">
            {footerLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[0.82rem] text-warm-muted transition-colors hover:text-warm-text"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="mb-5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-warm-muted">
            Contact
          </p>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:hello@polemos.in"
                className="text-[0.82rem] text-warm-muted transition-colors hover:text-warm-text"
              >
                hello@polemos.in
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/7 pt-8 md:flex-row md:items-center">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-warm-muted">
          © {new Date().getFullYear()} Polemos Labs. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="/privacy" className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-warm-muted transition-colors hover:text-gold">
            Privacy
          </a>
          <a href="/terms" className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-warm-muted transition-colors hover:text-gold">
            Terms
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
