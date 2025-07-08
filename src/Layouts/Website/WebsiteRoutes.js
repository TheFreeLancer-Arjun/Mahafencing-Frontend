
const WebsiteRoutes = [
  { path: "/", label: "HOME" },
  { path: "/about", label: "ABOUT" },
  { path: "/gallery", label: "GALLERY" },
  { path: "/contact", label: "CONTACT" },

  {
    label: " History",
    subroute: [
      { path: "/history/fencing", label: "Fencing History" },
      { path: "/history/fai", label: "FAI History" },
      { path: "/history/mfa", label: "MFA History" },
    ],
  },
  {
    label: " Achievements",
    subroute: [
      { path: "/achievement/shivchhatrapati-awardee", label: "Shivchhatrapati Awardee" },
      { path: "/achievement/dist-sport-awardee", label: "Dist. Sports Awardee" },
      { path: "/achievement/national-medalist", label: "National Medalist" },
      { path: "/achievement/international-medalist", label: "International Medalist" },
      { path: "/achievement/research", label: "Research" },
    ],
  },
  {
    label: " Ourteam",
    subroute: [
      { path: "/team/office-bearer", label: "Office Bearers" },
      { path: "/team/nis-coaches", label: "NIS Coaches" },
      { path: "https://mahafencing.in/assets/QUALIFIED%20REFEREE.pdf", label: "Qualified Referee" },
      { path: "/team/annual-report", label: "Annual Report" },
    ],
  },
  {
    label: "Results",
    subroute: [
      { path: "https://www.fencingindia.org/national-results", label: "National Results" },
      { path: "https://fie.org/competitions", label: "International Results" },
    ],
  },
  {
    label: "LoginRegister",
    subroute: [
      { path: "https://register.mahafencing.in/candidate", label: "Candidate Login" },
      { path: "https://register.mahafencing.in/candidate/registration", label: "New Registration" },
    ],
  },
 
];

export default WebsiteRoutes;