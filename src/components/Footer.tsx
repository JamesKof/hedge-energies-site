import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-solar rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-xl">H</span>
              </div>
              <span className="text-xl font-bold">Hedge Energy Solutions</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Powering Ghana's sustainable future with innovative solar solutions. 
              Reduce your carbon footprint and embrace clean energy today.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#home" className="hover:text-background transition-smooth">Home</a></li>
              <li><a href="#about" className="hover:text-background transition-smooth">About Us</a></li>
              <li><a href="#solutions" className="hover:text-background transition-smooth">Solutions</a></li>
              <li><a href="#products" className="hover:text-background transition-smooth">Products</a></li>
              <li><a href="#contact" className="hover:text-background transition-smooth">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <span>Near Odorgonor Senior High School, Awoshie, Accra, Ghana</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:sales@hedgeenergies.com" className="hover:text-background transition-smooth">
                  sales@hedgeenergies.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="tel:+233243237574" className="hover:text-background transition-smooth">
                  +233 243 237 574
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; {currentYear} Hedge Energy Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
