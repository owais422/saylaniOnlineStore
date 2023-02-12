// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfcCQqcyxLSNE40ypDS4Wa7QM3b_KZdtI",
  authDomain: "react-saylanionlinestore.firebaseapp.com",
  projectId: "react-saylanionlinestore",
  storageBucket: "react-saylanionlinestore.appspot.com",
  messagingSenderId: "299812157700",
  appId: "1:299812157700:web:66c595397e98705157b851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()