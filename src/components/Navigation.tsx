import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { label: "Products", href: "#products" },
    { label: "Competencies", href: "#services" },
    { label: "Technology", href: "#technology" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 bg-background/95 backdrop-blur-md border border-border shadow-sm transition-all sm:rounded-none">
      <div className="px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-sm font-sans font-medium tracking-[0.2em] uppercase text-foreground">
            POLEMOS LABS
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans font-light"
            >
              {item.label}
            </a>
          ))}
          
          <div className="flex flex-row items-center gap-4 border-l border-border pl-8">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="#contact"
              className="text-sm font-medium border border-border px-4 py-1.5 hover:bg-foreground hover:text-background transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button & Theme Switcher */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground p-2"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="p-2 text-muted-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans font-light"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium mt-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
