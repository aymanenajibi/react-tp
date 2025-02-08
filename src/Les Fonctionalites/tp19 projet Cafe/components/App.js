import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; // Importation de la Navbar
import IceCafe from "./IceCafe";
import HotCafe from "./HotCafe";

function App() {
  return (
    <Router>
      <Navbar /> {/* Affiche la Navbar en haut */}
      <div className="container mt-4">
        <Routes>
          <Route path="/ice-cafe" element={<IceCafe />} />
          <Route path="/hot-cafe" element={<HotCafe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
