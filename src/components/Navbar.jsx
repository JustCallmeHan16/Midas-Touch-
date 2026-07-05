import { useState } from "react";
import { useLang } from "../context/LanguageContext";

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img className="w-15" src="../MIDAS_TOUCH_LOGO.png" alt="" />
          <strong className="text-red-700 text-xl font-bold tracking-tight">
            MIDAS TOUCH
          </strong>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">
          <a href="#about" className="hover:text-red-700 transition">
            {t.about}
          </a>
          <a href="#programs" className="hover:text-red-700 transition">
            {t.programs}
          </a>
          <a href="#portfolio" className="hover:text-red-700 transition">
            {t.teachers}
          </a>
          <a
            href="#contact"
            className="bg-red-700 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-red-800 transition"
          >
            {t.trial}
          </a>
          {/* Language Switcher */}
          <div className="flex bg-slate-100 rounded-full p-1 border border-slate-200">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition hover:cursor-pointer ${lang === "en" ? "bg-red-700 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("mm")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition hover:cursor-pointer ${lang === "mm" ? "bg-red-700 text-white shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
            >
              MM
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-slate-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-slate-100 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 text-lg font-semibold text-slate-800">
          <a href="#about" onClick={toggleMenu} className="hover:text-red-700">
            {t.about}
          </a>
          <a
            href="#programs"
            onClick={toggleMenu}
            className="hover:text-red-700"
          >
            {t.programs}
          </a>
          <a
            href="#teachers"
            onClick={toggleMenu}
            className="hover:text-red-700"
          >
            {t.teachers}
          </a>

          <div className="flex gap-4 pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setLang("en");
                toggleMenu();
              }}
              className={`flex-1 py-2 rounded-lg border ${lang === "en" ? "bg-red-700 text-white border-red-700" : "bg-white border-slate-200"}`}
            >
              English
            </button>
            <button
              onClick={() => {
                setLang("mm");
                toggleMenu();
              }}
              className={`flex-1 py-2 rounded-lg border ${lang === "mm" ? "bg-red-700 text-white border-red-700" : "bg-white border-slate-200"}`}
            >
              မြန်မာ
            </button>
          </div>

          <a
            href="#contact"
            onClick={toggleMenu}
            className="text-center bg-red-700 text-white py-3 rounded-xl shadow-lg shadow-red-700/20"
          >
            {t.trial}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
