import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sun className="w-6 h-6 text-solar-gold" />
            <span className="text-solar-gold font-semibold">Clean Energy Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            Powering Ghana's Sustainable Future
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Reduce your carbon footprint, lower energy costs, and embrace a cleaner, greener tomorrow with our innovative solar solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-300">
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Get Free Quote
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground">
              <Zap className="mr-2" />
              Our Solutions
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <div className="text-white">
              <div className="text-3xl font-bold text-solar-gold mb-1">500+</div>
              <div className="text-sm text-gray-300">Installations</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-solar-gold mb-1">98%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold text-solar-gold mb-1">10+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
