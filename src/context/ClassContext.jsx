import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../lib/firebase_config";

const ClassContext = createContext();

const classSchema = {
  class_level: "",
  class_title: "",
  class_schedule: "",
  class_instructor: "",
  class_start_date: "",
  class_duration: "",
  class_status: "",
  class_type: "",
};

export const ClassProvider = ({ children }) => {
  const [classes, setClasses] = useState([]);
  const [classData, setClassData] = useState(classSchema);

  useEffect(() => {
    const q = query(collection(db, "classes"));

    const unsub = onSnapshot(q, (snap) => {
      setClasses(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        })),
      );
    });

    return () => unsub();
  }, []);

  const updateClassField = (field, value) => {
    setClassData((prev) => ({ ...prev, [field]: value }));
  };

  const resetClassData = () => {
    setClassData(classSchema);
  };

  const createClass = async () => {
    if (!classData.class_title) return alert("Title required");
    try {
      await addDoc(collection(db, "classes"), {
        ...classData,
        createdAt: serverTimestamp(),
      });
      resetClassData();
      //   alert("Class Created");
    } catch (err) {
      alert(err.message);
    }
  };

  const updateClass = async (id) => {
    try {
      const classRef = doc(db, "classes", id);
      await updateDoc(classRef, {
        ...classData,
        updatedAt: serverTimestamp(),
      });
      //   alert("Class Updated");
      resetClassData();
    } catch (err) {
      alert(err.message);
    }
  };

  const deleteClass = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await deleteDoc(doc(db, "classes", id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <ClassContext.Provider
      value={{
        classes,
        classData,
        setClassData,
        updateClassField,
        resetClassData,
        createClass,
        updateClass,
        deleteClass,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

export const useClassContext = () => useContext(ClassContext);
