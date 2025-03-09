import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import AIAssistant from "./components/AIAssistant";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
      <h1>AI Writing Assistant</h1>
      
      {/* Buttons for navigation */}
      <div className="button-container">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/ai">
          <button>Use AI Assistant</button>
          </Link>
        </div>

      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/ai" element={<AIAssistant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

