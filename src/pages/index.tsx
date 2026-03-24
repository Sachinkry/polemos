import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollingBanner from "@/components/ScrollingBanner";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <ScrollingBanner text="• Neural Networks • Semantic Search • Knowledge Graphs • Intelligent Agents • Advanced LLMs" />
      <Services />
      <Specialties />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
