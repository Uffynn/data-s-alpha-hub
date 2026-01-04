import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const valueItems = [
  { item: "Daily Insights & Market Updates", value: "$1,200" },
  { item: "High-Conviction Calls & Setups", value: "$2,000" },
  { item: "Trading Courses (TA, Risk, Scalping)", value: "$2,500" },
  { item: "Performance, Mindset & Psychology System", value: "$1,000" },
  { item: "Direct Access to CryptoData + Team Support", value: "$1,500" },
  { item: "Private Community of Serious Traders", value: "$500" },
];

const PricingValue = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Imagine the Trader You Could Be…
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>Waking up with a clear plan.</p>
              <p>Understanding the market with confidence.</p>
              <p>No more FOMO. No more confusion. No more giving back profits.</p>
            </div>
            <div className="pt-6 space-y-3">
              <p className="text-xl text-foreground">You are focused and disciplined trader with:</p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> a strategy
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> a supportive community
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> a mentor
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> a team
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" /> the right environment
                </span>
              </div>
            </div>
            <p className="text-xl font-semibold text-primary pt-4">
              This is who you become inside the Alpha Circle.
            </p>
          </div>
          
          <Card className="p-8 bg-gradient-card border-primary/50 space-y-8">
            <h3 className="text-3xl font-bold text-center">What You Get</h3>
            <p className="text-center text-muted-foreground">Everything you need to grow as a trader:</p>
            
            <div className="space-y-4">
              {valueItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg border border-border"
                >
                  <span className="text-foreground font-medium">{item.item}</span>
                  <span className="text-primary font-bold">{item.value} value</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-border space-y-4">
              <div className="flex items-center justify-between text-xl font-bold">
                <span>Total Estimated Value:</span>
                <span className="text-primary">$8,700+</span>
              </div>
              <p className="text-center text-2xl font-bold text-foreground">
                Your price: <span className="text-primary">a fraction of that.</span>
              </p>
            </div>
            
            <div className="flex justify-center pt-4">
              <Button variant="hero" size="xl" className="group" onClick={scrollToCheckout}>
                Join Data's Alpha Circle
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
          
          <Card className="p-8 bg-card border-border space-y-4 text-center">
            <h3 className="text-2xl font-bold">Our Promise to You</h3>
            <p className="text-muted-foreground">We don't guarantee profits... No one can.</p>
            <p className="text-lg font-semibold text-foreground">But we do guarantee this:</p>
            <p className="text-lg text-foreground">
              If you don't feel more confident, more supported, and more informed than in <em>any</em> crypto group you've ever joined…<br />
              <span className="text-primary font-bold">We don't deserve your money.</span>
            </p>
            <p className="text-xl font-bold">Simple.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingValue;