// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ONJPLslh2cLlR9GWRnOvF6cME3W2VeI",
  authDomain: "chit-chat-e3438.firebaseapp.com",
  projectId: "chit-chat-e3438",
  storageBucket: "chit-chat-e3438.appspot.com",
  messagingSenderId: "475805827979",
  appId: "1:475805827979:web:bac97686c23858aa8fa58e",
  measurementId: "G-XJ71THCQLY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
