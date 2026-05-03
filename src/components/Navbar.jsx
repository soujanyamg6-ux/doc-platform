import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `px-3 py-2 rounded-md transition ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-600 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b shadow-sm">

      <div className="flex items-center justify-between px-5 py-3">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-600">
          DocPlatform
        </h1>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex items-center gap-6">

          <NavLink to="/" className={linkStyle}>
            Dashboard
          </NavLink>

          <NavLink to="/upload" className={linkStyle}>
            Upload
          </NavLink>

          <NavLink to="/login" className={linkStyle}>
            Login
          </NavLink>

        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">

          {/* Notification */}
          <button className="relative text-xl">
            🔔
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="relative">

            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold"
            >
              U
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border rounded-lg shadow-lg">

                <p className="px-4 py-2 text-sm border-b">
                  User Profile
                </p>

                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  Settings
                </button>

                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
                  Logout
                </button>

              </div>
            )}

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-5 pb-4 flex flex-col gap-3">

          <NavLink to="/" className={linkStyle} onClick={() => setOpen(false)}>
            Dashboard
          </NavLink>

          <NavLink to="/upload" className={linkStyle} onClick={() => setOpen(false)}>
            Upload
          </NavLink>

          <NavLink to="/login" className={linkStyle} onClick={() => setOpen(false)}>
            Login
          </NavLink>

        </div>
      )}

    </header>
  );
}