import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sun, Battery, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroSolar from "@/assets/hero-solar.jpg";
import commercialSolar from "@/assets/commercial-solar.jpg";
import energyStorage from "@/assets/energy-storage.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      
      {/* Quick Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Installations</div>
            </Card>
            <Card className="p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">10MW+</div>
              <div className="text-muted-foreground">Total Capacity</div>
            </Card>
            <Card className="p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </Card>
            <Card className="p-8 text-center hover:shadow-glow transition-all duration-300">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Leading Solar Solutions in Ghana</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Hedge Energy Solutions is Ghana's premier provider of renewable energy systems, 
                specializing in solar photovoltaic installations, energy storage, and comprehensive 
                maintenance services.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With over a decade of experience and partnerships with global leaders like JinkoSolar, 
                we deliver cutting-edge solutions that power homes, businesses, and communities across Ghana.
              </p>
              <Link to="/about">
                <Button size="lg" className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="animate-fade-in">
              <img 
                src={heroSolar} 
                alt="Solar Installation" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive renewable energy solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Sun className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Residential Solar</h3>
              <p className="text-muted-foreground mb-4">
                Complete home solar systems with battery backup and monitoring
              </p>
              <Link to="/solutions" className="text-primary hover:underline flex items-center">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Commercial Solar</h3>
              <p className="text-muted-foreground mb-4">
                Large-scale installations for businesses and industries
              </p>
              <Link to="/solutions" className="text-primary hover:underline flex items-center">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Battery className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Energy Storage</h3>
              <p className="text-muted-foreground mb-4">
                Advanced battery systems for reliable power backup
              </p>
              <Link to="/solutions" className="text-primary hover:underline flex items-center">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Card>
            
            <Card className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
              <p className="text-muted-foreground mb-4">
                Professional installation and ongoing support services
              </p>
              <Link to="/services" className="text-primary hover:underline flex items-center">
                Explore <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Premium Solar Products</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Industry-leading equipment from trusted global manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
              <img src={commercialSolar} alt="Solar Panels" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Solar Panels</h3>
                <p className="text-muted-foreground mb-4">
                  High-efficiency monocrystalline and polycrystalline panels
                </p>
                <Link to="/products">
                  <Button variant="outline" className="w-full">View Products</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
              <img src={energyStorage} alt="Inverters" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Inverters</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced hybrid and grid-tie inverter systems
                </p>
                <Link to="/products">
                  <Button variant="outline" className="w-full">View Products</Button>
                </Link>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
              <img src={heroSolar} alt="Battery Storage" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Battery Storage</h3>
                <p className="text-muted-foreground mb-4">
                  Lithium-ion and lead-acid battery solutions
                </p>
                <Link to="/products">
                  <Button variant="outline" className="w-full">View Products</Button>
                </Link>
              </div>
            </Card>
          </div>
          
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" variant="default">
                Browse All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of satisfied customers who have made the switch to clean, 
              reliable solar energy with Hedge Energy Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get a Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Book Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <WhatsAppChat />
    </div>
  );
};

export default Home;
