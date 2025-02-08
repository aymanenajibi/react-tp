import React from "react";

function Eleves(props) {
  const { eleves } = props; // Déstructurer props pour obtenir la liste des élèves

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead class="table-info">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Moyenne des Notes</th>
          </tr>
        </thead>
        <tbody>
          {eleves.map(function (eleve) {
            const moyenne =
              eleve.notes.reduce((acc, note) => acc + note, 0) /
              eleve.notes.length; // Calculer la moyenne des notes de l'élève
            return (
              <tr key={eleve.id}>
                <td>{eleve.id}</td>
                <td>{eleve.nom}</td>
                <td>{moyenne.toFixed(2)}</td>{" "}
                {/* Afficher la moyenne arrondie à 2 décimales */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Eleves;
