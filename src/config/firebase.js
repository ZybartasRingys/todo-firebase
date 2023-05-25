/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-7noKKdzV_uYccQimDC1MkXaQQbZZDWw",
  authDomain: "todo-577f8.firebaseapp.com",
  projectId: "todo-577f8",
  storageBucket: "todo-577f8.appspot.com",
  messagingSenderId: "81933447192",
  appId: "1:81933447192:web:4fdc6023b90fb6ecb7136d",
  measurementId: "G-5NJHMC919L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
