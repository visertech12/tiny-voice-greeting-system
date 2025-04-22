
import { CreditCard, Wallet, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <div className="hidden md:flex items-center gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-1 blue:border-blue-300 blue:bg-blue-50 blue:hover:bg-blue-100 green:border-green-300 green:bg-green-50 green:hover:bg-green-100"
      >
        <Wallet className="h-4 w-4" />
        <span>Deposit</span>
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-1 blue:border-blue-300 blue:bg-blue-50 blue:hover:bg-blue-100 green:border-green-300 green:bg-green-50 green:hover:bg-green-100"
      >
        <CreditCard className="h-4 w-4" />
        <span>Withdraw</span>
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-1 blue:border-blue-300 blue:bg-blue-50 blue:hover:bg-blue-100 green:border-green-300 green:bg-green-50 green:hover:bg-green-100"
      >
        <MessageSquare className="h-4 w-4" />
        <span>Support</span>
      </Button>
    </div>
  );
}
