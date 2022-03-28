// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_S2CC62ScSFAMc5jnWKzZ-7s0VNbsz-E",
  authDomain: "sparta-react-basic-3c392.firebaseapp.com",
  projectId: "sparta-react-basic-3c392",
  storageBucket: "sparta-react-basic-3c392.appspot.com",
  messagingSenderId: "858183199542",
  appId: "1:858183199542:web:110975d0ea8d9ed482e197",
  measurementId: "G-TQRH9VNM2E",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
