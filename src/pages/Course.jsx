import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import SkeletonCard from "../components/SkeletonCard";
import { useCourseContext } from "../context/CourseContext";
import { useClassContext } from "../context/ClassContext";

const Course = () => {
  const { courses } = useCourseContext();
  const { classes } = useClassContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isClassesLoading, setIsClassesLoading] = useState(true);
  const { level } = useParams();
  const navigate = useNavigate();

  // Filter courses based on URL level parameter
  const filteredCourses = useMemo(() => {
    if (!level) return courses;
    return courses.filter(
      (c) => c.course_title?.toLowerCase() === level.toLowerCase(),
    );
  }, [courses, level]);

  // Filter classes directly matching the URL level
  const filteredClasses = useMemo(() => {
    if (!level) return classes;
    return classes.filter(
      (cls) => cls.class_level?.toLowerCase() === level.toLowerCase(),
    );
  }, [classes, level]);

  useEffect(() => {
    if (courses.length >= 0) {
      setIsLoading(false);
    }
  }, [courses]);

  useEffect(() => {
    if (classes.length >= 0) {
      setIsClassesLoading(false);
    }
  }, [classes]);

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

        {/* Class Section */}
        <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-xl shadow-slate-200/50 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-red-700 text-xs font-black uppercase tracking-[0.3em]">
                Available Sessions
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 mt-1">
                {level} Class Schedule
              </h2>
            </div>
            <div className="h-1.5 w-16 bg-red-700"></div>
          </div>

          {isClassesLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-slate-200/80 rounded-2xl bg-slate-50/60 animate-pulse">
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-1/3"></div>
              </div>
              <div className="p-6 border border-slate-200/80 rounded-2xl bg-slate-50/60 animate-pulse">
                <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-1/3"></div>
              </div>
            </div>
          ) : filteredClasses.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredClasses.map((cls, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-50/60 border border-slate-200/80 rounded-2xl p-6 hover:border-red-700/50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-red-700 transition-colors">
                        {cls.class_title}
                      </h3>
                      {cls.class_status && (
                        <span className="shrink-0 px-3 py-1 bg-red-700/10 text-red-700 text-[10px] font-black uppercase tracking-wider rounded-full">
                          {cls.class_status}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-xs text-slate-600 font-medium">
                      <div className="flex items-center gap-2">
                        <span className="text-red-700 font-bold">🕒</span>
                        <span>{cls.class_schedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-700 font-bold">👤</span>
                        <span>
                          Instructor:{" "}
                          <strong className="text-slate-800">
                            {cls.instructor}
                          </strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold tracking-wide">
                      Duration:{" "}
                      <span className="text-slate-700">{cls.duration}</span>
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-700"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50/50 border border-dashed border-slate-200 rounded-2xl">
              <p className="text-2xl mb-2">📭</p>
              <p className="text-xs text-slate-800 font-bold uppercase tracking-wider">
                No classes available for this level right now.
              </p>
              <p className="text-[11px] text-slate-500 mt-1 max-w-sm mx-auto">
                Check back soon or reach out directly for private session
                availability and custom schedules!
              </p>
            </div>
          )}
        </div>

        <br />

        {/* Card Grid / Syllabus Section */}
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
                    .filter((phrase) => phrase.trim() !== "")
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

        <br />

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
