
import { CreditCard, Wallet, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <div className="hidden md:flex items-center gap-2">
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <Wallet className="h-4 w-4" />
        <span>Deposit</span>
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <CreditCard className="h-4 w-4" />
        <span>Withdraw</span>
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-1">
        <MessageSquare className="h-4 w-4" />
        <span>Support</span>
      </Button>
    </div>
  );
}
