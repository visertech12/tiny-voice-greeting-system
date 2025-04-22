
import { PageLayout } from "@/components/layout/page-layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  roi: string;
  dailyRate: string;
  minAmount: number;
  maxAmount: number;
  duration: number;
  autoWithdraw: boolean;
  reinvestment: boolean;
  returnPrincipal: boolean;
  referralBonus: string;
  tier: "starter" | "popular" | "premium";
  features: string[];
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    roi: "112%",
    dailyRate: "1.6%",
    minAmount: 100,
    maxAmount: 999,
    duration: 7,
    autoWithdraw: true,
    reinvestment: false,
    returnPrincipal: true,
    referralBonus: "3%",
    tier: "starter",
    features: [
      "Daily profit accrual",
      "24/7 support access",
      "Real-time dashboard",
      "Instant withdrawals"
    ]
  },
  {
    id: "standard",
    name: "Standard Plan",
    roi: "154%",
    dailyRate: "1.8%",
    minAmount: 1000,
    maxAmount: 4999,
    duration: 14,
    autoWithdraw: true,
    reinvestment: true,
    returnPrincipal: true,
    referralBonus: "5%",
    tier: "popular",
    features: [
      "Daily profit accrual",
      "24/7 support access",
      "Real-time dashboard",
      "Instant withdrawals",
      "Priority support",
      "Reinvestment options"
    ]
  },
  {
    id: "professional",
    name: "Professional Plan",
    roi: "220%",
    dailyRate: "2.0%",
    minAmount: 5000,
    maxAmount: 9999,
    duration: 30,
    autoWithdraw: true,
    reinvestment: true,
    returnPrincipal: true,
    referralBonus: "7%",
    tier: "premium",
    features: [
      "Daily profit accrual",
      "24/7 support access",
      "Real-time dashboard",
      "Instant withdrawals",
      "Priority support",
      "Reinvestment options",
      "VIP account manager",
      "Advanced profit analytics"
    ]
  },
  {
    id: "vip",
    name: "VIP Plan",
    roi: "270%",
    dailyRate: "2.25%",
    minAmount: 10000,
    maxAmount: 50000,
    duration: 60,
    autoWithdraw: true,
    reinvestment: true,
    returnPrincipal: true,
    referralBonus: "10%",
    tier: "premium",
    features: [
      "Daily profit accrual",
      "24/7 support access",
      "Real-time dashboard",
      "Instant withdrawals",
      "Priority support",
      "Reinvestment options",
      "VIP account manager",
      "Advanced profit analytics",
      "Exclusive investment opportunities",
      "Personalized investment strategy"
    ]
  }
];

const testimonials = [
  {
    name: "Jonathan K.",
    avatar: "J",
    role: "Investor since 2022",
    content: "I've been using WealthNexus for over a year and the returns have been consistently excellent. The Standard Plan has been perfect for my investment goals.",
    plan: "Standard Plan"
  },
  {
    name: "Sophia T.",
    avatar: "S",
    role: "Professional Investor",
    content: "The Professional Plan offers the perfect balance of risk and reward. The daily returns have allowed me to significantly grow my portfolio.",
    plan: "Professional Plan"
  },
  {
    name: "Michael R.",
    avatar: "M",
    role: "Long-term Investor",
    content: "As a VIP member, I've experienced exceptional returns and service. The personalized support makes all the difference when managing larger investments.",
    plan: "VIP Plan"
  }
];

function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  return (
    <div 
      className={`glass-card relative overflow-hidden card-hover animate-fade-in`}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {plan.tier === "popular" && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-tl-none rounded-br-none bg-primary text-primary-foreground">
            Popular
          </Badge>
        </div>
      )}
      {plan.tier === "premium" && (
        <div className="absolute top-0 right-0">
          <Badge className="rounded-tl-none rounded-br-none bg-secondary text-secondary-foreground">
            Premium
          </Badge>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
        
        <div className="flex items-end gap-2 mb-4">
          <div className="text-4xl font-bold">{plan.roi}</div>
          <div className="text-sm text-muted-foreground mb-1">Total Return</div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Daily Rate:</span>
            <span className="font-medium">{plan.dailyRate}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-medium">{plan.duration} days</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Min Investment:</span>
            <span className="font-medium">${plan.minAmount}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Max Investment:</span>
            <span className="font-medium">${plan.maxAmount}</span>
          </div>
          
          <div className="border-t border-border pt-4 space-y-3">
            <h4 className="font-medium mb-2">Plan Features:</h4>
            {plan.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        <Button className={`w-full ${plan.tier === 'popular' ? 'bg-primary' : plan.tier === 'premium' ? 'bg-secondary' : ''}`}>
          Invest Now
        </Button>
      </div>
    </div>
  );
}

export default function Plans() {
  const [planDuration, setPlanDuration] = useState("all");
  
  const filteredPlans = planDuration === "all" 
    ? plans 
    : plans.filter(plan => {
        switch(planDuration) {
          case "short": return plan.duration <= 7;
          case "medium": return plan.duration > 7 && plan.duration <= 30;
          case "long": return plan.duration > 30;
          default: return true;
        }
      });
      
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Choose Your Investment Plan and Start Earning Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Our diverse range of investment plans is designed to meet your financial goals. From beginners to seasoned investors, we have the perfect plan for you.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Tabs defaultValue="all" value={planDuration} onValueChange={setPlanDuration} className="w-full max-w-md">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="all">All Plans</TabsTrigger>
                <TabsTrigger value="short">Short-term</TabsTrigger>
                <TabsTrigger value="medium">Medium</TabsTrigger>
                <TabsTrigger value="long">Long-term</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filteredPlans.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Plan Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <caption className="sr-only">Investment Plan Comparison</caption>
                <thead>
                  <tr className="bg-muted/50">
                    <th className="py-4 px-4 text-left">Plan Features</th>
                    {plans.map(plan => (
                      <th key={plan.id} className="py-4 px-4 text-center">
                        {plan.name}
                        {plan.tier === "popular" && (
                          <span className="ml-2 inline-block">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Popular</Badge>
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Total ROI</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center font-bold">{plan.roi}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Daily Rate</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center">{plan.dailyRate}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Duration</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center">{plan.duration} days</td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Minimum Investment</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center">${plan.minAmount}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Maximum Investment</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center">${plan.maxAmount}</td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Auto-Withdraw</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center">
                        {plan.autoWithdraw ? 
                          <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <span className="text-red-500">-</span>
                        }
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Reinvestment Allowed</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center">
                        {plan.reinvestment ? 
                          <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <span className="text-red-500">-</span>
                        }
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Return Principal</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center">
                        {plan.returnPrincipal ? 
                          <Check className="h-5 w-5 text-green-500 mx-auto" /> : 
                          <span className="text-red-500">-</span>
                        }
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-4 px-4 font-medium">Referral Bonus</td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center">{plan.referralBonus}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 px-4"></td>
                    {plans.map(plan => (
                      <td key={plan.id} className="py-4 px-4 text-center">
                        <Button 
                          className={`w-full ${plan.tier === 'popular' ? 'bg-primary' : plan.tier === 'premium' ? 'bg-secondary' : ''}`}
                        >
                          Select Plan
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">What Our Investors Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Hear from our community of successful investors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-card p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="inline-block h-4 w-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                
                <div className="text-sm font-medium text-primary">
                  Invested in: {testimonial.plan}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative">
        <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border py-4 z-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="font-semibold">Ready to start investing?</h3>
                <p className="text-sm text-muted-foreground">Choose a plan and begin your investment journey today.</p>
              </div>
              <Button size="lg" className="animate-pulse">
                Invest Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
