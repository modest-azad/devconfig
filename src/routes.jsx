import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout";
import {Challanges} from './pages/Challanges.jsx';
import { Internship } from "./pages/Internship.jsx";
import { About } from "./pages/About.jsx";
import { Projects } from "./pages/Projects.jsx";

export default function Path() {
  return (
    <Routes>
      {/* default home page  */}
      <Route path="/" element={<Layout />} />

      {/* Navigate using navbar  */}
      <Route path="/challanges" element={<Challanges />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />

    </Routes>
  );
}
