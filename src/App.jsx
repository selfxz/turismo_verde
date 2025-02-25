import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    // Verifica si el script ya está cargado
    if (!window.watsonAssistantChatOptions) {
      window.watsonAssistantChatOptions = {
        integrationID: "d1654bdb-b8ba-48e6-add3-e170af5ed583", // Reemplaza con tu Integration ID
        region: "au-syd", // Reemplaza con tu región
        serviceInstanceID: "50228bd7-591e-4d77-b684-e9ba80a0d4f1", // Reemplaza con tu Service Instance ID
        onLoad: async (instance) => {
          await instance.render(); // Renderiza el widget flotante
        },
      };

      // Cargar el script de Watson Assistant
      const script = document.createElement("script");
      script.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
        (window.watsonAssistantChatOptions.clientVersion || "latest") +
        "/WatsonAssistantChatEntry.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;