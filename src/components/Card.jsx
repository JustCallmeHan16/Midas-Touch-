const Card = ({ badge, title, children }) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 transition duration-300">
      {badge && (
        <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold mb-4">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{children}</p>
    </div>
  );
};

export default Card;
