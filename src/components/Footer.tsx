const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-secondary">WANDERLUST</span>
              <span className="text-foreground"> TRAVELS</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Creating unforgettable travel experiences since 2010. Your journey begins with us.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#packages" className="text-muted-foreground hover:text-secondary transition-colors">Tour Packages</a></li>
              <li><a href="#destinations" className="text-muted-foreground hover:text-secondary transition-colors">Destinations</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-secondary transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Wanderlust Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
