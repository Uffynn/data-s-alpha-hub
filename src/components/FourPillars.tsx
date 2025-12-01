import { Card } from "@/components/ui/card";
import { TrendingUp, BookOpen, Trophy, HeartHandshake } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Daily Market Clarity",
    description: "Stop guessing and start understanding.",
    points: [
      "BTC and ETH direction",
      "High-value altcoins",
      "Market structure & sentiment",
      "Macro catalysts & risk events",
      "What matters — and what doesn't",
    ],
    footer: "You'll finally know why the market is moving, not just that it's moving.",
  },
  {
    icon: BookOpen,
    title: "Elite Trading Education",
    description: "Everything you wish someone taught you on day one.",
    points: [
      "Technical Analysis",
      "Risk Management",
      "Scalping",
      "Trading Psychology",
      "Narrative understanding",
      "Strategy building",
    ],
    footer: "This is the difference between \"following trades\" and becoming the trader.",
  },
  {
    icon: Trophy,
    title: "Trader Performance",
    description: "Because profitable trading starts long before you open a chart.",
    points: [
      "Mindset",
      "Discipline",
      "Emotional control",
      "Nutrition",
      "Fitness",
      "Recovery",
      "Lifestyle optimization",
    ],
    footer: "Trading is a performance sport. Your body, mind, and habits matter more than any indicator.",
  },
  {
    icon: HeartHandshake,
    title: "True Support",
    description: "A real team. A real community. Real mentorship.",
    points: [
      "Ongoing help from a team with 48+ years of combined crypto experience",
      "Chart reviews",
      "Guidance on trades, strategy, and psychology",
      "A non-toxic environment of serious, growth-minded traders",
      "Direct access to CryptoData himself — daily",
    ],
    footer: "Support like this is extremely rare in the crypto space.",
  },
];

const FourPillars = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              The 4 Foundations of{" "}
              <span className="text-primary">Consistent Trading</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Performance Trading System inside Data's Alpha Circle is built on four core pillars. These are the fundamental elements every trader needs to grow, regardless of experience or market conditions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <pillar.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{pillar.title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground">{pillar.description}</p>
                
                <ul className="space-y-2">
                  {pillar.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-muted-foreground italic pt-4 border-t border-border">
                  {pillar.footer}
                </p>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6 pt-8">
            <h3 className="text-3xl font-bold">This Is How You Bridge the Gap</h3>
            <p className="text-xl text-muted-foreground">
              Between the trader you <em>are</em>…<br />
              And the trader you <em className="text-primary">know you can become</em>.
            </p>
            <p className="text-lg text-foreground font-semibold">
              This system doesn't just build better trades.<br />
              It builds better traders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourPillars;