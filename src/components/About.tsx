import { Target, Users, Award, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make clean, renewable energy accessible and affordable for every home and business in Ghana.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge solar technology to deliver maximum efficiency and reliability.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Dedicated support and customized solutions tailored to meet your unique energy needs.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium products backed by comprehensive warranties and professional installation.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Hedge Energy Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hedge Energies aims to reduce carbon footprints, lower energy costs, and promote a cleaner, 
            greener future for all. As a leading provider of renewable energy solutions in Ghana, we're 
            committed to transforming the way homes and businesses power their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-card border-border group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
