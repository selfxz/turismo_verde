import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ChatModal from "./ChatModal";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ChatButton onClick={() => setIsOpen(true)} />
      {isOpen && <ChatModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default ChatBot;
