
import { Helmet } from "@/components/helmet";
import { PageLayout } from "@/components/layout/page-layout";
import { Shield, Lock, UserCheck, Bell } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <Helmet
        title="Privacy Policy | CryptoWealth"
        description="Our privacy policy and data protection practices"
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
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
                Your privacy and data security are our top priorities
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 max-w-4xl mx-auto">
              {[
                {
                  icon: UserCheck,
                  title: "Information We Collect",
                  items: [
                    "Personal identification information",
                    "Contact information",
                    "Financial information",
                    "Transaction history"
                  ]
                },
                {
                  icon: Bell,
                  title: "How We Use Your Information",
                  items: [
                    "Process your investments",
                    "Provide customer support",
                    "Send important updates",
                    "Comply with legal obligations"
                  ]
                },
                {
                  icon: Lock,
                  title: "Data Security",
                  content: "We implement appropriate security measures to protect your personal information against unauthorized access or disclosure."
                }
              ].map((section, index) => (
                <div 
                  key={index}
                  className="glass-card p-8 animate-fade-in hover:shadow-lg transition-all duration-300"
                  style={{animationDelay: `${0.1 * (index + 1)}s`}}
                >
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                    <section.icon className="h-6 w-6 text-primary" />
                    {section.title}
                  </h2>
                  {section.items ? (
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-muted-foreground text-lg flex items-center gap-2">
                          <Shield className="h-4 w-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground text-lg">{section.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Sections */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8">
                {[
                  {
                    title: "Information Sharing",
                    content: "We do not sell or rent your personal information to third parties. We may share your information with service providers, legal authorities when required, and financial partners for processing transactions."
                  },
                  {
                    title: "Your Rights",
                    items: [
                      "Access your personal data",
                      "Correct inaccurate data",
                      "Request deletion of your data",
                      "Opt-out of marketing communications"
                    ]
                  },
                  {
                    title: "Cookies Policy",
                    content: "We use cookies and similar technologies to enhance your experience on our platform."
                  },
                  {
                    title: "Changes to Privacy Policy",
                    content: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page."
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
