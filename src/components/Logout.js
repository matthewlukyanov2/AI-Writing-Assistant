import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        alert("Logout successful!");
        navigate("/login"); // Redirect to login page
      } catch (error) {
        alert(error.message);
      }
    };
  
    return <button onClick={handleLogout}>Logout</button>;
  };

export default Logout;