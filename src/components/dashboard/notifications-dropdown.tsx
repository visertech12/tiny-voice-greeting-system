
import { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: "system" | "transaction" | "security";
}

export function NotificationsDropdown() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "notif-1",
      title: "Investment Complete",
      description: "Your Gold Plan investment of $1,000 has been processed successfully.",
      time: "Just now",
      read: false,
      type: "transaction"
    },
    {
      id: "notif-2",
      title: "Withdrawal Pending",
      description: "Your withdrawal request of $300 is pending approval.",
      time: "2 hours ago",
      read: false,
      type: "transaction"
    },
    {
      id: "notif-3",
      title: "Security Alert",
      description: "New login detected from New York, USA.",
      time: "Yesterday",
      read: false,
      type: "security"
    },
    {
      id: "notif-4",
      title: "Earnings Update",
      description: "You've earned $25.45 from your investments today.",
      time: "2 days ago",
      read: true,
      type: "transaction"
    },
    {
      id: "notif-5",
      title: "System Maintenance",
      description: "Scheduled maintenance on April 25th, 2025 from 2-4 AM UTC.",
      time: "3 days ago",
      read: true,
      type: "system"
    }
  ]);
  
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };
  
  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };
  
  const getIcon = (type: Notification["type"]) => {
    switch (type) {
      case "transaction":
        return <span className="h-2 w-2 rounded-full bg-blue-500 mr-2"></span>;
      case "security":
        return <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>;
      case "system":
        return <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>;
      default:
        return null;
    }
  };
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80" align="end" forceMount>
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-auto p-0 text-xs text-primary"
              onClick={markAllAsRead}
            >
              Mark all as read
            </Button>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="max-h-[300px] overflow-y-auto">
          <DropdownMenuGroup>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <DropdownMenuItem 
                  key={notification.id} 
                  className={`cursor-pointer flex flex-col items-start py-2 px-4 ${!notification.read ? 'bg-muted/50' : ''}`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex w-full">
                    <div className="flex items-center flex-1">
                      {getIcon(notification.type)}
                      <span className="font-medium">{notification.title}</span>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{notification.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{notification.description}</p>
                </DropdownMenuItem>
              ))
            ) : (
              <div className="py-4 text-center text-muted-foreground">
                No notifications
              </div>
            )}
          </DropdownMenuGroup>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer justify-center text-center text-primary">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
