// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy-s5RDiIlHapc_KM25tq-pX6be5k-1OM",
  authDomain: "e-store-ac59a.firebaseapp.com",
  projectId: "e-store-ac59a",
  storageBucket: "e-store-ac59a.firebasestorage.app",
  messagingSenderId: "820936869256",
  appId: "1:820936869256:web:aaa7cce4fd1a2ec5af263d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
