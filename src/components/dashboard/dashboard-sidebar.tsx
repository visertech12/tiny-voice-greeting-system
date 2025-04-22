
import { 
  LayoutDashboard, 
  CircleDollarSign, 
  Wallet, 
  ArrowDown, 
  History, 
  Users, 
  Shield, 
  MessageSquare, 
  LogOut, 
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface DashboardSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function DashboardSidebar({ activeSection, setActiveSection }: DashboardSidebarProps) {
  const navigationItems: NavigationItem[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "investments", label: "My Investments", icon: CircleDollarSign },
    { id: "deposit", label: "Deposit Funds", icon: Wallet },
    { id: "withdraw", label: "Withdraw", icon: ArrowDown },
    { id: "history", label: "Profit Logs", icon: History },
    { id: "referrals", label: "Affiliate Program", icon: Users },
    { id: "security", label: "Security Settings", icon: Shield },
    { id: "support", label: "Support Center", icon: MessageSquare },
  ];

  return (
    <aside className="w-full lg:w-64 lg:min-h-[calc(100vh-64px)] backdrop-blur-md bg-black/30 border-r border-border/50 p-3 transition-all duration-300 animate-slide-in-left">
      <div className="space-y-1">
        {navigationItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={cn(
              "w-full flex items-center p-2 rounded-lg text-sm font-medium transition-all duration-300 group relative",
              activeSection === item.id 
                ? "text-primary-foreground bg-gradient-to-r from-primary/90 to-primary/60" 
                : "text-foreground hover:bg-primary/10"
            )}
          >
            <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-primary scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100 rounded-full" 
                 style={{ 
                   opacity: activeSection === item.id ? 1 : 0,
                   transform: activeSection === item.id ? 'scaleY(1)' : 'scaleY(0)'
                 }} 
            />
            
            <item.icon className={cn(
              "h-5 w-5 mr-3 transition-colors duration-300",
              activeSection === item.id ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"
            )} />
            
            <span className="flex-1">{item.label}</span>
            
            {activeSection === item.id && (
              <ChevronRight className="h-4 w-4 text-primary-foreground opacity-70" />
            )}
            
            <div className={cn(
              "absolute inset-0 rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100",
              activeSection === item.id ? "opacity-0" : "bg-gradient-to-r from-primary/0 to-primary/5"
            )} />
          </button>
        ))}
        
        <div className="pt-4 mt-4 border-t border-border/30">
          <button className="w-full flex items-center p-2 rounded-lg text-sm font-medium text-foreground hover:bg-destructive/10 transition-all duration-300 group">
            <LogOut className="h-5 w-5 mr-3 text-muted-foreground group-hover:text-destructive" />
            <span className="flex-1 group-hover:text-destructive">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
