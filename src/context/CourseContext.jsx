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

const CourseContext = createContext();

const courseSchema = {
  course_language: "",
  course_level: "",
  course_title: "",
  course_outline: "",
  course_queue: 0,
};

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [courseData, setCourseData] = useState(courseSchema);

  useEffect(() => {
    const q = query(collection(db, "courses"), orderBy("course_queue", "asc"));

    const unsub = onSnapshot(q, (snap) => {
      setCourses(
        snap.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        })),
      );
    });

    return () => unsub();
  }, []);

  const updateCourseField = (field, value) => {
    setCourseData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetCourseData = () => {
    setCourseData(courseSchema);
  };

  const createCourse = async () => {
    if (!courseData.course_title) {
      alert("Title required");
      return;
    }
    try {
      await addDoc(collection(db, "courses"), {
        ...courseData,
        createdAt: serverTimestamp(),
      });
      resetCourseData();
      // alert("Course Created");
    } catch (err) {
      alert(err.message);
    }
  };

  const updateCourse = async (id) => {
    try {
      const courseRef = doc(db, "courses", id);
      await updateDoc(courseRef, {
        ...courseData,
        updatedAt: serverTimestamp(),
      });
      // alert("Course Updated");
      resetCourseData();
    } catch (err) {
      alert(err.message);
    }
  };

  const deleteCourse = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await deleteDoc(doc(db, "courses", id));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        courseData,
        updateCourseField,
        resetCourseData,
        createCourse,
        updateCourse,
        deleteCourse,
        setCourseData,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => useContext(CourseContext);
