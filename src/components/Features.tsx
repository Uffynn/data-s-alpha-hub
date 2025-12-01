import { Card } from "@/components/ui/card";
import { TrendingUp, GraduationCap, Award, Users } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    emoji: "📈",
    title: "Crypto Guidance",
    subtitle: "Your daily roadmap to the market.",
    points: [
      "Daily BTC/ETH/Alt breakdowns — clear direction with simple explanation",
      "High-conviction leverage setups — not spam signals, but real opportunities with reasoning",
      "Spot & narrative plays — longer-term setups backed by data and fundamentals",
      "Degen calls - only when the reward justifies the risk. We never force a trade",
      "Early low-conviction setups — get ahead of narratives before they hit CT",
      "Scalp opportunities for active traders wanting precision entries",
      "Emergency livestreams during major volatility",
      "Clear take-profits, stop-losses, and risk guidelines to protect your gains",
    ],
    footer: "This is the clarity traders spend years searching for.",
  },
  {
    icon: GraduationCap,
    emoji: "🎓",
    title: "Education",
    subtitle: "So you never have to rely on anyone again.",
    points: [
      "Technical Analysis Course — beginner → expert",
      "Risk Management Course — the foundation of long-term profitability",
      "Scalping Course — learn how professionals find precision entries",
      "PDF vault of cheat sheets, rules, slides, and quick-reference guides",
    ],
    footer: "Become the trader who doesn't need to be fed.",
  },
  {
    icon: Award,
    emoji: "💠",
    title: "Performance",
    subtitle: "Because profitable trading starts before you open a chart.",
    points: [
      "Mindset Mastery channel — discipline, focus, emotional control",
      "Nutrition for traders — energy, cognition, mood stability",
      "Training & recovery systems — improve decision-making and reduce stress",
      "Book recommendations + discipline frameworks used by top performers",
    ],
    footer: "Trading is a performance sport. When your mind and body operate at their best — your results follow.",
  },
  {
    icon: Users,
    emoji: "🤝",
    title: "Support",
    subtitle: "The guidance and accountability you've never had before.",
    points: [
      "Direct access to CryptoData on a daily basis — something most major groups don't offer",
      "Ask the team anything, anytime — chart reviews, risk questions, strategy advice",
      "Weekly live Q&As + interactive discussions with the team",
      "Responsive moderator support from people who actually trade and know their stuff",
      "A non-toxic community of focused, growth-driven traders who want to see you win",
    ],
    footer: "This is the environment where traders grow — fast.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What You Get Inside the{" "}
              <span className="text-primary">Alpha Circle</span>
            </h2>
          </div>
          
          <div className="grid gap-12">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card space-y-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{feature.emoji}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.subtitle}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 pl-2">
                  {feature.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-bold">•</span>
                      <span className="text-foreground leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-muted-foreground italic pt-4 border-t border-border">
                  {feature.footer}
                </p>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6 pt-8">
            <h3 className="text-3xl md:text-4xl font-bold">This Isn't a Signals Group.</h3>
            <p className="text-xl text-foreground font-semibold">
              This is a Trader-Building Machine
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We don't spam 20 random calls a day and hope one sticks. We don't disappear when the market gets rough. We don't turn you into a blind follower.
            </p>
            <p className="text-lg text-primary font-semibold">
              We turn you into a trader — someone who understands the market, controls their emotions, manages risk with precision, and builds consistent profitability over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;