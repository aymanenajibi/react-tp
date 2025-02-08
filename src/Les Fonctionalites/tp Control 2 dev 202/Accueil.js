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
