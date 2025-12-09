// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxo0Ux0no0RbuEpdXQv_NZVd0FlQg6Q6Y",
  authDomain: "bookcourier-5fe9d.firebaseapp.com",
  projectId: "bookcourier-5fe9d",
  storageBucket: "bookcourier-5fe9d.firebasestorage.app",
  messagingSenderId: "397495004062",
  appId: "1:397495004062:web:a3664994133580c7eec48f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);