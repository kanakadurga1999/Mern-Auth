// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-d1444.firebaseapp.com",
  projectId: "mern-auth-d1444",
  storageBucket: "mern-auth-d1444.appspot.com",
  messagingSenderId: "391342410751",
  appId: "1:391342410751:web:a04ffe7dce5cd844a3b5ca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);