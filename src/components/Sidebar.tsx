import { Link, useLocation } from "react-router-dom";
import { SidebarNavItem } from "../types/common";
import { User2Icon } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: SidebarNavItem[];
};

export default function Sidebar({
  isOpen,
  onClose,
  navItems,
}: Readonly<SidebarProps>) {
  const location = useLocation();
  const userContext = useContext(UserContext);

  if (!userContext) {
    return <div>Error: User context is not available</div>;
  }

  const { user } = userContext;

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-60 bg-green-100 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0 shadow-[4px_0_10px_rgba(0,0,0,0.1)]`}
    >
      <div className="flex items-center justify-between px-4 py-4 md:hidden">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-white">
          ✕
        </button>
      </div>

      <div className="flex flex-col justify-between h-full">
        <nav className="flex flex-col mt-5 px-4 space-y-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.link;

            return (
              <Link to={item.link} key={item.link}>
                <button
                  type="button"
                  className={`flex items-center w-full px-5 py-2 text-medium text-gray-900 rounded-lg 
                ${isActive ? "bg-green-300" : "hover:bg-green-200"}`}
                >
                  {item.icon}
                  <span className="ms-3 whitespace-nowrap font-semibold">
                    {item.label}
                  </span>
                </button>
              </Link>
            );
          })}
        </nav>

        <div className="flex px-8 gap-3 mb-5 text-gray-600 font-semibold">
          <User2Icon className="w-6 h-6" />
          <p>{user?.userName}</p>
        </div>
      </div>
    </div>
  );
}
