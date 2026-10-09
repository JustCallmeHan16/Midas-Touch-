const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-white mb-2">
          Midas Touch
        </h3>

        <p className="text-sm mb-6">
          Empowering students to achieve their language learning goals.
        </p>

        <a
          href="tel:+959765242246"
          className="block text-sm hover:text-white transition-colors"
          aria-label="Call Midas Touch"
        >
          +95 9 765 242 246
        </a>

        <div className="mt-4 flex justify-center items-center gap-6 text-sm">
          <a
            href="https://www.facebook.com/midastlc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Facebook"
          >
            Facebook
          </a>

          <a
            href="https://www.tiktok.com/@yourspanishtutor1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="TikTok"
          >
            TikTok
          </a>

          <a
            href="https://t.me/midastouchspanish"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Telegram"
          >
            Telegram
          </a>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Midas Touch. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;