import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./Accueil";
import Liste from "./Liste";

function App() {
  const [compteur, setCompteur] = useState(0); // Compteur actuel
  const [operations, setOperations] = useState([]); // Historique des opérations

  const calculer = (nombre, operation) => {
    const nombreFinal = parseFloat(nombre);

    // Calculer la nouvelle valeur du compteur
    const nouveauCompteur = operation === "+" ? compteur + nombreFinal : compteur - nombreFinal;
    setCompteur(nouveauCompteur);

    // Enregistrer l'opération dans l'historique
    const nouvelleOperation = {
      operation,
      nombre: nombreFinal,
      compteur: nouveauCompteur,
    };
    setOperations([...operations, nouvelleOperation]);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Calculator
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/liste">
                    Liste
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <Accueil compteur={compteur} calculer={calculer} />
              }
            />
            <Route
              path="/liste"
              element={<Liste operations={operations} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
