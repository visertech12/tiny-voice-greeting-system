
import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { 
  DropdownMenu, 
  DropdownMenuCheckboxItem, 
  DropdownMenuContent, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type TransactionType = "deposit" | "withdraw" | "profit" | "referral";
type TransactionStatus = "completed" | "pending" | "failed";

interface Transaction {
  id: string;
  date: string;
  type: TransactionType;
  method: string;
  status: TransactionStatus;
  amount: number;
}

const transactionTypeColors: Record<TransactionType, string> = {
  deposit: "bg-blue-500/10 text-blue-500 border-blue-500/30",
  withdraw: "bg-orange-500/10 text-orange-500 border-orange-500/30",
  profit: "bg-green-500/10 text-green-500 border-green-500/30",
  referral: "bg-purple-500/10 text-purple-500 border-purple-500/30",
};

const statusColors: Record<TransactionStatus, string> = {
  completed: "bg-green-500/10 text-green-500 border-green-500/30",
  pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  failed: "bg-red-500/10 text-red-500 border-red-500/30",
};

// Generate sample transaction data
const generateTransactions = (count: number): Transaction[] => {
  const types: TransactionType[] = ["deposit", "withdraw", "profit", "referral"];
  const methods = ["Bitcoin", "Ethereum", "USDT", "Bank Transfer", "Credit Card"];
  const statuses: TransactionStatus[] = ["completed", "pending", "failed"];
  
  return Array.from({ length: count }).map((_, i) => {
    const type = types[Math.floor(Math.random() * types.length)];
    const isDeposit = type === "deposit" || type === "profit" || type === "referral";
    
    return {
      id: `TX-${Math.floor(1000000 + Math.random() * 9000000)}`,
      date: new Date(Date.now() - Math.random() * 30 * 86400000).toISOString().split('T')[0],
      type,
      method: methods[Math.floor(Math.random() * methods.length)],
      status: statuses[Math.floor(Math.random() * (isDeposit ? 2 : 3))], // Deposits are less likely to fail
      amount: parseFloat((Math.random() * 2000 + 100).toFixed(2)) * (isDeposit ? 1 : -1),
    };
  });
};

const transactions = generateTransactions(10).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function TransactionHistory() {
  const [sortColumn, setSortColumn] = useState<keyof Transaction>("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filter, setFilter] = useState<{ type: TransactionType[], status: TransactionStatus[] }>({
    type: ["deposit", "withdraw", "profit", "referral"],
    status: ["completed", "pending", "failed"],
  });
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSort = (column: keyof Transaction) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("desc");
    }
  };
  
  const filteredTransactions = transactions
    .filter(transaction => filter.type.includes(transaction.type))
    .filter(transaction => filter.status.includes(transaction.status))
    .filter(transaction => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        transaction.id.toLowerCase().includes(query) ||
        transaction.method.toLowerCase().includes(query) ||
        transaction.amount.toString().includes(query)
      );
    })
    .sort((a, b) => {
      if (sortColumn === "amount") {
        return sortDirection === "asc" 
          ? a.amount - b.amount 
          : b.amount - a.amount;
      } else if (sortColumn === "date") {
        return sortDirection === "asc" 
          ? new Date(a.date).getTime() - new Date(b.date).getTime() 
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      } else {
        const valA = a[sortColumn]?.toString() || "";
        const valB = b[sortColumn]?.toString() || "";
        return sortDirection === "asc" 
          ? valA.localeCompare(valB) 
          : valB.localeCompare(valA);
      }
    });

  const toggleTypeFilter = (type: TransactionType) => {
    const types = [...filter.type];
    if (types.includes(type)) {
      if (types.length > 1) {
        setFilter({ ...filter, type: types.filter(t => t !== type) });
      }
    } else {
      setFilter({ ...filter, type: [...types, type] });
    }
  };

  const toggleStatusFilter = (status: TransactionStatus) => {
    const statuses = [...filter.status];
    if (statuses.includes(status)) {
      if (statuses.length > 1) {
        setFilter({ ...filter, status: statuses.filter(s => s !== status) });
      }
    } else {
      setFilter({ ...filter, status: [...statuses, status] });
    }
  };

  return (
    <Card className="backdrop-blur-md bg-background/40 dark:bg-black/30 border-border/40">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-4">
        <CardTitle>Recent Transactions</CardTitle>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex space-x-2 w-full sm:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  Type
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem
                  checked={filter.type.includes("deposit")}
                  onCheckedChange={() => toggleTypeFilter("deposit")}
                >
                  Deposit
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filter.type.includes("withdraw")}
                  onCheckedChange={() => toggleTypeFilter("withdraw")}
                >
                  Withdraw
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filter.type.includes("profit")}
                  onCheckedChange={() => toggleTypeFilter("profit")}
                >
                  Profit
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filter.type.includes("referral")}
                  onCheckedChange={() => toggleTypeFilter("referral")}
                >
                  Referral
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  Status
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuCheckboxItem
                  checked={filter.status.includes("completed")}
                  onCheckedChange={() => toggleStatusFilter("completed")}
                >
                  Completed
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filter.status.includes("pending")}
                  onCheckedChange={() => toggleStatusFilter("pending")}
                >
                  Pending
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={filter.status.includes("failed")}
                  onCheckedChange={() => toggleStatusFilter("failed")}
                >
                  Failed
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border-border/40 overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead 
                  className="w-[140px] cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleSort("date")}
                >
                  <div className="flex items-center">
                    Date
                    {sortColumn === "date" && (
                      sortDirection === "asc" ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleSort("type")}
                >
                  <div className="flex items-center">
                    Type
                    {sortColumn === "type" && (
                      sortDirection === "asc" ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleSort("method")}
                >
                  <div className="flex items-center">
                    Method
                    {sortColumn === "method" && (
                      sortDirection === "asc" ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </TableHead>
                <TableHead 
                  className="cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleSort("status")}
                >
                  <div className="flex items-center">
                    Status
                    {sortColumn === "status" && (
                      sortDirection === "asc" ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </TableHead>
                <TableHead 
                  className="text-right cursor-pointer hover:text-primary transition-colors"
                  onClick={() => handleSort("amount")}
                >
                  <div className="flex items-center justify-end">
                    Amount
                    {sortColumn === "amount" && (
                      sortDirection === "asc" ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow 
                  key={transaction.id}
                  className="group hover:bg-muted/10 backdrop-blur-sm border-border/40 transition-colors duration-200"
                >
                  <TableCell className="font-medium">{transaction.date}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={cn("capitalize font-normal", transactionTypeColors[transaction.type])}
                    >
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{transaction.method}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={cn("capitalize font-normal", statusColors[transaction.status])}
                    >
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell className={`text-right font-medium ${
                    transaction.amount > 0 ? "text-green-500" : "text-red-500"
                  }`}>
                    {transaction.amount > 0 ? "+" : ""}
                    ${Math.abs(transaction.amount).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              {filteredTransactions.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No transactions found. Try adjusting your filters.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
