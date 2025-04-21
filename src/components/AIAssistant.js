import React, { useState } from "react";
import { getAIResponse } from "../utils/togetherAI";
import "./AIAssistant.css"; 

const AIAssistant = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);

  const handleGenerate = async () => {
    const result = await getAIResponse(input);
    setOutput(result);

  // Save the input to history
  setHistory([{ input, output: result }, ...history].slice(0, 5)); // Limit to last 5 entries
};

const handleClearHistory = () => {
  setHistory([]);
};

const handleHistoryClick = (historyItem) => {
  // Load the input back into the input field
  setInput(historyItem.input); 
  // Display the output in the output area
  setOutput(historyItem.output); 
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

{output && (
  <button onClick={() => navigator.clipboard.writeText(output)}>
    Copy to Clipboard
  </button>
)}

 {/* Display recent input-output history */}
 <h3>Recent History:</h3>
      <ul>
        {history.map((historyItem, index) => (
          <li key={index}>
           
            <p>{historyItem.output}</p>
          </li>
        ))}
      </ul>

      <button onClick={handleClearHistory}>Clear History</button>

    </div>
  );
};


export default AIAssistant;
