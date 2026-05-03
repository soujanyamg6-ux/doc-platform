import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkStyle = ({ isActive }) =>
    `block px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800"
    }`;

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 border-r p-5">

      <h1 className="text-2xl font-bold text-blue-600 mb-8">
        SaaS Panel
      </h1>

      <nav className="flex flex-col gap-2">

        <NavLink to="/" className={linkStyle}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/upload" className={linkStyle}>
          📤 Upload
        </NavLink>

        <NavLink to="/login" className={linkStyle}>
          🔐 Login
        </NavLink>

        <NavLink to="/signup" className={linkStyle}>
          🆕 Signup
        </NavLink>

      </nav>

    </div>
  );
}