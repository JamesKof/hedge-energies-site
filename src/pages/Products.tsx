import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppChat from "@/components/WhatsAppChat";
import ProductsCatalog from "@/components/ProductsCatalog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sun, Battery, Zap, Settings, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const categories = [
    {
      icon: Sun,
      title: "Solar Panels",
      description: "Premium monocrystalline and polycrystalline panels from JinkoSolar with industry-leading efficiency ratings",
      items: [
        "JinkoSolar Tiger Pro 550W",
        "JinkoSolar Tiger Neo 600W",
        "JinkoSolar Cheetah 450W",
        "JinkoSolar Eagle 400W"
      ]
    },
    {
      icon: Zap,
      title: "Solar Inverters",
      description: "Advanced hybrid and grid-tie inverters for optimal energy conversion and management",
      items: [
        "Hybrid Inverters (3kW-15kW)",
        "Grid-Tie Inverters (5kW-50kW)",
        "Off-Grid Inverters (3kW-10kW)",
        "Microinverters & Optimizers"
      ]
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "High-capacity lithium-ion and lead-acid battery systems for reliable backup power",
      items: [
        "Lithium-ion Batteries (5kWh-20kWh)",
        "Lead-Acid Deep Cycle Batteries",
        "Battery Management Systems",
        "Modular Storage Solutions"
      ]
    },
    {
      icon: Settings,
      title: "Mounting Systems",
      description: "Durable mounting solutions for rooftop, ground, and carport installations",
      items: [
        "Rooftop Mounting Rails",
        "Ground Mounting Structures",
        "Ballasted Systems",
        "Tracking Systems"
      ]
    }
  ];

  const benefits = [
    {
      title: "Premium Quality",
      description: "All products sourced from tier-1 manufacturers with proven track records"
    },
    {
      title: "Comprehensive Warranties",
      description: "25-year panel warranties, 10-year inverter warranties, and extended battery coverage"
    },
    {
      title: "Certified Performance",
      description: "IEC, CE, and local certification compliance for all equipment"
    },
    {
      title: "Local Support",
      description: "Technical support and spare parts availability throughout Ghana"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Solar Products</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Industry-leading solar equipment from trusted global manufacturers, 
              backed by comprehensive warranties and local support
            </p>
            <Link to="/contact">
              <Button size="lg">
                Request Product Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Product Categories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete range of solar energy components for residential and commercial applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
              >
                <category.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Product Catalog */}
      <ProductsCatalog />

      {/* Product Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Products?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quality assurance and support you can count on
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-glow transition-all duration-300 animate-fade-in"
              >
                <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">JinkoSolar Partnership</h2>
              <p className="text-lg text-muted-foreground mb-8">
                As an authorized distributor of JinkoSolar products, we offer the world's most 
                reliable and efficient solar panels. JinkoSolar is the world's largest solar panel 
                manufacturer with over 20 years of innovation and excellence.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">20+ Years</div>
                  <div className="text-muted-foreground">Industry Experience</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">130+ GW</div>
                  <div className="text-muted-foreground">Installed Worldwide</div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-primary mb-2">Top Tier</div>
                  <div className="text-muted-foreground">Bankability Rating</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Technical Specifications & Support</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every product in our catalog comes with detailed technical documentation, 
                installation guides, and access to our expert technical support team.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Downloadable Datasheets:</strong> Complete technical specifications for all products
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Installation Manuals:</strong> Step-by-step guides for proper installation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Warranty Documentation:</strong> Clear warranty terms and claim procedures
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>24/7 Technical Support:</strong> Expert assistance whenever you need it
                  </div>
                </li>
              </ul>
              <Link to="/contact">
                <Button size="lg">
                  Contact Technical Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-2xl font-bold mb-6">Need Help Choosing?</h3>
              <p className="text-muted-foreground mb-6">
                Our solar experts can help you select the right products for your specific needs 
                and budget. Get personalized recommendations based on:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Your energy consumption patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Available installation space</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Budget and financing options</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Future expansion plans</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Local climate conditions</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us for current pricing, bulk discounts, and product availability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Schedule Consultation
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

export default Products;
