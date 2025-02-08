import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Formulair() {
  const [etat, setEtat] = useState({ nom: "", prenom: "", age: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEtat((precedent) => ({ ...precedent, [name]: value }));
  };

  const incrementerAge = () => {
    setEtat((precedent)  => ({ ...precedent, age: precedent.age + 1 }));
  };

  return (
    <div className="container mt-4">
      <form className="border p-4 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Nom:</label>
          <input
            type="text"
            name="nom"
            value={etat.nom}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Prénom:</label>
          <input
            type="text"
            name="prenom"
            value={etat.prenom}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Âge: {etat.age}</label>
        </div>
        <button
          type="button"
          onClick={incrementerAge}
          className="btn btn-primary"
        >
          Incrémenter l'âge
        </button>
      </form>

      {/* Affichage des informations */}
      <div className="mt-4">
        <h2>Informations</h2>
        <p>Nom: {etat.nom}</p>
        <p>Prénom: {etat.prenom}</p>
        <p>Âge: {etat.age}</p>
      </div>
    </div>
  );
}