import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the AI Assistant</h1>
      <p>Your friendly tool to improve your writing with AI!</p>
      <div className="home-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
