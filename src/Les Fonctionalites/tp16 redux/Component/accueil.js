import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ajouterTransaction,
  retirerTransaction,
  enregistrerTransactions,
} from "../redux/action";

function Accueil() {
  const [nombre, setNombre] = useState("");
  const [operation, setOperation] = useState("+");
  const compteur = useSelector((state) => state.compteur);
  const temporaire = useSelector(function (state) {
    return state.temporaire;
  });
  const dispatch = useDispatch();

  const handleCalculer = () => {
    if (nombre) {
      const montant = parseFloat(nombre);
      if (operation === "+") {
        dispatch(ajouterTransaction(montant));
      } else {
        dispatch(retirerTransaction(montant));
      }
      setNombre("");
    } else {
      alert("Veuillez saisir un montant valide !");
    }
  };

  const handleEnregistrer = () => {
    dispatch(enregistrerTransactions());
    alert("Transactions enregistrées avec succès !");
  };

  return (
    <div>
      <h1 className="text-center mb-4">Gestion d'Argent de Poche</h1>
      <div className="card p-4 shadow">
        {/* INPUT */}
        <div className="mb-3">
          <label className="form-label">Montant :</label>
          <input
            type="number"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        {/* RADIO BUTTON */}
        <div className="mb-3">
          <label className="form-label me-2">Opération :</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="+"
              checked={operation === "+"}
              onChange={() => setOperation("+")}
            />
            <label className="form-check-label">Ajouter</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="-"
              checked={operation === "-"}
              onChange={() => setOperation("-")}
            />
            <label className="form-check-label">Retirer</label>
          </div>
        </div>

        {/* BUTTON DE CALCULER ET ENREGISTRER */}
        <div className="d-grid gap-2">
          <button onClick={handleCalculer} className="btn btn-primary">
            Calculer
          </button>
          <button onClick={handleEnregistrer} className="btn btn-success">
            Enregistrer
          </button>
        </div>
      </div>

      {/* SOLDE D'UTILISATEUR */}
      <h2 className="text-center mt-4">Solde : {compteur} DH</h2>

      {/* MANUPILATION DE TRANSACTION QUI CALCULER ET NON ENREGISTRER */}
      <h3 className="mt-4">Transactions temporaires :</h3>
      {/* LISTE DES TRANSACTION */}
      <ul>
        {temporaire.map((transaction, index) => (
          <li key={index}>
            {transaction.type === "+" ? "Ajouté" : "Retiré"} :{" "}
            {Math.abs(transaction.montant)} MAD, Solde après opération :{" "}
            {transaction.compteur} MAD
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accueil;
