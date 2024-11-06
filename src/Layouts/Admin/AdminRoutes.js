// src/route.js
import { FaUserGraduate, FaSignOutAlt } from "react-icons/fa"; // Importing icons
import { IoNewspaperOutline } from "react-icons/io5";
import {
  MdOutlineSystemSecurityUpdateGood,
  MdOutlineViewCarousel,
} from "react-icons/md";
import { PiNotificationBold } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";

const routes = [
  {
    name: "Home",
    path: "/admin/home-slider",
    icon: <MdOutlineViewCarousel />, // Icon for Dashboard
    subRoutes: [
      {
        name: "Carousel",
        path: "/admin/home-slider",
        icon: <IoNewspaperOutline />, // Icon for Admission
        component: "Admission",
      },
      {
        name: "HomePhoto",
        path: "/admin/home-photo",
        icon: <MdOutlineSystemSecurityUpdateGood />, // Icon for Attendance
        component: "Attendance",
      },
    ], // You will load Dashboard component dynamically
  },



  {
    name: "Achievements",
    path: "/admin/achievements/state-sports-award",
    icon: <PiNotificationBold />, // Icon for Students
    subRoutes: [
      {
        name: "State Sports Award",
        path: "/admin/achievements/state-sports-award",
        icon: <IoNewspaperOutline />, // Icon for Admission
        component: "Admission",
      },
      {
        name: "Dist Sports Award",
        path: "/admin/achievements/dist-sports-award",
        icon: <MdOutlineSystemSecurityUpdateGood />, // Icon for Attendance
        component: "Attendance",
      },
      {
        name: "Medalist",
        path: "/admin/achievements/medalist",
        icon: <MdOutlineSystemSecurityUpdateGood />, // Icon for Attendance
        component: "Attendance",
      },
      {
        name: "Research",
        path: "/admin/achievements/research",
        icon: <MdOutlineSystemSecurityUpdateGood />, // Icon for Attendance
        component: "Attendance",
      },
    ],
  },



  {
    name: "Team",
    path: "/admin/team/office-bearer",
    icon: <PiNotificationBold />, // Icon for Students
    subRoutes: [
      {
        name: "OfficeBearer",
        path: "/admin/team/office-bearer",
        icon: <IoNewspaperOutline />, // Icon for Admission
        component: "Admission",
      },
      {
        name: "NisCoaches",
        path: "/admin/team/nis-coaches",
        icon: <MdOutlineSystemSecurityUpdateGood />, // Icon for Attendance
        component: "Attendance",
      },
      {
        name: "AnnualReport",
        path: "/admin/team/annual-report",
        icon: <MdOutlineSystemSecurityUpdateGood />, // Icon for Attendance
        component: "Attendance",
      },
    ],
  },
  {
    name: "Gallery",
    path: "/admin/gallery",
    icon: <TfiGallery />, // Icon for Accounts
  },
 
  {
    name: "Logout",
    path: "/login",
    icon: <FaSignOutAlt />, // Icon for Logout
    component: "Logout",
  },
];

export default routes;
