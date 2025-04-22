
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Shield, Eye, EyeOff, Lock, Clock, CheckCircle, XCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface Device {
  id: string;
  name: string;
  browser: string;
  ip: string;
  location: string;
  lastActivity: string;
  isCurrent: boolean;
}

export function SecurityCenter() {
  const { toast } = useToast();
  const [securityScore, setSecurityScore] = useState(65);
  const [showQrCode, setShowQrCode] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  
  const devices: Device[] = [
    {
      id: "dev-1",
      name: "MacBook Pro",
      browser: "Chrome 105",
      ip: "192.168.1.1",
      location: "New York, US",
      lastActivity: "Active now",
      isCurrent: true,
    },
    {
      id: "dev-2",
      name: "iPhone 13",
      browser: "Safari 15",
      ip: "192.168.0.2",
      location: "Miami, US",
      lastActivity: "Yesterday at 12:42 PM",
      isCurrent: false,
    },
    {
      id: "dev-3",
      name: "Windows PC",
      browser: "Firefox 98",
      ip: "192.168.0.3",
      location: "London, UK",
      lastActivity: "May 13, 2023 at 3:24 PM",
      isCurrent: false,
    },
  ];
  
  const handleToggle2FA = () => {
    if (twoFactorEnabled) {
      setTwoFactorEnabled(false);
      toast({
        title: "Two-Factor Authentication Disabled",
        description: "Your account is now less secure. We recommend enabling 2FA for better security.",
      });
    } else {
      setShowQrCode(true);
    }
  };
  
  const handleConfirm2FA = () => {
    setTwoFactorEnabled(true);
    setShowQrCode(false);
    setSecurityScore(Math.min(100, securityScore + 35));
    toast({
      title: "Two-Factor Authentication Enabled",
      description: "Your account is now more secure.",
    });
  };
  
  const handleLogoutDevice = (deviceId: string) => {
    toast({
      title: "Device Logged Out",
      description: `The device has been logged out successfully.`,
    });
  };
  
  const handleChangePassword = () => {
    setSecurityScore(Math.min(100, securityScore + 20));
    setPassword("");
    toast({
      title: "Password Updated",
      description: "Your password has been changed successfully.",
    });
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Security Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="backdrop-blur-md bg-background/40 dark:bg-black/30 border-border/40 lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-primary" />
              Account Security
            </CardTitle>
            <CardDescription>
              Manage your security settings and devices
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Security Score</div>
                <div className="text-sm font-medium">{securityScore}%</div>
              </div>
              <Progress value={securityScore} className="h-2" 
                style={{
                  background: 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                  '--progress-color': securityScore < 50 ? 'rgb(239, 68, 68)' : securityScore < 80 ? 'rgb(245, 158, 11)' : 'rgb(34, 197, 94)',
                } as React.CSSProperties}
              />
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">
                  {securityScore < 50 ? 'Poor' : securityScore < 80 ? 'Good' : 'Excellent'}
                </div>
                <div className="text-xs text-muted-foreground">
                  Updated 2 hours ago
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Security Settings</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 rounded-lg border border-border/40 backdrop-blur-sm bg-background/10 dark:bg-black/10">
                  <div>
                    <div className="font-medium">Two-Factor Authentication</div>
                    <div className="text-sm text-muted-foreground">Additional security for your account</div>
                  </div>
                  <Switch 
                    checked={twoFactorEnabled} 
                    onCheckedChange={handleToggle2FA}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg border border-border/40 backdrop-blur-sm bg-background/10 dark:bg-black/10">
                  <div>
                    <div className="font-medium">Password</div>
                    <div className="text-sm text-muted-foreground">Last changed 30 days ago</div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">Change</Button>
                    </DialogTrigger>
                    <DialogContent className="backdrop-blur-xl dark:bg-black/90 border-border/40">
                      <DialogHeader>
                        <DialogTitle>Change Password</DialogTitle>
                        <DialogDescription>
                          Create a strong password with a mix of letters, numbers, and symbols.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <label htmlFor="current-password" className="text-sm font-medium block mb-1">
                            Current Password
                          </label>
                          <div className="relative">
                            <Input 
                              id="current-password" 
                              type={passwordVisible ? "text" : "password"}
                              placeholder="Enter current password"
                              className="pr-10 bg-background/40 dark:bg-black/40 border-border/40"
                            />
                            <button 
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                              onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                              {passwordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="new-password" className="text-sm font-medium block mb-1">
                            New Password
                          </label>
                          <div className="relative">
                            <Input 
                              id="new-password" 
                              type={passwordVisible ? "text" : "password"}
                              placeholder="Enter new password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="pr-10 bg-background/40 dark:bg-black/40 border-border/40"
                            />
                            <button 
                              type="button"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                              onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                              {passwordVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="confirm-password" className="text-sm font-medium block mb-1">
                            Confirm New Password
                          </label>
                          <Input 
                            id="confirm-password" 
                            type={passwordVisible ? "text" : "password"}
                            placeholder="Confirm new password"
                            className="bg-background/40 dark:bg-black/40 border-border/40"
                          />
                        </div>
                        
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium">Password Strength</h4>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4].map((segment) => (
                              <div 
                                key={segment}
                                className={`h-1.5 flex-1 rounded-full ${
                                  password.length > 0 && segment === 1 ? "bg-red-500" : 
                                  password.length > 5 && segment === 2 ? "bg-orange-500" : 
                                  password.length > 8 && segment === 3 ? "bg-yellow-500" : 
                                  password.length > 12 && segment === 4 ? "bg-green-500" : 
                                  "bg-muted/30"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-xs text-muted-foreground">
                            {password.length === 0 ? "Enter a password" : 
                             password.length < 6 ? "Weak password" : 
                             password.length < 9 ? "Fair password" :
                             password.length < 13 ? "Good password" :
                             "Strong password"}
                          </p>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline">Cancel</Button>
                        <Button onClick={handleChangePassword}>Save Changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="flex justify-between items-center p-3 rounded-lg border border-border/40 backdrop-blur-sm bg-background/10 dark:bg-black/10">
                  <div>
                    <div className="font-medium">Login Notifications</div>
                    <div className="text-sm text-muted-foreground">Get notified of new logins to your account</div>
                  </div>
                  <Switch 
                    defaultChecked={true}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="backdrop-blur-md bg-background/40 dark:bg-black/30 border-border/40">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="mr-2 h-5 w-5 text-primary" />
              Two-Factor Authentication
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {twoFactorEnabled ? (
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-green-500/10 text-green-500">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium">2FA is Enabled</h3>
                <p className="text-sm text-muted-foreground">
                  Your account is protected with two-factor authentication.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-red-500/30 text-red-500 hover:bg-red-500/10 hover:text-red-400"
                  onClick={handleToggle2FA}
                >
                  Disable 2FA
                </Button>
              </div>
            ) : showQrCode ? (
              <div className="text-center space-y-4">
                <div className="mx-auto h-48 w-48 border border-border/60 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-white p-2">
                    <img 
                      src="data:image/png;base64,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"
                      alt="QR Code for 2FA"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 animate-pulse-glow bg-transparent"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Scan this QR code with your authenticator app
                </p>
                <div className="flex flex-col space-y-2">
                  <Input 
                    placeholder="Enter 6-digit code" 
                    className="text-center bg-background/40 dark:bg-black/40 border-border/40"
                  />
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setShowQrCode(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="flex-1"
                      onClick={handleConfirm2FA}
                    >
                      Confirm
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-yellow-500/10 text-yellow-500">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-medium">2FA is Disabled</h3>
                <p className="text-sm text-muted-foreground">
                  Protect your account by enabling two-factor authentication.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleToggle2FA}
                >
                  Enable 2FA
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Card className="backdrop-blur-md bg-background/40 dark:bg-black/30 border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="mr-2 h-5 w-5 text-primary" />
            Connected Devices
          </CardTitle>
          <CardDescription>
            Devices that are currently logged into your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border-border/40 overflow-hidden">
            <Table>
              <TableHeader className="bg-muted/30">
                <TableRow>
                  <TableHead>Device</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Last Activity</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {devices.map((device) => (
                  <TableRow key={device.id} className="backdrop-blur-sm border-border/40">
                    <TableCell>
                      <div>
                        <div className="font-medium flex items-center">
                          {device.name}
                          {device.isCurrent && (
                            <Badge className="ml-2 bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/30">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">{device.browser}</div>
                      </div>
                    </TableCell>
                    <TableCell>{device.location}</TableCell>
                    <TableCell>{device.ip}</TableCell>
                    <TableCell>
                      <div className={device.isCurrent ? "text-green-500" : ""}>
                        {device.lastActivity}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      {!device.isCurrent && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-red-500/30 text-red-500 hover:bg-red-500/10 hover:text-red-400"
                          onClick={() => handleLogoutDevice(device.id)}
                        >
                          Log Out
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline">Log Out All Devices</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
