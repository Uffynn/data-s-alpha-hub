import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this beginner-friendly?",
    answer: "Absolutely. Whether you've never placed a trade or you've been in crypto for years, we guide you step by step. You'll learn the fundamentals, the strategy, the mindset, and the advanced techniques — at your own pace.",
  },
  {
    question: "Can I talk to CryptoData?",
    answer: "Yes — and this is one of the biggest advantages of Alpha Circle. CryptoData is active every single day, answering questions in chat, reviewing charts, and offering guidance. He also hosts regular livestream Q&As where you can ask him anything directly.",
  },
  {
    question: "What if I work full-time?",
    answer: "No problem. Many members do. You get daily market updates so you always know what matters in 2 minutes. You receive high-conviction calls a few times per week, perfect for people who can't monitor the charts all day. If you can check the group once or twice a day, you can stay perfectly on track. This community is built for busy people — not full-time traders only.",
  },
  {
    question: "Is this just a signals group?",
    answer: "No — and that's exactly why so many members prefer Alpha Circle over every other group. Signals are about 20% of the value here. The real value comes from: education, market clarity, psychology, performance, daily support, access to the team, and building the discipline to trade consistently. We don't want you to follow the trades. We want you to become a trader.",
  },
  {
    question: "Do I need to be an advanced trader to join?",
    answer: "Not at all. Members range from complete beginners to experienced traders who want structure, accountability, and consistent guidance. The system adapts to where you're at.",
  },
  {
    question: "How often do I get updates or calls?",
    answer: "Market updates are posted every day. High-conviction calls are posted a few times per week, depending on market conditions. We focus on quality over quantity.",
  },
  {
    question: "How do I pay?",
    answer: "You can pay with: ✔ Credit/Debit Card ✔ Crypto (USDT, USDC, etc.) Important: If you pay in crypto, it may take up to 2 hours for the system to verify your payment and add you to the Discord.",
  },
  {
    question: "If I pay with crypto, do renewals happen automatically?",
    answer: "No. Crypto payments require manual renewal each billing cycle. This gives you full control, but make sure to renew before your access expires to avoid delays.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. There are no long-term contracts or hidden lock-ins. You can cancel with one click inside Whop. If you paid in crypto just don't buy another subscription.",
  },
  {
    question: "Is everything recorded?",
    answer: "Yes, all livestreams, calls, and trainings are recorded and stored in the Recordings channel so you can watch at your own pace.",
  },
  {
    question: "What if I'm not in shape / don't care about performance or nutrition?",
    answer: "You don't need to. Performance channels are optional, but they exist because your discipline, sleep, energy, and focus directly impact trading performance. Most traders eventually use them because they notice the difference.",
  },
  {
    question: "What makes Alpha Circle different from other crypto groups?",
    answer: "In simple terms: CryptoData is actually present, the team has 48+ years of combined experience, you get daily clarity on what's happening in the market, you get guidance on how to become profitable trader, there is guidance not ego, the focus is transformation not hype, and the community is serious not toxic. Most groups give you calls. We give you a system.",
  },
  {
    question: "What if I'm not happy with the group? Can I get a refund?",
    answer: "Yes. If you join and feel the group isn't delivering the value you expected, you can request a refund. CryptoData is committed to making sure every member is satisfied, and he's happy to refund anyone who feels the group isn't the right fit.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-gradient-card relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;