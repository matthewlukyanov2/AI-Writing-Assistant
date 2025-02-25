import React from "react";
import { auth } from "./firebase-config";

function App() {
  console.log("Firebase Auth:", auth); // Log firebase
  return <h1>Firebase Connected Successfully </h1>;
}

export default App;

