import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-slate-50">
      <div className="w-full max-w-sm bg-white rounded-3xl p-10 shadow-xl text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-900">
          <span className="text-lg font-black">404</span>
        </div>

        <div className="mb-10 space-y-2">
          <h2 className="text-2xl font-black tracking-tight text-slate-900">
            Page Not Found<span className="text-red-500">.</span>
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            The page you’re looking for doesn’t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate("/")}
            className="w-full rounded-xl bg-slate-900 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-slate-800 active:scale-95"
          >
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full rounded-xl border border-slate-200 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 transition hover:text-slate-900 hover:border-slate-900 active:scale-95"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
