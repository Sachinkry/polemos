import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ScrollingBanner from "@/components/ScrollingBanner";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ScrollingBanner text="We craft with care ☕ We code with pride ⚡ Turning dreams to designs worldwide 🌍" />
      <Services />
      <ScrollingBanner text="From pixels to perfection ✨ From concept to creation 🎨 Where ideas take flight 🚀" direction="right" />
      <Portfolio />
      <Testimonials />
      <ScrollingBanner text="Choose us today, let's make it true 💫 Because the future begins with you 🌟" />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
