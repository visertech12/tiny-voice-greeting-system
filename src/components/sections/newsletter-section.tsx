
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section id="newsletter" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-card-gradient opacity-50"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-secondary/10 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Subscribe to our newsletter for the latest investment opportunities, platform updates, and market insights.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-background flex-grow"
              />
              <Button className="shrink-0">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe anytime. Your email address is safe with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
