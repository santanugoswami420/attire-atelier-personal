import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

interface NavbarProps {
  onAboutClick: () => void;
  onContactClick: () => void;
}

const Navbar = ({ onAboutClick, onContactClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer transition-smooth hover:scale-105"
            onClick={scrollToTop}
          >
            <img 
              src={logo} 
              alt="Attire Atelier Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-3 text-xl font-bold text-royal-maroon">
              Attire Atelier
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={onAboutClick}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={onContactClick}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  onAboutClick();
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium"
              >
                About
              </button>
              <button
                onClick={() => {
                  onContactClick();
                  setIsMenuOpen(false);
                }}
                className="text-left text-foreground hover:text-primary transition-smooth font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;