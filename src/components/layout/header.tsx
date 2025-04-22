
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-xs">WN</span>
            </div>
            <span className="font-bold text-xl tracking-tight">WealthNexus</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
            <Link to="/plans" className="text-foreground/80 hover:text-foreground transition-colors">Plans</Link>
            <Link to="/affiliate" className="text-foreground/80 hover:text-foreground transition-colors">Affiliate</Link>
            <Link to="/faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</Link>
          </nav>
        )}

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/login">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="hidden md:inline-flex">
              Get Started
            </Button>
          </Link>

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
            <Link to="/" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>About</Link>
            <Link to="/plans" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>Plans</Link>
            <Link to="/affiliate" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>Affiliate</Link>
            <Link to="/faq" className="py-2 text-foreground/80 hover:text-foreground transition-colors" onClick={toggleMenu}>FAQ</Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link to="/login" className="w-full" onClick={toggleMenu}>
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/register" className="w-full" onClick={toggleMenu}>
                <Button size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
