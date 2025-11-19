import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
   const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            <span className="text-primary">WANDERLUST</span> TRAVELS
          </div>

          <nav className="hidden md:flex items-center gap-8">
           <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/tourpackages" >Tour Packages</Link>
      <Link to="/railwayinfo" >Railway Enquiry</Link>
      <Link to="/Destinations" >Destinations</Link>
      <Link to="/aboutus" >About Us</Link>
      <Link to="/contact" >Contact</Link>
          </nav>

          <Button className="hidden md:flex" size="lg"
          onClick={() => navigate("/contact")}>
            Quick Enquiry
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#packages" className="text-foreground hover:text-primary transition-colors font-medium">
              Tour Packages
            </a>
            <a href="#destinations" className="text-foreground hover:text-primary transition-colors font-medium">
              Best Destinations
            </a>
            <a href="#railwayinfo" className="text-foreground hover:text-primary transition-colors font-medium">
              Railway Enquiry
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About us
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact us
            </a>
            <Button className="w-full">
              Quick Enquiry
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
