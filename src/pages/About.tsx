import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import WhatsAppChat from "@/components/WhatsAppChat";
import Partnership from "@/components/Partnership";
import { Card } from "@/components/ui/card";
import { Target, Eye, Award, Users, Leaf, TrendingUp } from "lucide-react";
import heroSolar from "@/assets/hero-solar.jpg";
import commercialSolar from "@/assets/commercial-solar.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every installation, ensuring the highest quality standards and customer satisfaction."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do. We provide personalized solutions and dedicated support."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to promoting clean energy and reducing carbon footprints across Ghana."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously adopt the latest technologies and best practices in renewable energy solutions."
    }
  ];

  const milestones = [
    { year: "2010", event: "Founded in Accra, Ghana" },
    { year: "2013", event: "Completed 100th residential installation" },
    { year: "2016", event: "Partnered with JinkoSolar" },
    { year: "2018", event: "Expanded to commercial solar projects" },
    { year: "2020", event: "Launched energy storage solutions" },
    { year: "2022", event: "Reached 10MW total capacity" },
    { year: "2024", event: "500+ installations completed" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Hedge Energy Solutions</h1>
            <p className="text-xl text-muted-foreground">
              Ghana's leading provider of renewable energy solutions, powering a sustainable future for over a decade
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Hedge Energy Solutions is Ghana's premier provider of renewable energy systems, 
                established in 2010 with a vision to make clean energy accessible to all. We specialize 
                in solar photovoltaic installations, energy storage solutions, and comprehensive 
                maintenance services.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                With over 14 years of experience and more than 500 successful installations across Ghana, 
                we've built a reputation for reliability, quality, and exceptional customer service. Our 
                team of certified engineers and technicians brings expertise in designing, installing, and 
                maintaining solar energy systems of all sizes.
              </p>
              <p className="text-lg text-muted-foreground">
                We partner with world-class manufacturers like JinkoSolar to ensure our clients receive 
                the highest quality products backed by comprehensive warranties and our dedicated support team.
              </p>
            </div>
            <div className="animate-fade-in">
              <img 
                src={heroSolar} 
                alt="Hedge Energy Team" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-10 hover:shadow-glow transition-all duration-300">
              <Target className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To provide reliable, affordable, and sustainable energy solutions that empower 
                Ghanaian homes and businesses while contributing to a cleaner environment for 
                future generations.
              </p>
            </Card>
            
            <Card className="p-10 hover:shadow-glow transition-all duration-300">
              <Eye className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To be West Africa's most trusted renewable energy company, leading the transition 
                to clean energy through innovation, excellence, and unwavering commitment to 
                customer satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-glow transition-all duration-300 animate-fade-in"
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our mission to power Ghana with clean energy
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative mb-8 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-fade-in`}
                >
                  <Card className={`w-5/12 p-6 hover:shadow-glow transition-all duration-300 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="flex items-center gap-4">
                      <div className="text-3xl font-bold text-primary">{milestone.year}</div>
                      <div className="flex-1">
                        <p className="text-lg">{milestone.event}</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <Partnership />

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src={commercialSolar} 
                alt="Our Team" 
                className="rounded-lg shadow-elegant w-full h-auto"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">Our Expert Team</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Our team consists of highly qualified engineers, certified installers, and dedicated 
                customer service professionals who are passionate about renewable energy.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Certified Engineers:</strong> PV design specialists with international certifications
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Expert Installers:</strong> Trained in safety protocols and best installation practices
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Support Team:</strong> Available 24/7 to assist with any technical issues
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">
                    <strong>Continuous Training:</strong> Regular updates on latest technologies and industry standards
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">14+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">10MW+</div>
              <div className="text-muted-foreground">Total Capacity</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
      <WhatsAppChat />
    </div>
  );
};

export default About;
