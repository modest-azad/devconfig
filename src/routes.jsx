import { Routes, Route } from "react-router-dom";
// Pages 
import { Layout } from "./layout";
import { ChallangesPage } from './pages/ChallangesPage/ChallangesPage.jsx';
import { InternshipPage } from "./pages/InternshipPage/InternshipPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage.jsx";
import { AboutPage } from "./pages/AboutPage/AboutPage.jsx";

export default function Path() {
  return (
    <Routes>
      {/* default home page  */}
      <Route path="/" element={<Layout />} />

      {/* Navigate using navbar  */}
      <Route path="/challanges" element={<ChallangesPage />} />
      <Route path="/internship" element={<InternshipPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />

    </Routes>
  );
}
