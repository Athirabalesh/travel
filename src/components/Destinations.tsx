
import goaImage from "@/assets/destinations/goa.jpg";
import karnatakaImage from "@/assets/destinations/karnataka.jpg";
import keralaImage from "@/assets/destinations/kerala.jpg";
import tamilnaduImage from "@/assets/destinations/tamilnadu.jpg";
import templeImage from "@/assets/destinations/temple.jpg";



const destinations = [
   {
    name: "Kerala",
    image: keralaImage,
  },
  {
    name: "Goa",
    image: goaImage,
  },
  {
    name: "Karnataka",
    image: karnatakaImage,
  },
 
  {
    name: "TamilNadu",
    image: tamilnaduImage,
  },
  {
    name: "Temple",
    image: templeImage,
  },
];

const Destinations = () => {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Popular <span className="text-primary">Destinations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing places around the world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
