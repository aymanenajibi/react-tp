import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./Accueil";
import Liste from "./Lister";

function App() {
  //state (solde , transactions)
  const [transactions, setTransactions] = useState([]);
  const [solde, setSolde] = useState(0);

  const saveTransaction = (nom, montant, type) => {
    //Montant final
    const montantFinal = type === "+" ? parseFloat(montant) : -parseFloat(montant);
    setSolde(solde + montantFinal);

    //nouveau transaction
    const newTransaction = { nom, montant: montantFinal, type };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Gestion d'Argent
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
              element={ <Accueil solde={solde} saveTransaction={saveTransaction} /> }
            />
            <Route
              path="/liste"
              element={<Liste transactions={transactions} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
