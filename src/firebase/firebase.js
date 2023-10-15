// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAebY4w1zkjWYFNAngw8Uzv53cnyF6NfYw",
  authDomain: "your-faith-client.firebaseapp.com",
  projectId: "your-faith-client",
  storageBucket: "your-faith-client.appspot.com",
  messagingSenderId: "400263445179",
  appId: "1:400263445179:web:88ac6a0652bbe4da89479e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app