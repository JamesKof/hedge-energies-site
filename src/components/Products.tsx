import { Zap, Shield, TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      category: "Solar Panels",
      items: [
        "Monocrystalline Panels (450W-550W)",
        "Polycrystalline Panels (350W-450W)",
        "Bifacial Solar Modules",
        "PERC Technology Panels",
      ],
    },
    {
      category: "Solar Inverters",
      items: [
        "String Inverters (5kW-100kW)",
        "Hybrid Inverters with Battery",
        "Microinverters",
        "Grid-Tie Inverters",
      ],
    },
    {
      category: "Energy Storage",
      items: [
        "Lithium-Ion Battery Systems",
        "LiFePO4 Batteries",
        "All-in-One Storage Solutions",
        "Modular Battery Banks",
      ],
    },
    {
      category: "Mounting Systems",
      items: [
        "Rooftop Mounting Structures",
        "Ground Mount Systems",
        "Carport Solar Structures",
        "Tracking Systems",
      ],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "High Efficiency",
      description: "Industry-leading conversion rates for maximum power generation",
    },
    {
      icon: Shield,
      title: "Reliable Performance",
      description: "Proven durability with comprehensive warranties up to 25 years",
    },
    {
      icon: TrendingUp,
      title: "ROI Focused",
      description: "Fast payback periods with significant long-term savings",
    },
    {
      icon: Clock,
      title: "Quick Installation",
      description: "Professional setup with minimal disruption to your operations",
    },
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Products
          </h2>
          <p className="text-lg text-muted-foreground">
            We partner with world-class manufacturers to bring you the most reliable 
            and efficient solar equipment available on the market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 bg-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 pb-3 border-b border-border">
                {product.category}
              </h3>
              <ul className="space-y-3">
                {product.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-solar rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
                <benefit.icon className="w-8 h-8 text-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
