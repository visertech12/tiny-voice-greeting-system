
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { ArrowDownToLine, ArrowUpFromLine, Filter, TrendingUp } from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  type: "Deposit" | "Withdrawal" | "Earning";
  method: "BTC" | "ETH" | "USDT" | "Bank Transfer";
  amount: number;
  status: "Pending" | "Completed" | "Failed";
}

export function RecentTransactions() {
  const [page, setPage] = useState(1);
  
  const getStatusColor = (status: Transaction["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-500/10 text-green-500 hover:bg-green-500/20";
      case "Pending":
        return "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20";
      case "Failed":
        return "bg-red-500/10 text-red-500 hover:bg-red-500/20";
      default:
        return "";
    }
  };
  
  const getTypeIcon = (type: Transaction["type"]) => {
    switch (type) {
      case "Deposit":
        return <ArrowDownToLine className="h-4 w-4 mr-1" />;
      case "Withdrawal":
        return <ArrowUpFromLine className="h-4 w-4 mr-1" />;
      case "Earning":
        return <TrendingUp className="h-4 w-4 mr-1" />;
      default:
        return null;
    }
  };
  
  const transactions: Transaction[] = [
    {
      id: "TX123456",
      date: "2025-04-15",
      type: "Deposit",
      method: "BTC",
      amount: 1000,
      status: "Completed"
    },
    {
      id: "TX123457",
      date: "2025-04-14",
      type: "Earning",
      method: "USDT",
      amount: 25.75,
      status: "Completed"
    },
    {
      id: "TX123458",
      date: "2025-04-12",
      type: "Withdrawal",
      method: "ETH",
      amount: 500,
      status: "Pending"
    },
    {
      id: "TX123459",
      date: "2025-04-10",
      type: "Deposit",
      method: "Bank Transfer",
      amount: 2000,
      status: "Completed"
    },
    {
      id: "TX123460",
      date: "2025-04-05",
      type: "Withdrawal",
      method: "BTC",
      amount: 350,
      status: "Failed"
    },
    {
      id: "TX123461",
      date: "2025-04-01",
      type: "Earning",
      method: "USDT",
      amount: 45.20,
      status: "Completed"
    }
  ];
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your transaction history from the past 30 days</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id} className="hover:bg-muted/30 transition-colors">
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {getTypeIcon(transaction.type)}
                    {transaction.type}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="font-normal">
                    {transaction.method}
                  </Badge>
                </TableCell>
                <TableCell className={transaction.type === "Withdrawal" ? "text-red-500" : transaction.type === "Earning" ? "text-green-500" : "text-foreground"}>
                  {transaction.type === "Withdrawal" ? "-" : transaction.type === "Earning" ? "+" : ""}
                  ${transaction.amount.toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={getStatusColor(transaction.status)}>
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">6</span> of <span className="font-medium">24</span> transactions
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Previous
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setPage(page + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
