import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingBuyButton = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={scrollToCheckout}
      variant="hero"
      size="lg"
      className="fixed bottom-6 right-6 z-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Scroll to checkout"
    >
      Buy Now
      <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
    </Button>
  );
};

export default FloatingBuyButton;
