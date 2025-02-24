import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Sección de la imagen */}
      <div className="about-image"></div>

      {/* Sección del texto */}
      <div className="about-text">
        <h1 className="about-title">Sobre Nosotros</h1>
        <p>
          En <span className="highlight">Turismo Verde</span>, creemos en un turismo responsable que respete la naturaleza y las comunidades locales.
          Nuestro objetivo es ofrecer experiencias auténticas que permitan a los viajeros conectar con el entorno de manera sostenible y consciente.
        </p>

        <p>
          Fundada por <b>Matías Lázaro</b>, <b>Issac Chunga</b> y <b>Fredy Salinas</b>, nuestra empresa nace de la pasión por explorar el mundo de una forma diferente, 
          priorizando el cuidado del medio ambiente y fomentando el desarrollo local. Diseñamos rutas y experiencias que minimizan el impacto ecológico y promueven 
          el respeto por la cultura y biodiversidad de cada destino.
        </p>

        <p>
          Nos comprometemos a brindarte aventuras inolvidables, en armonía con la naturaleza y con un enfoque de sostenibilidad. 
          Viajar con <span className="highlight">Turismo Verde</span> es descubrir el mundo con una nueva perspectiva: más consciente, más auténtica y más verde. 🌿🌍
        </p>

        <p className="about-cta">¡Acompáñanos en esta experiencia y sé parte del cambio!</p>
      </div>
    </div>
  );
};

export default About;
