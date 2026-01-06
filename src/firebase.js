// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1lKdkdLfHL2ry8YYtve-TdzUvpBVO4gM",
  authDomain: "music-5a8b2.firebaseapp.com",
  projectId: "music-5a8b2",
  storageBucket: "music-5a8b2.firebasestorage.app",
  messagingSenderId: "538568610370",
  appId: "1:538568610370:web:46cc7ceead21c162aa93db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
