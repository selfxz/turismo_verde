import React from "react";

const ContactForm = () => {
  return (
    <form className="contact-form">
      <div style={{ display: "flex", gap: "10px" }}>
        <input type="text" placeholder="Nombre" required />
        <input type="text" placeholder="Apellido" required />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <input type="email" placeholder="Email *" required />
        <input type="text" placeholder="Asunto" required />
      </div>
      <textarea placeholder="Déjanos un mensaje..." rows="6"></textarea>
      <button type="submit">ENVIAR</button>
    </form>
  );
};

export default ContactForm;
