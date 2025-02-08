import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./accueil"; // Le composant pour ajouter et gérer des produits
import Liste from "./liste"; // Le composant pour afficher la liste des produits
import Navbar from "./navbar"; // La barre de navigation

function App() {
  return (
    <Router>
      {/* Barre de navigation */}
      <Navbar />

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Accueil />} /> {/* Page d'accueil */}
        <Route path="/liste" element={<Liste />} /> {/* Liste des produits */}
      </Routes>
    </Router>
  );
}

export default App;
