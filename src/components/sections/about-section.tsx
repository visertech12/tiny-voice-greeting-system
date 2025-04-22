
import { ArrowRight } from "lucide-react";

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
}

function Step({ number, title, description, delay }: StepProps) {
  return (
    <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: `${delay}s` }}>
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Platform</h2>
          <p className="text-muted-foreground">
            WealthNexus is built on the foundation of transparent, secure, and efficient investment solutions. Our platform is designed to simplify high-yield investments while maintaining the highest standards of security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <Step 
                number={1} 
                title="Deposit Funds" 
                description="Make a deposit using your preferred cryptocurrency. Our platform supports multiple cryptocurrencies for maximum flexibility." 
                delay={0.1}
              />
              
              <div className="h-10 border-l-2 border-dashed border-primary/30 ml-6"></div>
              
              <Step 
                number={2} 
                title="Accrue Daily Profits" 
                description="Watch your investment grow with our competitive daily returns. Our transparent system allows you to track your earnings in real-time." 
                delay={0.3}
              />
              
              <div className="h-10 border-l-2 border-dashed border-primary/30 ml-6"></div>
              
              <Step 
                number={3} 
                title="Withdraw Anytime" 
                description="Access your funds whenever you need them with our instant withdrawal system. No lock-up periods, no waiting, complete control." 
                delay={0.5}
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="glass-card p-8 relative overflow-hidden animate-fade-in">
              <div className="absolute inset-0 bg-card-gradient opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  At WealthNexus, our mission is to democratize access to high-yield investment opportunities that were traditionally available only to institutional investors and high-net-worth individuals.
                </p>
                <p className="text-muted-foreground mb-6">
                  Through our innovative platform, we leverage advanced trading algorithms and market insights to generate consistent returns for our users, regardless of market conditions.
                </p>
                <p className="text-muted-foreground mb-6">
                  We believe in complete transparency, robust security measures, and putting our users' interests first. Our team of financial experts and blockchain developers work tirelessly to ensure the platform operates at the highest standards.
                </p>
                
                <div className="bg-background p-4 rounded-lg border border-border">
                  <div className="font-medium mb-1">Why investors choose us:</div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      <span>Competitive daily returns</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      <span>Instant withdrawals, no waiting periods</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      <span>Enterprise-grade security protocols</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      <span>24/7 dedicated support team</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
