import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { PiBuildingsDuotone } from "react-icons/pi";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed((v) => !v);

  const navLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200
     ${isActive ? "bg-amber-700" : "hover:bg-amber-600"}
     text-white ${collapsed ? "justify-center text-base px-1" : ""}`;

  return (
    <aside className={`min-h-screen bg-amber-500 text-white flex flex-col
      ${collapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      {/* Top */}
      <div className="relative">
        <div className="flex items-center px-4 py-4">
          <Link to="/">
            <img
              src="/image.png"
              alt="Logo"
              className={`object-cover rounded-full transition-all duration-300
              ${collapsed ? "w-10 h-10" : "w-12 h-12"}`}
            />
          </Link>
          {!collapsed && (
            <div className="ml-3">
              <p className="font-semibold leading-tight">Amar Jessore</p>
              <p className="text-xs opacity-80">Dashboard</p>
            </div>
          )}
        </div>

        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white text-amber-600 rounded-full shadow-md border border-amber-200 hover:bg-amber-100 w-6 h-6 flex items-center justify-center"
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? "➡️" : "⬅️"}
        </button>
      </div>

      {/* Links */}
      <div className="flex-grow px-2 overflow-auto space-y-1">
        <NavLink to="/dashboard" className={navLinkStyle} title="Dashboard">
          <AiFillHome className="text-lg" />
          {!collapsed && "Dashboard"}
        </NavLink>

        <NavLink to="/dashboard/cms/about" className={navLinkStyle} title="About">
          <PiBuildingsDuotone className="text-lg" />
          {!collapsed && "About"}
        </NavLink>
      </div>

      {/* Bottom spacer */}
      <div className="px-2 py-4 border-t border-amber-700" />
    </aside>
  );
}
