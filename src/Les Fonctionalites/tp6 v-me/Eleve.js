import React from "react";

function Eleve(props) {
  const { eleve } = props; // Déstructurer pour obtenir l'élève

  const moyenne = eleve.notes.reduce((acc, note) => acc + note, 0) / eleve.notes.length; // Calculer la moyenne des notes

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">Élève : {eleve.nom}</h2>
        <p className="card-text">ID : {eleve.id}</p>
        <p className="card-text">Moyenne des Notes : {moyenne.toFixed(2)}</p> {/* Afficher la moyenne arrondie à 2 décimales */}
      </div>
    </div>
  );
}

export default Eleve;
