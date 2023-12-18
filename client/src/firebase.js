// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c016b.firebaseapp.com",
  projectId: "mern-auth-c016b",
  storageBucket: "mern-auth-c016b.appspot.com",
  messagingSenderId: "609458748478",
  appId: "1:609458748478:web:31376d62b5434073eae56f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);