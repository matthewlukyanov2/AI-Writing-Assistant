import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { collection, doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; 

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Save username to Firestore with correct UID
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
      });
  
      navigate("/ai", { state: { registered: true } });
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

      <h1 className="login-title">Sign Up</h1>

      <form className="login-form" onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
