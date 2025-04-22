
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Paperclip, 
  Send, 
  User 
} from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Ticket {
  id: string;
  subject: string;
  category: string;
  status: "open" | "answered" | "closed";
  lastUpdated: string;
  messages: TicketMessage[];
}

interface TicketMessage {
  id: string;
  isAdmin: boolean;
  message: string;
  timestamp: string;
  attachments?: string[];
}

export function SupportCenter() {
  const { toast } = useToast();
  const [activeTicket, setActiveTicket] = useState<Ticket | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newMessage, setNewMessage] = useState("");
  
  const tickets: Ticket[] = [
    {
      id: "TKT-78901",
      subject: "Withdrawal Processing Time",
      category: "Withdrawals",
      status: "answered",
      lastUpdated: "2 hours ago",
      messages: [
        {
          id: "msg-1",
          isAdmin: false,
          message: "My withdrawal has been pending for 3 days now. How long does it usually take to process?",
          timestamp: "May 18, 2023 at 10:24 AM",
        },
        {
          id: "msg-2",
          isAdmin: true,
          message: "Hello, thank you for your patience. Withdrawals typically take 1-2 business days to process. I've checked your withdrawal request and it's currently in the final verification stage. It should be completed within the next 24 hours.",
          timestamp: "May 18, 2023 at 11:45 AM",
        },
      ],
    },
    {
      id: "TKT-78902",
      subject: "2FA Reset Request",
      category: "Security",
      status: "open",
      lastUpdated: "5 hours ago",
      messages: [
        {
          id: "msg-1",
          isAdmin: false,
          message: "I lost my phone with Google Authenticator and need to reset my 2FA. Please help.",
          timestamp: "May 17, 2023 at 3:15 PM",
          attachments: ["id_verification.jpg"],
        },
      ],
    },
    {
      id: "TKT-78903",
      subject: "Investment Plan Inquiry",
      category: "Investments",
      status: "closed",
      lastUpdated: "2 days ago",
      messages: [
        {
          id: "msg-1",
          isAdmin: false,
          message: "Are there any minimum lock periods for the Diamond investment plan?",
          timestamp: "May 15, 2023 at 9:30 AM",
        },
        {
          id: "msg-2",
          isAdmin: true,
          message: "The Diamond investment plan has a minimum lock period of 30 days. After this period, you can withdraw your funds at any time without penalty.",
          timestamp: "May 15, 2023 at 10:15 AM",
        },
        {
          id: "msg-3",
          isAdmin: false,
          message: "Thank you for the information. That's exactly what I needed to know.",
          timestamp: "May 15, 2023 at 11:02 AM",
        },
      ],
    },
  ];
  
  const filteredTickets = tickets.filter(ticket => 
    ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.id.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleCreateTicket = () => {
    toast({
      title: "Ticket Created",
      description: "Your support ticket has been submitted successfully.",
    });
  };
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    toast({
      title: "Message Sent",
      description: "Your message has been sent to support.",
    });
    
    setNewMessage("");
  };
  
  const statusColors = {
    open: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    answered: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
    closed: "bg-green-500/10 text-green-500 border-green-500/30",
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Support Center</h2>
          <p className="text-muted-foreground">Get help with your account and investments</p>
        </div>
        
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search tickets..." 
              className="pl-9 bg-background/40 dark:bg-black/40 border-border/40 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Ticket
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px] backdrop-blur-xl bg-background/80 dark:bg-black/80 border-border/40">
              <DialogHeader>
                <DialogTitle>Create New Support Ticket</DialogTitle>
                <DialogDescription>
                  Submit a new ticket to our support team.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select>
                    <SelectTrigger className="bg-background/40 dark:bg-black/40 border-border/40">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="backdrop-blur-xl bg-background/90 dark:bg-black/90">
                      <SelectItem value="deposits">Deposits</SelectItem>
                      <SelectItem value="withdrawals">Withdrawals</SelectItem>
                      <SelectItem value="investments">Investments</SelectItem>
                      <SelectItem value="security">Security</SelectItem>
                      <SelectItem value="account">Account</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="Brief description of your issue" className="bg-background/40 dark:bg-black/40 border-border/40" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Describe your issue in detail..." 
                    className="min-h-[120px] bg-background/40 dark:bg-black/40 border-border/40"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Attachments (optional)</label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center border-border/40 bg-background/30 dark:bg-black/30 transition-all hover:bg-background/40 dark:hover:bg-black/40 cursor-pointer">
                    <Paperclip className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Drag & drop files here or <span className="text-primary">browse</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Max file size: 5MB
                    </p>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button onClick={handleCreateTicket}>Submit Ticket</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="backdrop-blur-md bg-background/40 dark:bg-black/30 border-border/40 lg:col-span-3 xl:col-span-2">
          <CardHeader>
            <CardTitle>Support Tickets</CardTitle>
            <CardDescription>
              View and manage your support requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="open">Open</TabsTrigger>
                  <TabsTrigger value="answered">Answered</TabsTrigger>
                  <TabsTrigger value="closed">Closed</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="m-0">
                <div className="rounded-md border-border/40 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/30">
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTickets.length > 0 ? (
                        filteredTickets.map((ticket) => (
                          <TableRow 
                            key={ticket.id} 
                            className="cursor-pointer backdrop-blur-sm border-border/40 hover:bg-background/10 dark:hover:bg-black/20 transition-colors"
                            onClick={() => setActiveTicket(ticket)}
                          >
                            <TableCell className="font-medium">{ticket.id}</TableCell>
                            <TableCell>{ticket.subject}</TableCell>
                            <TableCell>{ticket.category}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className={cn("capitalize", statusColors[ticket.status])}>
                                {ticket.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{ticket.lastUpdated}</TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveTicket(ticket);
                                }}
                              >
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            {searchQuery ? "No tickets match your search." : "No tickets found."}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="open" className="m-0">
                <div className="rounded-md border-border/40 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/30">
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTickets.filter(t => t.status === "open").length > 0 ? (
                        filteredTickets
                          .filter(t => t.status === "open")
                          .map((ticket) => (
                            <TableRow 
                              key={ticket.id} 
                              className="cursor-pointer backdrop-blur-sm border-border/40 hover:bg-background/10 dark:hover:bg-black/20 transition-colors"
                              onClick={() => setActiveTicket(ticket)}
                            >
                              <TableCell className="font-medium">{ticket.id}</TableCell>
                              <TableCell>{ticket.subject}</TableCell>
                              <TableCell>{ticket.category}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className={cn("capitalize", statusColors[ticket.status])}>
                                  {ticket.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{ticket.lastUpdated}</TableCell>
                              <TableCell className="text-right">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveTicket(ticket);
                                  }}
                                >
                                  View
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            No open tickets found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="answered" className="m-0">
                {/* Similar structure as "all" tab but filtered for answered tickets */}
                <div className="rounded-md border-border/40 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/30">
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTickets.filter(t => t.status === "answered").length > 0 ? (
                        filteredTickets
                          .filter(t => t.status === "answered")
                          .map((ticket) => (
                            <TableRow 
                              key={ticket.id} 
                              className="cursor-pointer backdrop-blur-sm border-border/40 hover:bg-background/10 dark:hover:bg-black/20 transition-colors"
                              onClick={() => setActiveTicket(ticket)}
                            >
                              <TableCell className="font-medium">{ticket.id}</TableCell>
                              <TableCell>{ticket.subject}</TableCell>
                              <TableCell>{ticket.category}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className={cn("capitalize", statusColors[ticket.status])}>
                                  {ticket.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{ticket.lastUpdated}</TableCell>
                              <TableCell className="text-right">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveTicket(ticket);
                                  }}
                                >
                                  View
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            No answered tickets found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              
              <TabsContent value="closed" className="m-0">
                {/* Similar structure as "all" tab but filtered for closed tickets */}
                <div className="rounded-md border-border/40 overflow-hidden">
                  <Table>
                    <TableHeader className="bg-muted/30">
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTickets.filter(t => t.status === "closed").length > 0 ? (
                        filteredTickets
                          .filter(t => t.status === "closed")
                          .map((ticket) => (
                            <TableRow 
                              key={ticket.id} 
                              className="cursor-pointer backdrop-blur-sm border-border/40 hover:bg-background/10 dark:hover:bg-black/20 transition-colors"
                              onClick={() => setActiveTicket(ticket)}
                            >
                              <TableCell className="font-medium">{ticket.id}</TableCell>
                              <TableCell>{ticket.subject}</TableCell>
                              <TableCell>{ticket.category}</TableCell>
                              <TableCell>
                                <Badge variant="outline" className={cn("capitalize", statusColors[ticket.status])}>
                                  {ticket.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{ticket.lastUpdated}</TableCell>
                              <TableCell className="text-right">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveTicket(ticket);
                                  }}
                                >
                                  View
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            No closed tickets found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="backdrop-blur-md bg-background/40 dark:bg-black/30 border-border/40 lg:col-span-3 xl:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-primary" />
              Ticket Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            {activeTicket ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{activeTicket.subject}</h3>
                      <div className="text-sm text-muted-foreground">
                        {activeTicket.id} • {activeTicket.category}
                      </div>
                    </div>
                    <Badge variant="outline" className={cn("capitalize", statusColors[activeTicket.status])}>
                      {activeTicket.status}
                    </Badge>
                  </div>
                </div>
                
                <div className="border-t border-border/30 pt-4">
                  <h4 className="text-sm font-medium mb-4 flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    Conversation History
                  </h4>
                  
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-none">
                    {activeTicket.messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={cn(
                          "relative p-4 rounded-lg",
                          "animate-fade-in",
                          message.isAdmin 
                            ? "bg-primary/10 border-primary/30 border ml-4" 
                            : "bg-background/40 dark:bg-black/40 border-border/40 border mr-4"
                        )}
                      >
                        <div className="flex items-center mb-2">
                          <div className={cn(
                            "h-8 w-8 rounded-full flex items-center justify-center text-white text-sm mr-2",
                            message.isAdmin ? "bg-primary" : "bg-muted"
                          )}>
                            {message.isAdmin ? "S" : "Y"}
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              {message.isAdmin ? "Support Agent" : "You"}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {message.timestamp}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-sm ml-10">
                          {message.message}
                        </div>
                        
                        {message.attachments && message.attachments.length > 0 && (
                          <div className="ml-10 mt-2 flex gap-2">
                            {message.attachments.map((attachment, index) => (
                              <div 
                                key={index}
                                className="border border-border/40 rounded p-2 text-xs flex items-center bg-background/20 dark:bg-black/20"
                              >
                                <Paperclip className="h-3 w-3 mr-1 text-muted-foreground" />
                                {attachment}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {activeTicket.status !== "closed" && (
                  <div className="space-y-2 pt-2">
                    <Textarea 
                      placeholder="Type your reply..." 
                      className="min-h-[100px] bg-background/40 dark:bg-black/40 border-border/40"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Paperclip className="h-4 w-4" />
                        Attach
                      </Button>
                      <Button size="sm" className="gap-1" onClick={handleSendMessage}>
                        <Send className="h-4 w-4" />
                        Send
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <MessageSquare className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                <h3 className="font-medium text-muted-foreground">No ticket selected</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Select a ticket to view its details
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="mt-4">
                      <Plus className="mr-2 h-4 w-4" />
                      Create New Ticket
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[525px] backdrop-blur-xl bg-background/80 dark:bg-black/80 border-border/40">
                    <DialogHeader>
                      <DialogTitle>Create New Support Ticket</DialogTitle>
                      <DialogDescription>
                        Submit a new ticket to our support team.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Category</label>
                        <Select>
                          <SelectTrigger className="bg-background/40 dark:bg-black/40 border-border/40">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent className="backdrop-blur-xl bg-background/90 dark:bg-black/90">
                            <SelectItem value="deposits">Deposits</SelectItem>
                            <SelectItem value="withdrawals">Withdrawals</SelectItem>
                            <SelectItem value="investments">Investments</SelectItem>
                            <SelectItem value="security">Security</SelectItem>
                            <SelectItem value="account">Account</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Subject</label>
                        <Input placeholder="Brief description of your issue" className="bg-background/40 dark:bg-black/40 border-border/40" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Message</label>
                        <Textarea 
                          placeholder="Describe your issue in detail..." 
                          className="min-h-[120px] bg-background/40 dark:bg-black/40 border-border/40"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Attachments (optional)</label>
                        <div className="border-2 border-dashed rounded-lg p-6 text-center border-border/40 bg-background/30 dark:bg-black/30 transition-all hover:bg-background/40 dark:hover:bg-black/40 cursor-pointer">
                          <Paperclip className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Drag & drop files here or <span className="text-primary">browse</span>
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Max file size: 5MB
                          </p>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button onClick={handleCreateTicket}>Submit Ticket</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
