
import { PageLayout } from "@/components/layout/page-layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Share2, ArrowRight, Trophy, Users } from "lucide-react";

export default function Affiliate() {
  const [referralAmount, setReferralAmount] = useState(1000);
  const [networkDepth, setNetworkDepth] = useState(10);
  
  // Calculate commissions for each level
  const levelCommissions = [
    { level: 1, rate: 0.05, title: "Direct Referrals", description: "Everyone you refer directly" }, // 5%
    { level: 2, rate: 0.02, title: "Level 2 Referrals", description: "People referred by your referrals" }, // 2%
    { level: 3, rate: 0.01, title: "Level 3 Referrals", description: "Even deeper network expansion" }, // 1%
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

  // Top affiliates data
  const topAffiliates = [
    { rank: 1, name: "CryptoKing", referrals: 152, earnings: "$15,200" },
    { rank: 2, name: "BlockchainQueen", referrals: 143, earnings: "$14,300" },
    { rank: 3, name: "InvestorPro", referrals: 128, earnings: "$12,800" },
    { rank: 4, name: "BitcoinMaster", referrals: 115, earnings: "$11,500" },
    { rank: 5, name: "WealthBuilder", referrals: 107, earnings: "$10,700" },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
        <div className="absolute top-1/4 -left-10 w-40 h-40 bg-primary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-secondary/30 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Earn Passive Income with Our Affiliate Program
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Leverage your network and earn substantial commissions by referring investors to our platform.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
              <Button size="lg" asChild>
                <a href="#get-started">Get Your Referral Link</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how-it-works">How It Works</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Our Affiliate Program Works</h2>
            <p className="text-lg text-muted-foreground">
              Our multi-level affiliate program allows you to earn commissions from your direct referrals and their referrals as well. It's a powerful way to build passive income.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Share Your Link",
                description: "Get your unique referral link and share it with your network through social media, email, or your website.",
                icon: <Share2 className="h-10 w-10" />,
                delay: 0.1
              },
              {
                title: "Your Network Invests",
                description: "When someone joins through your link and makes an investment, they become your referral.",
                icon: <Users className="h-10 w-10" />,
                delay: 0.3
              },
              {
                title: "Earn Commissions",
                description: "Earn commissions on all investments made by your referrals, up to 3 levels deep in your network.",
                icon: <Trophy className="h-10 w-10" />,
                delay: 0.5
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="glass-card p-8 text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${step.delay}s`}}
              >
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-primary">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Commission Structure</h2>
            <p className="text-lg text-muted-foreground">
              Our generous multi-tier commission structure rewards you for building and growing your referral network.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-6 md:p-8 animate-fade-in">
              <h3 className="text-xl font-semibold mb-6">Referral Levels & Commission Rates</h3>
              
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
                        <div className="font-medium">{commission.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {commission.description}
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
            </div>
          </div>
        </div>
      </section>

      {/* Referral Link & Leaderboard Section */}
      <section id="get-started" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <Tabs defaultValue="generate" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="generate">Get Referral Link</TabsTrigger>
                <TabsTrigger value="leaderboard">Affiliate Leaderboard</TabsTrigger>
              </TabsList>
              
              <TabsContent value="generate" className="animate-fade-in">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-6">Generate Your Referral Link</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium">Your Referral Link</label>
                      <div className="mt-2 flex">
                        <Input
                          readOnly
                          value="https://wealthnexus.com/?ref=your_username"
                          className="bg-background rounded-r-none"
                        />
                        <Button variant="secondary" className="rounded-l-none">
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Share this link with your network to earn commissions on their investments.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Share Your Link</h4>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Facebook
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Telegram
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Email
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Promotional Materials</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Download banners, text templates, and other materials to help promote your referral link.
                      </p>
                      <Button variant="outline" size="sm">
                        Download Promo Pack
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="leaderboard" className="animate-fade-in">
                <div className="glass-card p-8">
                  <h3 className="text-2xl font-semibold mb-6">Top Affiliates This Month</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4">Rank</th>
                          <th className="text-left py-3 px-4">Username</th>
                          <th className="text-right py-3 px-4">Referrals</th>
                          <th className="text-right py-3 px-4">Earnings</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topAffiliates.map((affiliate, index) => (
                          <tr 
                            key={index} 
                            className={`border-b border-border hover:bg-muted/30 transition-colors ${
                              index === 0 ? 'bg-yellow-100/10' : index === 1 ? 'bg-gray-100/10' : index === 2 ? 'bg-amber-100/10' : ''
                            }`}
                          >
                            <td className="py-4 px-4">
                              {index === 0 ? (
                                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">1</div>
                              ) : index === 1 ? (
                                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-bold">2</div>
                              ) : index === 2 ? (
                                <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold">3</div>
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-medium">{affiliate.rank}</div>
                              )}
                            </td>
                            <td className="py-4 px-4 font-medium">{affiliate.name}</td>
                            <td className="py-4 px-4 text-right">{affiliate.referrals}</td>
                            <td className="py-4 px-4 text-right font-medium">{affiliate.earnings}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <p className="text-muted-foreground mb-4">
                      Start referring today and see your name on the leaderboard next month!
                    </p>
                    <Button>Start Referring Now</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Hear from our top affiliates who have built successful referral networks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "David Chen",
                role: "Full-time Affiliate",
                content: "I started referring friends in my spare time, but the commissions grew so quickly that I was able to make it my full-time income. The multi-level structure really accelerates your earnings.",
                earnings: "$8,500 monthly"
              },
              {
                name: "Maria Rodriguez",
                role: "Finance Blogger",
                content: "As a finance blogger, I've promoted many investment platforms, but WealthNexus has the most generous and transparent affiliate program by far. My readers appreciate the quality of the platform.",
                earnings: "$12,300 monthly"
              },
              {
                name: "Thomas Weber",
                role: "Crypto Enthusiast",
                content: "The referral program is brilliantly structured. I've built a network of over 200 investors in just 6 months, and the passive income keeps growing month after month.",
                earnings: "$6,700 monthly"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="glass-card p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <div className="mb-4">
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
                
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                
                <div className="border-t border-border pt-4">
                  <div className="text-sm">Average Earnings:</div>
                  <div className="font-bold text-lg">{testimonial.earnings}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our affiliate program.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I join the affiliate program?",
                answer: "To join our affiliate program, you need to create an account on our platform. Once logged in, navigate to the Affiliate section in your dashboard to get your unique referral link."
              },
              {
                question: "When and how are commissions paid?",
                answer: "Commissions are calculated daily and credited to your account instantly when your referrals make investments. You can withdraw your commissions anytime, subject to the minimum withdrawal threshold."
              },
              {
                question: "Is there a minimum withdrawal amount for commissions?",
                answer: "Yes, the minimum withdrawal amount for affiliate commissions is $50. This ensures efficient processing of payments and reduces transaction fees."
              },
              {
                question: "Do I need to make an investment to become an affiliate?",
                answer: "No, you don't need to make an investment to participate in our affiliate program. Anyone with a verified account can become an affiliate and start earning commissions."
              },
              {
                question: "How can I track my referrals and commissions?",
                answer: "You can track all your referrals and commissions in real-time through your affiliate dashboard. The dashboard provides detailed statistics on active referrals, pending commissions, and total earnings."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-background border border-border rounded-lg p-6 animate-fade-in"
                style={{animationDelay: `${0.1 * (index + 1)}s`}}
              >
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Earning Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our affiliate program and start building your passive income stream today.
            </p>
            <Button size="lg" className="animate-pulse">
              Get Your Referral Link
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
