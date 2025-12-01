const ProblemSection = () => {
  const problems = [
    "Multiple analysts giving conflicting signals",
    "A creator who never shows up or answers questions",
    "Mods who shut people down instead of helping them",
    "Signals coming in after the move is already done",
    "No risk management, guidance or explanations behind the calls",
    "Trades that encourage gambling instead of discipline",
    "Small wins followed by huge losses",
    "Non-stop noise and hype presented as 'alpha'",
  ];

  return (
    <section className="py-24 bg-gradient-card relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              You Already Know You're Capable of More.{" "}
              <span className="text-primary">So What's Been Holding You Back?</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              If you've ever joined a crypto group before, you already know how it usually goes:
            </p>
            
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground">
                  <span className="text-destructive text-xl mt-0.5">×</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-8 space-y-6 border-t border-border">
              <p className="text-xl font-semibold text-center">
                And eventually, all of this leads you to one brutal conclusion:
              </p>
              
              <div className="space-y-2 text-center">
                <p className="text-lg italic text-muted-foreground">"Maybe I'm the problem."</p>
                <p className="text-lg italic text-muted-foreground">"Maybe I'm not built for trading."</p>
                <p className="text-lg italic text-muted-foreground">"Maybe I'll always lose money."</p>
              </div>
              
              <div className="pt-8 space-y-4 text-center">
                <p className="text-2xl font-bold text-primary">But that's not the truth.</p>
                <p className="text-xl font-semibold">Nothing was wrong with you.</p>
                <p className="text-xl font-semibold">The environment was wrong.</p>
              </div>
            </div>
            
            <div className="pt-8 space-y-6">
              <p className="text-lg text-foreground">
                No trader becomes disciplined in chaos.<br />
                No trader grows in a community built on hype.<br />
                No trader becomes consistent by following random signals from people who aren't accountable.
              </p>
              
              <p className="text-lg text-foreground">
                You weren't failing because you lacked potential.<br />
                You were failing because you lacked:
              </p>
              
              <ul className="space-y-2 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="font-semibold">Structure</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="font-semibold">Mentorship</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="font-semibold">Clarity</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="font-semibold">A system</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span>
                  <span className="font-semibold">A team that actually supports you</span>
                </li>
              </ul>
              
              <p className="text-lg text-muted-foreground pt-4">
                This is why smart, capable traders stay stuck for years.
              </p>
              
              <p className="text-lg font-semibold text-foreground">
                This wasn't your fault.
              </p>
              
              <p className="text-lg text-foreground">
                You were simply never given an environment built for you to win.
              </p>
              
              <p className="text-2xl font-bold text-primary text-center pt-8">
                Give a trader the right environment and everything changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;