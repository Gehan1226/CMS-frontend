import { Home, Settings, User } from "lucide-react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: Readonly<SidebarProps>) {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}
    >
      {/* Mobile Header */}
      <div className="flex items-center justify-between px-4 py-4 md:hidden">
        <h2 className="text-lg font-bold">Menu</h2>
        <button onClick={onClose} className="text-white">
          ✕
        </button>
      </div>

      {/* Nav Links */}
      <nav className="mt-10 px-4 space-y-4">
        <a
          href="#"
          className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
        >
          <Home size={18} /> Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
        >
          <User size={18} /> Profile
        </a>
        <a
          href="#"
          className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded"
        >
          <Settings size={18} /> Settings
        </a>
      </nav>
    </div>
  );
}
