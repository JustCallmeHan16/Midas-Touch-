import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase_config";

const AdminContext = createContext();
const provider = new GoogleAuthProvider();

const ADMINS = ["hanwinsolo2020@gmail.com", "mtlc010423@gmail.com"];

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user && ADMINS.includes(user.email)) {
        setAdmin(user);
      } else {
        if (user) signOut(auth);
        setAdmin(null);
      }
      setLoading(false);
    });

    return unsub;
  }, []);

  const login = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  return (
    <AdminContext.Provider value={{ admin, loading, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
