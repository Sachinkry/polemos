import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollingBanner from "@/components/ScrollingBanner";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Specialties from "@/components/Specialties";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <ScrollingBanner text="• Autonomous Agents • RAG Systems • Predictive Modeling • Multimodal AI • Edge Intelligence • LLM Fine-Tuning" />
      <Services />
      <Specialties />
      <Technology />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
