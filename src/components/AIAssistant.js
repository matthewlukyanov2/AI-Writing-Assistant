import React, { useState } from "react";
import { getAIResponse } from "../utils/openai";

const AIAssistant = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  
  };

  return (
    <div className="ai-container">
      <h2>AI Writing Assistant</h2>
      <textarea
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      
      <h3>Output:</h3>
      <p>{output}</p>
    </div>
  );


export default AIAssistant;
