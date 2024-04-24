import React from 'react';
import './WhatsAppButton.css'
const WhatsAppButton = () => {
  const handleSendMessage = () => {
    const whatsappNumber = '+919392587332';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hello%20there!`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button className="whatsapp-button" onClick={handleSendMessage}>
      <img src="/whatsapp-img.png" alt="WhatsApp Icon" />
    </button>
  );
};

export default WhatsAppButton;
