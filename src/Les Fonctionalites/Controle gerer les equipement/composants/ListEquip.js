import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ListeEquipements({ equipements, surReformer, surSupprimer, surVoirDetails }) {
  const navigate = useNavigate();

  if (equipements.length === 0) {
    return (
      <p className="text-center">Aucun équipement ajouté pour le moment.</p>
    );
  }

  return (
    <table className="table table-bordered table-striped">
      <thead className="table-dark">
        <tr>
          <th>#</th>
          <th>Nom de l'équipement</th>
          <th>Date d'achat</th>
          <th>Statut</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {equipements.map((equipement, index) => (
          <tr
            key={index}
            className={equipement.estReforme ? "table-warning" : ""}
          >
            <td>{index + 1}</td>
            <td>{equipement.nom}</td>
            <td>{equipement.dateAchat || "Pas de date"}</td>
            <td>{equipement.estReforme ? "À réformer" : "Actif"}</td>
            <td>
              <button
                className="btn btn-info me-2"
                onClick={() => {
                  surVoirDetails(equipement);
                  navigate("/equipement-details");
                }}
              >
                Détails
              </button>
              <button
                className={`btn btn-${equipement.estReforme ? "secondary" : "warning"} me-2`}
                onClick={() => surReformer(index)}
              >
                {equipement.estReforme ? "Annuler" : "À réformer"}
              </button>
              <button
                className="btn btn-danger"
                onClick={() => surSupprimer(index)}
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListeEquipements;
