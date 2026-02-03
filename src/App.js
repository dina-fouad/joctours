import { Routes, Route } from "react-router-dom";

import Loading from "./pages/Loading"; // صفحة اللودنج
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Guides from "./pages/Guides";
import Programmes from "./pages/Programmes";
import Tours from "./components/TourCard";
import ProgramCard from "./components/ProgramCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loading />} />

      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/programmes" element={<Programmes />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/program/:programKey" element={<ProgramCard />} />
    </Routes>
  );
}

export default App;
