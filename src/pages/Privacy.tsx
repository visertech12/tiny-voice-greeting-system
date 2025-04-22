
import { Helmet } from "@/components/helmet";
import { PageLayout } from "@/components/layout/page-layout";

export default function Privacy() {
  return (
    <>
      <Helmet
        title="Privacy Policy | CryptoWealth"
        description="Our privacy policy and data protection practices"
      />
      <PageLayout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul>
              <li>Personal identification information</li>
              <li>Contact information</li>
              <li>Financial information</li>
              <li>Transaction history</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process your investments</li>
              <li>Provide customer support</li>
              <li>Send important updates</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>

            <h2>4. Information Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
            <ul>
              <li>Service providers</li>
              <li>Legal authorities when required</li>
              <li>Financial partners for processing transactions</li>
            </ul>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>6. Cookies Policy</h2>
            <p>We use cookies and similar technologies to enhance your experience on our platform.</p>

            <h2>7. Changes to Privacy Policy</h2>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
