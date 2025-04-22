
import { Helmet } from "@/components/helmet";
import { PageLayout } from "@/components/layout/page-layout";
import { Shield } from "lucide-react";

export default function Terms() {
  return (
    <>
      <Helmet
        title="Terms & Conditions | CryptoWealth"
        description="Terms and conditions for using our investment platform"
      />
      <PageLayout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
          <div className="absolute top-1/4 -left-10 w-40 h-40 bg-primary/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-secondary/30 rounded-full filter blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
                Terms & Conditions
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
                Our commitment to transparency and fair usage
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 max-w-4xl mx-auto">
              {[
                {
                  title: "1. Acceptance of Terms",
                  content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
                },
                {
                  title: "2. Investment Risks",
                  content: "Cryptocurrency investments involve substantial risk and are not suitable for all investors. The value of cryptocurrencies can go down as well as up."
                },
                {
                  title: "3. Account Registration",
                  content: "Users must be at least 18 years old to create an account. You agree to provide accurate and complete information during registration."
                },
                {
                  title: "4. Security",
                  content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
                }
              ].map((section, index) => (
                <div 
                  key={index}
                  className="glass-card p-8 animate-fade-in hover:shadow-lg transition-all duration-300"
                  style={{animationDelay: `${0.1 * (index + 1)}s`}}
                >
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground text-lg">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Terms Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {[
                  {
                    title: "5. Prohibited Activities",
                    items: [
                      "Using the service for illegal purposes",
                      "Attempting to manipulate markets or returns",
                      "Creating multiple accounts",
                      "Providing false information"
                    ]
                  },
                  {
                    title: "6. Service Modifications",
                    content: "We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice."
                  },
                  {
                    title: "7. Termination",
                    content: "We reserve the right to terminate or suspend your account and access to the service, without prior notice or liability."
                  },
                  {
                    title: "8. Disclaimer",
                    content: "The service is provided on an \"as is\" and \"as available\" basis without any warranties of any kind."
                  }
                ].map((section, index) => (
                  <div 
                    key={index}
                    className="bg-background border border-border rounded-lg p-8 animate-fade-in hover:border-primary/50 transition-all duration-300"
                    style={{animationDelay: `${0.1 * (index + 1)}s`}}
                  >
                    <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                    {section.items ? (
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {section.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">{section.content}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
