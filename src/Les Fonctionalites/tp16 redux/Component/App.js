import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./accueil"; // Le composant d'accueil pour ajouter des transactions
import Liste from "./liste"; // Le composant pour afficher l'historique des transactions
import Navbar from "./navbar"; // Importation de la barre de navigation

function App() {
  return (
    <Router>
      {/* Ajout de la barre de navigation d'apres le composant Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Accueil />} />{" "}
        {/* Route vers la page d'accueil */}
        <Route path="/liste" element={<Liste />} />{" "}
        {/* Route vers la liste des transactions */}
      </Routes>
      
    </Router>
  );
}

export default App;
