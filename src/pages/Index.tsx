import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import Partnership from "@/components/Partnership";
import Solutions from "@/components/Solutions";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSlider />
      <About />
      <Partnership />
      <Solutions />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
