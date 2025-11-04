import { Button } from "@/components/ui/button";
import { Menu, Tv } from "lucide-react";
import { useState } from "react";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center glow-primary">
              <Tv className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent gradient-primary">
              IKZFC Space
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("streams")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium"
            >
              Streams
            </button>
            <button
              onClick={() => scrollToSection("backup")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium"
            >
              Backup
            </button>
            <button
              onClick={() => scrollToSection("shop")}
              className="text-foreground/80 hover:text-primary transition-smooth font-medium"
            >
              Shop IPTV
            </button>
            <Button
              onClick={() => scrollToSection("shop")}
              className="gradient-primary hover:glow-primary transition-smooth font-semibold"
            >
              S'abonner
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("streams")}
                className="text-left text-foreground/80 hover:text-primary transition-smooth font-medium py-2"
              >
                Streams
              </button>
              <button
                onClick={() => scrollToSection("backup")}
                className="text-left text-foreground/80 hover:text-primary transition-smooth font-medium py-2"
              >
                Backup
              </button>
              <button
                onClick={() => scrollToSection("shop")}
                className="text-left text-foreground/80 hover:text-primary transition-smooth font-medium py-2"
              >
                Shop IPTV
              </button>
              <Button
                onClick={() => scrollToSection("shop")}
                className="gradient-primary hover:glow-primary transition-smooth font-semibold"
              >
                S'abonner
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
