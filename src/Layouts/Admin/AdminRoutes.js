// src/route.js
import { FaUserGraduate, FaSignOutAlt } from "react-icons/fa"; // Importing icons
import { IoNewspaperOutline } from "react-icons/io5";
import {
  MdOutlineSystemSecurityUpdateGood,
  MdOutlineViewCarousel,
} from "react-icons/md";
import { PiNotificationBold } from "react-icons/pi";
import { TfiGallery } from "react-icons/tfi";
import { GrAchievement } from "react-icons/gr";
import { FaAward } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { TbCarouselHorizontal } from "react-icons/tb";
import { MdAddAPhoto } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { HiMiniServerStack } from "react-icons/hi2";
import { FaRegFilePdf } from "react-icons/fa6";
const routes = [
  {
    name: "Home",
    path: "/admin/home-slider",
    icon: <FaHome />, // Icon for Dashboard
    subRoutes: [
      {
        name: "Carousel",
        path: "/admin/home-slider",
        icon: <TbCarouselHorizontal />, // Icon for Admission
        component: "Admission",
      },
      {
        name: "HomePhoto",
        path: "/admin/home-photo",
        icon: <MdAddAPhoto />, // Icon for Attendance
        component: "Attendance",
      },
    ], // You will load Dashboard component dynamically
  },



  {
    name: "Achievements",
    path: "/admin/achievements/state-sports-award",
    icon: <GrAchievement />, // Icon for Students
    subRoutes: [
      {
        name: "State  Award",
        path: "/admin/achievements/state-sports-award",
        icon: <FaAward />, // Icon for Admission
        component: "Admission",
      },
      {
        name: "Dist  Award",
        path: "/admin/achievements/dist-sports-award",
        icon: <FaAward />, // Icon for Attendance
        component: "Attendance",
      },
      {
        name: "Medalist",
        path: "/admin/achievements/medalist",
        icon: <FaRegFilePdf />, // Icon for Attendance
        component: "Attendance",
      },
      {
        name: "Research",
        path: "/admin/achievements/research",
        icon: <GiArchiveResearch />, // Icon for Attendance
        component: "Attendance",
      },
    ],
  },



  {
    name: "Team",
    path: "/admin/team/office-bearer",
    icon: <RiTeamLine />, // Icon for Students
    subRoutes: [
      {
        name: "OfficeBearer",
        path: "/admin/team/office-bearer",
        icon: <HiOutlineBuildingOffice2 />, // Icon for Admission
        component: "Admission",
      },
      {
        name: "NisCoaches",
        path: "/admin/team/nis-coaches",
        icon: <HiMiniServerStack />, // Icon for Attendance
        component: "Attendance",
      },
      {
        name: "AnnualReport",
        path: "/admin/team/annual-report",
        icon: <FaRegFilePdf />, // Icon for Attendance
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
