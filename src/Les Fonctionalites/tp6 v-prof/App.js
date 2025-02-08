import React from "react";
import Eleves from "./Eleves";
import "bootstrap/dist/css/bootstrap.min.css"; // Importer le CSS de Bootstrap

export default function App() {
  const tEleves = [
    { id: 1, nom: "ali", notes: [10, 15, 9] },
    { id: 2, nom: "ahmed", notes: [19, 11, 15] },
    { id: 3, nom: "nada", notes: [11, 16, 11] },
  ];

  // Calculer la moyenne de chaque étudiant
  const tMoyenne = tEleves.map((eleve) => ({
    ...eleve,
    moyenne:
      eleve.notes.reduce((acc, note) => acc + note, 0) / eleve.notes.length,
  }));

  // Trouver le premier étudiant (meilleure moyenne) et le dernier étudiant (moins bonne moyenne)
  let premierEleve = tMoyenne[0]; 
  let dernierEleve = tMoyenne[0];

  tMoyenne.forEach((eleve) => {
    if (eleve.moyenne > premierEleve.moyenne) {
      premierEleve = eleve;
    }
    if (eleve.moyenne < dernierEleve.moyenne) {
      dernierEleve = eleve;
    }
  });

  // Calculer la moyenne générale de tous les étudiants
  const moyenneGenerale = (
    tEleves.reduce(
      (acc, eleve) => acc + eleve.notes.reduce((sum, note) => sum + note, 0),
      0
    ) / tEleves.reduce((acc, eleve) => acc + eleve.notes.length, 0)
  ).toFixed(2);

  return (
    <>
      <div className="container">
        <h2>Premier étudiant (meilleure note) :</h2>
        <div>
          Nom: {premierEleve.nom} <br />
          Moyenne: {premierEleve.moyenne.toFixed(2)}
        </div>

        <h2>Dernier étudiant (moins bonne note) :</h2>
        <div>
          Nom: {dernierEleve.nom} <br />
          Moyenne: {dernierEleve.moyenne.toFixed(2)}
        </div>

        <h2>Moyenne générale de la classe :</h2>
        <div>{moyenneGenerale}</div>

        <h2>Liste des étudiants :</h2>
        <Eleves eleves={tMoyenne}>Liste des notes</Eleves>
      </div>
    </>
  );
}
