import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const API_KEY = import.meta.env.VITE_API_KEY;
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "midas-touch-34ad0.firebaseapp.com",
  projectId: PROJECT_ID,
  storageBucket: "midas-touch-34ad0.firebasestorage.app",
  messagingSenderId: "576651910486",
  appId: "1:576651910486:web:c9ef72a4554a7f3780caf7",
  measurementId: "G-71R5JCQCFW",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
