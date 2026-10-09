import { Link } from "react-router";
import { useLang } from "../context/LanguageContext";
import { useCourseContext } from "../context/CourseContext";

const Program = () => {
  const { lang } = useLang();
  const { courses } = useCourseContext();

  const programs = [
    {
      id: "01",
      level: "LEVEL A1",
      title_en: "BEGINNER",
      title_mm: "အခြေခံအဆင့်",
      desc_en:
        "PRONUNCIATION, BASIC GRAMMAR, DAILY CONVERSATIONS, AND ESSENTIAL VOCABULARY.",
      desc_mm:
        "အသံထွက်လေ့ကျင့်ခန်း၊ အခြေခံသဒ္ဒါ၊ နေ့စဉ်သုံးစကားပြောသင်ခန်းစာများနှင့်အတူ ဝေါဟာရများကို စနစ်တကျသင်ယူခြင်း။",
    },
    {
      id: "02",
      level: "LEVEL A2",
      title_en: "ELEMENTARY",
      title_mm: "အခြေခံအဆင့်မြင့်",
      desc_en:
        "COVERING 4 SKILLS WITH CONVERSATION PRACTICE AND REAL-LIFE SCENARIOS.",
      desc_mm:
        "အခြေခံစကားပြောလေ့ကျင့်မှုနှင့်အတူ လက်တွေ့ဘဝတွင် အသုံးချနိုင်မည့် အခြေအနေများကို Skills ၄ မျိုးစလုံးဖြင့် သင်ကြားခြင်း။",
    },
    {
      id: "03",
      level: "LEVEL B1/B2",
      title_en: "INTERMEDIATE",
      title_mm: "အလယ်အလတ်အဆင့်",
      desc_en:
        "SPEAK CONFIDENTLY, UNDERSTAND EFFORTLESSLY, AND NAVIGATE REAL-LIFE SITUATIONS WITH EASE.",
      desc_mm:
        "ယုံကြည်မှုရှိစွာ စကားပြောဆိုနိုင်ရန်၊ အလွယ်တကူ နားလည်သဘောပေါက်ရန်နှင့် လက်တွေ့ဘဝအခြေအနေများကို ကျွမ်းကျင်စွာ ကိုင်တွယ်ဖြေရှင်းနိုင်ရန်။",
    },
    {
      id: "04",
      level: "LEVEL C1",
      title_en: "ADVANCED",
      title_mm: "အဆင့်မြင့်ကျွမ်းကျင်မှု",
      desc_en:
        "PROFESSIONAL SPANISH TRAINING WITH DEBATE SKILLS, EXAM PREPARATION, AND NATIVE-LEVEL PROFICIENCY.",
      desc_mm:
        "ပရော်ဖက်ရှင်နယ် အခြေအတင်ဆွေးနွေးမှု စွမ်းရည်၊ စာမေးပွဲဖြေဆိုရန် ပြင်ဆင်မှုနှင့် မိခင်ဘာသာစကားအဆင့် ကျွမ်းကျင်တတ်မြောက်မှု ရရှိစေခြင်း။",
    },
  ];

  const activePrograms = programs.filter((program) => {
    const matchingCourse = courses.find(course => course.course_title === program.title_en);
    return matchingCourse && matchingCourse.active === true;
  });
  
  console.log(courses);
  
  console.log(activePrograms);
  

  return (
    <section id="programs" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <span className="text-red-700 font-black tracking-[0.4em] text-xs block mb-6">
            CURRICULUM
          </span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]">
            {lang === "en" ? "SPANISH" : "စပိန်ဘာသာ"}
            <br />
            <span className="text-red-700">
              {lang === "en" ? "PROGRAMS" : "သင်တန်းများ"}
            </span>
          </h2>
        </div>

        {/* List Content */}
        <div className="border-t-2 border-slate-900">
          {activePrograms.map((prog) => (
            <div
              key={prog.id}
              className="group flex flex-col md:flex-row gap-8 py-16 border-b border-slate-100 transition-all duration-500 hover:bg-slate-50/80 hover:px-6"
            >
              {/* ID & LEVEL */}
              <div className="w-full md:w-40 shrink-0">
                <span className="block text-sm font-black text-slate-300 group-hover:text-red-700 transition-colors duration-300 mb-2">
                  {prog.id}
                </span>
                <span className="block text-[10px] font-black tracking-widest text-slate-900">
                  {prog.level}
                </span>
              </div>

              {/* TITLE */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                  {lang === "en" ? prog.title_en : prog.title_mm}
                </h3>
              </div>

              {/* DESCRIPTION & CTA */}
              <div className="flex-1 max-w-xl">
                <p className="text-sm md:text-base text-slate-500 font-bold leading-relaxed mb-8 uppercase tracking-wide">
                  {lang === "en" ? prog.desc_en : prog.desc_mm}
                </p>
                <Link
                  to={`/course/${prog.title_en.toLowerCase()}`}
                  className="flex items-center gap-4 text-[10px] font-black tracking-[0.25em] text-slate-900 uppercase group/btn"
                >
                  {lang === "en" ? "Explore Course" : "အသေးစိတ်ကြည့်ရန်"}
                  <div className="h-0.5 w-10 bg-red-700 group-hover/btn:w-20 transition-all duration-500" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;
