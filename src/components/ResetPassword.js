import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";
import "./Login.css"; 

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Check your inbox!");
      setError("");
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="phone-frame login-frame">
      <div className="notch">
        <div className="camera-dot"></div>
      </div>
      <div className="back-arrow">
        <Link to="/">←</Link>
      </div>
      <h1 className="login-title">Reset Password</h1>
      <form className="login-form" onSubmit={handleReset}>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {message && <div style={{ color: "green" }}>{message}</div>}
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Send Reset Email</button>
      </form>
    </div>
  );
};

export default ResetPassword;
