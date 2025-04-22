
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      }
    ]
  },
  {
    category: "Payouts",
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
      }
    ]
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to the most common questions about our platform, investment plans, and processes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="General" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
              {faqData.map((category) => (
                <TabsTrigger key={category.category} value={category.category}>
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {faqData.map((category) => (
              <TabsContent key={category.category} value={category.category} className="animate-fade-in">
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Didn't find the answer you're looking for?
            </p>
            <p className="mt-2">
              <a href="#contact" className="text-primary hover:underline">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
