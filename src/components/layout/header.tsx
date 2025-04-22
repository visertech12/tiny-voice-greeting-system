
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
            <span className="text-white font-bold text-xs">WN</span>
          </div>
          <span className="font-bold text-xl tracking-tight">WealthNexus</span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors">Home</a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="#plans" className="text-foreground/80 hover:text-foreground transition-colors">Plans</a>
            <a href="#affiliate" className="text-foreground/80 hover:text-foreground transition-colors">Affiliate</a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
          </nav>
        )}

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="hidden md:inline-flex">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          {isMobile && (
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg md:hidden">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#about" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>About</a>
            <a href="#plans" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>Plans</a>
            <a href="#affiliate" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>Affiliate</a>
            <a href="#faq" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>FAQ</a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
