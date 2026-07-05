import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  query,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase_config";

const FireContext = createContext();
const provider = new GoogleAuthProvider();

const ADMINS = ["hanwinsolo2020@gmail.com"];

export const FireContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState("Beginner");
  const [courseData, setCourseData] = useState({ title: "", content: "" });

  // Auth Listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u && ADMINS.includes(u.email)) {
        setUser(u);
      } else {
        if (u) signOut(auth); // Force logout if not an admin
        setUser(null);
      }
      setLoading(false); // Ensure loading stops once auth check finishes
    });
    return unsub;
  }, []);

  // Real-time Course List
  useEffect(() => {
    if (!user) {
      setCourses([]);
      return;
    }
    const q = query(collection(db, "courses"));
    const unsub = onSnapshot(q, (snap) => {
      setCourses(snap.docs.map((d) => d.id));
    });
    return unsub;
  }, [user]);

  // Fetch Selected Course Data
  useEffect(() => {
    if (!user || !currentCourse) return;

    const fetchDoc = async () => {
      try {
        const snap = await getDoc(doc(db, "courses", currentCourse));
        setCourseData(snap.exists() ? snap.data() : { title: "", content: "" });
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchDoc();
  }, [user, currentCourse]);

  // Auth Actions
  const login = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  // Firestore Actions
  const save = async () => {
    try {
      await setDoc(
        doc(db, "courses", currentCourse),
        {
          ...courseData,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      );
      alert("Cloud Synced");
    } catch (err) {
      alert("Sync failed: " + err.message);
    }
  };

  const create = async (name) => {
    if (!name) return;
    try {
      await setDoc(doc(db, "courses", name), {
        title: name,
        content: "",
        createdAt: serverTimestamp(),
      });
      setCurrentCourse(name);
    } catch (err) {
      alert("Creation failed: " + err.message);
    }
  };

  const remove = async (id) => {
    if (window.confirm(`Delete ${id}?`)) {
      try {
        await deleteDoc(doc(db, "courses", id));
        if (currentCourse === id) setCurrentCourse("");
      } catch (err) {
        alert("Delete failed: " + err.message);
      }
    }
  };

  const value = {
    user,
    loading,
    courses,
    currentCourse,
    setCurrentCourse,
    courseData,
    setCourseData,
    login,
    logout,
    save,
    create,
    remove,
  };

  return <FireContext.Provider value={value}>{children}</FireContext.Provider>;
};

export const useFireContext = () => useContext(FireContext);