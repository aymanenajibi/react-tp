import React, { useState } from "react";
function FormulaireEquipement({ surAjouter }) {
  const [nom, setNom] = useState("");
  const [dateAchat, setDateAchat] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //la madkhlsh le nom de l'equipement
    if (!nom) {
      alert("Le nom de l'equipement est obligatoire");
      return;
    }
    surAjouter({
      nom,
      dateAchat,
      estReforme: false,
    });
    setNom("");
    setDateAchat("");
  };
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Nom de l'équipement :</label>
        <input
          type="text"
          className="form-control"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date d'achat :</label>
        <input
          type="date"
          className="form-control"
          value={dateAchat}
          onChange={(e) => setDateAchat(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Ajouter
      </button>
    </form>
  );
}
export default FormulaireEquipement;
