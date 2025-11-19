import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About <span className="text-primary">Us</span>
            </h2>
          </div>
          
          <div className="space-y-8 text-foreground">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are a passionate team of travel enthusiasts dedicated to creating unforgettable journeys 
                for our clients. With years of experience in the tourism industry, we specialize in crafting 
                personalized tour packages that cater to every type of traveler—from adventurers and culture 
                seekers to families and honeymooners.
              </p>
            </div>

            <div className="bg-muted/50 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                To make travel accessible, enjoyable, and memorable for everyone. We believe that every journey 
                should be more than just a trip—it should be an experience that enriches your life, broadens 
                your horizons, and creates lasting memories.
              </p>
              <p className="text-base leading-relaxed mt-4 text-muted-foreground">
                From exotic international destinations to hidden gems in our own country, from spiritual 
                pilgrimages to adrenaline-pumping adventures—we handle it all. We also provide complete 
                assistance with railway ticket bookings, making your travel planning seamless and stress-free.
              </p>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="text-lg px-8"
              onClick={() => navigate("/contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
