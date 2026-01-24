import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Guides from "./pages/Guides";
import Programmes from "./pages/Programmes";
import Tours from "./pages/Tours";

function App() {
  return (
    
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
   
  );
}

export default App;
