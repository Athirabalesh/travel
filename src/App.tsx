import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Destinations from "./components/Destinations";
import TourPackages from "./components/TourPackages";
import AboutUs from "./components/AboutUs";
import RailwayInfo from "./components/RailwayInfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />  
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tourpackages" element={<TourPackages />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/railwayInfo" element={<RailwayInfo />} />
           <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />  
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
