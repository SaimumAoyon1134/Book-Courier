import React from "react";
import { FaBars } from "react-icons/fa";

const Topbar = ({ collapsed, setCollapsed }) => {
  return (
    <header className="h-16 bg-white shadow flex items-center px-4">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-xl text-gray-600 hover:text-[#a2b527]"
      >
        <FaBars />
      </button>

      <h2 className="ml-4 font-semibold text-lg text-gray-700">
        Dashboard
      </h2>
    </header>
  );
};

export default Topbar;