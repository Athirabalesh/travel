import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[70vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
        }}
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Memorable Experiences
        </h1>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-lg px-10 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            onClick={() => scrollToSection("contact")}
          >
            Quick Enquiry
          </Button>
          <Button 
            size="lg" 
            className="text-lg px-10 py-6 bg-white text-foreground hover:bg-white/90 font-semibold border-2 border-white"
            onClick={() => scrollToSection("packages")}
          >
            View Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
