import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";


const packages = [
  {
    title: "Domestic Delights",
    description: "Explore the beauty of our homeland",
    duration: "3-7 Days",
    groupSize: "2-15 People",
    highlights: ["Heritage Sites", "Hill Stations", "Beaches", "Cultural Tours"],
  },
 
  {
    title: "Pilgrimage Tours",
    description: "Spiritual journeys to sacred places",
    duration: "4-10 Days",
    groupSize: "10-50 People",
    highlights: ["Temple Tours", "Holy Cities", "Group Packages", "Guided Tours"],
  },
  {
    title: "Adventure Trips",
    description: "Thrilling experiences for the brave",
    duration: "3-8 Days",
    groupSize: "4-12 People",
    highlights: ["Trekking", "Wildlife Safari", "Water Sports", "Camping"],
  },
  
  {
    title: "Family Holidays",
    description: "Fun-filled trips for the whole family",
    duration: "4-7 Days",
    groupSize: "4-8 People",
    highlights: ["Kid-Friendly", "Theme Parks", "Resorts", "Entertainment"],
  },
];

const TourPackages = () => {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Carefully curated packages for every type of traveler
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border">
              <CardHeader className="bg-muted/30">
                <CardTitle className="text-2xl text-foreground">{pkg.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">Highlights:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <MapPin className="h-3 w-3 mt-1 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
             
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;

