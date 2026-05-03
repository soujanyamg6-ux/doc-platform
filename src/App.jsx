import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">

      {/* SIDEBAR */}
      {sidebarOpen && <Sidebar />}

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* CONTENT */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

      </div>

    </div>
  );
}