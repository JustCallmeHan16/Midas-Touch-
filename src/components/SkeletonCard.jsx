const SkeletonCard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-200/50 flex flex-col animate-pulse">
      <div className="mb-8">
        <div className="h-6 w-24 bg-slate-200 rounded mb-4"></div>
        <div className="h-3 w-40 bg-slate-100 rounded"></div>
        <div className="w-12 h-1 bg-red-200 mt-6"></div>
      </div>
      <div className="space-y-4 grow">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-red-100"></div>
            <div className="h-4 w-full bg-slate-100 rounded"></div>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between">
        <div className="h-2 w-16 bg-slate-100 rounded"></div>
        <div className="h-2 w-2 rounded-full bg-red-200"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
