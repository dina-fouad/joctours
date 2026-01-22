
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Guides from "./pages/Guides";
import Programs from "./pages/Programmes";
import Contact from "./pages/Contact";

function App() {
return (
   
      <Routes>
        {/* -------------------- English -------------------- */}
        <Route path="/en" element={<Home lang="en" />} />
        <Route path="/en/tours" element={<Tours lang="en" />} />
        <Route path="/en/guides" element={<Guides lang="en" />} />
        <Route path="/en/programs" element={<Programs lang="en" />} />
        <Route path="/en/contact" element={<Contact lang="en" />} />

        {/* -------------------- Russian -------------------- */}
        <Route path="/ru" element={<Home lang="ru" />} />
        <Route path="/ru/tours" element={<Tours lang="ru" />} />
        <Route path="/ru/guides" element={<Guides lang="ru" />} />
        <Route path="/ru/programs" element={<Programs lang="ru" />} />
        <Route path="/ru/contact" element={<Contact lang="ru" />} />

       
        <Route path="*" element={<Home lang="en" />} />
      </Routes>
  
  );
}

export default App;
