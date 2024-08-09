// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq2EsY35eGoTdW0sR7QC8P2ThE0jZ69fw",
  authDomain: "auth-all-details.firebaseapp.com",
  projectId: "auth-all-details",
  storageBucket: "auth-all-details.appspot.com",
  messagingSenderId: "975947534764",
  appId: "1:975947534764:web:454274750662cd58a4ea09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;