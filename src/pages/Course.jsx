import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import SkeletonCard from "../components/SkeletonCard";
import { useCourseContext } from "../context/CourseContext";

const Course = () => {
  const { courses } = useCourseContext();
  const [isLoading, setIsLoading] = useState(true);
  const { level } = useParams();
  const navigate = useNavigate();

  const filteredCourses = useMemo(() => {
    if (!level) return courses;
    return courses.filter(
      (c) => c.course_title?.toLowerCase() === level.toLowerCase(),
    );
  }, [courses]);

  useEffect(() => {
    if (courses.length > 0) {
      setIsLoading(false);
    }
  }, [courses]);

  const backToHome = () => navigate("/");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900">
            Course - {level}
            <span className="text-red-700">.</span>
          </h1>
          <div className="h-2 w-24 bg-red-700 mt-4"></div>
        </header>

        {/* Card Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          {isLoading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map((m) => (
              <div
                key={m.id}
                className="group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:border-red-700 transition-all duration-500 flex flex-col"
              >
                <header className="relative mb-8">
                  <div className="text-red-700 text-xs font-black uppercase tracking-[0.3em] mb-2">
                    <p className="text-xl">{m.course_level}</p>
                    <br />
                    {m.course_language === "EN"
                      ? "Syllabus Modules"
                      : "သင်ရိုးညွှန်းတမ်းများ"}
                  </div>
                  <div className="w-12 h-1 bg-red-700 mt-4 group-hover:w-24 transition-all duration-500"></div>
                </header>

                <ul className="space-y-4 grow">
                  {(m.course_outline || "")
                    .split("/")
                    .filter((phrase) => phrase.trim() !== "") // Remove empty strings
                    .map((phrase, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4 group/item"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-700 ring-4 ring-red-700/10 group-hover/item:scale-150 transition-transform"></span>
                        <span className="text-slate-600 font-medium leading-tight group-hover/item:text-slate-900 transition-colors">
                          {phrase.trim()}
                        </span>
                      </li>
                    ))}
                </ul>

                <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {m.course_language} Section
                  </span>
                  <div className="h-2 w-2 rounded-full bg-red-700"></div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center opacity-50 uppercase tracking-widest font-bold">
              OOPS! No {level} Modules Found
            </div>
          )}
        </div>

        {/* CTA */}
        {!isLoading && (
          <button
            onClick={backToHome}
            className="flex items-center mx-auto hover:cursor-pointer gap-2 px-8 py-3 border-2 border-slate-900 rounded-full text-slate-900 font-black uppercase text-xs tracking-widest hover:bg-red-700 hover:border-red-700 hover:text-white transition-all duration-300 active:scale-95"
          >
            Back To Home
          </button>
        )}
      </div>
    </div>
  );
};

export default Course;
