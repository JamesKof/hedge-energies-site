import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppChat from "@/components/WhatsAppChat";
import Partnership from "@/components/Partnership";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Award, Globe, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import jinkoPartnership from "@/assets/jinko-partnership.jpg";

const PartnershipPage = () => {
  const jinkoAchievements = [
    "World's largest solar panel manufacturer",
    "Over 130 GW installed globally across 160+ countries",
    "20+ years of solar innovation and excellence",
    "Tier 1 bankability rating from Bloomberg New Energy Finance",
    "Multiple world records for solar cell efficiency",
    "Vertically integrated manufacturing ensuring quality control",
    "Extensive R&D investment in next-generation technologies",
    "Comprehensive global warranty and support network"
  ];

  const productLines = [
    {
      name: "Tiger Pro Series",
      description: "High-efficiency monocrystalline panels with advanced cell technology",
      features: ["550W-580W output", "21%+ efficiency", "30-year performance warranty"]
    },
    {
      name: "Tiger Neo Series",
      description: "Next-generation N-type TOPCon technology for maximum performance",
      features: ["600W+ output", "22%+ efficiency", "Lower degradation rate"]
    },
    {
      name: "Cheetah Series",
      description: "Reliable performance for residential and small commercial applications",
      features: ["400W-450W output", "20%+ efficiency", "25-year product warranty"]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Access to world-class solar panels with industry-leading performance and reliability"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "Backed by JinkoSolar's extensive international network and technical expertise"
    },
    {
      icon: TrendingUp,
      title: "Latest Technology",
      description: "First access to cutting-edge innovations in solar panel technology"
    },
    {
      icon: Shield,
      title: "Comprehensive Warranty",
      description: "Industry-leading warranties with robust claim support and service"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">JinkoSolar Partnership</h1>
            <p className="text-xl text-muted-foreground">
              Authorized distributor of the world's leading solar panel manufacturer
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Powering Ghana with Global Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                As an authorized distributor of JinkoSolar products, Hedge Energy Solutions brings 
                world-class solar technology to Ghana. Our partnership with JinkoSolar, the world's 
                largest and most innovative solar panel manufacturer, ensures that our clients receive 
                the highest quality products backed by comprehensive warranties and global support.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                This strategic partnership allows us to offer cutting-edge solar solutions at 
                competitive prices while maintaining the highest standards of quality and performance. 
                Every JinkoSolar panel we install represents decades of research, innovation, and 
                proven reliability in the field.
              </p>
              <Link to="/products">
                <Button size="lg">View JinkoSolar Products</Button>
              </Link>
            </div>
            <div className="animate-fade-in">
              <img 
                src={jinkoPartnership} 
                alt="JinkoSolar Partnership" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* JinkoSolar Component */}
      <Partnership />

      {/* Key Achievements */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">JinkoSolar: Industry Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Why JinkoSolar is the world's most trusted solar panel manufacturer
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jinkoAchievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-lg">{achievement}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Available Product Lines</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              JinkoSolar panels available through Hedge Energy Solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productLines.map((product, index) => (
              <Card 
                key={index} 
                className="p-8 hover:shadow-glow transition-all duration-300 animate-fade-in"
              >
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Benefits of Our Partnership</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              What this partnership means for our customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-glow transition-all duration-300 animate-fade-in"
              >
                <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-background to-accent/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Technical Excellence & Innovation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Advanced Technology</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Proprietary cell cutting and layout optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Advanced anti-reflective coating for maximum light absorption</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Multi-busbar technology for improved current collection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Half-cell design reducing power loss</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Quality Assurance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>ISO 9001, ISO 14001, and ISO 45001 certified manufacturing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Rigorous testing exceeding IEC standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>100% EL inspection for defect detection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Long-term reliability testing in various climates</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Link to="/contact">
                  <Button size="lg">Learn More About JinkoSolar Products</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready for World-Class Solar?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the difference that premium JinkoSolar panels can make for your home or business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">Get a Quote</Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">View Products</Button>
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

export default PartnershipPage;
