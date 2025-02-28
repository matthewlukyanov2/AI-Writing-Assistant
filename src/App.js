import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <div>
      <h1>AI Writing Assistant</h1>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Logout /> {/* Show logout button */}
      </div>
    </Router>
  );
}

export default App;

