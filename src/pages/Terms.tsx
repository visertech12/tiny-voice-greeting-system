
import { Helmet } from "@/components/helmet";
import { PageLayout } from "@/components/layout/page-layout";

export default function Terms() {
  return (
    <>
      <Helmet
        title="Terms & Conditions | CryptoWealth"
        description="Terms and conditions for using our investment platform"
      />
      <PageLayout>
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>2. Investment Risks</h2>
            <p>Cryptocurrency investments involve substantial risk and are not suitable for all investors. The value of cryptocurrencies can go down as well as up.</p>

            <h2>3. Account Registration</h2>
            <p>Users must be at least 18 years old to create an account. You agree to provide accurate and complete information during registration.</p>

            <h2>4. Security</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

            <h2>5. Prohibited Activities</h2>
            <ul>
              <li>Using the service for illegal purposes</li>
              <li>Attempting to manipulate markets or returns</li>
              <li>Creating multiple accounts</li>
              <li>Providing false information</li>
            </ul>

            <h2>6. Service Modifications</h2>
            <p>We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.</p>

            <h2>7. Termination</h2>
            <p>We reserve the right to terminate or suspend your account and access to the service, without prior notice or liability.</p>

            <h2>8. Disclaimer</h2>
            <p>The service is provided on an "as is" and "as available" basis without any warranties of any kind.</p>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
