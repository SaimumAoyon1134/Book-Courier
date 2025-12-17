import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaHeart, FaClipboardList } from "react-icons/fa";

const Sidebar = ({ collapsed }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 z-50
      ${collapsed ? "w-16" : "w-64"}`}
    >
      <div className="h-16 flex items-center justify-center border-b">
        <h1 className="font-bold text-[#a2b527] text-lg">
          {collapsed ? "📚" : "BookShelf"}
        </h1>
      </div>

      <nav className="mt-4 space-y-1">
        <SidebarItem to="/dashboard" icon={<FaHome />} text="Dashboard" collapsed={collapsed} />
        <SidebarItem to="/dashboard/myorders" icon={<FaClipboardList />} text="Orders" collapsed={collapsed} />
        <SidebarItem to="/dashboard/wishlist" icon={<FaHeart />} text="Wishlist" collapsed={collapsed} />
        <SidebarItem to="/dashboard/books" icon={<FaBook />} text="My Books" collapsed={collapsed} />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ to, icon, text, collapsed }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition
      ${isActive ? "bg-[#a2b527] text-white" : "text-gray-600 hover:bg-gray-100"}`
    }
  >
    <span className="text-lg">{icon}</span>
    {!collapsed && <span>{text}</span>}
  </NavLink>
);

export default Sidebar;