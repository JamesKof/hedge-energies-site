import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  Download, 
  Check, 
  Zap, 
  Shield, 
  TrendingUp,
  Settings,
  FileText,
  Award
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Product data (in a real app, this would come from an API or database)
  const products: Record<string, any> = {
    "sdt-g2-4-15": {
      name: "SDT G2 Series (4-15 kW)",
      category: "Three Phase Inverter",
      image: "/placeholder.svg",
      price: "Contact for Quote",
      description: "The GoodWe SDT G2 Series is one of the best options available on the residential & commercial segments. Enhanced safety with AFCI capability and 98.3% maximum efficiency.",
      specs: [
        { label: "Power Range", value: "4-15 kW" },
        { label: "Phase", value: "Three Phase" },
        { label: "MPP Trackers", value: "2" },
        { label: "Max Efficiency", value: "98.3%" },
        { label: "Operating Temperature", value: "-25°C to +60°C" },
        { label: "Dimensions", value: "45% smaller than Gen 1" },
        { label: "IP Rating", value: "IP65" },
        { label: "Warranty", value: "10 Years Standard" },
      ],
      features: [
        "AFCI (Arc Fault Circuit Interrupter) for enhanced safety",
        "Up to 150% DC input oversizing",
        "Up to 115% AC output overloading",
        "Advanced thermal management",
        "Plug-in AC connector for easy operation",
        "String level current monitoring",
        "Power line communication",
        "Remote firmware updates",
      ],
      applications: [
        "Residential rooftop installations",
        "Small commercial buildings",
        "Farm and agricultural applications",
        "Educational institutions",
      ],
      downloads: [
        { name: "Product Datasheet", size: "2.4 MB", type: "PDF" },
        { name: "Installation Manual", size: "5.1 MB", type: "PDF" },
        { name: "Quick Start Guide", size: "1.2 MB", type: "PDF" },
        { name: "Warranty Certificate", size: "850 KB", type: "PDF" },
        { name: "Technical Specifications", size: "3.2 MB", type: "PDF" },
      ],
    },
    "sdt-g2-17-25": {
      name: "SDT G2 Series (17-25 kW)",
      category: "Three Phase Commercial Inverter",
      image: "/placeholder.svg",
      price: "Contact for Quote",
      description: "Designed for three-phase residential and small commercial projects. 45% smaller than first generation with advanced ventilation and 98.4% maximum efficiency.",
      specs: [
        { label: "Power Range", value: "17-25 kW" },
        { label: "Phase", value: "Three Phase" },
        { label: "MPP Trackers", value: "2" },
        { label: "Max Efficiency", value: "98.4%" },
        { label: "Operating Temperature", value: "-25°C to +60°C" },
        { label: "Weight", value: "Lightweight design" },
        { label: "IP Rating", value: "IP65" },
        { label: "Warranty", value: "10 Years Standard" },
      ],
      features: [
        "45% smaller than first generation",
        "Advanced ventilation system for efficient heat dissipation",
        "Customizable with integrated LCD screen",
        "High efficiency at 98.4%",
        "Easy installation with lightweight design",
        "Full load operation at 50°C",
        "Remote monitoring via SEMS",
        "Compatible with high-power modules",
      ],
      applications: [
        "Large residential installations",
        "Small to medium commercial buildings",
        "Retail shops and supermarkets",
        "Office buildings",
      ],
      downloads: [
        { name: "Product Datasheet", size: "2.6 MB", type: "PDF" },
        { name: "Installation Manual", size: "5.8 MB", type: "PDF" },
        { name: "Quick Start Guide", size: "1.4 MB", type: "PDF" },
        { name: "Warranty Certificate", size: "850 KB", type: "PDF" },
        { name: "Technical Specifications", size: "3.5 MB", type: "PDF" },
      ],
    },
    "ht-1100v": {
      name: "HT 1100V Series (100-120 kW)",
      category: "Commercial String Inverter",
      image: "/placeholder.svg",
      price: "Contact for Quote",
      description: "Compact and efficient inverters with high power density for large commercial and small utility PV systems. Compatible with high-power modules.",
      specs: [
        { label: "Power Range", value: "100-120 kW" },
        { label: "Phase", value: "Three Phase" },
        { label: "MPP Trackers", value: "Up to 12" },
        { label: "Max Efficiency", value: "99%" },
        { label: "DC Voltage", value: "1100V" },
        { label: "Operating Temperature", value: "-25°C to +60°C" },
        { label: "IP Rating", value: "IP65" },
        { label: "Warranty", value: "5 Years Standard, Extendable" },
      ],
      features: [
        "High power density for lean system layout",
        "Up to 12 MPP trackers for maximum flexibility",
        "Compatible with high-current PV modules",
        "Smart Energy Controller SEC1000 integration",
        "Load monitoring functionality",
        "Power export limit control",
        "Advanced string monitoring",
        "Professional commissioning support",
      ],
      applications: [
        "Large commercial rooftops",
        "Industrial facilities",
        "Small utility-scale projects",
        "Commercial solar farms",
      ],
      downloads: [
        { name: "Product Datasheet", size: "3.2 MB", type: "PDF" },
        { name: "Installation Manual", size: "7.5 MB", type: "PDF" },
        { name: "Commissioning Guide", size: "4.2 MB", type: "PDF" },
        { name: "Warranty Certificate", size: "850 KB", type: "PDF" },
        { name: "Technical Specifications", size: "4.1 MB", type: "PDF" },
      ],
    },
    "ht-1500v": {
      name: "HT 1500V Series (225-250 kW)",
      category: "Utility Scale String Inverter",
      image: "/placeholder.svg",
      price: "Contact for Quote",
      description: "Maximising ROI for utility-scale projects in all environments. Optimises energy yield with continuously high performance under toughest conditions.",
      specs: [
        { label: "Power Range", value: "225-250 kW" },
        { label: "Phase", value: "Three Phase" },
        { label: "MPP Trackers", value: "Up to 12" },
        { label: "Max Efficiency", value: "99%" },
        { label: "DC Voltage", value: "1500V" },
        { label: "Operating Temperature", value: "-30°C to +60°C" },
        { label: "IP Rating", value: "IP66" },
        { label: "Warranty", value: "5 Years Standard, Extendable to 25" },
      ],
      features: [
        "Designed for utility-scale ground mounted PV plants",
        "Optimized for bankability and longevity",
        "High performance in extreme environments",
        "PLC (Power Line Communication) support",
        "Remote monitoring via SCB3000",
        "Advanced grid support functions",
        "Proven reliability in harsh conditions",
        "Best value for money for large projects",
      ],
      applications: [
        "Utility-scale solar farms",
        "Ground mounted PV plants",
        "Large industrial installations",
        "Power purchase agreement (PPA) projects",
      ],
      downloads: [
        { name: "Product Datasheet", size: "3.8 MB", type: "PDF" },
        { name: "Installation Manual", size: "9.2 MB", type: "PDF" },
        { name: "Commissioning Guide", size: "5.5 MB", type: "PDF" },
        { name: "Warranty Certificate", size: "850 KB", type: "PDF" },
        { name: "Technical Specifications", size: "4.8 MB", type: "PDF" },
      ],
    },
  };

  const product = products[productId || ""];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Product Image */}
            <div className="animate-fade-in-up">
              <Card className="p-8 bg-secondary/30">
                <div className="aspect-square bg-white rounded-lg flex items-center justify-center">
                  <Zap className="w-32 h-32 text-primary" />
                </div>
              </Card>
            </div>

            {/* Product Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{product.description}</p>
              
              <div className="bg-card border border-border rounded-xl p-6 mb-6">
                <div className="text-3xl font-bold text-primary mb-2">{product.price}</div>
                <p className="text-sm text-muted-foreground">Includes installation consultation</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="hero" size="lg" className="flex-1">
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  Schedule Consultation
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">Warranty</div>
                  <div className="text-xs text-muted-foreground">10+ Years</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">Efficiency</div>
                  <div className="text-xs text-muted-foreground">Up to 99%</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">Support</div>
                  <div className="text-xs text-muted-foreground">24/7 Service</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-sm font-semibold text-foreground">Quality</div>
                  <div className="text-xs text-muted-foreground">GoodWe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information Tabs */}
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8">
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>

            <TabsContent value="specs">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.specs.map((spec: any, index: number) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                      <span className="font-semibold text-foreground">{spec.label}</span>
                      <span className="text-muted-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="features">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-secondary/30 rounded-lg">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="applications">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Ideal Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {product.applications.map((app: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="downloads">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Documentation & Downloads</h3>
                <div className="space-y-4">
                  {product.downloads.map((download: any, index: number) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-smooth">
                      <div className="flex items-center space-x-4">
                        <FileText className="w-10 h-10 text-primary" />
                        <div>
                          <div className="font-semibold text-foreground">{download.name}</div>
                          <div className="text-sm text-muted-foreground">{download.type} • {download.size}</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <Card className="mt-12 p-8 bg-gradient-primary text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contact our team for a detailed quote and professional consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
                Request Free Quote
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary">
                Call: +233 243 237 574
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
