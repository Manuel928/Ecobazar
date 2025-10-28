// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUMYm1txJovEv45fKBO6ZxWh4xicyZTtA",
  authDomain: "ecobazar-ea832.firebaseapp.com",
  projectId: "ecobazar-ea832",
  storageBucket: "ecobazar-ea832.firebasestorage.app",
  messagingSenderId: "600486647427",
  appId: "1:600486647427:web:0795cf5b9b523323522db6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app)