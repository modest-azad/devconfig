import { Routes, Route } from "react-router-dom";
// Pages 
import { Layout } from "./layout";
import { ChallangesPage } from './pages/ChallangesPage.jsx';
import { InternshipPage } from "./pages/InternshipPage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";

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
