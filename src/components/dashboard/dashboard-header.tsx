
import { Bell, Wallet, LogOut, User, Settings, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";

const cryptoTickers = [
  { symbol: "BTC", price: 65432.21, change: 2.4 },
  { symbol: "ETH", price: 3456.78, change: 1.2 },
  { symbol: "USDT", price: 1.00, change: 0.0 },
  { symbol: "BNB", price: 574.32, change: -0.8 },
  { symbol: "SOL", price: 158.23, change: 5.7 },
  { symbol: "ADA", price: 0.45, change: -1.2 },
  { symbol: "XRP", price: 0.56, change: 0.3 },
];

export function DashboardHeader() {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState(3);

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 3 unread notifications",
    });
    setNotifications(0);
  };

  const handleDepositClick = () => {
    toast({
      title: "Deposit",
      description: "Deposit functionality will be implemented soon",
    });
  };

  const handleWithdrawClick = () => {
    toast({
      title: "Withdraw",
      description: "Withdraw functionality will be implemented soon",
    });
  };

  return (
    <div className="relative w-full">
      <div className="backdrop-blur-md bg-background/50 dark:bg-black/30 border border-border rounded-xl p-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-bold text-primary mr-6 animate-pulse">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CryptoWealth
              </span>
            </div>
            
            <div className="hidden lg:flex overflow-hidden relative h-10 w-[240px] md:w-[320px] rounded-lg border border-border/50">
              <div className="animate-ticker flex absolute whitespace-nowrap">
                {[...cryptoTickers, ...cryptoTickers].map((coin, index) => (
                  <div key={index} className="flex items-center mx-4 font-medium">
                    <span>{coin.symbol}</span>
                    <span className="mx-1 text-muted-foreground">${coin.price.toLocaleString()}</span>
                    <span className={coin.change >= 0 ? "text-green-500" : "text-red-500"}>
                      {coin.change >= 0 ? "+" : ""}{coin.change}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDepositClick}
              className="border-green-500/40 text-green-500 hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 animate-scale-in"
            >
              <Wallet className="mr-1 h-4 w-4" />
              Deposit
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleWithdrawClick}
              className="border-primary/40 text-primary hover:bg-primary/10 hover:text-primary-foreground transition-all duration-300 animate-scale-in"
            >
              <ArrowDown className="mr-1 h-4 w-4" />
              Withdraw
            </Button>
            
            <div 
              className="relative cursor-pointer p-2 rounded-full hover:bg-accent/50 transition-colors duration-200 animate-scale-in"
              onClick={handleNotificationClick}
            >
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center animate-pulse">
                  {notifications}
                </span>
              )}
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="relative cursor-pointer animate-scale-in">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary/80 to-secondary/80 flex items-center justify-center text-white font-medium border border-white/10">
                    JD
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 animate-scale-in">
                <div className="flex items-center p-2">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary/80 to-secondary/80 flex items-center justify-center text-white font-medium border border-white/10 mr-2">
                    JD
                  </div>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
