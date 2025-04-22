
import { Copy, Share, ChevronRight } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ReferralSystem() {
  const { toast } = useToast();
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText("https://wealthnexus.com/ref/user123456");
    
    toast({
      title: "Copied!",
      description: "Referral link copied to clipboard",
    });
  };
  
  const referralData = {
    totalReferrals: 15,
    totalEarnings: 280.45,
    pendingCommissions: 45.20,
    referralLink: "https://wealthnexus.com/ref/user123456",
    commission: "7.5%"
  };
  
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Referral Program</CardTitle>
        <CardDescription>Invite friends and earn commissions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-md p-3 flex-1 mr-2">
            <div className="text-sm text-muted-foreground mb-1">Total Referrals</div>
            <div className="text-xl font-bold">{referralData.totalReferrals}</div>
          </div>
          <div className="bg-primary/10 dark:bg-primary/20 rounded-md p-3 flex-1">
            <div className="text-sm text-muted-foreground mb-1">Total Earnings</div>
            <div className="text-xl font-bold text-green-500">${referralData.totalEarnings}</div>
          </div>
        </div>
        
        <div className="p-3 border rounded-md bg-card">
          <p className="text-sm font-medium mb-2">Your Referral Link</p>
          <div className="flex items-center mb-2">
            <div className="border-r border-border bg-muted/30 p-2 rounded-l-md text-muted-foreground text-xs truncate flex-1 overflow-hidden overflow-ellipsis">
              {referralData.referralLink}
            </div>
            <Button variant="outline" size="sm" className="rounded-l-none" onClick={handleCopyLink}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Commission rate: {referralData.commission}</span>
            <span>${referralData.pendingCommissions} pending</span>
          </div>
        </div>
        
        <div className="space-y-2">
          <p className="text-sm font-medium">Quick Share</p>
          <div className="grid grid-cols-4 gap-2">
            <Button variant="outline" size="sm" className="w-full bg-[#1877f2]/10 hover:bg-[#1877f2]/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1877f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </Button>
            <Button variant="outline" size="sm" className="w-full bg-[#1da1f2]/10 hover:bg-[#1da1f2]/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1da1f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </Button>
            <Button variant="outline" size="sm" className="w-full bg-[#25d366]/10 hover:bg-[#25d366]/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </Button>
            <Button variant="outline" size="sm" className="w-full">
              <Share className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex flex-col items-stretch">
        <Button variant="outline" className="w-full justify-between text-primary">
          Referral Dashboard
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
