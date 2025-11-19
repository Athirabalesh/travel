
import Hero from "@/components/Hero";
import TourPackages from "@/components/TourPackages";
import Destinations from "@/components/Destinations";
import RailwayInfo from "@/components/RailwayInfo";
import About from "@/components/AboutUs";
import Contact from "@/components/Contact";


const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
      
        <Hero />
        <TourPackages />
        <RailwayInfo />
        <Destinations />
        <About />
        <Contact />
      </main>
   
    </div>
  );
};

export default Index;
