import { useContext, useState } from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import { CalendarPlus, LayoutDashboard } from "lucide-react";
import { UserContext } from "../../context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../api/auth";

const navItems = [
  {
    label: "Dashboard",
    icon: <LayoutDashboard strokeWidth={1.5} />,
    link: "/user/dashboard",
  },
  {
    label: "Add Booking",
    icon: <CalendarPlus strokeWidth={1.5} />,
    link: "/user/add-booking",
  },
];

export default function UserLayout() {
  const userContext = useContext(UserContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useQuery({
    queryKey: ["user"],
    queryFn: () => getUserDetails(),
    onSuccess: (data) => {
      if (data) {
        userContext?.setUser(data);
      }
    },
    enabled: !!userContext,
  });

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navItems={navItems}
      />

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
