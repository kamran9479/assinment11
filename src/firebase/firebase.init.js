// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBbENpbsKhzHsPuI9IVqBlOnRLuDBY3fs",
  authDomain: "food-sharing-60b49.firebaseapp.com",
  projectId: "food-sharing-60b49",
  storageBucket: "food-sharing-60b49.firebasestorage.app",
  messagingSenderId: "565105778316",
  appId: "1:565105778316:web:261c98dfdff2e3a7b725a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;