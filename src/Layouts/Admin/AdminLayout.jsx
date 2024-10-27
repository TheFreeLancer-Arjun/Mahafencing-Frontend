import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const userName = "User"; // Replace with dynamic user name if needed

  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={setIsSidebarOpen}
        />

        {/* Main content area */}
        <div className="flex-grow">
          {/* TopBar */}
          <TopBar userName={userName} toggleSidebar={toggleSidebar} />

          {/* Main page content */}
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
