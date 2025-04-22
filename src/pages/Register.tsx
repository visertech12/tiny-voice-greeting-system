
import { PageLayout } from "@/components/layout/page-layout";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Eye, EyeOff, User, Mail, Lock, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registerError, setRegisterError] = useState("");
  
  // Password strength checker
  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    
    let strength = 0;
    
    // Length check
    if (pass.length >= 8) strength += 25;
    
    // Contains lowercase
    if (/[a-z]/.test(pass)) strength += 25;
    
    // Contains uppercase
    if (/[A-Z]/.test(pass)) strength += 25;
    
    // Contains number or special char
    if (/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass)) strength += 25;
    
    return strength;
  };
  
  const passwordStrength = getPasswordStrength(password);
  
  const getPasswordStrengthLabel = () => {
    if (passwordStrength < 50) return "Weak";
    if (passwordStrength < 75) return "Medium";
    return "Strong";
  };
  
  const getPasswordStrengthColor = () => {
    if (passwordStrength < 50) return "bg-red-500";
    if (passwordStrength < 75) return "bg-yellow-500";
    return "bg-green-500";
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setRegisterError("Passwords do not match");
      return;
    }
    
    if (passwordStrength < 50) {
      setRegisterError("Please choose a stronger password");
      return;
    }
    
    if (!acceptTerms) {
      setRegisterError("You must accept the terms and conditions");
      return;
    }
    
    setIsSubmitting(true);
    setRegisterError("");
    
    // Simulating a registration request
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Implement actual registration logic here
      // For now, just redirect to login on successful registration
      window.location.href = "/login";
    }, 1500);
  };

  return (
    <PageLayout>
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Create your account</h1>
            <p className="mt-2 text-muted-foreground">
              Join WealthNexus and start your investment journey
            </p>
          </div>
          
          <div className="glass-card p-8">
            {registerError && (
              <div className="mb-4 p-4 bg-destructive/10 border border-destructive/30 text-destructive rounded-md text-sm">
                {registerError}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="John Doe"
                    className="pl-10"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="name@example.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="username" className="block text-sm font-medium">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    placeholder="john_doe"
                    className="pl-10"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    placeholder="••••••••"
                    className="pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
                {password && (
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Password strength:</span>
                      <span className={`font-medium ${
                        passwordStrength < 50 ? 'text-red-500' : 
                        passwordStrength < 75 ? 'text-yellow-500' : 
                        'text-green-500'
                      }`}>
                        {getPasswordStrengthLabel()}
                      </span>
                    </div>
                    <Progress value={passwordStrength} className="h-1" indicatorClassName={getPasswordStrengthColor()} />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                      <div className="flex items-center text-xs">
                        {password.length >= 8 ? 
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" /> : 
                          <XCircle className="h-3 w-3 text-red-500 mr-1" />
                        }
                        <span>8+ characters</span>
                      </div>
                      <div className="flex items-center text-xs">
                        {/[a-z]/.test(password) ? 
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" /> : 
                          <XCircle className="h-3 w-3 text-red-500 mr-1" />
                        }
                        <span>Lowercase letters</span>
                      </div>
                      <div className="flex items-center text-xs">
                        {/[A-Z]/.test(password) ? 
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" /> : 
                          <XCircle className="h-3 w-3 text-red-500 mr-1" />
                        }
                        <span>Uppercase letters</span>
                      </div>
                      <div className="flex items-center text-xs">
                        {/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password) ? 
                          <CheckCircle className="h-3 w-3 text-green-500 mr-1" /> : 
                          <XCircle className="h-3 w-3 text-red-500 mr-1" />
                        }
                        <span>Numbers or symbols</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="space-y-1">
                <label htmlFor="confirm-password" className="block text-sm font-medium">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="confirm-password"
                    name="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    placeholder="••••••••"
                    className="pl-10"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-xs text-red-500 mt-1 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Passwords do not match
                  </p>
                )}
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Checkbox 
                    id="terms" 
                    checked={acceptTerms} 
                    onCheckedChange={(checked) => setAcceptTerms(checked as boolean)} 
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-muted-foreground">
                    I agree to the{" "}
                    <a href="/terms" className="text-primary hover:text-primary/90">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-primary hover:text-primary/90">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>
              
              <div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating account..." : "Create account"}
                </Button>
              </div>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="w-full">
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-primary hover:text-primary/90">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
