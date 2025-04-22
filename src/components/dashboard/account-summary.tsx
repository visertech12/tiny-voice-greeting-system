
import { useEffect, useState } from "react";
import { LayoutDashboard, Wallet, CircleDollarSign, ArrowDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AccountCard {
  title: string;
  value: number;
  change: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  formatter: (value: number) => string;
}

export function AccountSummary() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState<{ [key: string]: number }>({
    balance: 0,
    profit: 0,
    investments: 0,
    pending: 0
  });
  
  const accountCards: AccountCard[] = [
    {
      title: "Total Balance",
      value: 12485.65,
      change: 2.4,
      icon: Wallet,
      color: "from-blue-500 to-blue-600",
      formatter: (value) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    },
    {
      title: "Total Profit",
      value: 2340.78,
      change: 5.2,
      icon: CircleDollarSign,
      color: "from-green-500 to-green-600",
      formatter: (value) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    },
    {
      title: "Active Investments",
      value: 5,
      change: 0,
      icon: LayoutDashboard,
      color: "from-purple-500 to-purple-600",
      formatter: (value) => value.toString()
    },
    {
      title: "Pending Withdrawals",
      value: 500,
      change: -10,
      icon: ArrowDown,
      color: "from-orange-500 to-orange-600",
      formatter: (value) => `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const intervals: NodeJS.Timeout[] = [];
    
    accountCards.forEach((card, index) => {
      const key = Object.keys(displayValue)[index];
      const targetValue = card.value;
      const steps = 30;
      const stepValue = targetValue / steps;
      
      const interval = setInterval(() => {
        setDisplayValue((prev) => {
          const current = prev[key];
          if (current < targetValue) {
            return { ...prev, [key]: Math.min(current + stepValue, targetValue) };
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 50);
      
      intervals.push(interval);
    });
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {accountCards.map((card, index) => {
        const valueKey = Object.keys(displayValue)[index];
        
        return (
          <Card 
            key={card.title}
            className={cn(
              "overflow-hidden border-border/40 backdrop-blur-md bg-background/40 dark:bg-black/30 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1",
              isVisible ? "opacity-100" : "opacity-0 translate-y-10"
            )}
            style={{ 
              transitionDelay: `${index * 100}ms`,
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className={`h-1 w-full bg-gradient-to-r ${card.color}`} />
            <CardContent className="p-6 pb-4">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">{card.title}</h3>
                  <div className="text-2xl font-bold mt-1">{card.formatter(displayValue[valueKey])}</div>
                </div>
                <div className={`p-2 rounded-full bg-gradient-to-br ${card.color} bg-opacity-10`}>
                  <card.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="flex items-center text-xs">
                <span className={cn(
                  "flex items-center",
                  card.change > 0 ? "text-green-500" : card.change < 0 ? "text-red-500" : "text-muted-foreground"
                )}>
                  {card.change > 0 && '+'}
                  {card.change}%
                </span>
                <span className="mx-1 text-muted-foreground">from yesterday</span>
              </div>
              
              <div className="w-full h-1 bg-muted/30 rounded-full mt-4 overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${card.color}`} 
                  style={{ width: `${Math.min(100, Math.abs(card.change) * 10)}%` }} 
                />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
