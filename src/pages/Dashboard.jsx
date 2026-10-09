import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCourseContext } from "../context/CourseContext";
import { useClassContext } from "../context/ClassContext";

const Dashboard = () => {
  const {
    courses,
    courseData,
    setCourseData,
    updateCourseField,
    updateCourse,
    deleteCourse,
  } = useCourseContext();

  const {
    classes,
    classData,
    setClassData,
    updateClassField,
    createClass,
    updateClass,
    deleteClass,
  } = useClassContext();

  const [editingId, setEditingId] = useState(null);
  const [editType, setEditType] = useState(null);
  const [activeTab, setActiveTab] = useState("courses");

  const navigate = useNavigate();

  const eidtSetters = {
    course: setCourseData,
    class: setClassData,
  };

  const handleEditClick = (entity, type) => {
    const setter = eidtSetters[type];

    if (setter) {
      setter(entity);
      setEditingId(entity.id);
      setEditType(type);
    }
  };

  // =========================
  // COURSE
  // =========================
  const handleCourseEditClick = (course) => {
    setCourseData(course);
    setEditingId(course.id);
    setEditType("course");
  };

  const handleCourseCreateClick = () => {
    setCourseData({
      course_title: "",
      course_level: "",
      course_language: "",
      course_outline: "",
      course_queue: 0,
    });
    setEditType("course");
    setEditingId(null);
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    await updateCourse(editingId);
    resetEdit();
  };

  // =========================
  // CLASS
  // =========================
  const handleClassEditClick = (c) => {
    setClassData(c);
    setEditingId(c.id);
    setEditType("class");
  };

  const handleClassCreateClick = () => {
    setClassData({
      class_title: "",
      class_level: "",
      class_schedule: "",
      instructor: "",
      start_date: "",
      duration: "",
      class_type: "",
      status: "inactive",
    });
    setEditType("class");
    setEditingId(null);
  };

  const handleClassSubmit = async (e) => {
    e.preventDefault();
    editingId ? await updateClass(editingId) : await createClass();
    resetEdit();
  };

  // =========================
  // COMMON
  // =========================
  const resetEdit = () => {
    setEditingId(null);
    setEditType(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-slate-800">
      {/* HEADER */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          <Link to={"/"}>MIDAS TOUCH</Link>
        </h1>
        <button
          onClick={() => navigate("/")}
          className="text-red-600 font-semibold"
        >
          Exit
        </button>
      </header>

      {/* TABS */}
      <div className="flex bg-white shadow mt-2">
        {["courses", "classes"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-semibold capitalize transition ${
              activeTab === tab
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <main className="max-w-4xl mx-auto p-4 space-y-4">
        {/* COURSES */}
        {activeTab === "courses" ? (
          <>
            <button
              onClick={handleCourseCreateClick}
              className="mb-8 px-6 py-2 border-2 border-slate-900 text-slate-900 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              + Add New Course
            </button>

            {courses.map((m) => (
              <div
                key={m.id}
                className="flex justify-between items-start p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-sm text-slate-900">
                      {m.course_title}
                    </h3>
                    <span className="text-[9px] font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      {m.course_level}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-2">
                    {m.course_language}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {m.course_outline}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <span
                    className={`text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-wider ${m.active ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-400"}`}
                  >
                    {m.active ? "active" : "inactive"}
                  </span>
                  <button
                    onClick={() => handleEditClick(m, "course")}
                    className="text-[10px] font-bold text-slate-400 hover:text-red-600 uppercase tracking-widest transition"
                  >
                    Edit
                  </button>
                  {/* <button
                    onClick={() => deleteCourse(m.id)}
                    className="text-[10px] font-bold text-slate-400 hover:text-red-600 uppercase tracking-widest transition"
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <button
              onClick={handleClassCreateClick}
              className="mb-8 px-6 py-2 border-2 border-slate-900 text-slate-900 text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              + Add New Class
            </button>

            {classes.map((c) => (
              <div
                key={c.id}
                className="flex justify-between items-start p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-sm text-slate-900">
                    {c.class_title} -{" "}
                    <span className="font-medium capitalize">
                      {c.class_type}
                    </span>
                  </h3>
                  <p className="text-[10px] font-bold text-red-600 uppercase tracking-widest mb-2">
                    {c.class_level}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-gray-500">
                    <span className="flex items-center gap-1">
                      🕒 {c.class_schedule}
                    </span>
                    <span className="flex items-center gap-1">
                      👨‍🏫 {c.instructor}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-wider ${c.status === "active" ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-400"}`}
                  >
                    {c.status}
                  </span>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEditClick(c, "class")}
                      className="text-[10px] font-bold text-slate-400 hover:text-red-600 uppercase tracking-widest transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteClass(c.id)}
                      className="text-[10px] font-bold text-slate-400 hover:text-red-600 uppercase tracking-widest transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </main>

      {/* COURSE MODAL */}
      {editType === "course" && (
        <Modal onClose={resetEdit}>
          <h2 className="text-lg font-bold">
            {editingId ? "Edit Course" : "Create Course"}
          </h2>

          <form onSubmit={handleCourseSubmit} className="space-y-3">
            <Input
              placeholder="Title"
              value={courseData.course_title || ""}
              onChange={(e) =>
                updateCourseField("course_title", e.target.value)
              }
            />
            <Input
              placeholder="Level"
              value={courseData.course_level || ""}
              onChange={(e) =>
                updateCourseField("course_level", e.target.value)
              }
            />
            <Input
              placeholder="Language"
              value={courseData.course_language || ""}
              onChange={(e) =>
                updateCourseField("course_language", e.target.value)
              }
            />
            <textarea
              className="w-full border p-2 rounded"
              placeholder="Outline"
              value={courseData.course_outline || ""}
              onChange={(e) =>
                updateCourseField("course_outline", e.target.value)
              }
            />
            <Input
              type="number"
              placeholder="Queue"
              value={courseData.course_queue || 0}
              onChange={(e) =>
                updateCourseField("course_queue", e.target.value)
              }
            />
            <select
              className="w-full border p-2 rounded"
              value={courseData.active ? "active" : "inactive"}
              onChange={(e) =>
                updateCourseField("active", e.target.value === "active")
              }
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <button className="w-full bg-red-600 text-white py-2 rounded">
              Save
            </button>
          </form>
        </Modal>
      )}

      {/* CLASS MODAL */}
      {editType === "class" && (
        <Modal onClose={resetEdit}>
          <h2 className="text-lg font-bold">
            {editingId ? "Edit Class" : "Create Class"}
          </h2>

          <form onSubmit={handleClassSubmit} className="space-y-3">
            <Input
              placeholder="Title"
              value={classData.class_title || ""}
              onChange={(e) => updateClassField("class_title", e.target.value)}
            />
            <Input
              placeholder="Level"
              value={classData.class_level || ""}
              onChange={(e) => updateClassField("class_level", e.target.value)}
            />
            <Input
              placeholder="Schedule"
              value={classData.class_schedule || ""}
              onChange={(e) =>
                updateClassField("class_schedule", e.target.value)
              }
            />
            <Input
              placeholder="Instructor"
              value={classData.instructor || ""}
              onChange={(e) => updateClassField("instructor", e.target.value)}
            />
            <Input
              type="date"
              value={classData.start_date || ""}
              onChange={(e) => updateClassField("start_date", e.target.value)}
            />
            <Input
              placeholder="Duration"
              value={classData.duration || ""}
              onChange={(e) => updateClassField("duration", e.target.value)}
            />

            <select
              className="w-full border p-2 rounded"
              value={classData.class_type}
              onChange={(e) => updateClassField("class_type", e.target.value)}
            >
              <option value="online class">Online Class</option>
              <option value="video recording class">
                Video Recording Class
              </option>
              <option value="in person class">In Person Class</option>
            </select>

            <select
              className="w-full border p-2 rounded"
              value={classData.status}
              onChange={(e) => updateClassField("status", e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <button className="w-full bg-red-600 text-white py-2 rounded">
              Save
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

// =========================
// REUSABLE COMPONENTS
// =========================

const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4">
    <div className="bg-white w-full max-w-lg rounded-xl p-6 space-y-4 shadow-lg">
      {children}
      <button onClick={onClose} className="w-full text-gray-500 text-sm">
        Cancel
      </button>
    </div>
  </div>
);

const Input = (props) => (
  <input
    {...props}
    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
  />
);

export default Dashboard;
