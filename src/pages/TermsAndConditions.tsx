import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
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

        <h1 className="text-4xl font-bold text-foreground mb-2">
          Terms & Conditions
        </h1>
        <p className="text-muted-foreground italic mb-8">
          Last updated: December 2, 2025
        </p>

        <p className="text-muted-foreground mb-8">
          Welcome to <strong className="text-foreground">Data's Alpha Circle</strong>.
          By accessing this website, purchasing a membership, or using any part
          of the community, you agree to these Terms & Conditions. If you do not
          agree, please discontinue use immediately.
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Eligibility
            </h2>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                You must be <strong className="text-foreground">18 years or older</strong>{" "}
                to join.
              </li>
              <li>
                You must provide accurate information during checkout and
                maintain the security of your account.
              </li>
              <li>
                You are responsible for all activity under your account.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Educational Use Only (No Financial Advice)
            </h2>
            <p className="text-muted-foreground mb-4">
              Data's Alpha Circle is an{" "}
              <strong className="text-foreground">educational membership</strong>,
              not a brokerage, financial advisor, or investment service.
            </p>
            <p className="text-muted-foreground mb-2">
              Nothing provided should be interpreted as:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>Financial advice</li>
              <li>Investment recommendations</li>
              <li>Signals to buy, sell, or hold</li>
              <li>Personalized guidance</li>
              <li>Legal, accounting, or tax advice</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              All information is{" "}
              <strong className="text-foreground">
                general education and opinion only
              </strong>
              .
            </p>
            <p className="text-muted-foreground mt-4 mb-2">You acknowledge that:</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>You trade at your own risk.</li>
              <li>You are solely responsible for your financial decisions.</li>
              <li>
                Crypto trading involves substantial risk, including loss of all
                capital.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Membership Access & Use
            </h2>
            <p className="text-muted-foreground mb-4">
              When you join, you receive a{" "}
              <strong className="text-foreground">
                limited, non-transferable, non-exclusive license
              </strong>{" "}
              to access membership content for your own personal use.
            </p>
            <p className="text-muted-foreground mb-2">You agree NOT to:</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>Share, leak, repost, copy, or resell any content</li>
              <li>Provide access to non-members</li>
              <li>Redistribute internal Discord messages</li>
              <li>Record or repost livestreams</li>
              <li>
                Use the community to harass, abuse, spam, or solicit members
              </li>
              <li>Attempt to reverse engineer or misuse any materials</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Violations may result in immediate termination{" "}
              <strong className="text-foreground">without refund</strong>.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Payments, Billing & Renewals
            </h2>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                Payments are processed securely through Whop (or any other
                checkout used).
              </li>
              <li>
                Prices may change at any time, but will not affect active
                billing cycles.
              </li>
              <li>Monthly memberships renew automatically until cancelled.</li>
              <li>
                Crypto payments may require{" "}
                <strong className="text-foreground">manual renewal</strong> and
                access activation can take up to{" "}
                <strong className="text-foreground">2 hours</strong>.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Refund & Cancellation
            </h2>
            <p className="text-muted-foreground mb-4">
              Refund rules are defined in our{" "}
              <Link
                to="/refunds-and-cancellations"
                className="text-primary hover:underline"
              >
                Refund & Cancellation Policy
              </Link>
              .
            </p>
            <p className="text-muted-foreground mb-2">Key points:</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                Refunds are{" "}
                <strong className="text-foreground">not guaranteed</strong>{" "}
                unless specified in that policy.
              </li>
              <li>
                You may cancel at any time; cancellation stops future billing.
              </li>
              <li>
                Cancellation does <strong className="text-foreground">not</strong>{" "}
                refund previous charges.
              </li>
              <li>Lifetime purchases are one-time and do not renew.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. No Guarantees or Typical Results
            </h2>
            <p className="text-muted-foreground mb-2">
              You acknowledge and agree that:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>Past results do not guarantee future performance.</li>
              <li>
                Testimonials represent individual experiences, not typical
                outcomes.
              </li>
              <li>
                Any performance examples, setups, or historical charts may be{" "}
                <strong className="text-foreground">hypothetical</strong> or
                simulated for education.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4 font-semibold">
              You may lose money trading crypto.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Community Conduct
            </h2>
            <p className="text-muted-foreground mb-2">
              To maintain a safe and productive environment, you agree to:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>Respect moderators and members</li>
              <li>Avoid sharing personal or sensitive information</li>
              <li>Not impersonate others</li>
              <li>
                Not promote outside products, groups, or paid services without
                written permission
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Violation of community rules may result in removal from the group.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Intellectual Property
            </h2>
            <p className="text-muted-foreground mb-2">All:</p>
            <ul className="text-muted-foreground space-y-1 list-disc pl-6">
              <li>Videos</li>
              <li>Livestreams</li>
              <li>Courses</li>
              <li>Chats</li>
              <li>Posts</li>
              <li>Tools</li>
              <li>Guides</li>
              <li>Branding</li>
              <li>Web content</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              are the exclusive property of{" "}
              <strong className="text-foreground">
                CryptoData / Data's Alpha Circle
              </strong>
              .
            </p>
            <p className="text-muted-foreground mt-2">
              You receive <strong className="text-foreground">access</strong>,
              not ownership.
            </p>
            <p className="text-muted-foreground mt-2">
              Unauthorized distribution is strictly prohibited.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Account Termination
            </h2>
            <p className="text-muted-foreground mb-2">
              We may suspend or terminate access if:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>You violate these Terms</li>
              <li>You leak content</li>
              <li>You abuse staff or members</li>
              <li>You engage in fraud, chargebacks, or attempted fraud</li>
              <li>You violate payment terms</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Termination does not require a refund.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Disclaimers & Limitations of Liability
            </h2>
            <p className="text-muted-foreground mb-2">
              To the maximum extent allowed by law:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                All content is provided{" "}
                <strong className="text-foreground">"as is"</strong>, with no
                warranties—express or implied.
              </li>
              <li>
                We do not guarantee accuracy, completeness, or reliability of
                any content.
              </li>
              <li>
                We are not responsible for losses, decisions, trades, or actions
                you take based on information in the community.
              </li>
              <li>
                We are not liable for indirect, incidental, or consequential
                damages.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Your sole remedy for dissatisfaction with the service is
              discontinuing use.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              11. Risk Disclosure
            </h2>
            <p className="text-muted-foreground mb-4">
              Crypto trading, leverage, and derivatives trading involve extreme
              risk.
            </p>
            <p className="text-muted-foreground mb-2">Risks include:</p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>Loss of all capital</li>
              <li>Exchange failures or hacks</li>
              <li>Market manipulation</li>
              <li>Illiquidity</li>
              <li>Smart contract failure</li>
              <li>High volatility</li>
              <li>Emotional/psychological stress</li>
            </ul>
            <p className="text-muted-foreground mt-4 font-semibold">
              You should never trade with money you cannot afford to lose.
            </p>
            <p className="text-muted-foreground mt-2">
              Seek independent advice from a licensed financial professional
              before trading.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              12. Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              Our practices regarding data collection, cookies, and user privacy
              are described in our <strong className="text-foreground">Privacy Policy</strong>.
              By using this site, you consent to those practices.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              13. Changes to Terms
            </h2>
            <p className="text-muted-foreground">
              We may update these Terms at any time. Continued use after updates
              means you accept the new Terms.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              14. Governing Law
            </h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of the United States and the
              specific state in which CryptoData's company is registered, without
              regard to conflict of law principles. Disputes may be resolved
              through arbitration or local courts, depending on jurisdictional
              requirements.
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              15. Contact
            </h2>
            <p className="text-muted-foreground mb-4">
              For support, billing, or questions:
            </p>
            <ul className="text-muted-foreground space-y-2 list-disc pl-6">
              <li>
                <strong className="text-foreground">Email:</strong>{" "}
                SupportEmailPlaceholder
              </li>
              <li>
                <strong className="text-foreground">Whop Support:</strong>{" "}
                Available directly through your Whop dashboard
              </li>
              <li>
                <strong className="text-foreground">Discord Ticket:</strong>{" "}
                Accessible to active members inside the private Discord
              </li>
            </ul>
          </section>

          <div className="border-t border-border pt-8 mt-8">
            <p className="text-center text-muted-foreground font-semibold">
              End of Terms & Conditions
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
