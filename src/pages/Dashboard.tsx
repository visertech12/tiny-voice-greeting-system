
import { Helmet } from "@/components/helmet";
import { PageLayout } from "@/components/layout/page-layout";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { AccountSummary } from "@/components/dashboard/account-summary";
import { InvestmentPlans } from "@/components/dashboard/investment-plans";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { TransactionHistory } from "@/components/dashboard/transaction-history";
import { ReferralSystem } from "@/components/dashboard/referral-system";
import { SecurityCenter } from "@/components/dashboard/security-center";
import { SupportCenter } from "@/components/dashboard/support-center";
import { useState } from "react";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <>
      <Helmet title="Dashboard | CryptoWealth" description="Manage your investments and monitor your portfolio growth" />
      <PageLayout>
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
          <DashboardSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="flex-1 p-4 lg:p-6">
            <DashboardHeader />
            
            <div className="space-y-8 mt-8 animate-fade-in">
              {activeSection === "dashboard" && (
                <>
                  <AccountSummary />
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <PerformanceChart />
                    </div>
                    <div>
                      <ReferralSystem />
                    </div>
                  </div>
                  <TransactionHistory />
                </>
              )}
              
              {activeSection === "investments" && <InvestmentPlans />}
              {activeSection === "referrals" && <ReferralSystem />}
              {activeSection === "security" && <SecurityCenter />}
              {activeSection === "support" && <SupportCenter />}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}
