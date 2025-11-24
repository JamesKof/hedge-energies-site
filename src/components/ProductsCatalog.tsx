import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Zap, Battery, Wifi, Radio, Activity, MonitorPlay } from "lucide-react";

const ProductsCatalog = () => {
  const inverters = [
    {
      name: "SDT G2 Series (4-15 kW)",
      specs: ["Three phase", "2 MPPTs", "98.3% efficiency"],
      description: "Best option for residential & commercial segments with enhanced safety features including AFCI capability. Enhanced oversizing & overloading capabilities with plug-in AC connector for easy operation.",
      icon: Zap,
    },
    {
      name: "SDT G2 Series (17-25 kW)",
      specs: ["Three phase", "2 MPPTs", "98.4% efficiency"],
      description: "Designed for three-phase residential and small commercial projects. 45% smaller than first generation, lightweight and easy to install with advanced ventilation system.",
      icon: Zap,
    },
    {
      name: "HT 1100V Series (100-120 kW)",
      specs: ["Up to 12 MPPTs", "Three phase", "High power density"],
      description: "Compact and efficient inverters developed for large commercial / small utility PV systems. Compatible with high-power modules with enhanced profitability.",
      icon: Zap,
    },
    {
      name: "HT 1500V Series (225-250 kW)",
      specs: ["Up to 12 MPPTs", "Three phase", "Utility-scale"],
      description: "Maximising ROI for utility-scale projects in all environments. Optimises energy yield and ensures high performance under toughest conditions.",
      icon: Zap,
    },
  ];

  const monitoring = [
    {
      name: "Smart Energy Management System (SEMS)",
      description: "Cost-free monitoring platform offering reliable operation of photovoltaic plants with maximum yield. Monitor diverse PV plants in real time with extensive data processing and customized charts.",
      icon: MonitorPlay,
    },
    {
      name: "Wi-Fi Module",
      specs: ["Wi-Fi BOX / Wi-Fi KIT"],
      description: "Data encrypted for security. Supports breakpoint retransmission and remote upgrades. Pre-assembled, tested and shipped with stable performance.",
      icon: Wifi,
    },
    {
      name: "4G Module",
      specs: ["4G KIT-EC / 4G KIT-AU"],
      description: "Easy Plug-Play installation supporting multiple operators worldwide. Offers convenience and reliability especially in remote areas without Wi-Fi access.",
      icon: Radio,
    },
    {
      name: "EzLogger Pro",
      description: "Self-developed monitoring device that reads and records all key plant data, constantly transmitting to the GoodWe portal via internet.",
      icon: Activity,
    },
  ];

  const controllers = [
    {
      name: "Smart Energy Controller SEC1000",
      specs: ["On Grid & Storage versions"],
      description: "Achieves real-time data collection and analysis. Automatically adjusts active power output, power factor and other parameters. Can limit AC output to grid for effective resource distribution.",
      icon: Zap,
    },
    {
      name: "Solar Communication Box SCB2000",
      specs: ["With/Without Optical"],
      description: "Integrates PLC communication board, data collecting Ezlogger Pro board, optional GPRS module, optional fiber ring network switch, and three-phase/single-phase switch.",
      icon: Activity,
    },
    {
      name: "Solar Communication Box SCB3000",
      description: "Integrates PLC 2.0 to enhance anti-interference ability, transmission rate & communication distance. Adapted to I-V curve diagnosis function for smart inverters.",
      icon: Activity,
    },
  ];

  return (
    <section id="products-catalog" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Complete Product Catalog
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Featuring world-class GoodWe products as Jinko Solar's official partner in Africa
          </p>
        </div>

        <Tabs defaultValue="inverters" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="inverters">Solar Inverters</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring & Communication</TabsTrigger>
            <TabsTrigger value="controllers">Controllers & Systems</TabsTrigger>
          </TabsList>

          <TabsContent value="inverters" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {inverters.map((product, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {product.specs.map((spec, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {spec}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                      <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {monitoring.map((product, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-energy rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-glow transition-smooth">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                      {product.specs && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {product.specs.map((spec, idx) => (
                            <span key={idx} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                              {spec}
                            </span>
                          ))}
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                      <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="controllers" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {controllers.map((product, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-solar rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                    <product.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
                  {product.specs && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.specs.map((spec, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    Details
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-border rounded-2xl p-8 shadow-soft">
            <Battery className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-foreground mb-2">Need Battery Storage?</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              We also offer comprehensive lithium-ion and LiFePO4 battery solutions for complete energy independence.
            </p>
            <Button variant="hero" size="lg">
              Explore Battery Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCatalog;
