import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAn_C55Figp-lMWAV-phAtTTcKYpRuwBh0",
  authDomain: "pipsgang-70631.firebaseapp.com",
  projectId: "pipsgang-70631",
  storageBucket: "pipsgang-70631.firebasestorage.app",
  messagingSenderId: "744503976064",
  appId: "1:744503976064:web:bdd262d4a9b85b86814665",
  measurementId: "G-7HL1XZ8MWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);