import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Mail, Key, Users, Mic, Clock } from "lucide-react";
import Footer from "@/components/Footer";

const ContactAndSupport = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-4">Contact</h1>
        <p className="text-muted-foreground text-lg mb-8">
          We're here to help with billing, access, and membership support.
          Please use the correct support channel below so your issue can be
          resolved quickly.
        </p>

        <div className="space-y-10">
          {/* Billing Section */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Billing, Refunds & Account Support
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">If you have issues with:</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-6">
              <li>Payments or failed charges</li>
              <li>Refund requests (within 30 days)</li>
              <li>Subscription renewal questions</li>
              <li>Changing your plan</li>
              <li>Switching payment methods</li>
              <li>Crypto payment confirmation</li>
              <li>Access not appearing in Whop</li>
            </ul>

            <div className="space-y-4">
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  👉 Primary Support: Whop Support Chat (Recommended)
                </h3>
                <p className="text-muted-foreground text-sm">
                  Use the support chat inside your Whop dashboard — this is the
                  fastest way to solve billing and access issues.
                </p>
              </div>

              <div className="bg-background/50 border border-border rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email (Backup Option)
                </h3>
                <p className="text-primary font-medium mb-2">
                  SupportEmailPlaceholder
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  When emailing, include:
                </p>
                <ul className="text-muted-foreground text-sm space-y-1 list-disc pl-6">
                  <li>Full name</li>
                  <li>Purchase email</li>
                  <li>Order ID (if available)</li>
                  <li>Payment method (card or crypto)</li>
                  <li>Description of the issue</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Discord Access Section */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Key className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Discord Access Issues
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Use this <strong className="text-foreground">only if</strong>:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-6">
              <li>You purchased but Discord access didn't unlock</li>
              <li>Your "Elite / Membership" role didn't apply</li>
              <li>You are stuck at Step 1–3 of the onboarding</li>
              <li>Your Discord account changed or shows an error</li>
            </ul>
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">👉 Step 1:</span>{" "}
                Check Whop → "Connect Discord"
              </p>
              <p className="text-muted-foreground mt-2">
                <span className="text-foreground font-medium">👉 Step 2:</span>{" "}
                If still stuck, open a{" "}
                <strong className="text-foreground">Whop Support Chat</strong>
              </p>
            </div>
          </section>

          {/* General Member Questions */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                General Member Questions (Inside the Group)
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">Already a member? For:</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6 mb-4">
              <li>Livestream schedule</li>
              <li>Market questions</li>
              <li>Education questions</li>
              <li>Channel navigation</li>
              <li>Tech questions</li>
              <li>Community rules</li>
            </ul>
            <p className="text-foreground font-medium">
              👉 Ask directly inside the private Discord community
            </p>
          </section>

          {/* Business Inquiries */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Business, Media & Collaboration
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              For interviews, partnerships, or business inquiries:
            </p>
            <p className="text-primary font-medium text-lg mb-2">
              BusinessEmailPlaceholder
            </p>
            <p className="text-muted-foreground text-sm">
              Please include relevant links, brand info, and a short summary of
              the request.
            </p>
          </section>

          {/* Response Times */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Response Times
              </h2>
            </div>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                <strong className="text-foreground">Whop Support Chat:</strong>{" "}
                usually same-day or within 24 hours
              </li>
              <li>
                <strong className="text-foreground">Email:</strong> 24–48
                business hours
              </li>
              <li>
                <strong className="text-foreground">Discord Tickets:</strong>{" "}
                usually within a few hours (for active members)
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactAndSupport;
