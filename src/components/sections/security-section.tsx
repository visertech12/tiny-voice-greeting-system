
import { Shield, Lock, Fingerprint, Server, Clock, Settings } from "lucide-react";

interface SecurityFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SecurityFeature({ icon, title, description }: SecurityFeatureProps) {
  return (
    <div className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl transition-all duration-300 hover:shadow-md">
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "DDoS Protection",
      description: "Advanced protection against distributed denial-of-service attacks, ensuring platform availability 24/7."
    },
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "Two-Factor Authentication",
      description: "Enhanced account security with optional 2FA using app-based or SMS verification codes."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "SSL Encryption",
      description: "Secure Socket Layer (SSL) encryption for all communications between users and our servers."
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Cold Storage Reserves",
      description: "Majority of cryptocurrency holdings are stored in offline cold wallets for maximum security."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Monitoring",
      description: "Continuous surveillance systems detect and respond to suspicious activities in real-time."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Regular Security Audits",
      description: "Independent third-party security audits to identify and address potential vulnerabilities."
    }
  ];

  return (
    <section id="security" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Highlights</h2>
          <p className="text-muted-foreground">
            Your security is our top priority. We implement industry-leading security measures to ensure your investments and data remain protected.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <SecurityFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border shadow-sm">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2150/2150463.png" alt="SSL Secured" className="w-6 h-6" />
            </div>
            <div>
              <div className="font-medium">SSL Secured</div>
              <div className="text-muted-foreground text-xs">256-bit encryption</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <img src="https://cdn-icons-png.flaticon.com/512/882/882730.png" alt="McAfee Secure" className="w-6 h-6" />
            </div>
            <div>
              <div className="font-medium">McAfee Secure</div>
              <div className="text-muted-foreground text-xs">Site verified</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border shadow-sm">
            <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2592/2592004.png" alt="Norton Secured" className="w-6 h-6" />
            </div>
            <div>
              <div className="font-medium">Norton Secured</div>
              <div className="text-muted-foreground text-xs">Data protection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
