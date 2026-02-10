import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Loading from "./pages/Loading";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Guides from "./pages/Guides";
import Programmes from "./pages/Programmes";
import Tours from "./components/TourCard";
import ProgramCard from "./components/ProgramCard";
import StickyAvatar from "./components/StickyAvatar";

function App() {
  const location = useLocation();
  const [showLoading, setShowLoading] = useState(true); // يظهر اللودنج مرة واحدة

  const showStickyAvatar = location.pathname !== "/";

  // إذا التطبيق مازال يعرض اللودنج، نعرضه بدلاً من Routes
  if (showLoading) {
    return <Loading onFinish={() => setShowLoading(false)} />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} /> {/* الصفحة الرئيسية */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/programs" element={<Programmes />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/program/:programKey" element={<ProgramCard />} />
      </Routes>

      {showStickyAvatar && <StickyAvatar />}
    </>
  );
}

export default App;
