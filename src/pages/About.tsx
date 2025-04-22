
import { PageLayout } from "@/components/layout/page-layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Headset, RefreshCcw } from "lucide-react";

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-secondary/30 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to WealthNexus – The Future of Digital Investment
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Join millions of users in our trusted and secure investment platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Button size="lg" asChild>
                <a href="/register">Get Started</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#platform-overview">Learn More</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="platform-overview" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Platform Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              WealthNexus is a secure, automated investment system designed to grow your assets through strategic cryptocurrency market operations. Our platform leverages advanced trading algorithms and market insights to generate consistent returns for our investors, regardless of market conditions.
            </p>
            <p className="text-lg text-muted-foreground">
              With a focus on transparency, security, and user satisfaction, we've built a platform that democratizes access to high-yield investment opportunities previously only available to institutional investors and high-net-worth individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <RefreshCcw className="h-10 w-10" />,
                title: "Fast Withdrawals",
                description: "Access your funds whenever you need with our instant withdrawal system."
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: "Decentralized Security",
                description: "Multiple layers of security with cold storage and encryption."
              },
              {
                icon: <Headset className="h-10 w-10" />,
                title: "24/7 Support",
                description: "Our dedicated team is available around the clock to assist you."
              },
              {
                icon: <Clock className="h-10 w-10" />,
                title: "Consistent Performance",
                description: "Track record of reliable returns through all market conditions."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass-card p-6 text-center hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] animate-fade-in"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Our platform is designed for simplicity and transparency. Follow these three easy steps to start growing your investment portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Invest",
                description: "Choose your preferred investment plan and deposit funds using your cryptocurrency of choice.",
                delay: 0.1
              },
              {
                step: 2,
                title: "Earn",
                description: "Watch your investment grow with our daily profit accrual system and transparent tracking.",
                delay: 0.3
              },
              {
                step: 3,
                title: "Withdraw",
                description: "Withdraw your earnings anytime through our instant and secure withdrawal process.",
                delay: 0.5
              }
            ].map((step) => (
              <div 
                key={step.step} 
                className="relative glass-card p-8 text-center animate-fade-in"
                style={{animationDelay: `${step.delay}s`}}
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                
                {step.step < 3 && (
                  <div className="absolute top-1/2 -right-4 transform translate-y-1/2 hidden md:block z-10">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mt-4 mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Security & Trust</h2>
            <p className="text-lg text-muted-foreground">
              At WealthNexus, the security of your investments and personal data is our top priority. We implement industry-leading security measures to ensure your assets are protected at all times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DDoS Protection",
                description: "Enterprise-grade protection against distributed denial-of-service attacks."
              },
              {
                title: "SSL Encryption",
                description: "End-to-end encryption for all data transmission on our platform."
              },
              {
                title: "Cold Storage",
                description: "Majority of funds are stored in offline cold wallets for maximum security."
              },
              {
                title: "Two-Factor Authentication",
                description: "Additional layer of security for all account actions and transactions."
              },
              {
                title: "Regular Security Audits",
                description: "Continuous security testing and vulnerability assessments."
              },
              {
                title: "Licensed Hosting",
                description: "Secure server infrastructure with redundant backups."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experts behind WealthNexus. Our team combines decades of experience in fintech, blockchain technology, and investment management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Morgan",
                role: "Founder & CEO",
                bio: "15+ years in fintech and blockchain. Former CTO at Blockchain Ventures.",
                delay: 0.1
              },
              {
                name: "Sarah Chen",
                role: "CTO",
                bio: "Blockchain developer and security expert with experience at major exchanges.",
                delay: 0.2
              },
              {
                name: "Michael Rodriguez",
                role: "Head of Investments",
                bio: "Former investment banker with expertise in cryptocurrency markets and trading algorithms.",
                delay: 0.3
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="glass-card p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${member.delay}s`}}
              >
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of investors who are already growing their wealth with WealthNexus.
            </p>
            <Button size="lg" className="animate-pulse" asChild>
              <a href="/register">Create Your Account</a>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
