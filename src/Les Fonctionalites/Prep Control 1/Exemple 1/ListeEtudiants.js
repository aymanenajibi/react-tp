import React from "react";
import Etudiant from "./Etudiant";
import HeaderTable from "./HeaderTable";

export default function ListeEtudiants(props) {
  return (
    <table className="table table-bordered">
      <HeaderTable />
      <tbody>
        {props.etudiants.map((eleve) => (
          <Etudiant key={eleve.nom} eleve={eleve} />
        ))}
      </tbody>
    </table>
  );
}
