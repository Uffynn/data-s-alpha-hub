import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="container relative z-10 px-4 py-24 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Become the Trader You Know You{" "}
            <span className="text-primary">Should Be</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            If you're tired of losing money in chaotic, confusing, poorly managed crypto groups — welcome home.
          </p>
          
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto">
            This is where trading finally starts to make sense.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group" onClick={scrollToCheckout}>
              Join Data's Alpha Circle
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;