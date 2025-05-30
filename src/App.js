import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate  } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";
import Settings from "./components/Settings";
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
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/ai" element={<AIAssistant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

