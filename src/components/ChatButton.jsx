import React from "react";
import "../styles/chatbot.css";

const ChatButton = ({ onClick }) => {
  return (
    <button className="chat-button" onClick={onClick}>
      💬
    </button>
  );
};

export default ChatButton;