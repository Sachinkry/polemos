import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Utensils, Scissors, Car, Store, Sparkles } from "lucide-react";

const services = [
  {
    icon: Coffee,
    title: "Cafés & Coffee Shops",
    description: "Showcase your menu, ambiance, and story. Let customers book tables and order online.",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: Utensils,
    title: "Restaurants",
    description: "Display your cuisine beautifully. Integrated reservations and online ordering systems.",
    gradient: "from-red-500/10 to-pink-500/10",
  },
  {
    icon: Scissors,
    title: "Salons & Barbershops",
    description: "Book appointments online, showcase your portfolio, and manage your schedule seamlessly.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Car,
    title: "Car Wash & Detailing",
    description: "Professional service pages, pricing packages, and easy booking for your customers.",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Store,
    title: "Local Retail",
    description: "Sell your products online with integrated inventory and payment processing.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Whatever your business, we'll create a perfect website tailored to your needs.",
    gradient: "from-indigo-500/10 to-violet-500/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-muted/20 relative overflow-hidden">
      {/* Coffee Stain Decoration */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="font-caveat text-primary">Expertise</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-light">
            From concept to launch, we brew perfection in every pixel
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group border-2 border-border hover:border-primary shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
              <div className="h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
