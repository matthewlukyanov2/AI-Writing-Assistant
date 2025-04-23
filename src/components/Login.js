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
    const navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/ai");
      } catch (error) {
        alert(error.message);
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
        <button type="submit">Login</button>
      </form>
       </div>
      );
    };

export default Login;