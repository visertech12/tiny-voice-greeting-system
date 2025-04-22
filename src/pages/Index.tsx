
import { PageLayout } from "@/components/layout/page-layout";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { InvestmentPlansSection } from "@/components/sections/investment-plans-section";
import { AffiliateProgramSection } from "@/components/sections/affiliate-program-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CryptocurrenciesSection } from "@/components/sections/cryptocurrencies-section";
import { RegistrationSection } from "@/components/sections/registration-section";
import { SecuritySection } from "@/components/sections/security-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <InvestmentPlansSection />
      <AffiliateProgramSection />
      <FeaturesSection />
      <CryptocurrenciesSection />
      <SecuritySection />
      <FAQSection />
      <RegistrationSection />
      <NewsletterSection />
    </PageLayout>
  );
};

export default Index;
