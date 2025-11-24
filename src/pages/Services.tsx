import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppChat from "@/components/WhatsAppChat";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Solar Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              From consultation to installation and ongoing maintenance, 
              we provide comprehensive support for all your solar energy needs
            </p>
            <a href="#service-request">
              <Button size="lg">
                Book a Service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Services Component */}
      <Services />

      {/* Service Request Form Section */}
      <section id="service-request">
        <ServiceRequestForm />
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Services?</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We're committed to delivering exceptional service at every stage of your solar journey
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Customer Support</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Have Questions About Our Services?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is ready to answer your questions and help you find the right solution
            </p>
            <Link to="/contact">
              <Button size="lg">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <WhatsAppChat />
    </div>
  );
};

export default ServicesPage;
