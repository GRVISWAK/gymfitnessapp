import React, { useState } from "react";
import './Chatgpt.css'
const ChatbotComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="chat">
      <button class="chatbotbtn" onClick={handleToggle} style={isExpanded ? styles.buttonExpanded : styles.button}>
        Chatbot
      </button>
      {isExpanded && (
        <div style={styles.container} className="chatgpt1">
          <iframe
            title="Dialogflow Chatbot"
            width="350"
            height="350"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/9bf4f8a4-9ed2-4bf7-b715-73c3a2a55488"
            style={styles.iframe}
          ></iframe>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "80px",
    height: "80px",
    backgroundColor: "black",
    color: "black",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
  },
  buttonExpanded: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
    zIndex: 1000,
    transform: "scale(1.1)", // Slightly larger to indicate expansion
  },
  container: {
    position: "fixed",
    bottom: "90px", // Adjust based on button size and position
    right: "20px",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
    borderRadius: "8px",
  },
  iframe: {
    border: "none",
    borderRadius: "8px",
  },
};

export default ChatbotComponent;
