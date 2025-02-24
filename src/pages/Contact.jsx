import React from "react";
import "../styles/contact.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-overlay"></div>
          <h1 className="contact-title">CONTACTO</h1>
      <div className="contact-content">
        <div className="contact-info">
            <p className="contact-text">
            Estamos aquí para responder tus preguntas y ayudarte en
            lo que necesites. Contáctanos y te responderemos lo
            antes posible.
            </p>
            <p className="contact-email">1184413@senati.pe</p>
            <p className="contact-phone">+51 937-003-995</p>
            
        </div>
        <div className="contact-form-container">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
