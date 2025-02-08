import React from "react";
import ListeEtudiants from "./ListeEtudiants";

const baseDeDonnees = [
  {
    nom: "Fatima",
    prenom: "EZZahra",
    dateNaissance: "15/02/2000",
    ville: "Oujda",
    genre: "F",
    notes: [15, 14, 12, 10],
  },
  {
    nom: "ilyass",
    prenom: "ELoubadi",
    dateNaissance: "18/10/2001",
    ville: "Berkane",
    genre: "M",
    notes: [9, 16, 19, 20],
  },
  // Ajouter d'autres étudiants ici...
];

export default function App() {
  // Tous les étudiants
  const tousLesEtudiants = baseDeDonnees;

  // Filtrer les étudiants masculins
  const etudiantsMasculins = baseDeDonnees.filter(
    function (eleve) {
      return eleve.genre === "M";
  }
  );

  return (
    <div>
      <h2>Tous les étudiants</h2>
      <ListeEtudiants etudiants={tousLesEtudiants} />

      <h2>Étudiants masculins</h2>
      <ListeEtudiants etudiants={etudiantsMasculins} />
    </div>
  );
}
