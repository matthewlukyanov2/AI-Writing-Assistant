import React, { useState, useEffect } from "react";
import { getAIResponse } from "../utils/togetherAI";
import { useLocation, Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi"; 
import "./AIAssistant.css"; 
import "./Home.css";

const AIAssistant = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  
  // LocalStorage 
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("ai-history");
    return saved ? JSON.parse(saved) : [];
  });

  const [copied, setCopied] = useState(false);

  // Save to localStorage 
  useEffect(() => {
    localStorage.setItem("ai-history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (location.state?.registered) {
      setShowPopup(true);
  
      // Clear it after 3 seconds
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
  
      // Reset the state (optional)
      window.history.replaceState({}, document.title);
      return () => clearTimeout(timer);
    }
  }, [location.state]);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    try {
      const result = await getAIResponse(input);
      setOutput(result);

      const updated = [{ input, output: result }, ...history].slice(0, 5);
      setHistory(updated);
    } catch (err) {
      setOutput("There was an error getting a response.");
      console.error(err);
    }
  };


  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem("ai-history"); 
  };

  const handleHistoryClick = (historyItem) => {
    setInput(historyItem.input);
    setOutput(historyItem.output);
  };

  return (
    <div className="phone-frame login-frame">
      <div className="notch">
        <div className="camera-dot"></div>
      </div>
      <div className="settings-icon">
  <Link to="/settings">
    <FiSettings size={24} />
  </Link>
</div>
{showPopup && (
  <div className="popup-message">
    🎉 Account registered and logged in!
  </div>
)}


      <h2 className="login-title">AI Writing Assistant</h2>

      <textarea
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="ai-textarea"
      />
      <button className="ai-button" onClick={handleGenerate}>Enhance Text</button>

      <h3>Output:</h3>
      <p>{output}</p>

      {output && (
        <div>
          <button onClick={handleCopy}>Copy to Clipboard</button>
          {copied && <span style={{ marginLeft: "10px", color: "green" }}>Text copied!</span>}
        </div>
      )}

      <h3>Recent History:</h3>
      {history.length === 0 ? (
        <p>No history available.</p>
      ) : (
        <ul>
          {history.map((historyItem, index) => (
            <li key={index}>
              <p>{historyItem.output}</p>
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleClearHistory}>Clear History</button>
    </div>
  );
};


export default AIAssistant;
