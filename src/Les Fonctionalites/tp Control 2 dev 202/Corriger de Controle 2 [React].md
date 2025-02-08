Voici le code final et complet de votre application de gestion d'argent de poche utilisant **React**, **Bootstrap**, et le routage.

---

### **1. App.js**

Gère le routage et la navigation.

```jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Accueil from "./Accueil";
import Liste from "./Liste";


function App() {
  const [transactions, setTransactions] = useState([]);
  const [solde, setSolde] = useState(0);

  const saveTransaction = (nom, montant, type) => {
    const montantFinal = type === "+" ? parseFloat(montant) : -parseFloat(montant);
    setSolde(solde + montantFinal);

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
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
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
                <Accueil solde={solde} saveTransaction={saveTransaction} />
              }
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
```

---

### **2. Accueil.js**

Permet de saisir des transactions.

```jsx
import React, { useState } from "react";

function Accueil({ solde, saveTransaction }) {
  const [nom, setNom] = useState("");
  const [montant, setMontant] = useState("");
  const [type, setType] = useState("+");

  const handleSave = () => {
    if (nom && montant) {
      saveTransaction(nom, montant, type);
      setNom("");
      setMontant("");
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4">Gestion d'Argent de Poche</h1>
      <div className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Nom:</label>
          <input
            type="text"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Montant:</label>
          <input
            type="number"
            className="form-control"
            value={montant}
            onChange={(e) => setMontant(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label me-2">Type:</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="+"
              checked={type === "+"}
              onChange={() => setType("+")}
            />
            <label className="form-check-label">Ajouter</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="-"
              checked={type === "-"}
              onChange={() => setType("-")}
            />
            <label className="form-check-label">Retirer</label>
          </div>
        </div>
        <div className="mb-3">
          <h5>
            Solde Total: <span className="text-success">{solde} MAD</span>
          </h5>
        </div>
        <div>
          <button className="btn btn-success me-2" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
```

---

### **3. Liste.js**

Affiche la liste des transactions.

```jsx
import React from "react";

function Liste({ transactions }) {
  return (
    <div>
      <h2 className="text-center mb-4">Liste des Transactions</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Nom</th>
              <th>Montant</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.nom}</td>
                <td>{Math.abs(transaction.montant)} MAD</td>
                <td>{transaction.type === "+" ? "Ajouté" : "Retiré"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Liste;
```

---

### **4. Intégration de Bootstrap**

Assurez-vous d'avoir installé et importé **Bootstrap** dans votre projet :

```bash
npm install bootstrap
```

Ajoutez cet import dans votre **index.js** ou **App.js** :

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
```

---

### Fonctionnalités et Design :

1. **Page Accueil** :

   - Formulaire élégant pour entrer le nom, le montant et sélectionner le type (+ ou -).
   - Solde total affiché avec un style clair.
   - Bouton `Save` stylé avec Bootstrap.

2. **Page Liste** :

   - Tableau responsive et esthétique pour afficher toutes les transactions.

3. **Navigation** :
   - Barre de navigation avec des liens stylés (Accueil, Liste).

---
🎉
