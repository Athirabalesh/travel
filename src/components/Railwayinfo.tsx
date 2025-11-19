import { Train, ExternalLink, Clock, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";


const RailwayInfo = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Railway <span className="text-primary">Booking Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide complete assistance for railway ticket bookings
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-border">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Train className="h-8 w-8 text-primary" />
                <CardTitle className="text-3xl text-foreground">Railway Ticket Assistance</CardTitle>
              </div>
              <CardDescription>
                Let us help you with your railway bookings - hassle-free and reliable
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-foreground">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Round the clock assistance for your bookings
                  </p>
                </div>
                <div className="text-center p-4">
                  <CreditCard className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-foreground">Multiple Options</h3>
                  <p className="text-sm text-muted-foreground">
                    All classes and train types available
                  </p>
                </div>
                <div className="text-center p-4">
                  <Train className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2 text-foreground">Expert Guidance</h3>
                  <p className="text-sm text-muted-foreground">
                    Best routes and timing suggestions
                  </p>
                </div>
              </div>
              
              <div className="bg-muted/50 p-6 rounded-lg">
                <p className="text-center mb-4 text-foreground">
                  For railway ticket bookings, please visit the official booking portal:
                </p>
                <div className="flex justify-center">
                  <Button 
                    size="lg" 
                    className="gap-2"
                    onClick={() => window.open("https://www.irctc.co.in", "_blank")}
                  >
                    Book Railway Tickets <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Need help with booking? Contact us and we'll guide you through the process!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RailwayInfo ;
