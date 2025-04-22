
import { Shield, Zap, BarChart3, Coins, Clock, Lock } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ icon, title, description, index }: FeatureProps) {
  return (
    <div 
      className="p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md animate-fade-in"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Withdrawals",
      description: "Access your funds anytime with our instant withdrawal system. No waiting periods, no delays."
    },
    {
      icon: <Coins className="h-6 w-6" />,
      title: "Multi-Crypto Support",
      description: "Invest using your preferred cryptocurrency. We support Bitcoin, Ethereum, USDT, and more."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Encrypted",
      description: "Enterprise-grade security protocols to ensure your investments and data remain safe."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Live Chat",
      description: "Our support team is available around the clock to assist you with any questions or concerns."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Auto Payouts",
      description: "Receive your earnings automatically according to your investment plan's schedule."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Long-Term Profit Design",
      description: "Our investment strategies are designed for sustainable long-term growth and profitability."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features & Benefits</h2>
          <p className="text-muted-foreground">
            Our platform combines cutting-edge technology with user-friendly features to provide a seamless investment experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
