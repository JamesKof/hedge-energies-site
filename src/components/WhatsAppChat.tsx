import { MessageCircle } from "lucide-react";

const WhatsAppChat = () => {
  const phoneNumber = "233243237574"; // WhatsApp format without + or spaces
  const message = "Hello! I'm interested in learning more about Hedge Energy Solutions' solar products and services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 p-4 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-glow transition-all duration-300 hover:scale-110 animate-fade-in group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
    </a>
  );
};

export default WhatsAppChat;
