import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t-4 border-primary relative overflow-hidden">
      {/* Coffee Bean Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 12c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="text-3xl font-bold">
                <span className="font-caveat text-accent">Brew</span>
                <span className="font-playfair">Digital</span>
              </h3>
            </div>
            <p className="text-secondary-foreground/90 leading-relaxed">
              We code, you grow—because your business deserves more than just a website.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6 text-accent">Services</h4>
            <ul className="space-y-3 text-secondary-foreground/90">
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">UI Design</a></li>
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Website Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Android Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">UX Design</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6 text-accent">Company</h4>
            <ul className="space-y-3 text-secondary-foreground/90">
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Career</a></li>
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Projects</a></li>
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors hover:translate-x-1 inline-block">Blogs</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-xl mb-6 text-accent">Get in Touch</h4>
            <ul className="space-y-4 text-secondary-foreground/90">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:hello@brewdigital.com" className="hover:text-accent transition-colors">
                  hello@brewdigital.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+1234567890" className="hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/80 mb-2">
            Built with <span className="text-accent font-caveat text-xl">Love</span> at Brew Digital
          </p>
          <p className="text-sm text-secondary-foreground/60">© 2025 Brew Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
