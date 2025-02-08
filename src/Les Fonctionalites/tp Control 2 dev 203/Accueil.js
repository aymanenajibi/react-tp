import React, { useState } from "react";

function Accueil({ compteur, calculer }) {
  const [nombre, setNombre] = useState("");
  const [operation, setOperation] = useState("+");

  const handleCalculer = () => {
    if (nombre) {
      calculer(nombre, operation);
      setNombre("");
    } else {
      alert("Veuillez saisir un nombre !");
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4">Calculateur</h1>
      <div className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Nombre :</label>
          <input
            type="number"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
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
            <label className="form-check-label">+</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              value="-"
              checked={operation === "-"}
              onChange={() => setOperation("-")}
            />
            <label className="form-check-label">-</label>
          </div>
        </div>
        <div className="mb-3">
          <h5>
            Compteur Actuel : <span className="text-success">{compteur}</span>
          </h5>
        </div>
        <div>
          <button className="btn btn-success me-2" onClick={handleCalculer}>
            Calculer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
