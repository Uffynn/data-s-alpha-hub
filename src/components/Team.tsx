import { Card } from "@/components/ui/card";

const team = [
  {
    name: "CryptoData",
    role: "Founder & Lead Analyst",
    experience: "8+ years",
    description: "Full-time trader, educator, and mentor. Known for clarity, discipline, and unbiased analysis. The voice of reason in a market full of noise.",
    badge: "👑",
  },
  {
    name: "@Nyko",
    experience: "4 years",
    description: "A relentless student of the market, psychology, and human behavior. Master of narratives and altcoin rotation. Strategic, sharp, and deeply supportive.",
  },
  {
    name: "@Gods_Entry",
    experience: "12 years",
    description: "Started in 2012, mastered trading through hard lessons. Profitable full-time trader since 2020. Expert in high timeframe leverage trading and market sentiment reversal plays.",
  },
  {
    name: "@Hyde",
    experience: "6+ years",
    description: "Exceptional chartist with unmatched technical precision. Finds breakouts and gems before most even notice them.",
  },
  {
    name: "@AURA",
    experience: "6 years",
    description: "Alpha specialist focused on Binance-listed plays, correlation tickers, and insider-backed setups. Known for \"programmed gainers.\"",
  },
  {
    name: "@Shemhamforash",
    experience: "5+ years",
    description: "DeFi developer, strategist, and builder behind multiple $100M+ projects. Innovator with deep industry connections and execution power.",
    badge: "🧙🏻‍♂️",
  },
  {
    name: "@Meong",
    role: "Newscaster",
    experience: "7+ years",
    description: "Your daily macro, news, and sentiment analyst. Tracks narrative shifts and market psychology to keep you ahead.",
    badge: "📢",
  },
];

const Team = () => {
  return (
    <section className="py-24 bg-gradient-card relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Meet Your Team
            </h2>
            <p className="text-2xl text-primary font-bold">
              48+ Years of Combined Crypto Experience
            </p>
            <p className="text-lg text-muted-foreground">
              Behind Data's Alpha Circle is a team of analysts, traders, researchers, and moderators all working together to help you win in all market conditions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      {member.badge && <span>{member.badge}</span>}
                      {member.name}
                    </h3>
                    {member.role && (
                      <p className="text-sm text-primary font-semibold">{member.role}</p>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {member.experience}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-4 pt-8">
            <p className="text-xl font-semibold text-foreground">
              Total Combined Experience: <span className="text-primary">48+ Years in Crypto</span>
            </p>
            <p className="text-lg text-muted-foreground">
              Few groups can match this depth of experience.
            </p>
            <p className="text-lg text-foreground font-semibold">
              This is the team in your corner — focused on helping you day in and day out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
