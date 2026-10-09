import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDh0ubzvzT4ZotzPzBhn1qSKoOetwAF8sk",
  authDomain: "midas-touch-34ad0.firebaseapp.com",
  projectId: "midas-touch-34ad0",
  storageBucket: "midas-touch-34ad0.firebasestorage.app",
  messagingSenderId: "576651910486",
  appId: "1:576651910486:web:c9ef72a4554a7f3780caf7",
  measurementId: "G-71R5JCQCFW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
