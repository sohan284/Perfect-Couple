// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5p1aoEKpK-ufYmXvr8bu2F6SZ1ZbYnRo",
  authDomain: "perfect-couple-90811.firebaseapp.com",
  projectId: "perfect-couple-90811",
  storageBucket: "perfect-couple-90811.appspot.com",
  messagingSenderId: "902023800606",
  appId: "1:902023800606:web:8b58024c27305967824b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;