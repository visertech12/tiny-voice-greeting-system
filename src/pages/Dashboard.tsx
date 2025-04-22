
import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  TrendingUp, 
  ArrowDownToLine, 
  ArrowUpCircle, 
  History, 
  Users, 
  FileText, 
  Shield, 
  TicketCheck, 
  LogOut,
  Bell,
  Globe,
  CreditCard,
  Wallet,
  MessageSquare
} from "lucide-react";

import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";

import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { AccountOverview } from "@/components/dashboard/account-overview";
import { ActiveInvestments } from "@/components/dashboard/active-investments";
import { EarningsChart } from "@/components/dashboard/earnings-chart";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { ReferralSystem } from "@/components/dashboard/referral-system";
import { UserDropdown } from "@/components/dashboard/user-dropdown";
import { NotificationsDropdown } from "@/components/dashboard/notifications-dropdown";
import { LanguageSelector } from "@/components/dashboard/language-selector";
import { QuickActions } from "@/components/dashboard/quick-actions";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    // In a real app, clear authentication and redirect
    navigate("/login");
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | WealthNexus</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-background to-background/90 text-foreground">
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            {/* Sidebar */}
            <Sidebar>
              <SidebarHeader className="flex items-center justify-center p-4">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-xs">WN</span>
                  </div>
                  <span className="font-bold text-xl tracking-tight text-sidebar-foreground">WealthNexus</span>
                </div>
              </SidebarHeader>
              <SidebarContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab("dashboard")}
                      isActive={activeTab === "dashboard"}
                      tooltip="Dashboard"
                    >
                      <LayoutDashboard />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab("investments")}
                      isActive={activeTab === "investments"}
                      tooltip="My Investments"
                    >
                      <TrendingUp />
                      <span>My Investments</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab("deposit")}
                      isActive={activeTab === "deposit"}
                      tooltip="Deposit Funds"
                    >
                      <ArrowDownToLine />
                      <span>Deposit Funds</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab("withdraw")}
                      isActive={activeTab === "withdraw"}
                      tooltip="Withdraw Funds"
                    >
                      <ArrowUpCircle />
                      <span>Withdraw Funds</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab("earnings")}
                      isActive={activeTab === "earnings"}
                      tooltip="Earnings History"
                    >
                      <History />
                      <span>Earnings History</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab("referrals")}
                      isActive={activeTab === "referrals"}
                      tooltip="Referral Program"
                    >
                      <Users />
                      <span>Referral Program</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab("transactions")}
                      isActive={activeTab === "transactions"}
                      tooltip="Transaction Logs"
                    >
                      <FileText />
                      <span>Transaction Logs</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab("security")}
                      isActive={activeTab === "security"}
                      tooltip="Security Settings"
                    >
                      <Shield />
                      <span>Security Settings</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton 
                      onClick={() => setActiveTab("support")}
                      isActive={activeTab === "support"}
                      tooltip="Support Tickets"
                    >
                      <TicketCheck />
                      <span>Support Tickets</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    onClick={handleLogout}
                    tooltip="Logout"
                  >
                    <LogOut />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <div className="p-4 flex justify-center">
                  <ThemeToggle />
                </div>
              </SidebarFooter>
            </Sidebar>

            {/* Main Content */}
            <SidebarInset className="flex flex-col">
              {/* Top Navigation Bar */}
              <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur px-6">
                <SidebarTrigger />
                <div className="flex-1" />
                <QuickActions />
                <LanguageSelector />
                <NotificationsDropdown />
                <UserDropdown />
              </header>

              {/* Main Dashboard Content */}
              <main className="flex-1 overflow-auto p-6">
                <div className="mx-auto max-w-7xl space-y-8">
                  <h1 className="text-3xl font-bold">Dashboard</h1>
                  
                  {/* Account Overview Cards */}
                  <AccountOverview />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Active Investments */}
                    <div className="lg:col-span-2">
                      <ActiveInvestments />
                    </div>
                    
                    {/* Referral System Quick View */}
                    <div className="lg:col-span-1">
                      <ReferralSystem />
                    </div>
                  </div>
                  
                  {/* Earnings Chart */}
                  <EarningsChart />
                  
                  {/* Recent Transactions */}
                  <RecentTransactions />
                </div>
              </main>
              
              {/* Footer */}
              <footer className="border-t bg-background p-4 text-center text-sm text-muted-foreground">
                © 2025 WealthNexus. All rights reserved.
              </footer>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </>
  );
};

export default Dashboard;
