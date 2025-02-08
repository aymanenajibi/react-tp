import React from "react";
import { calculerMoyenne } from "./calculMoyenne";

export default function Etudiant(props) {
  const { nom, prenom, notes } = props.eleve; // Déstructuration des props

  return (
    <tr>
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{calculerMoyenne(notes)}</td>
    </tr>
  );
}
