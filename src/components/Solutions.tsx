import { Home, Building2, Battery, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import residentialImage from "@/assets/residential-solar.jpg";
import commercialImage from "@/assets/commercial-solar.jpg";
import storageImage from "@/assets/energy-storage.jpg";

const Solutions = () => {
  const solutions = [
    {
      icon: Home,
      title: "Residential Solutions",
      description: "Transform your home with custom solar panel installations designed to maximize energy savings and reduce your electricity bills.",
      image: residentialImage,
      features: ["Rooftop Solar Panels", "Grid-Tied Systems", "Net Metering", "Smart Monitoring"],
    },
    {
      icon: Building2,
      title: "Commercial & Industrial",
      description: "Scalable solar solutions for businesses looking to reduce operational costs and demonstrate environmental leadership.",
      image: commercialImage,
      features: ["Large-Scale Installations", "Energy Audits", "ROI Analysis", "Maintenance Plans"],
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Advanced battery storage systems that ensure continuous power supply and energy independence, day and night.",
      image: storageImage,
      features: ["Battery Backup", "Off-Grid Solutions", "Peak Shaving", "Load Management"],
    },
    {
      icon: Wrench,
      title: "Installation & Maintenance",
      description: "Professional installation services and ongoing maintenance to ensure optimal performance of your solar system.",
      image: null,
      features: ["Expert Installation", "System Upgrades", "24/7 Support", "Performance Optimization"],
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive renewable energy solutions tailored to meet your specific needs, 
            from residential installations to large-scale commercial projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-strong transition-all duration-300 border-border group"
            >
              {solution.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              <div className={solution.image ? "p-6" : "p-8"}>
                <div className="w-14 h-14 bg-gradient-energy rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
