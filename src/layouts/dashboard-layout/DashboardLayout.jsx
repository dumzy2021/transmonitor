import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
const DashboardLayout = () => {
  return (
    <div className="main-wrapper">
      <div className="navbar-container">
        <Navbar />
      </div>
      <Sidebar />
      <div className="dashbord-content">
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
