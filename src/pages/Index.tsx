import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import Partnership from "@/components/Partnership";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import ProductsCatalog from "@/components/ProductsCatalog";
import Services from "@/components/Services";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <About />
      <Partnership />
      <Solutions />
      <Products />
      <ProductsCatalog />
      <Services />
      <ServiceRequestForm />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
