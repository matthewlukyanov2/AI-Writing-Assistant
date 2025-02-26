import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
        </form>
      </div>
    );
  };
  

export default Signup;