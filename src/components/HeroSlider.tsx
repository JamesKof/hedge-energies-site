import { Button } from "@/components/ui/button";
import { ArrowRight, Sun, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@/assets/hero-solar.jpg";
import heroImage2 from "@/assets/hero-slide-2.jpg";
import heroImage3 from "@/assets/hero-slide-3.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const HeroSlider = () => {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slides = [
    {
      image: heroImage1,
      badge: "Clean Energy Solutions",
      title: "Powering Ghana's Sustainable Future",
      description: "Reduce your carbon footprint, lower energy costs, and embrace a cleaner, greener tomorrow with our innovative solar solutions.",
    },
    {
      image: heroImage2,
      badge: "Residential Solar",
      title: "Transform Your Home with Solar Power",
      description: "Join hundreds of satisfied homeowners who have made the switch to clean, renewable energy and are saving on their electricity bills.",
    },
    {
      image: heroImage3,
      badge: "Commercial Solutions",
      title: "Scale Your Business with Solar",
      description: "Enterprise-grade solar installations designed to reduce operational costs and demonstrate your commitment to sustainability.",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-screen absolute inset-0"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-screen">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.4)), url(${slide.image})`,
                }}
              />
              
              <div className="container mx-auto px-4 z-10 relative h-full flex items-center">
                <div className="max-w-3xl">
                  <div className="flex items-center space-x-2 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                    <Sun className="w-6 h-6 text-primary animate-pulse-slow" />
                    <span className="text-primary font-semibold text-lg">{slide.badge}</span>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                    <Button variant="hero" size="lg" onClick={scrollToContact} className="transform hover:scale-105 transition-all duration-300">
                      Get Free Quote
                      <ArrowRight className="ml-2" />
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground backdrop-blur-sm">
                      <Zap className="mr-2" />
                      Our Solutions
                    </Button>
                  </div>
                  
                  {index === 0 && (
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                      <div className="text-white transform hover:scale-110 transition-smooth">
                        <div className="text-3xl font-bold text-primary mb-1">500+</div>
                        <div className="text-sm text-gray-300">Installations</div>
                      </div>
                      <div className="text-white transform hover:scale-110 transition-smooth">
                        <div className="text-3xl font-bold text-primary mb-1">98%</div>
                        <div className="text-sm text-gray-300">Client Satisfaction</div>
                      </div>
                      <div className="text-white transform hover:scale-110 transition-smooth">
                        <div className="text-3xl font-bold text-primary mb-1">10+</div>
                        <div className="text-sm text-gray-300">Years Experience</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white" />
        <CarouselNext className="right-4 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 text-white" />
      </Carousel>
    </section>
  );
};

export default HeroSlider;
