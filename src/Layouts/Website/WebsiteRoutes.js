import { FaBuilding, FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const WebsiteRoutes = [
  // { path: "/", label: "HOME", icon: <FaHome /> },
  { path: "/about", label: "ABOUT", icon: <FaInfoCircle /> },

  { path: "/gallery", label: "GALLERY", icon: <FaPhone /> },
  { path: "/contact", label: "CONTACT", icon: <FaPhone /> },

  {
    label: "HISTORY",
    icon: <FaInfoCircle />,
    submenu: [
      {
        path: "/history/fencing",
        label: "Fencing History",
        icon: <FaInfoCircle />,
      },
      {
        path: "/history/fai",
        label: "FAI History",
        icon: <FaInfoCircle />,
      },
      {
        path: "/history/mfa",
        label: "MFA History",
        icon: <FaInfoCircle />,
      },
    ],
  },
  {
    label: "ACHIEVEMENTS",
    icon: <FaBuilding />,
    submenu: [
      {
        path: "/achievement/shivchhatrapati-awardee",
        label: "Shivchhatrapati Awardee",
        icon: <FaInfoCircle />,
      },
      {
        path: "/achievement/dist-sport-awardee",
        label: "Dist. Sports Awardee",
        icon: <FaInfoCircle />,
      },
      {
        path: "/achievement/national-medalist",
        label: "National Medalist",
        icon: <FaInfoCircle />,
      },
      {
        path: "/achievement/international-medalist",
        label: "International Medalist",
        icon: <FaInfoCircle />,
      },
      {
        path: "/achievement/research",
        label: "Research",
        icon: <FaInfoCircle />,
      },
    ],
  },
  {
    label: "OUR TEAM",
    icon: <FaBuilding />,
    submenu: [
      {
        path: "/team/office-bearer",
        label: "Office Bearers",
        icon: <FaInfoCircle />,
      },
      // {
      //   path: "/team/sub-committee",
      //   label: "Sub Committee",
      //   icon: <FaInfoCircle />,
      // },
      {
        path: "/team/nis-coaches",
        label: "NIS Coaches",
        icon: <FaInfoCircle />,
      },
      {
        path: "https://mahafencing.in/assets/QUALIFIED%20REFEREE.pdf",
        label: "Qualified Referee",
        icon: <FaInfoCircle />,
      },
      {
        path: "/team/annual-report",
        label: "Annual Report",
        icon: <FaInfoCircle />,
      },
    ],
  },
  {
    label: "RESULTS",
    icon: <FaBuilding />,
    submenu: [
      {
        path: "https://www.fencingindia.org/national-results",
        label: "National Results",
        icon: <FaInfoCircle />,
      },
      {
        path: "https://fie.org/competitions",
        label: "International Results",
        icon: <FaInfoCircle />,
      },
    ],
  },

  {
    label: "LOGIN REGISTER",
    icon: <FaPhone />,
    submenu: [
      {
        path: "https://register.mahafencing.in/candidate",
        label: "Candidate Login",
        icon: <FaPhone />,
      },
      {
        path: "https://register.mahafencing.in/candidate/registration",
        label: "New Registration",
        icon: <FaPhone />,
      },
    ],
  },
  {
    path: "https://register.mahafencing.in/",
    label: "Department Login",
    icon: <FaPhone />,
  },
];

export default WebsiteRoutes;
