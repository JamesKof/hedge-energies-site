import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppChat from "@/components/WhatsAppChat";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, Building2, Battery, Wrench, Sun, Zap, Shield, 
  TrendingUp, Clock, Award, Check, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";
import residentialSolar from "@/assets/residential-solar.jpg";
import commercialSolar from "@/assets/commercial-solar.jpg";
import energyStorage from "@/assets/energy-storage.jpg";

const Solutions = () => {
  const residentialFeatures = [
    "Complete site assessment and system design",
    "Premium solar panels with 25-year warranties",
    "Hybrid inverters with grid-tie and off-grid capabilities",
    "Battery storage for 24/7 power availability",
    "Smart monitoring systems with mobile app",
    "Professional installation by certified technicians",
    "Comprehensive maintenance packages",
    "Net metering setup for grid connection"
  ];

  const commercialFeatures = [
    "Large-scale system design up to MW capacity",
    "Detailed ROI analysis and energy audits",
    "Industrial-grade components for durability",
    "Three-phase inverter systems",
    "Advanced monitoring and analytics platforms",
    "Financing and leasing options available",
    "Predictive maintenance programs",
    "Performance guarantees and insurance"
  ];

  const storageFeatures = [
    "Lithium-ion and lead-acid battery options",
    "Modular and scalable configurations",
    "Battery management systems (BMS)",
    "Integration with existing solar systems",
    "Backup power for critical loads",
    "Peak shaving and load shifting",
    "Remote monitoring and diagnostics",
    "10-year battery warranties"
  ];

  const installationFeatures = [
    "Free site surveys and consultations",
    "Structural assessment and roof analysis",
    "Electrical system upgrades if needed",
    "Professional mounting and wiring",
    "System testing and commissioning",
    "Customer training and handover",
    "24/7 emergency support",
    "Annual maintenance contracts"
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Reduce Energy Costs",
      description: "Save up to 80% on electricity bills with solar power"
    },
    {
      icon: Shield,
      title: "Energy Independence",
      description: "Reduce dependence on unreliable grid power"
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Most residential systems installed within 3-5 days"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium products with comprehensive warranties"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Solar Energy Solutions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive renewable energy systems tailored to your specific needs, 
              from residential homes to large commercial installations
            </p>
            <Link to="/contact">
              <Button size="lg">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Solutions Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="residential" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
              <TabsTrigger value="residential" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Residential
              </TabsTrigger>
              <TabsTrigger value="commercial" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Commercial
              </TabsTrigger>
              <TabsTrigger value="storage" className="flex items-center gap-2">
                <Battery className="w-4 h-4" />
                Energy Storage
              </TabsTrigger>
              <TabsTrigger value="installation" className="flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                Installation
              </TabsTrigger>
            </TabsList>

            {/* Residential Solar */}
            <TabsContent value="residential" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Residential Solar Systems</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Power your home with clean, reliable solar energy. Our residential solutions 
                    are designed to meet the unique energy needs of Ghanaian households, providing 
                    consistent electricity and significant cost savings.
                  </p>
                  <div className="space-y-3 mb-8">
                    {residentialFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button size="lg">Request Residential Quote</Button>
                  </Link>
                </div>
                <div>
                  <img 
                    src={residentialSolar} 
                    alt="Residential Solar Installation" 
                    className="rounded-lg shadow-elegant w-full h-auto"
                  />
                </div>
              </div>

              <Card className="p-8 bg-muted/30">
                <h3 className="text-2xl font-bold mb-4">Typical Residential System Packages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-background rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">Basic Package</h4>
                    <p className="text-3xl font-bold text-primary mb-4">3kW</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 6 x 550W Solar Panels</li>
                      <li>• 5kW Hybrid Inverter</li>
                      <li>• 4.8kWh Battery Storage</li>
                      <li>• Mounting & Installation</li>
                      <li>• 1 Year Maintenance</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary">
                    <div className="text-sm font-semibold text-primary mb-2">MOST POPULAR</div>
                    <h4 className="text-xl font-semibold mb-2">Standard Package</h4>
                    <p className="text-3xl font-bold text-primary mb-4">5kW</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 10 x 550W Solar Panels</li>
                      <li>• 8kW Hybrid Inverter</li>
                      <li>• 9.6kWh Battery Storage</li>
                      <li>• Mounting & Installation</li>
                      <li>• 2 Year Maintenance</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-background rounded-lg">
                    <h4 className="text-xl font-semibold mb-2">Premium Package</h4>
                    <p className="text-3xl font-bold text-primary mb-4">10kW</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 18 x 550W Solar Panels</li>
                      <li>• 10kW Hybrid Inverter</li>
                      <li>• 14.4kWh Battery Storage</li>
                      <li>• Mounting & Installation</li>
                      <li>• 3 Year Maintenance</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Commercial Solar */}
            <TabsContent value="commercial" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Commercial Solar Solutions</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Reduce operational costs and demonstrate environmental leadership with 
                    large-scale solar installations. Perfect for factories, hotels, schools, 
                    hospitals, and commercial complexes.
                  </p>
                  <div className="space-y-3 mb-8">
                    {commercialFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button size="lg">Request Commercial Quote</Button>
                  </Link>
                </div>
                <div>
                  <img 
                    src={commercialSolar} 
                    alt="Commercial Solar Installation" 
                    className="rounded-lg shadow-elegant w-full h-auto"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Industries We Serve</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Manufacturing & Industrial Facilities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Hospitality & Hotels</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Educational Institutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Healthcare Facilities</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Commercial Buildings & Malls</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Agricultural Operations</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4">ROI & Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Payback Period:</strong> Typically 4-6 years
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Energy Savings:</strong> Up to 70-80% reduction
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Carbon Offset:</strong> Significant CO2 reduction
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Property Value:</strong> Increased asset value
                      </div>
                    </li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            {/* Energy Storage */}
            <TabsContent value="storage" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <h2 className="text-4xl font-bold mb-6">Energy Storage Solutions</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Store excess solar energy for use during nighttime or power outages. Our 
                    battery storage systems ensure you have reliable power 24/7, regardless of 
                    grid conditions.
                  </p>
                  <div className="space-y-3 mb-8">
                    {storageFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button size="lg">Request Storage Quote</Button>
                  </Link>
                </div>
                <div>
                  <img 
                    src={energyStorage} 
                    alt="Energy Storage System" 
                    className="rounded-lg shadow-elegant w-full h-auto"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Lithium-Ion Batteries</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Higher energy density and efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Longer lifespan (10+ years)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Deeper discharge cycles (90%+)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Compact and lightweight design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Minimal maintenance required</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Best for: New installations, space-constrained areas, premium applications
                  </p>
                </Card>

                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Lead-Acid Batteries</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cost-effective solution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Proven technology reliability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Wide temperature tolerance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Easy to recycle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Local service availability</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground">
                    Best for: Budget-conscious projects, retrofit installations, backup power
                  </p>
                </Card>
              </div>
            </TabsContent>

            {/* Installation & Maintenance */}
            <TabsContent value="installation" className="animate-fade-in">
              <div className="mb-12">
                <h2 className="text-4xl font-bold mb-6 text-center">Professional Installation & Maintenance</h2>
                <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                  Expert installation and comprehensive maintenance services to ensure optimal 
                  performance and longevity of your solar energy system
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Card className="p-8">
                  <Wrench className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Installation Services</h3>
                  <div className="space-y-3">
                    {installationFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-8">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Maintenance Packages</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Basic Maintenance</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Annual system inspection</li>
                        <li>• Panel cleaning and checks</li>
                        <li>• Performance report</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Premium Maintenance</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Bi-annual inspections</li>
                        <li>• Priority support access</li>
                        <li>• Remote monitoring included</li>
                        <li>• Parts replacement covered</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Enterprise Support</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>• Quarterly inspections</li>
                        <li>• 24/7 emergency response</li>
                        <li>• Predictive maintenance</li>
                        <li>• Full performance guarantee</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-muted/30">
                <h3 className="text-2xl font-bold mb-6 text-center">Installation Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                    <h4 className="font-semibold mb-2">Consultation</h4>
                    <p className="text-sm text-muted-foreground">Site survey & system design</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                    <h4 className="font-semibold mb-2">Proposal</h4>
                    <p className="text-sm text-muted-foreground">Detailed quote & timeline</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                    <h4 className="font-semibold mb-2">Approval</h4>
                    <p className="text-sm text-muted-foreground">Contract & permits</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                    <h4 className="font-semibold mb-2">Installation</h4>
                    <p className="text-sm text-muted-foreground">3-5 days typical</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 font-bold">5</div>
                    <h4 className="font-semibold mb-2">Activation</h4>
                    <p className="text-sm text-muted-foreground">Testing & training</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Solutions?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Experience the benefits of professional solar installations
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Solar Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get a free consultation and customized quote for your solar energy system
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button size="lg" variant="outline">
                  Browse Products
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

export default Solutions;
