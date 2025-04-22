
import { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  CircleDollarSign, 
  Wallet, 
  ArrowDown, 
  History, 
  Users, 
  Shield, 
  MessageSquare, 
  Settings, 
  LogOut, 
  ChevronLeft,
  Globe,
  PanelLeft,
  Moon,
  Sun
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroupLabel,
  SidebarGroup,
  useSidebar
} from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";

interface CyberSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

// Updated the interface to use LucideProps or a more general type that doesn't restrict size
interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  notification?: number | boolean;
}

export function CyberSidebar({ activeSection, setActiveSection }: CyberSidebarProps) {
  const { state, toggleSidebar } = useSidebar();
  const isMobile = useIsMobile();
  const isCollapsed = state === "collapsed";
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Animation mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  const navigationItems: NavigationItem[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "investments", label: "My Investments", icon: CircleDollarSign },
    { id: "deposit", label: "Deposit Funds", icon: Wallet },
    { id: "withdraw", label: "Withdraw", icon: ArrowDown },
    { id: "history", label: "Profit Logs", icon: History },
    { id: "referrals", label: "Affiliate Program", icon: Users, notification: 3 },
    { id: "security", label: "Security Settings", icon: Shield },
    { id: "support", label: "Support Center", icon: MessageSquare, notification: true },
    { id: "settings", label: "Account Settings", icon: Settings },
  ];

  // Toggle theme function (in a real app, this would interact with your theme system)
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, you would also update your theme system here
  };

  return (
    <Sidebar 
      className={cn(
        "border-0 bg-transparent transition-all duration-300 ease-in-out",
        mounted ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}
      variant="sidebar"
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xl rounded-r-2xl border-r border-white/5 overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,#a259ff10,transparent_50%)] z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,#00d1ff10,transparent_50%)] z-0"></div>
        <div className="absolute h-full w-1/3 -left-[10%] top-0 bg-gradient-to-b from-[#a259ff03] to-[#00d1ff03] blur-3xl z-0 animate-pulse-glow"></div>
      </div>

      <SidebarHeader className="relative z-10 flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-2">
          <div className={cn(
            "flex items-center justify-center w-10 h-10 rounded-xl bg-black/20 border border-white/10",
            "transition-all duration-500 ease-out",
            "group-hover:border-[#00d1ff]/30 group-hover:shadow-[0_0_15px_rgba(0,209,255,0.2)]",
            "text-white font-bold text-xl"
          )}>
            <span className={cn(
              "bg-gradient-to-br from-[#00d1ff] to-[#a259ff] bg-clip-text text-transparent",
              "transition-all duration-300 ease-out animate-pulse-glow"
            )}>
              CW
            </span>
          </div>
          <span className={cn(
            "font-bold text-lg text-white/90 transition-all duration-300",
            isCollapsed ? "opacity-0 scale-0" : "opacity-100 scale-100",
            "origin-left"
          )}>
            CryptoWealth
          </span>
        </div>
        <SidebarTrigger 
          className={cn(
            "h-8 w-8 rounded-full bg-black/20 border border-white/10",
            "hover:border-[#00d1ff]/30 hover:shadow-[0_0_10px_rgba(0,209,255,0.2)]",
            "text-white/70 hover:text-white transition-all duration-200"
          )}
        >
          <PanelLeft className="transition-transform duration-300 w-4 h-4" />
        </SidebarTrigger>
      </SidebarHeader>

      <SidebarContent className="relative z-10 pb-0 px-3">
        <SidebarGroup>
          <SidebarMenu>
            {navigationItems.map((item) => (
              <SidebarMenuItem
                key={item.id}
                className="group/menu-item mb-1"
              >
                <SidebarMenuButton
                  tooltip={item.label}
                  onClick={() => setActiveSection(item.id)}
                  isActive={activeSection === item.id}
                  className={cn(
                    "group relative overflow-hidden h-11 rounded-xl text-[15px] font-medium",
                    "transition-all duration-300 ease-out",
                    "bg-black/20 hover:bg-black/30 border border-white/5",
                    "hover:border-[#00d1ff]/20 hover:shadow-[0_0_15px_rgba(0,209,255,0.1)]",
                    activeSection === item.id && "border-l-2 border-l-[#a259ff] bg-black/40"
                  )}
                >
                  {/* Active indicator animation */}
                  {activeSection === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#a259ff] to-[#00d1ff]">
                      <div className="absolute inset-0 bg-gradient-to-b from-[#a259ff] to-[#00d1ff] animate-pulse-glow"></div>
                    </div>
                  )}
                  
                  {/* Icon with glow effect */}
                  <span className={cn(
                    "flex items-center justify-center",
                    "transition-all duration-300 ease-out",
                    activeSection === item.id 
                      ? "text-white" 
                      : "text-white/60 group-hover:text-white/90"
                  )}>
                    <item.icon 
                      className={cn(
                        "w-5 h-5 transition-all duration-300",
                        activeSection === item.id && "filter drop-shadow-[0_0_3px_rgba(162,89,255,0.7)]"
                      )} 
                    />
                  </span>
                  
                  {/* Label text */}
                  <span className={cn(
                    "ml-2 transition-all duration-300",
                    activeSection === item.id 
                      ? "text-white font-medium" 
                      : "text-white/70 group-hover:text-white/90"
                  )}>
                    {item.label}
                  </span>
                  
                  {/* Notification indicator */}
                  {item.notification && (
                    <span className={cn(
                      "absolute right-3 top-1/2 -translate-y-1/2",
                      "flex h-5 min-w-5 items-center justify-center rounded-full",
                      "bg-[#a259ff] border border-[#a259ff]/20 shadow-[0_0_10px_rgba(162,89,255,0.5)]",
                      "text-xs font-semibold text-white",
                      "transition-all duration-300 ease-out",
                      "animate-pulse-glow",
                      isCollapsed && "opacity-0 scale-0"
                    )}>
                      {typeof item.notification === 'number' ? item.notification : ''}
                    </span>
                  )}
                  
                  {/* Hover background animation effect */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-300 ease-out pointer-events-none",
                    "bg-gradient-to-r from-[#a259ff05] via-[#00d1ff05] to-[#a259ff05]",
                    "bg-[length:200%_100%]",
                    "animate-gradient-x"
                  )} />
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        
        {/* Logout button */}
        <SidebarGroup className="mt-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Logout"
                className={cn(
                  "group relative overflow-hidden h-11 rounded-xl text-[15px] font-medium",
                  "transition-all duration-300 ease-out",
                  "bg-black/20 hover:bg-black/30 border border-white/5",
                  "hover:border-[#ff5555]/30 hover:shadow-[0_0_15px_rgba(255,85,85,0.15)]",
                  "text-white/70 hover:text-white/90"
                )}
              >
                <LogOut className="w-5 h-5 text-[#ff5555]/80 group-hover:text-[#ff5555] transition-all duration-300" />
                <span className="ml-2">Logout</span>
                
                {/* Hover background animation effect */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100",
                  "transition-opacity duration-300 ease-out pointer-events-none",
                  "bg-gradient-to-r from-[#ff555510] to-transparent",
                )} />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="relative z-10 mt-auto px-4 pb-4 pt-2 border-t border-white/5">
        <div className={cn(
          "flex items-center justify-between",
          "transition-all duration-300 ease-out",
          isCollapsed ? "flex-col gap-3" : "flex-row"
        )}>
          {/* Theme toggle switch */}
          <div className={cn(
            "flex items-center gap-2",
            isCollapsed ? "flex-col" : "flex-row"
          )}>
            <Switch 
              checked={isDarkMode} 
              onCheckedChange={handleThemeToggle}
              className="data-[state=checked]:bg-[#a259ff] data-[state=checked]:border-[#a259ff]/50"
            />
            <span className={cn(
              "text-xs text-white/60",
              isCollapsed ? "opacity-0" : "opacity-100",
              "transition-opacity duration-300"
            )}>
              {isDarkMode ? (
                <div className="flex items-center gap-1">
                  <Moon className="w-3 h-3" /> Dark
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <Sun className="w-3 h-3" /> Light
                </div>
              )}
            </span>
          </div>
          
          {/* Language selector */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className={cn(
                  "flex items-center gap-2",
                  "text-xs text-white/60 hover:text-white/90",
                  "transition-colors duration-200"
                )}>
                  <Globe className="w-3.5 h-3.5" />
                  <span className={cn(
                    isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto",
                    "transition-all duration-300 overflow-hidden"
                  )}>
                    EN
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Change language</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Version indicator */}
        <div className={cn(
          "mt-4 text-[10px] text-white/40 text-center",
          isCollapsed ? "opacity-0" : "opacity-100",
          "transition-opacity duration-300"
        )}>
          CryptoWealth v2.5.1
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
