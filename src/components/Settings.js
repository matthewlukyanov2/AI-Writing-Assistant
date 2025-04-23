import React from "react";
import { Link } from "react-router-dom";
import "./Settings.css";
import "./Home.css";

const Settings = () => {
  return (
    <div className="phone-frame login-frame">
      <div className="notch">
        <div className="camera-dot"></div>
      </div>

      <div className="back-arrow">
        <Link to="/ai">←</Link>
      </div>

      <h1 className="login-title">Settings</h1>
      <div className="settings-content">
        <p>⚙️ Settings coming soon...</p>
        {/* Add any toggles or account info here later! */}
      </div>
    </div>
  );
};

export default Settings;
