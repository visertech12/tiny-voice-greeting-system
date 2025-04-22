
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RefreshCw, ArrowUp, Clock, Plus, ChevronUp, ChevronDown, Info } from "lucide-react";
import { ActiveInvestments } from "@/components/dashboard/active-investments";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Plan {
  id: number;
  name: string;
  duration: number;
  roi: number;
  minAmount: number;
  maxAmount: number;
  totalReturns: number;
  color: string;
  featured?: boolean;
}

export function InvestmentPlans() {
  const [planView, setPlanView] = useState<"active" | "available">("active");
  
  const availablePlans: Plan[] = [
    {
      id: 1,
      name: "Bronze Plan",
      duration: 7,
      roi: 1.2,
      minAmount: 100,
      maxAmount: 1000,
      totalReturns: 8.4,
      color: "from-amber-500 to-amber-600"
    },
    {
      id: 2,
      name: "Silver Plan",
      duration: 14,
      roi: 1.5,
      minAmount: 500,
      maxAmount: 5000,
      totalReturns: 21,
      color: "from-slate-400 to-slate-500"
    },
    {
      id: 3,
      name: "Gold Plan",
      duration: 30,
      roi: 1.8,
      minAmount: 1000,
      maxAmount: 10000,
      totalReturns: 54,
      color: "from-yellow-500 to-yellow-600",
      featured: true
    },
    {
      id: 4,
      name: "Platinum Plan",
      duration: 60,
      roi: 2.2,
      minAmount: 5000,
      maxAmount: 25000,
      totalReturns: 132,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      id: 5,
      name: "Diamond Plan",
      duration: 90,
      roi: 3.0,
      minAmount: 10000,
      maxAmount: 50000,
      totalReturns: 270,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 6,
      name: "VIP Plan",
      duration: 180,
      roi: 3.5,
      minAmount: 25000,
      maxAmount: 100000,
      totalReturns: 630,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <Tabs defaultValue="active" onValueChange={(value) => setPlanView(value as "active" | "available")}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Investment Plans</h2>
            <p className="text-muted-foreground">Manage your active investments or start a new one</p>
          </div>
          <TabsList className="mt-4 md:mt-0">
            <TabsTrigger value="active">Active Investments</TabsTrigger>
            <TabsTrigger value="available">Available Plans</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="active" className="mt-0">
          <ActiveInvestments />
        </TabsContent>
        
        <TabsContent value="available" className="mt-0">
          <Card className="backdrop-blur-md bg-background/40 dark:bg-black/30 border-border/40">
            <CardHeader>
              <CardTitle>Available Investment Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availablePlans.map((plan, index) => (
                  <Card 
                    key={plan.id}
                    className={cn(
                      "overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative backdrop-blur-sm border-border/40 bg-background/40 dark:bg-black/30",
                      "animate-scale-in"
                    )}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {plan.featured && (
                      <Badge className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white border-none">
                        Popular
                      </Badge>
                    )}
                    <div className={`h-2 w-full bg-gradient-to-r ${plan.color}`} />
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                      
                      <div className="flex justify-between items-baseline mb-6">
                        <div className="text-3xl font-bold">{plan.roi}%</div>
                        <div className="text-sm text-muted-foreground">Daily ROI</div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Duration</span>
                          <span className="font-medium">{plan.duration} Days</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Min-Max</span>
                          <span className="font-medium">${plan.minAmount} - ${plan.maxAmount.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Returns</span>
                          <span className="font-medium text-green-500">{plan.totalReturns}%</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                        Invest Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
