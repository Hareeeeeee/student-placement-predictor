import { Link, useLocation } from "react-router-dom";
import {
  FaGraduationCap,
  FaHome,
  FaChartPie,
  FaHistory,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import useTheme from "../../hooks/useTheme";

export default function Navbar() {
  const location = useLocation();
  const { darkMode, toggleTheme } = useTheme();

  const navLink = (path) =>
    `flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${
      location.pathname === path
        ? "bg-blue-600 text-white shadow-md"
        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:h-16 sm:items-center sm:justify-between sm:px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2 text-white shadow-md">
            <FaGraduationCap className="text-xl" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-800 transition-colors dark:text-white sm:text-xl">
              Placement Predictor
            </h1>

            <p className="text-xs text-slate-500 transition-colors dark:text-slate-400">
              AI Powered Prediction
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">

          <Link to="/" className={navLink("/")}>
            <FaHome />
            Home
          </Link>

          <Link to="/dashboard" className={navLink("/dashboard")}>
            <FaChartPie />
            Dashboard
          </Link>

          <Link to="/history" className={navLink("/history")}>
            <FaHistory />
            History
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-slate-300 p-2 transition-all duration-300 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700"
            title="Toggle Theme"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-slate-700 dark:text-white" />
            )}
          </button>

        </div>
      </div>
    </nav>
  );
}