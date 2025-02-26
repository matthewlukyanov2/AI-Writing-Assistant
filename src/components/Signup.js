import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
        navigate("/login"); 
      } catch (error) {
        alert(error.message);
      }
    };
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
        </form>
      </div>
    );
  };
  

export default Signup;