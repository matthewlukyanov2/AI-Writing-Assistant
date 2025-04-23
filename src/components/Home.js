import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.css';

const facts = [
    "Did you know? The first chatbot was made in 1966!",
    "Did you know? GPT stands for Generative Pre-trained Transformer!",
    "Did you know? AI can generate images, music, and code!",
    "Did you know? ELIZA was the first chatbot ever created!",
    "Did you know? Alan Turing imagined thinking machines back in 1950!"
  ];

const Home = () => {
    const [currentFact, setCurrentFact] = useState(facts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * facts.length);
      setCurrentFact(facts[random]);
    }, 5000); // change fact every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phone-frame">
        
        <div className="notch">
        <div className="camera-dot"></div>
        </div>
      <h1>Welcome to the AI Assistant</h1>
      <p className="typing">Your friendly tool to improve your writing with AI!</p>
      <div className="pulse-icon">💡</div>
      <div className="phone-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Register</button>
        </Link>
      </div>
      <div className="fact-bubble">
  <p>{currentFact}</p>
</div>
    </div>
  );
};

export default Home;
