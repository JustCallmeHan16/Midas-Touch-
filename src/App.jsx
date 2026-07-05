import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { CourseProvider } from "./context/CourseContext";
import { AdminProvider } from "./context/AdminContext";
import { ClassProvider } from "./context/ClassContext";

// Pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Course from "./pages/Course";

// Private Routes
import ProtectedRoute from "./private/ProtectedRoute";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <LanguageProvider>
      <CourseProvider>
        <ClassProvider>
          <AdminProvider>
            <Router>
              <ScrollToTop />
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/course/:level" element={<Course />} />

                {/* Protected Admin Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />

                {/* 404 Catch-all (Optional but recommended) */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </AdminProvider>
        </ClassProvider>
      </CourseProvider>
    </LanguageProvider>
  );
};

export default App;
