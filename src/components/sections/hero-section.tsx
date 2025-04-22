
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [investmentAmount, setInvestmentAmount] = useState(1000);
  const [investmentDays, setInvestmentDays] = useState(30);
  
  // Simple ROI calculation for the calculator
  const calculateReturns = () => {
    const dailyRate = 0.018; // 1.8% daily
    return (investmentAmount * (1 + dailyRate) ** investmentDays).toFixed(2);
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/3 right-1/6 w-16 h-16 bg-crypto-gradient rounded-lg rotate-12 animate-float opacity-80"></div>
      <div className="absolute bottom-1/3 left-1/6 w-12 h-12 bg-wealth-gradient rounded-full animate-float opacity-80" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
              Maximize Your Wealth With Secure High-Yield Investments
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{animationDelay: '0.2s'}}>
              Access our professionally managed investment platform with competitive daily returns, instant withdrawals, and multi-cryptocurrency support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="btn-primary">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="btn-outline">
                How It Works
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Woman using laptop" 
              className="w-full h-auto rounded-lg shadow-lg animate-fade-in"
              style={{animationDelay: '0.6s'}}
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
          
          <div className="glass-card p-6 md:p-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <h3 className="text-xl font-semibold mb-4">Investment Calculator</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Investment Amount ($)</label>
                <Input
                  type="number"
                  min={100}
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(parseFloat(e.target.value) || 100)}
                  className="bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Investment Period (Days)</label>
                <div className="flex gap-2">
                  {[7, 14, 30, 60].map((days) => (
                    <Button
                      key={days}
                      variant={investmentDays === days ? "default" : "outline"}
                      size="sm"
                      onClick={() => setInvestmentDays(days)}
                      className="flex-1"
                    >
                      {days}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="p-4 rounded-lg bg-background">
                <div className="text-sm text-muted-foreground mb-1">Potential Return</div>
                <div className="text-2xl font-bold">${calculateReturns()}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Based on a 1.8% daily return rate
                </div>
              </div>
              
              <Button className="w-full">Start Investing Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
