import { Shield, Award, Headphones, MapPin, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Trusted Experience",
    description: "Years of expertise in travel and tourism",
  },
  {
    icon: Shield,
    title: "100% Reliable",
    description: "Safe and secure travel arrangements",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round the clock customer assistance",
  },
  {
    icon: MapPin,
    title: "Best Destinations",
    description: "Carefully selected tourist spots",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Professional and knowledgeable tour guides",
  },
  {
    icon: Sparkles,
    title: "Customized Packages",
    description: "Tailored tours to match your preferences",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose <span className="text-primary">Us?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted travel companion for memorable journeys
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
