import { useAdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { admin, loading, login } = useAdminContext();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Verifying Admin Status...
          </p>
        </div>
      </div>
    );
  }

  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa] px-6 font-sans">
        <div className="w-full max-w-md bg-white border border-slate-100 rounded-[2.5rem] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center">
          {/* Lock Icon */}
          <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-20"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 relative"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>

          <div className="space-y-3 mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 leading-none">
              Access Denied<span className="text-red-600">.</span>
            </h2>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-65 mx-auto">
              This workspace is reserved for{" "}
              <span className="text-slate-900 font-bold">
                Authorized Personnel
              </span>{" "}
              only.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={login}
              className="w-full rounded-2xl bg-slate-950 py-4 font-bold text-white hover:bg-slate-800 active:scale-[0.98] transition-all duration-300 uppercase text-xs tracking-widest flex items-center justify-center gap-2"
            >
              Verify Admin Identity
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 font-bold text-slate-500 hover:text-slate-900 hover:border-slate-900 active:scale-[0.98] transition-all duration-300 uppercase text-[10px] tracking-widest"
            >
              Return to Homepage
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-50">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
              Midas Touch Security
            </p>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
