import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./WebsiteNavbar";
import WebsiteRoutes from "./WebsiteRoutes";

import Footer from "./WebsiteFooter";

export default function WebsiteLayout() {
  return (
    <div className="bg-white   overflow-hidden">
      {/* Navigation Bar */}
      <Navbar routes={WebsiteRoutes} />

      {/* Outlet for Dynamic Content */}
      <div className="content overflow-hidden">
        <Outlet /> {/* This will render the content of the active route */}
      </div>
      <Footer />
    </div>
  );
}
