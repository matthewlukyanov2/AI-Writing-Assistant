import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import "./Home.css";

const Login = () => {
    console.log("Login page loaded!");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      setErrorMessage("");
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/ai");
      } catch (error) {
        if (error.code === "auth/invalid-credential" || error.code === "auth/user-not-found" || error.code === "auth/wrong-password") {
          setErrorMessage("Incorrect email or password.");
        } else {
          setErrorMessage("An error occurred. Please try again.");
        }
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

      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

<div className="forgot-password">
    <Link to="/reset-password">Forgot password?</Link>
  </div>
         {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
       </div>
      );
    };

export default Login;