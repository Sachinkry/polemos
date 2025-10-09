import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "The Daily Grind Café",
    category: "Café",
    description: "Modern café website with online ordering and menu showcase",
    stats: "↑250% online orders",
    color: "amber",
  },
  {
    title: "Bella Vista Restaurant",
    category: "Restaurant",
    description: "Elegant restaurant site with reservation system",
    stats: "↑180% reservations",
    color: "red",
  },
  {
    title: "Urban Cuts Barbershop",
    category: "Salon",
    description: "Sleek booking platform with portfolio gallery",
    stats: "↑200% bookings",
    color: "purple",
  },
  {
    title: "Shine Auto Spa",
    category: "Car Wash",
    description: "Professional detailing service with package builder",
    stats: "↑150% customers",
    color: "blue",
  },
  {
    title: "Green Market Boutique",
    category: "Retail",
    description: "E-commerce store for local organic products",
    stats: "↑300% sales",
    color: "green",
  },
  {
    title: "Luxe Nails Studio",
    category: "Beauty",
    description: "Premium nail salon with appointment scheduling",
    stats: "↑220% appointments",
    color: "pink",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="font-caveat text-primary">Projects</span> We're Proud Of
          </h2>
          <p className="text-2xl text-muted-foreground font-light">
            Real results for real businesses—see the magic we've brewed
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.title}
              className="group border-2 border-border hover:border-primary shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-card overflow-hidden animate-slide-in-right relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge Overlay */}
              <div className="absolute top-4 right-4 z-10">
                <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                  {item.category}
                </Badge>
              </div>
              
              {/* Colored Top Bar */}
              <div className="h-3 bg-gradient-to-r from-primary to-accent" />
              
              {/* Mock Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 dark:from-${item.color}-900/20 dark:to-${item.color}-800/20 relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <p className="text-lg font-bold text-accent">{item.stats}</p>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
