import { useLang } from "../context/LanguageContext";

const Portfolio = () => {
  const { lang } = useLang();

  return (
    <section
      id="portfolio"
      className="min-h-screen bg-white flex flex-col md:flex-row overflow-hidden"
    >
      {/* LEFT SIDE: Content Area */}
      <div className="w-full md:w-3/5 flex flex-col justify-center p-8 md:p-24 bg-white order-2 md:order-1">
        {/* Header Tag */}
        <div className="mb-12">
          <span className="text-red-700 font-black tracking-[0.5em] text-[10px] block mb-4 uppercase">
            {lang === "en" ? "MEET OUR INSTRUCTOR" : "စပိန်ဘာသာဆရာမ"}
          </span>
          <div className="h-1 w-20 bg-slate-900" />
        </div>

        {/* Name: Massive & Bold */}
        <h2 className="text-6xl md:text-[9rem] font-black leading-[0.8] tracking-tighter text-slate-900 mb-12 uppercase">
          CHERRY
          <br />
          <span className="text-red-700">LINN</span>
          <span className="text-slate-300 block text-2xl md:text-4xl tracking-normal mt-4">
            @ ZAHRA
          </span>
        </h2>

        {/* Credentials & Bio */}
        <div className="max-w-xl space-y-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12">
            <div>
              <p className="text-[10px] font-black text-red-700 tracking-widest uppercase mb-1">
                Position
              </p>
              <p className="text-sm font-black text-slate-900 uppercase">
                {lang === "en" ? "LOCAL SPANISH TEACHER" : "စပိန်ဘာသာဆရာမ"}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black text-red-700 tracking-widest uppercase mb-1">
                Experience
              </p>
              <p className="text-sm font-black text-slate-900 uppercase">
                5+ YEARS
              </p>
            </div>
          </div>

          <p className="text-base md:text-xl text-slate-500 font-bold leading-relaxed uppercase tracking-wide border-l-4 border-slate-100 pl-6">
            {lang === "en"
              ? "LEARN FROM A CERTIFIED AND EXPERIENCED SPANISH TEACHER WITH A FRIENDLY APPROACH."
              : "အသိအမှတ်ပြုလက်မှတ်ရ ဝါရင့်စပိန်ဘာသာဆရာမထံမှ နွေးထွေးပျူငှာသော သင်ကြားမှုပုံစံဖြင့် စနစ်တကျသင်ယူပါ။"}
          </p>

          {/* Social/Action Line */}
          <div className="pt-8">
            <button className="group flex items-center gap-6 text-[10px] font-black tracking-[0.4em] text-slate-900 uppercase">
              {lang === "en" ? "CONNECT NOW" : "ဆက်သွယ်ရန်"}
              <div className="h-0.5 w-12 bg-red-700 group-hover:w-24 transition-all duration-500" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Large Portrait with Split Effect */}
      <div className="relative w-full md:w-2/5 h-[60vh] sm:h-[70vh] md:h-screen bg-slate-100 order-1 md:order-2 overflow-hidden flex items-center justify-center">
        {/* Teacher's Image */}
        <img
          src="/INSTRUCTOR_PROFILE.jpg"
          alt="INSTRUCTOR_PROFILE"
          className="w-full h-full object-cover object-center"
        />

        {/* Large Background Initial */}
        <div className="absolute -bottom-10 -right-10 opacity-[0.05] select-none pointer-events-none">
          <span className="text-[30vw] font-black text-slate-900">C</span>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
