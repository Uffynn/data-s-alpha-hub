import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              This Is Your Moment.
            </h2>
            
            <div className="space-y-4 text-lg md:text-xl text-muted-foreground">
              <p>If you're done gambling…</p>
              <p>If you're done feeling lost…</p>
              <p>If you're tired of knowing you should be better…</p>
            </div>
            
            <p className="text-xl md:text-2xl text-foreground font-semibold pt-6">
              Then make the decision that future you will thank you for.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold">
              Become the Trader You Know You{" "}
              <span className="text-primary">Should Be.</span>
            </h3>
            
            <Button variant="hero" size="xl" className="group text-lg">
              Join Data's Alpha Circle
              <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;