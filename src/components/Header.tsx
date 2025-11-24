import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import hedgeLogo from "@/assets/hedge-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/partnership", label: "Partnership" },
    { path: "/solutions", label: "Solutions" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={hedgeLogo} alt="Hedge Energy Solutions" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-foreground hover:text-primary transition-smooth font-medium ${
                  location.pathname === link.path ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/services">
              <Button variant="hero" size="sm" className="shadow-medium hover:shadow-strong">
                Book Service
              </Button>
            </Link>
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
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block w-full text-left text-foreground hover:text-primary transition-smooth py-2 font-medium ${
                  location.pathname === link.path ? "text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/services" onClick={closeMenu}>
              <Button variant="hero" className="w-full">
                Book Service
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
