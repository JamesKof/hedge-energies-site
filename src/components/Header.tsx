import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import hedgeLogo from "@/assets/hedge-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src={hedgeLogo} alt="Hedge Energy Solutions" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("home")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("partnership")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Partnership
            </button>
            <button onClick={() => scrollToSection("solutions")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Solutions
            </button>
            <button onClick={() => scrollToSection("products-catalog")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-smooth font-medium">
              Contact
            </button>
            <Button variant="hero" size="sm" onClick={() => scrollToSection("contact")} className="shadow-medium hover:shadow-strong">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in-down">
            <button onClick={() => scrollToSection("home")} className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2 font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2 font-medium">
              About
            </button>
            <button onClick={() => scrollToSection("partnership")} className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2 font-medium">
              Partnership
            </button>
            <button onClick={() => scrollToSection("solutions")} className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2 font-medium">
              Solutions
            </button>
            <button onClick={() => scrollToSection("products-catalog")} className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2 font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2 font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left text-foreground hover:text-primary transition-smooth py-2 font-medium">
              Contact
            </button>
            <Button variant="hero" className="w-full" onClick={() => scrollToSection("contact")}>
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
