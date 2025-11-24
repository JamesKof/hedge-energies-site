import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Near Odorgonor Senior High School", "Ghana Post GPS: GC-120-5165", "Awoshie | Accra | Ghana"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sales@hedgeenergies.com"],
      link: "mailto:sales@hedgeenergies.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+233 243 237 574"],
      link: "tel:+233243237574",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your journey towards clean energy? Contact us today for a free consultation 
            and custom quote tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-medium transition-all duration-300 bg-card border-border">
              <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{info.title}</h3>
              {info.link ? (
                <a href={info.link} className="text-primary hover:text-primary-light transition-smooth">
                  {info.details.map((detail, idx) => (
                    <div key={idx}>{detail}</div>
                  ))}
                </a>
              ) : (
                <div className="text-muted-foreground text-sm space-y-1">
                  {info.details.map((detail, idx) => (
                    <div key={idx}>{detail}</div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto p-8 bg-card border-border shadow-medium">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="bg-background"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell us about your energy needs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background resize-none"
              />
            </div>
            <Button type="submit" variant="hero" className="w-full" size="lg">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
