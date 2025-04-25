import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVfcLlRqo2q2ln2sfnnNo-BfnhTVN80SI",
    authDomain: "ai-assistant-fe44a.firebaseapp.com",
    projectId: "ai-assistant-fe44a",
    storageBucket: "ai-assistant-fe44a.appspot.com",
    messagingSenderId: "206896037043",
    appId: "1:206896037043:web:ab7ee753ce40ded65cc4c6",
    measurementId: "G-P6L4FXW4RR"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);