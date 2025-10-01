"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/+919717220321"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Promozione Branding"
      className="fixed bottom-18 right-5 z-50 flex items-center justify-center 
                 w-12 h-12 rounded-full bg-green-500 text-white shadow-lg 
                 hover:bg-green-600 transition-all duration-300 animate-bounce"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
