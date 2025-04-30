import { Link, useLocation } from "react-router-dom";
import { SidebarNavItem } from "../types/common";

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

  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-60 bg-green-100 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0 shadow-[4px_0_10px_rgba(0,0,0,0.1)]`}
    >
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-4 md:hidden">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-white">
          ✕
        </button>
      </div>

      <nav className="mt-5 px-4 space-y-4">
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
    </div>
  );
}
