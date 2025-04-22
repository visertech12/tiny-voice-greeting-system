
import { PageLayout } from "@/components/layout/page-layout";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  category: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "What is WealthNexus?",
        answer: "WealthNexus is a high-yield investment platform designed to provide investors with opportunities to earn competitive returns on their cryptocurrency investments through carefully managed investment strategies."
      },
      {
        question: "How does WealthNexus generate returns?",
        answer: "Our platform generates returns through a diversified approach that includes algorithmic trading, arbitrage opportunities, staking, and other yield-generating activities across the cryptocurrency and DeFi ecosystem."
      },
      {
        question: "Is WealthNexus available worldwide?",
        answer: "Yes, WealthNexus is available to investors worldwide. However, users are responsible for ensuring compliance with their local laws and regulations regarding cryptocurrency investments."
      },
      {
        question: "How do I create an account?",
        answer: "To create an account, click on the 'Get Started' button on our homepage, fill in the required information, verify your email address, and complete the KYC process if required for your selected investment plan."
      },
      {
        question: "What cryptocurrencies do you accept?",
        answer: "We accept a wide range of cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), USDT, USDC, BNB, and many more. Check our deposit page for the complete list of supported cryptocurrencies."
      },
      {
        question: "How secure is the platform?",
        answer: "WealthNexus employs enterprise-grade security measures including SSL encryption, cold storage for funds, DDoS protection, regular security audits, and two-factor authentication to ensure the highest level of security for your investments and personal data."
      }
    ]
  },
  {
    category: "Investments",
    items: [
      {
        question: "What is the minimum investment amount?",
        answer: "The minimum investment amount varies by plan, starting from $100 for our Starter Plan. Each plan has different minimum and maximum investment thresholds."
      },
      {
        question: "How often are returns calculated and paid?",
        answer: "Returns are calculated daily and credited to your account according to your investment plan's terms. Depending on the plan, you can withdraw earnings daily or at the end of the investment term."
      },
      {
        question: "Can I invest in multiple plans simultaneously?",
        answer: "Yes, you can invest in multiple plans simultaneously. This allows you to diversify your investment strategy and potentially optimize your returns based on different time horizons."
      },
      {
        question: "What happens when my investment term ends?",
        answer: "When your investment term ends, your principal is returned to your account balance (for plans that include principal return), and you can choose to withdraw it or reinvest in any available plan."
      },
      {
        question: "Is there a maximum investment amount?",
        answer: "Yes, each investment plan has a maximum investment amount. This is to ensure risk management and platform stability. The maximum amounts range from $999 for the Starter Plan to $50,000 for the VIP Plan."
      },
      {
        question: "Can I make a profit calculation before investing?",
        answer: "Yes, each investment plan page includes a profit calculator that allows you to input your investment amount and see the projected returns over the plan's duration."
      },
      {
        question: "Are there any fees for investing?",
        answer: "There are no platform fees for making investments. However, standard network transaction fees apply when depositing cryptocurrencies to the platform."
      }
    ]
  },
  {
    category: "Withdrawals",
    items: [
      {
        question: "How do I withdraw my earnings?",
        answer: "To withdraw your earnings, log into your account, navigate to the 'Withdraw' section, select your preferred withdrawal method, enter the amount you wish to withdraw, and confirm the transaction."
      },
      {
        question: "How long do withdrawals take to process?",
        answer: "Most withdrawals are processed instantly. However, depending on the cryptocurrency network congestion and your selected withdrawal method, it may take up to 24 hours for funds to appear in your wallet."
      },
      {
        question: "Are there any withdrawal fees?",
        answer: "WealthNexus does not charge withdrawal fees. However, standard network transaction fees apply, which vary depending on the cryptocurrency you're withdrawing and current network conditions."
      },
      {
        question: "Is there a minimum withdrawal amount?",
        answer: "Yes, the minimum withdrawal amount is $10 or its equivalent in cryptocurrency. This threshold is in place to ensure that transaction fees don't consume a significant portion of small withdrawals."
      },
      {
        question: "Can I withdraw to a different cryptocurrency than I deposited?",
        answer: "Currently, withdrawals must be made in the same cryptocurrency that was used for the deposit. Cross-currency withdrawals are not supported at this time."
      },
      {
        question: "What happens if I enter an incorrect withdrawal address?",
        answer: "It's crucial to double-check your withdrawal address before confirming any transaction. If you enter an incorrect address, funds may be permanently lost as blockchain transactions are irreversible. Our support team cannot recover funds sent to incorrect addresses."
      }
    ]
  },
  {
    category: "Affiliate Program",
    items: [
      {
        question: "How does the affiliate program work?",
        answer: "Our affiliate program allows you to earn commissions by referring new investors to WealthNexus. You earn a percentage of the investments made by your referrals across multiple levels in your referral network."
      },
      {
        question: "What are the commission rates?",
        answer: "The commission structure is multi-tiered: 5% on Level 1 (direct referrals), 2% on Level 2 (referrals of your referrals), and 1% on Level 3. These commissions are calculated based on the investment amount."
      },
      {
        question: "How and when are affiliate commissions paid?",
        answer: "Affiliate commissions are credited to your account instantly when your referral makes an investment. You can withdraw these commissions anytime, subject to the standard minimum withdrawal threshold."
      },
      {
        question: "Are there any requirements to join the affiliate program?",
        answer: "To join the affiliate program, you need to have a verified WealthNexus account. There's no requirement to make an investment yourself, although having firsthand experience with our platform can help you better explain its benefits to potential referrals."
      },
      {
        question: "How do I track my referrals and commissions?",
        answer: "You can track all your referrals and commissions in real-time through your affiliate dashboard. The dashboard provides detailed statistics on active referrals, pending commissions, and total earnings."
      },
      {
        question: "Can I promote WealthNexus on social media?",
        answer: "Yes, you can promote WealthNexus on social media platforms, personal websites, blogs, and other channels. We provide marketing materials in your affiliate dashboard to help you with promotion."
      }
    ]
  },
  {
    category: "Security",
    items: [
      {
        question: "How is my personal information protected?",
        answer: "We employ industry-standard encryption protocols to protect all personal data. We never share your information with third parties without your consent, and we adhere to strict data protection regulations."
      },
      {
        question: "What security measures do you have in place for funds?",
        answer: "We use a combination of hot and cold wallets to store funds, with the majority kept in cold storage. All hot wallets are protected by multi-signature technology, and we conduct regular security audits to identify and address potential vulnerabilities."
      },
      {
        question: "Do you offer two-factor authentication (2FA)?",
        answer: "Yes, we strongly recommend all users enable two-factor authentication for their accounts. We support authentication apps like Google Authenticator and Authy for an additional layer of security."
      },
      {
        question: "Has the platform ever been hacked?",
        answer: "No, WealthNexus has never experienced a security breach. We continuously update our security measures to protect against evolving threats and employ third-party security firms to conduct regular penetration testing."
      },
      {
        question: "What should I do if I notice suspicious activity on my account?",
        answer: "If you notice any suspicious activity, immediately change your password, ensure 2FA is enabled, and contact our support team. We can lock your account temporarily while investigating any potential security concerns."
      }
    ]
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("General");
  
  // Filter FAQs based on search query
  const filteredFAQs = faqData.map(category => ({
    ...category,
    items: category.items.filter(item => 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);
  
  // Get the most frequently asked questions (first 2 from each category)
  const popularQuestions = faqData
    .flatMap(category => category.items.slice(0, 2))
    .slice(0, 6);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Find answers to the most common questions about our platform, investment plans, and processes.
            </p>
            
            <div className="max-w-xl mx-auto mt-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background/80 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Questions Section */}
      {!searchQuery && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Popular Questions</h2>
              
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {popularQuestions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`popular-${index}`}
                      className="animate-fade-in bg-background border border-border rounded-lg overflow-hidden mb-4"
                      style={{animationDelay: `${0.1 * (index + 1)}s`}}
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="text-left font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Main FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {searchQuery ? (
              <h2 className="text-2xl font-bold mb-8 text-center">
                {filteredFAQs.length > 0 
                  ? `Search Results for "${searchQuery}"` 
                  : `No results found for "${searchQuery}"`}
              </h2>
            ) : (
              <h2 className="text-2xl font-bold mb-8 text-center">All Questions</h2>
            )}
            
            {filteredFAQs.length > 0 ? (
              <Tabs 
                defaultValue={filteredFAQs[0].category} 
                value={activeCategory} 
                onValueChange={setActiveCategory}
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
                  {filteredFAQs.map((category) => (
                    <TabsTrigger key={category.category} value={category.category}>
                      {category.category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {filteredFAQs.map((category) => (
                  <TabsContent key={category.category} value={category.category} className="animate-fade-in">
                    <Accordion type="single" collapsible className="w-full">
                      {category.items.map((item, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`item-${index}`}
                          className="bg-background border border-border rounded-lg overflow-hidden mb-4"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <span className="text-left font-medium">{item.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-muted-foreground">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            ) : searchQuery && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No questions found matching your search.</p>
                <p className="mt-2">Try a different search term or browse the categories.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Contact Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center glass-card p-8">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to assist you with any questions or concerns you may have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="bg-background p-4 rounded-lg flex-1">
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-2">Send us an email and we'll respond within 24 hours.</p>
                <p className="font-medium">support@wealthnexus.com</p>
              </div>
              <div className="bg-background p-4 rounded-lg flex-1">
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-2">Chat with our support team in real-time.</p>
                <p className="font-medium">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
