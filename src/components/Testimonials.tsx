import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    business: "The Daily Grind Café",
    role: "Owner",
    content: "Our online orders tripled within the first month! The website perfectly captures our café's vibe and makes ordering so easy for our customers.",
    rating: 5,
  },
  {
    name: "James Chen",
    business: "Bella Vista Restaurant",
    role: "Manager",
    content: "The reservation system has transformed our operations. We're fully booked most nights now, and customers love how professional we look online.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    business: "Urban Cuts Barbershop",
    role: "Owner",
    content: "Best investment we've made! Bookings have doubled, and the online scheduling saves us hours every week. Our clients are impressed.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Here's What Everyone's <span className="font-caveat text-primary">Excited</span> About
          </h2>
          <p className="text-2xl text-muted-foreground font-light">
            Don't just take our word for it—hear from our happy clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="border-2 border-border hover:border-primary shadow-card hover:shadow-glow transition-all duration-500 bg-card relative animate-scale-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-primary/30 mb-6" />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t-2 border-border pt-6">
                  <p className="font-bold text-xl mb-1">{testimonial.name}</p>
                  <p className="text-muted-foreground mb-1">{testimonial.role}</p>
                  <p className="text-primary font-semibold">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
