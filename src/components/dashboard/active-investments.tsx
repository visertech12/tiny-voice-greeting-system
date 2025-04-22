
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpFromLine, Plus, RefreshCw } from "lucide-react";

interface InvestmentPlan {
  id: number;
  name: string;
  amount: number;
  profit: number;
  rate: number;
  daysLeft: number;
  totalDays: number;
  status: "Active" | "Completed" | "Pending";
}

export function ActiveInvestments() {
  const [view, setView] = useState<"grid" | "table">("grid");
  
  const investmentPlans: InvestmentPlan[] = [
    {
      id: 1,
      name: "Gold Plan",
      amount: 1000,
      profit: 125.45,
      rate: 2.5,
      daysLeft: 12,
      totalDays: 30,
      status: "Active"
    },
    {
      id: 2,
      name: "Silver Plan",
      amount: 500,
      profit: 85.75,
      rate: 1.8,
      daysLeft: 5,
      totalDays: 14,
      status: "Active"
    },
    {
      id: 3,
      name: "Platinum Plan",
      amount: 5000,
      profit: 750,
      rate: 3.5,
      daysLeft: 25,
      totalDays: 60,
      status: "Active"
    }
  ];
  
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Active Investment Plans</CardTitle>
          <CardDescription>Your current investment portfolio</CardDescription>
        </div>
        <Tabs defaultValue="grid" className="w-[160px]" onValueChange={(value) => setView(value as "grid" | "table")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="grid">Grid</TabsTrigger>
            <TabsTrigger value="table">Table</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        {view === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {investmentPlans.map((plan) => (
              <Card key={plan.id} className="overflow-hidden hover:shadow-md transition-all duration-200">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-lg">{plan.name}</h3>
                    <Badge variant={plan.status === "Active" ? "default" : "outline"}>
                      {plan.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-muted-foreground">Invested</div>
                      <div className="font-medium text-right">${plan.amount.toLocaleString()}</div>
                      
                      <div className="text-muted-foreground">Profit</div>
                      <div className="font-medium text-right text-green-500">${plan.profit.toLocaleString()}</div>
                      
                      <div className="text-muted-foreground">Daily Rate</div>
                      <div className="font-medium text-right">{plan.rate}%</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>{plan.daysLeft} days left</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary/50 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${((plan.totalDays - plan.daysLeft) / plan.totalDays) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Plus className="mr-1 h-3 w-3" />
                        Top Up
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <RefreshCw className="mr-1 h-3 w-3" />
                        Reinvest
                      </Button>
                      <Button variant="default" size="sm" className="w-full">
                        <ArrowUpFromLine className="mr-1 h-3 w-3" />
                        Withdraw
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-md border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-medium">Plan</th>
                  <th className="text-left p-3 font-medium">Amount</th>
                  <th className="text-left p-3 font-medium">Profit</th>
                  <th className="text-left p-3 font-medium">Days Left</th>
                  <th className="text-left p-3 font-medium">Daily Rate</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {investmentPlans.map((plan) => (
                  <tr key={plan.id} className="hover:bg-muted/30 transition-colors">
                    <td className="p-3">{plan.name}</td>
                    <td className="p-3">${plan.amount.toLocaleString()}</td>
                    <td className="p-3 text-green-500">${plan.profit.toLocaleString()}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span>{plan.daysLeft}</span>
                        <div className="w-16 bg-muted rounded-full h-1.5">
                          <div 
                            className="bg-primary h-1.5 rounded-full" 
                            style={{ width: `${((plan.totalDays - plan.daysLeft) / plan.totalDays) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">{plan.rate}%</td>
                    <td className="p-3">
                      <Badge variant={plan.status === "Active" ? "default" : "outline"}>
                        {plan.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm">
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <RefreshCw className="h-3 w-3" />
                        </Button>
                        <Button variant="default" size="sm">
                          <ArrowUpFromLine className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
