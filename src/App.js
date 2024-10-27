import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  AboutPage,
  FaiHistoryPage,
  FencingHistoryPage,
  HomePage,
  MfaHistoryPage,
  ShivchhatrapatiAwardeePage,
  DistAwardeePlayerPage,
  ResearchPage,
  NationalMedalistPage,
  InternationalMedalistPage,
  OfficeBearerPage,
  NisCoachesPage,
  AnnualReportPage,
  GalleryPage,
  PhotosGallery,
  ContactPage,

} from "./Screens/Website";
import WebsiteLayout from "./Layouts/Website/WebsiteLayout";
// import ModalPage from "./Screens/Website/Modal/ModalPage";

export default function App() {
  return (
    <Router>
      {/* <ModalPage /> */}
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/history/fencing" element={<FencingHistoryPage />} />
          <Route path="/history/mfa" element={<MfaHistoryPage />} />
          <Route path="/history/fai" element={<FaiHistoryPage />} />
          <Route
            path="/achievement/shivchhatrapati-awardee"
            element={<ShivchhatrapatiAwardeePage />}
          />
          <Route
            path="/achievement/dist-sport-awardee"
            element={<DistAwardeePlayerPage />}
          />
          <Route
            path="/achievement/national-medalist"
            element={<NationalMedalistPage />}
          />
          <Route
            path="/achievement/international-medalist"
            element={<InternationalMedalistPage />}
          />
          <Route path="/achievement/research" element={<ResearchPage />} />
          <Route path="/team/office-bearer" element={<OfficeBearerPage />} />
          <Route path="/team/nis-coaches" element={<NisCoachesPage />} />
          <Route path="/team/annual-report" element={<AnnualReportPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/photos-gallery" element={<PhotosGallery />} />
          <Route path="/contact" element={<ContactPage />} />
        
        </Route>
      </Routes>
    </Router>
  );
}
