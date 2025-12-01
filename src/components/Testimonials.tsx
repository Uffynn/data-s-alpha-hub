import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laurence",
    text: "This group is unlike any group I've ever been in. Data's Alpha Circle ensures you actually hang onto your gains - CryptoData and the team give guidance for proper risk management. The best aspect of the group though is by far it's culture. Everyone here is a dreamer, but significant emphasis is placed on mindset, health and wellness, and discipline.",
  },
  {
    name: "Sugar",
    text: "This group genuinely runs like a trading mastermind. CryptoData and the mods are extremely responsive, every question gets attention, and the members are locked in on the same frequency. The constant focus on what not to do, trading psychology, and the real nature of the game makes it a GEM for both beginners and experienced traders.",
  },
  {
    name: "jguillenjr",
    text: "Being In the Crypto Data inner circle is not just about getting leverage calls. In my opinion I see this community as a master class, in the perspective that you are going getting knowledge in every aspect such as mindset mastery, nutrition, it also gives you the opportunity to talk to people all around the world sharing the same mindset in trading.",
  },
  {
    name: "E",
    text: "I'm leaving a five-star review for several reasons: The learning videos are very straightforward and easy to follow. Since the day I joined, the majority of the calls have been successful. CryptoData and his team have been extremely helpful. Overall, this group offers real value. I highly recommend it to anyone who wants to become a better and more confident trader.",
  },
  {
    name: "Reefy",
    text: "For me, CD's Alpha stands out as the best, not just for the calls made, but for the knowledge shared and for the learning potential here. What this group will give you is more than just killer trading calls which are great, but knowledge and impacting of experience - something that is priceless and will \"profit\" you for years and years to come.",
  },
  {
    name: "Dorottya",
    text: "Made the membership price back in 2 days with a small portfolio so if you hesitate because of the price, don't. It is actually very cheap for what it is. Fantastic calls and educational content. Very easily understandable and if you have questions, they'll be answered here.",
  },
  {
    name: "Andrew",
    text: "Just made the membership payment back within 2 days from the call. Learn so much knowledge and alpha here. Absolutely best crypto group in the world.",
  },
  {
    name: "catherine",
    text: "I never thought my first premium group experience would set the bar this high. This group made me realize what real value and community feel like. CD and the team are incredibly approachable. What makes this group even more special is the mindset and the people in it. Everyone is driven, focused, and growth oriented.",
  },
  {
    name: "Ahmad Hamcho",
    text: "AlphaCircle isn't just another crypto group — it's a different frequency. The people here think differently, move differently, and win differently. You don't just learn how to trade — you learn how to think like money. If you're inside, you know. If you're outside, you're already late.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-card relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What Members Are Saying Inside the{" "}
              <span className="text-primary">Alpha Circle</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              These aren't cherry-picked DMs.<br />
              These are <span className="text-foreground font-semibold">real, verified reviews</span> directly from Whop - the platform we use to manage our group.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card space-y-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-6">
                  {testimonial.text}
                </p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;