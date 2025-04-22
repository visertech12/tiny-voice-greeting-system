
import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";

const generateRandomData = (days: number, multiplier = 1) => {
  return Array.from({ length: days }).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (days - index - 1));
    
    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      earnings: parseFloat((Math.random() * 20 * multiplier + 10 * multiplier).toFixed(2)),
      investment: parseFloat((Math.random() * 10 * multiplier + 100 * multiplier).toFixed(2)),
      roi: parseFloat((Math.random() * 1 + 1.5).toFixed(2))
    };
  });
};

export function EarningsChart() {
  const [timeframe, setTimeframe] = useState<"day" | "week" | "month">("week");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [chartType, setChartType] = useState<"area" | "bar">("area");
  
  useEffect(() => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      let newData;
      switch (timeframe) {
        case "day":
          newData = generateRandomData(7);
          break;
        case "week":
          newData = generateRandomData(12);
          break;
        case "month":
          newData = generateRandomData(30, 3);
          break;
        default:
          newData = generateRandomData(7);
      }
      
      setData(newData);
      setLoading(false);
    }, 500);
  }, [timeframe]);
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md shadow-md p-3 text-sm">
          <p className="font-medium mb-1">{label}</p>
          <p className="text-primary">Earnings: ${payload[0].value.toFixed(2)}</p>
          {payload[1] && <p className="text-blue-500">Investment: ${payload[1].value.toFixed(2)}</p>}
          {payload[2] && <p className="text-green-500">ROI: {payload[2].value}%</p>}
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Earnings Overview</CardTitle>
          <CardDescription>Track your investment performance over time</CardDescription>
        </div>
        <div className="flex gap-2">
          <Tabs defaultValue="area" onValueChange={(value) => setChartType(value as "area" | "bar")}>
            <TabsList className="grid w-[180px] grid-cols-2">
              <TabsTrigger value="area">Area</TabsTrigger>
              <TabsTrigger value="bar">Bar</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Tabs defaultValue="week" onValueChange={(value) => setTimeframe(value as "day" | "week" | "month")}>
            <TabsList className="grid w-[180px] grid-cols-3">
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent className="h-80">
        {loading ? (
          <div className="h-full w-full flex items-center justify-center">
            <div className="animate-pulse rounded-md bg-muted h-64 w-full"></div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "area" ? (
              <AreaChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="earnings" 
                  name="Earnings" 
                  stroke="hsl(var(--primary))" 
                  fillOpacity={1} 
                  fill="url(#colorEarnings)" 
                  activeDot={{ r: 8 }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="investment" 
                  name="Investment" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorInvestment)" 
                />
              </AreaChart>
            ) : (
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="earnings" name="Earnings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="investment" name="Investment" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="roi" name="ROI %" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
