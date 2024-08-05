// components/WhatsAppButton.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const whatsappNumber = "+918340561344"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="text-white w-10 h-10" />
    </a>
  );
};

export default WhatsAppButton;
