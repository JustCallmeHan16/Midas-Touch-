import { useLang } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLang();
  return (
    <header className="relative bg-linear-to-br from-red-700 to-red-900 text-white py-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-yellow-400/20 to-transparent rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-red-50 max-w-2xl mb-10 leading-relaxed">
          {t.heroSub}
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-4 px-8 rounded-full transition transform hover:-translate-y-1 shadow-lg"
        >
          {t.cta}
        </a>
      </div>
    </header>
  );
};

export default Hero;
