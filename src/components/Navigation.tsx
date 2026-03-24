import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "Specialties", href: "#specialties" },
    { label: "Technology", href: "#technology" },
  ];

  return (
    <nav className="fixed top-2 md:top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl">
      {/* Floating Container */}
      <div className="flex items-center justify-between px-6 py-4 rounded-full bg-background/50 backdrop-blur-xl border border-border/50">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">
            Polemos<span className="text-primary font-black">Labs</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground hover:glow transition-colors font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-2 rounded-full px-6 shadow-soft hover:shadow-glow transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl bg-background/95 backdrop-blur-xl shadow-2xl border border-border/50 p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-lg text-foreground/80 hover:text-primary transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="default"
            size="lg"
            className="w-full mt-4 flex justify-center items-center gap-2 rounded-full"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
