import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

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

import {
  LoginPage,
  Carousel,
  HomePhoto,
  NewsShow,
  Mahafencingshow,
  BlueCardshow,
  StateSportsAward,
  DistSportsAwaed,
  Medalist,
  Research,
  OfficeBearer,
  NisCoaches,
  AnnualReport,
  Gallery,
  NumberStatsshow,
  OurInspirationsshow,
  OfficeBearerStaticShow,
  GALLERYshow,
} from "./Screens/Admin";

import AdminLayout from "./Layouts/Admin/AdminLayout";
import WebsiteLayout from "./Layouts/Website/WebsiteLayout";

export default function App() {
  return (
    <Router>
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
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/home-slider" element={<Carousel />} />
          <Route path="/admin/home-photo" element={<HomePhoto />} />
          <Route path="/admin/news-show" element={<NewsShow />} />
          <Route path="/admin/mahafencing" element={<Mahafencingshow />} />
          <Route path="/admin/blue-card" element={<BlueCardshow />} />
          <Route path="/admin/number-stats" element={<NumberStatsshow />} />
          <Route
            path="/admin/our-inspirations"
            element={<OurInspirationsshow />}
          />
          <Route
            path="/admin/office-bearers-static"
            element={<OfficeBearerStaticShow />}
          />
            <Route
            path="/admin/show-gallery"
            element={<GALLERYshow />}

          />
          
          <Route
            path="/admin/achievements/state-sports-award"
            element={<StateSportsAward />}
          />
          <Route
            path="/admin/achievements/dist-sports-award"
            element={<DistSportsAwaed />}
          />
          <Route path="/admin/achievements/medalist" element={<Medalist />} />
          <Route path="/admin/achievements/research" element={<Research />} />
          <Route path="/admin/team/office-bearer" element={<OfficeBearer />} />
          <Route path="/admin/team/nis-coaches" element={<NisCoaches />} />
          <Route path="/admin/team/annual-report" element={<AnnualReport />} />
          <Route path="/admin/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}
