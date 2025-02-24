import React from "react";
import "../styles/chatbot.css";

const ChatModal = ({ onClose }) => {
  return (
    <div className="chat-modal">
      <div className="chat-header">
        <h2>ChatBot</h2>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="chat-body">
        <p>¡Hola! ¿En qué puedo ayudarte?</p>
      </div>
    </div>
  );
};

export default ChatModal;