// src/route.js
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaFileInvoiceDollar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa"; // Importing icons

const routes = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaTachometerAlt />, // Icon for Dashboard
    component: "Dashboard", // You will load Dashboard component dynamically
  },
  {
    name: "Students",
    path: "/admin/students",
    icon: <FaUserGraduate />, // Icon for Students
    subRoutes: [
      {
        name: "Admission",
        path: "/admin/students/admission",
        icon: <FaUserGraduate />, // Icon for Admission
        component: "Admission",
      },
      {
        name: "Attendance",
        path: "/admin/students/attendance",
        icon: <FaUserGraduate />, // Icon for Attendance
        component: "Attendance",
      },
    ],
  },
  {
    name: "Accounts",
    path: "/admin/accounts",
    icon: <FaFileInvoiceDollar />, // Icon for Accounts
    subRoutes: [
      {
        name: "Fees",
        path: "/admin/accounts/fees",
        icon: <FaFileInvoiceDollar />, // Icon for Fees
        component: "Fees",
      },
      {
        name: "Due Report",
        path: "/admin/accounts/due-report",
        icon: <FaFileInvoiceDollar />, // Icon for Due Report
        component: "DueReport",
      },
    ],
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <FaCog />, // Icon for Settings
    subRoutes: [
      {
        name: "Change Password",
        path: "/admin/settings/change-password",
        icon: <FaCog />, // Icon for Change Password
        component: "ChangePassword",
      },
      {
        name: "Update Details",
        path: "/admin/settings/update-details",
        icon: <FaCog />, // Icon for Update Details
        component: "UpdateDetails",
      },
    ],
  },
  {
    name: "Logout",
    path: "/admin/logout",
    icon: <FaSignOutAlt />, // Icon for Logout
    component: "Logout",
  },
];

export default routes;
