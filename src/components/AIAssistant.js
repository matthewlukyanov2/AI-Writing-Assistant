import React, { useState } from "react";
import { getAIResponse } from "../utils/openai";

const AIAssistant = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleGenerate = async () => {
    const result = await getAIResponse(input);
    setOutput(result);
  };

  return (
    <div className="ai-container">
      <h2>AI Writing Assistant</h2>
      <textarea
        placeholder="Enter text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleGenerate}>Enhance Text</button>
      <h3>Output:</h3>
      <p>{output}</p>
    </div>
  );
};

export default AIAssistant;
