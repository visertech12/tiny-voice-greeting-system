
import { useState, useEffect } from "react";
import { TrendingUp, Wallet, LineChart, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import CountUp from "react-countup";

interface AccountCardProps {
  title: string;
  value: number;
  prefix?: string;
  icon: React.ReactNode;
  growth?: number;
  className?: string;
}

const AccountCard = ({ title, value, prefix = "$", icon, growth, className }: AccountCardProps) => (
  <Card className={`overflow-hidden transition-all duration-200 hover:shadow-lg ${className}`}>
    <CardContent className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="mt-2 text-2xl font-bold">
            {prefix}
            <CountUp 
              end={value} 
              decimals={title.includes("Active") ? 0 : 2} 
              duration={2.5} 
              separator="," 
            />
          </h3>
          {growth !== undefined && (
            <p className={`mt-1 text-xs font-medium flex items-center ${growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              <span className="mr-1">{growth >= 0 ? '↑' : '↓'}</span>
              {Math.abs(growth)}% from last week
            </p>
          )}
        </div>
        <div className="rounded-full p-2 bg-primary/10 text-primary">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

export function AccountOverview() {
  const [loading, setLoading] = useState(true);
  
  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 animate-pulse">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="h-32">
            <CardContent className="p-6">
              <div className="h-full bg-muted/30 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <AccountCard
        title="Total Balance"
        value={2450.45}
        icon={<Wallet className="h-6 w-6" />}
        growth={5.2}
        className="bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20"
      />
      <AccountCard
        title="Total Earned"
        value={845.00}
        icon={<TrendingUp className="h-6 w-6" />}
        growth={12.7}
        className="bg-gradient-to-br from-green-500/5 to-green-500/10 hover:from-green-500/10 hover:to-green-500/20"
      />
      <AccountCard
        title="Active Investments"
        value={3}
        prefix=""
        icon={<LineChart className="h-6 w-6" />}
        className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 hover:from-blue-500/10 hover:to-blue-500/20"
      />
      <AccountCard
        title="Pending Withdrawal"
        value={300.00}
        icon={<Clock className="h-6 w-6" />}
        growth={-2.5}
        className="bg-gradient-to-br from-yellow-500/5 to-yellow-500/10 hover:from-yellow-500/10 hover:to-yellow-500/20"
      />
    </div>
  );
}
