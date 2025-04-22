
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from "recharts";

// Generate sample data for the chart
const generateData = (days: number, volatility: number = 0.2, uptrend: boolean = true) => {
  const data = [];
  let value = 10000;
  
  for (let i = 0; i < days; i++) {
    const change = uptrend 
      ? (Math.random() * volatility) - (volatility / 3)
      : (Math.random() * volatility) - (volatility / 1.2);
    
    value = Math.max(value * (1 + change), 100);
    
    data.push({
      date: new Date(Date.now() - (days - i) * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      value: Number(value.toFixed(2)),
    });
  }
  
  return data;
};

const dailyData = generateData(30, 0.03, true);
const weeklyData = generateData(12, 0.05, true);
const monthlyData = generateData(6, 0.08, false);

export function PerformanceChart() {
  const [timeframe, setTimeframe] = useState("daily");
  
  const data = timeframe === "daily" 
    ? dailyData 
    : timeframe === "weekly" 
      ? weeklyData 
      : monthlyData;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="backdrop-blur-md bg-background/80 border border-border/50 p-3 rounded-lg shadow-lg">
          <p className="text-xs text-muted-foreground mb-1">{label}</p>
          <p className="text-sm font-semibold">${payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="backdrop-blur-md bg-background/40 dark:bg-black/30 border-border/40 h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Portfolio Performance</CardTitle>
        <Tabs defaultValue="daily" value={timeframe} onValueChange={setTimeframe}>
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <CartesianGrid stroke="#8b5cf610" strokeDasharray="3 3" vertical={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8b5cf6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          {[
            { label: "Total Invested", value: "$10,000.00" },
            { label: "Current Value", value: `$${data[data.length - 1].value.toLocaleString()}` },
            { label: "Profit/Loss", value: `$${(data[data.length - 1].value - 10000).toLocaleString()}`, positive: data[data.length - 1].value > 10000 }
          ].map((item) => (
            <div key={item.label} className="text-center p-3 rounded-lg backdrop-blur-sm bg-background/20 dark:bg-black/20 border border-border/30">
              <div className="text-xs text-muted-foreground">{item.label}</div>
              <div className={`text-sm font-semibold mt-1 ${
                item.positive !== undefined 
                  ? item.positive ? 'text-green-500' : 'text-red-500'
                  : ''
              }`}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
