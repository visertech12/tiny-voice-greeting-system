
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    tier: "starter"
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
    tier: "popular"
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
    tier: "premium"
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
    tier: "premium"
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
          
          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-3 h-3 rounded-full ${plan.autoWithdraw ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span>Auto Withdraw {plan.autoWithdraw ? 'Available' : 'Not Available'}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-3 h-3 rounded-full ${plan.reinvestment ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span>Reinvestment {plan.reinvestment ? 'Allowed' : 'Not Allowed'}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-3 h-3 rounded-full ${plan.returnPrincipal ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span>Principal {plan.returnPrincipal ? 'Returned' : 'Not Returned'}</span>
            </div>
          </div>
        </div>
        
        <Button className={`w-full ${plan.tier === 'popular' ? 'bg-primary' : plan.tier === 'premium' ? 'bg-secondary' : ''}`}>
          Invest Now
        </Button>
      </div>
    </div>
  );
}

export function InvestmentPlansSection() {
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
    <section id="plans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment Plans</h2>
          <p className="text-muted-foreground">
            Choose from our range of investment plans designed to match your financial goals and risk tolerance.
            Each plan offers different returns and features to suit your investment strategy.
          </p>
        </div>
        
        <div className="flex justify-center mb-8">
          <Tabs defaultValue="all" value={planDuration} onValueChange={setPlanDuration} className="w-full max-w-md">
            <TabsList className="grid grid-cols-4 w-full bg-muted/50 dark:bg-muted/20 border border-border">
              <TabsTrigger value="all" className="font-medium">All</TabsTrigger>
              <TabsTrigger value="short" className="font-medium">Short-term</TabsTrigger>
              <TabsTrigger value="medium" className="font-medium">Medium</TabsTrigger>
              <TabsTrigger value="long" className="font-medium">Long-term</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
        
        <div className="mt-12 bg-muted/30 rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Important Information</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• All returns are calculated based on your investment amount and the plan's daily rate</li>
            <li>• Withdrawals are processed automatically according to each plan's terms</li>
            <li>• Reinvestment options allow for compounding returns on applicable plans</li>
            <li>• All investments are managed through secure blockchain technology</li>
            <li>• 24/7 customer support is available for all plan holders</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
