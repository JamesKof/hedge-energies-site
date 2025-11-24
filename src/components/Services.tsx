import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Headphones, 
  HelpCircle, 
  Shield, 
  FileText, 
  MonitorPlay, 
  Wrench,
  GraduationCap,
  Settings,
  RefreshCw,
  Award
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Headphones,
      title: "Online Customer Support",
      description: "Submit requests, track tickets, and connect with our expert support team for fast issue resolution.",
      cta: "Get Support",
    },
    {
      icon: HelpCircle,
      title: "FAQs & Documentation",
      description: "Find answers to commonly asked questions about our products, configurations, and installation procedures.",
      cta: "Browse FAQs",
    },
    {
      icon: Shield,
      title: "Warranty Extension",
      description: "Check warranty conditions & certifications and extend product protection online for peace of mind.",
      cta: "Extend Warranty",
    },
    {
      icon: FileText,
      title: "Product Information",
      description: "Access all product downloads including user manuals, datasheets, certificates, and technical specifications.",
      cta: "Download Now",
    },
    {
      icon: MonitorPlay,
      title: "Monitoring & Design Tools",
      description: "Utilize our software solutions for system monitoring (SEMS) and easy project design (EzDesigner II).",
      cta: "Access Tools",
    },
    {
      icon: Wrench,
      title: "Repair Center Services",
      description: "Professional repair services for inverters and batteries, ensuring older generations stay operational.",
      cta: "Request Repair",
    },
  ];

  const additionalServices = [
    {
      icon: Award,
      title: "GoodWe PLUS+ Program",
      description: "Installer loyalty program offering technical training, loyalty awards, accreditation, and 10-year warranty extension.",
    },
    {
      icon: GraduationCap,
      title: "Solar Academy Training",
      description: "Access free trainings, webinars, workshops, and a digital library of technical solutions for professionals.",
    },
    {
      icon: Settings,
      title: "Project Commissioning",
      description: "Comprehensive support during project commissioning with guidance, training, and on-site supervision.",
    },
    {
      icon: RefreshCw,
      title: "Firmware Updates",
      description: "Regular remote firmware updates for optimized performance, improved reliability, and new features.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Comprehensive Support & Services
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Expert support and professional services to ensure your solar system delivers maximum performance and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mainServices.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-smooth"
              >
                {service.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-medium">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Additional Professional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-white shadow-strong">
          <h3 className="text-3xl font-bold mb-4">24/7 Customer Support Available</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Our dedicated team is here to help with installation guidance, troubleshooting, system optimization, and maintenance support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 border-white">
              <Headphones className="mr-2" />
              Contact Support
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary backdrop-blur-sm">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
