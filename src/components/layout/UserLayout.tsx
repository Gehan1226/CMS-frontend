import { useState } from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard strokeWidth={1.5} />,
    link: "/user/dashboard",
  },
];

export default function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} navItems={navItems} />

      <div className="flex-1 flex flex-col">
        <div className="md:hidden p-4 bg-white shadow">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-800"
          >
            ☰
          </button>
        </div>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
