import { Card } from "@/components/ui/card";
import { TrendingUp, GraduationCap, Brain, Users } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Daily market updates",
  },
  {
    icon: Brain,
    title: "High-conviction leverage, spot & narrative calls",
  },
  {
    icon: GraduationCap,
    title: "Elite trading education (TA, Risk, Scalping)",
  },
  {
    icon: Brain,
    title: "Mindset & psychology guidance",
  },
  {
    icon: Brain,
    title: "Nutrition & performance optimization",
  },
  {
    icon: Users,
    title: "Direct access to CryptoData and ongoing team support",
  },
];

const ValueProp = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Data's Alpha Circle</span> is built to help traders develop real discipline, confidence, and consistency.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Not through random signals — but through{" "}
              <span className="text-primary font-semibold">structure, mentorship, and a system designed for real improvement</span>.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-center mb-8">Inside the group, you get:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium pt-2">{feature.title}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <p className="text-center text-lg text-foreground">
            Everything you need to stop guessing — and start trading with clarity and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;