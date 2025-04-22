
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

export function AffiliateProgramSection() {
  const [referralAmount, setReferralAmount] = useState(1000);
  const [networkDepth, setNetworkDepth] = useState(10);
  
  // Calculate commissions for each level
  const levelCommissions = [
    { level: 1, rate: 0.05 }, // 5%
    { level: 2, rate: 0.02 }, // 2%
    { level: 3, rate: 0.01 }, // 1%
  ];
  
  // Calculate total earnings
  const calculateTotalEarnings = () => {
    const directReferrals = referralAmount * networkDepth;
    const totalEarnings = levelCommissions.reduce((total, level, index) => {
      // Assuming each person refers 2 people on average for level 2 and beyond
      const multiplier = index === 0 ? 1 : Math.pow(2, index);
      const levelEarnings = directReferrals * level.rate * multiplier;
      return total + levelEarnings;
    }, 0);
    
    return totalEarnings.toFixed(2);
  };

  return (
    <section id="affiliate" className="py-20 relative overflow-hidden bg-muted/30">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Affiliate Program</h2>
          <p className="text-muted-foreground">
            Leverage your network and earn passive income through our generous multi-tier affiliate program.
            Refer investors to our platform and earn commissions on their investments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-6 md:p-8 animate-fade-in">
            <h3 className="text-xl font-semibold mb-6">Commission Structure</h3>
            
            <div className="space-y-8">
              {levelCommissions.map((commission, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center mb-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${
                      index === 0 ? 'bg-primary' : index === 1 ? 'bg-primary/80' : 'bg-primary/60'
                    }`}>
                      L{commission.level}
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Level {commission.level}</div>
                      <div className="text-sm text-muted-foreground">
                        {commission.rate * 100}% commission on all investments
                      </div>
                    </div>
                    <div className="ml-auto text-xl font-bold">
                      {commission.rate * 100}%
                    </div>
                  </div>
                  
                  <div className="w-full bg-muted rounded-full h-2.5 mb-4">
                    <div 
                      className="bg-primary h-2.5 rounded-full" 
                      style={{ width: `${commission.rate * 100 * 5}%` }}
                    ></div>
                  </div>
                  
                  {index < levelCommissions.length - 1 && (
                    <div className="absolute left-6 top-12 h-8 w-0.5 bg-border"></div>
                  )}
                </div>
              ))}
              
              <div className="bg-background p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">Example Scenario:</div>
                <div className="text-sm">
                  If you refer 10 people who each invest $1,000, you'll earn $500 from Level 1 commissions alone.
                  As they refer others, your earnings compound through Level 2 and 3 commissions.
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="glass-card p-6 md:p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h3 className="text-xl font-semibold mb-4">Earnings Calculator</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Average Referral Investment ($)</label>
                  <Input
                    type="number"
                    min={100}
                    value={referralAmount}
                    onChange={(e) => setReferralAmount(parseFloat(e.target.value) || 100)}
                    className="bg-background"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm font-medium">Number of Direct Referrals</label>
                    <span className="text-sm font-medium">{networkDepth}</span>
                  </div>
                  <Slider
                    value={[networkDepth]}
                    min={1}
                    max={50}
                    step={1}
                    onValueChange={(value) => setNetworkDepth(value[0])}
                  />
                </div>
                
                <div className="p-4 rounded-lg bg-background">
                  <div className="text-sm text-muted-foreground mb-1">Potential Earnings</div>
                  <div className="text-2xl font-bold">${calculateTotalEarnings()}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Based on 3-tier commission structure
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-background border border-border rounded-lg p-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <h3 className="text-xl font-semibold mb-4">How to Get Started</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium shrink-0 mt-0.5">
                    1
                  </div>
                  <span>Create an account and complete verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium shrink-0 mt-0.5">
                    2
                  </div>
                  <span>Get your unique referral link from your dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium shrink-0 mt-0.5">
                    3
                  </div>
                  <span>Share your link with potential investors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-medium shrink-0 mt-0.5">
                    4
                  </div>
                  <span>Earn commissions when they invest</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button className="w-full">Get Referral Link</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
