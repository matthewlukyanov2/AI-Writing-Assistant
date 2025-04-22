import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";
import AIAssistant from "./components/AIAssistant";
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
      
      <Routes>
      <Route path="/" element={<Home />} />
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

