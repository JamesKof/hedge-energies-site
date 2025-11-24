import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppChat from "@/components/WhatsAppChat";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your solar journey? We're here to help you every step of the way
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Component */}
      <Contact />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
      <BackToTop />
      <WhatsAppChat />
    </div>
  );
};

export default ContactPage;
