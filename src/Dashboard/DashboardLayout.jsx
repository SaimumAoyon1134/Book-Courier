import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer";

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <Sidebar collapsed={collapsed} />

      <div
        className={`flex-1 transition-all duration-300 ${
          collapsed ? "ml-16" : "ml-64"
        }`}
      >
        <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />

        <main className="p-4 md:p-6"><Outlet/>
        </main>
       
      </div>
    </div>
  );
};

export default DashboardLayout;