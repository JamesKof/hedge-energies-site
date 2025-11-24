import { Star, Zap, TrendingDown, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Kwame Mensah",
    role: "Manufacturing Plant Owner",
    location: "Tema, Ghana",
    image: customer1,
    rating: 5,
    testimonial: "Switching to solar with Hedge Energy Solutions was the best business decision we made. Our energy costs dropped by 65% in the first year, and the system paid for itself faster than expected.",
    project: "250kW Commercial Solar Installation",
    energySaved: "180,000 kWh/year",
    costSavings: "GH₵ 144,000/year",
    installDate: "March 2023"
  },
  {
    id: 2,
    name: "Ama Osei",
    role: "Hotel Manager",
    location: "Accra, Ghana",
    image: customer2,
    rating: 5,
    testimonial: "The professionalism and expertise of Hedge Energy Solutions exceeded our expectations. From consultation to installation, everything was seamless. Our guests love that we're now powered by clean energy.",
    project: "150kW Rooftop Solar System",
    energySaved: "120,000 kWh/year",
    costSavings: "GH₵ 96,000/year",
    installDate: "June 2023"
  },
  {
    id: 3,
    name: "Kofi Asante",
    role: "Homeowner",
    location: "Kumasi, Ghana",
    image: customer3,
    rating: 5,
    testimonial: "As a family, we wanted to reduce our carbon footprint and electricity bills. Hedge Energy Solutions made it so easy. The GoodWe system works flawlessly, and we haven't had a single issue. Highly recommended!",
    project: "10kW Residential Solar Installation",
    energySaved: "15,000 kWh/year",
    costSavings: "GH₵ 12,000/year",
    installDate: "August 2023"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our satisfied clients across Ghana who are saving money and powering their future with clean energy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="group hover:shadow-glow transition-all duration-500 border-primary/20 animate-fade-in-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Customer Info */}
                <div className="flex items-start gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                      <span className="text-primary">📍</span> {testimonial.location}
                    </p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-primary text-primary group-hover:scale-110 transition-transform duration-300" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Project Details */}
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{testimonial.installDate}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{testimonial.project}</p>
                  
                  {/* Energy Metrics */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-primary/5 rounded-lg p-3 group-hover:bg-primary/10 transition-colors duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">Energy Saved</span>
                      </div>
                      <p className="font-bold text-sm text-foreground">{testimonial.energySaved}</p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3 group-hover:bg-primary/10 transition-colors duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingDown className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">Cost Savings</span>
                      </div>
                      <p className="font-bold text-sm text-foreground">{testimonial.costSavings}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
          <p className="text-lg text-muted-foreground mb-4">
            Join hundreds of satisfied customers across Ghana
          </p>
          <a 
            href="#service-request" 
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            Start Your Solar Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
