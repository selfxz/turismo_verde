import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Sección de la imagen con el eslogan */}
      <div className="image-section">
        <div className="slogan-container">
          <h1 className="home-slogan">Explora el mundo con Turismo Verde</h1>
          <Link to="/about">
            <button className="about-button">Conocenos</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
