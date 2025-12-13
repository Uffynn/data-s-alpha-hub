import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import ProblemSection from "@/components/ProblemSection";
import FourPillars from "@/components/FourPillars";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import Team from "@/components/Team";
import PricingValue from "@/components/PricingValue";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ValueProp />
      <ProblemSection />
      <FourPillars />
      <Testimonials />
      <Features />
      <Team />
      <PricingValue />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;