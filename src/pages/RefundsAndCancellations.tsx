import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const RefundsAndCancellations = () => {
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

        <h1 className="text-4xl font-bold text-foreground mb-8">
          Refunds & Cancellations
        </h1>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. 30-Day Satisfaction Guarantee (Refunds)
            </h2>
            <p className="text-muted-foreground mb-4">
              If you join the Alpha Circle and feel the group is{" "}
              <strong className="text-foreground">
                not delivering the value you expected
              </strong>
              , you may request a refund within{" "}
              <strong className="text-foreground">30 days</strong> of your
              initial purchase.
            </p>
            <p className="text-muted-foreground mb-4">Refunds apply to:</p>
            <ul className="text-muted-foreground space-y-2 list-none pl-0">
              <li>
                ✔ Your <strong className="text-foreground">first purchase</strong>{" "}
                of a monthly or annual membership
              </li>
              <li>
                ✔ Payments made via{" "}
                <strong className="text-foreground">
                  credit/debit card or crypto
                </strong>
              </li>
              <li>
                ✔ Users who genuinely feel the group wasn't the right fit (no
                need to prove results)
              </li>
            </ul>
            <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
              "If you don't feel more confident, more supported, and more
              informed than in any crypto group you've ever joined… we don't
              deserve your money."
            </blockquote>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Refund Conditions
            </h3>
            <p className="text-muted-foreground mb-2">To qualify for a refund:</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                The request must be submitted{" "}
                <strong className="text-foreground">within 30 days</strong> of
                purchase.
              </li>
              <li>
                The request must come from the{" "}
                <strong className="text-foreground">same email/account</strong>{" "}
                used during checkout.
              </li>
              <li>
                You must not have violated any Terms & Conditions (such as
                leaking content).
              </li>
              <li>
                Refunds apply only to your{" "}
                <strong className="text-foreground">first billing period</strong>{" "}
                (renewals are not refundable).
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              Non-Refundable Items
            </h3>
            <p className="text-muted-foreground mb-2">
              Refunds will NOT be issued for:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                <strong className="text-foreground">Renewals</strong> (monthly or
                yearly)
              </li>
              <li>Partial periods after cancellation</li>
              <li>
                <strong className="text-foreground">Chargebacks</strong> (these
                result in immediate account termination)
              </li>
              <li>
                Users banned for violating community rules or leaking content
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Cancellation Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              You may cancel your membership at any time.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              If you paid with Credit/Debit Card
            </h3>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                Cancel directly inside your{" "}
                <strong className="text-foreground">Whop dashboard</strong>.
              </li>
              <li>
                Cancellation stops{" "}
                <strong className="text-foreground">future billing</strong>.
              </li>
              <li>
                You retain access until the end of your current billing period.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              If you paid with Crypto
            </h3>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                Crypto subscriptions are{" "}
                <strong className="text-foreground">manual renewal only</strong>{" "}
                (as stated on the sales page).
              </li>
              <li>
                To cancel, simply{" "}
                <strong className="text-foreground">do not renew</strong> the
                next cycle.
              </li>
              <li>Access ends when the paid period expires.</li>
            </ul>
            <p className="text-muted-foreground mt-4 italic">
              Crypto payments may take{" "}
              <strong className="text-foreground">up to 2 hours</strong> to
              process before Discord access is granted.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. How to Request a Refund
            </h2>
            <p className="text-muted-foreground mb-4">
              To request a refund within 30 days:
            </p>
            <ol className="text-muted-foreground space-y-2 list-decimal pl-6">
              <li>
                Email us at{" "}
                <strong className="text-primary">SupportEmailPlaceholder</strong>
              </li>
              <li>
                Include:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Full name</li>
                  <li>Payment email</li>
                  <li>Date of purchase</li>
                  <li>Payment method (card or crypto)</li>
                </ul>
              </li>
            </ol>
            <p className="text-muted-foreground mt-4">
              Refunds are processed within{" "}
              <strong className="text-foreground">5–10 business days</strong>{" "}
              depending on your payment method and bank.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Termination Policy
            </h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to terminate any account (with or without
              refund) if:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>You violate the Terms & Conditions</li>
              <li>You leak or redistribute internal content</li>
              <li>You harass staff or members</li>
              <li>
                You initiate a{" "}
                <strong className="text-foreground">chargeback</strong>
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Chargebacks lead to{" "}
              <strong className="text-foreground">
                permanent ban + loss of access
              </strong>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Questions?
            </h2>
            <p className="text-muted-foreground mb-4">
              For billing, refunds, or cancellations:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                <strong className="text-foreground">Email:</strong>{" "}
                SupportEmailPlaceholder
              </li>
              <li>
                <strong className="text-foreground">Whop Support:</strong>{" "}
                Available in your dashboard
              </li>
              <li>
                <strong className="text-foreground">Discord Ticket:</strong> For
                active members
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RefundsAndCancellations;
