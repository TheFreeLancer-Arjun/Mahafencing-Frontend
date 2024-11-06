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
  const dashboardTitle =
    "Shri Chhatrapati Shivaji College of Pharmacy's Dashboard"; // Replace with dynamic Path name if needed
  
  return (
    <>
      <div className="flex bg-yellow-50">
        {/* Sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={setIsSidebarOpen}
         
        />

        {/* Main content area */}
        <div className="flex-grow">
          {/* TopBar */}
          <TopBar
            userName={userName}
            dashboardTitle={dashboardTitle}
            toggleSidebar={toggleSidebar}
          />

          {/* Main page content */}
          <div className="bg-yellow-50">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
