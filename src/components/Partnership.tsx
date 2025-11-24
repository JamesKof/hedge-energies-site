import { Award, Globe, TrendingUp, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import jinkoImage from "@/assets/jinko-partnership.jpg";

const Partnership = () => {
  const benefits = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "World-class Jinko Solar panels with industry-leading efficiency and durability",
    },
    {
      icon: Globe,
      title: "Global Leader",
      description: "Partnering with one of the world's largest and most innovative solar manufacturers",
    },
    {
      icon: TrendingUp,
      title: "Proven Performance",
      description: "Jinko Solar modules consistently rank among the highest performers globally",
    },
    {
      icon: Shield,
      title: "Comprehensive Warranty",
      description: "Industry-leading warranties backed by Jinko Solar's global reputation",
    },
  ];

  return (
    <section id="partnership" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold animate-scale-in">
              Official Partner
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Jinko Solar Official Partner in Africa
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            As the proud official partner of Jinko Solar in Africa and beyond, Hedge Energy Solutions 
            brings you access to the world's most advanced solar technology and unmatched expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img 
              src={jinkoImage} 
              alt="Jinko Solar Partnership" 
              className="rounded-2xl shadow-strong w-full h-auto transform hover:scale-105 transition-smooth"
            />
          </div>
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-foreground">Why Jinko Solar?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Jinko Solar is a world leader in the solar industry, renowned for manufacturing high-performance, 
              reliable photovoltaic products. With cutting-edge technology and rigorous quality control, 
              Jinko Solar modules deliver exceptional energy yield and long-term reliability.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Market Leadership</h4>
                  <p className="text-sm text-muted-foreground">Consistently ranked as the world's largest solar panel manufacturer</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Innovation Excellence</h4>
                  <p className="text-sm text-muted-foreground">Pioneering advanced solar technologies with record-breaking efficiency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Global Trust</h4>
                  <p className="text-sm text-muted-foreground">Trusted by millions of customers worldwide across 160+ countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-strong transition-all duration-500 hover:-translate-y-2 bg-card border-border group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
