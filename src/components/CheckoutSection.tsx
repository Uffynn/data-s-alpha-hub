import { CreditCard, Bitcoin } from "lucide-react";

const visaPlans = [
  { price: "$180", period: "month", url: "https://whop.com/datas-alpha-circle/upgrade-elite-access?a=shemhamforash" },
  { price: "$500", period: "3 months", url: "https://whop.com/checkout/plan_TOjQgILFIDi84?a=shemhamforash" },
  { price: "$1,800", period: "yearly", url: "https://whop.com/checkout/plan_neEKjM8mfUvJG?a=shemhamforash" },
];

const cryptoPlans = [
  { price: "$180", period: "month", url: "https://whop.com/datas-alpha-circle/monthly-elite-access-crypto?a=shemhamforash" },
  { price: "$500", period: "3 months", url: "https://whop.com/datas-alpha-circle/3-month-elite-access-crypto?a=shemhamforash" },
  { price: "$1,800", period: "yearly", url: "https://whop.com/datas-alpha-circle/yearly-elite-access-crypto?a=shemhamforash" },
];

const CheckoutSection = () => {
  return (
    <section id="checkout" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center tracking-tight">
            Choose Your Payment Method
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visa Plans */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <CreditCard className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Pay with Card</h3>
              </div>
              <div className="space-y-4">
                {visaPlans.map((plan, index) => (
                  <a
                    key={index}
                    href={plan.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-5 bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                      </div>
                      <span className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                        Select →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Crypto Plans */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <Bitcoin className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Pay with Crypto</h3>
              </div>
              <div className="space-y-4">
                {cryptoPlans.map((plan, index) => (
                  <a
                    key={index}
                    href={plan.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full p-5 bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 rounded-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-foreground">{plan.price}</span>
                        <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                      </div>
                      <span className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                        Select →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
