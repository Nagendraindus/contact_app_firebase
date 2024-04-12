// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACwjtbnPiyzrW--tFwzpAZ-fyWRikTS8g",
  authDomain: "vite-contact-96f07.firebaseapp.com",
  projectId: "vite-contact-96f07",
  storageBucket: "vite-contact-96f07.appspot.com",
  messagingSenderId: "696520462960",
  appId: "1:696520462960:web:392a349520542d69be9ab5",
  measurementId: "G-DRBWVC3LZX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);