import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "../components/Accueil";
import Liste from "../components/Liste";
import Navbar from "../components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/liste" element={<Liste />} />
      </Routes>
    </Router>
  );
}

export default App;
