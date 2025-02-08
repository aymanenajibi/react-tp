import React from "react";
import Eleve from "./Eleve"; // Importer le composant Eleve
import Eleves from "./Eleves"; // Importer le composant Eleves

export default function App() {
  const tEleves = [
    { id: 1, nom: "Ahmed", notes: [10, 20, 15] },
    { id: 2, nom: "Said", notes: [12, 13, 9] },
    { id: 3, nom: "Fatima", notes: [18, 19, 17] },
    { id: 4, nom: "Sohaib", notes: [14, 14, 18] },
    { id: 4, nom: "Ilyass", notes: [19, 19, 18] },
    { id: 4, nom: "Ayoub", notes: [19, 19, 18] },
    { id: 4, nom: "Michmich", notes: [19, 19, 18] },
  ];

  // Fonction pour calculer la moyenne des notes
  const calculerMoyenne = (notes) => notes.reduce((acc, note) => acc + note, 0) / notes.length;

  // Trouver le meilleur et le pire élève
  const [meilleurEleve, pireEleve] = tEleves.reduce(
    ([meilleur, pire], eleve) => {
      const moyenne = calculerMoyenne(eleve.notes);
      if (moyenne > calculerMoyenne(meilleur.notes)) meilleur = eleve;
      if (moyenne < calculerMoyenne(pire.notes)) pire = eleve;
      return [meilleur, pire];
    },
    [tEleves[0], tEleves[0]]
  );

  // Calcul de la moyenne générale
  const moyenneGenerale = calculerMoyenne(
    tEleves.map((eleve) => eleve.notes)
  ).toFixed(2);

  return (
    <div className="container mt-4">
      
      <h1 className="text-center">Détail des Élèves</h1>

      <div className="mb-4">       
        <h2>Meilleur Élève</h2>

        <Eleve eleve={meilleurEleve} />
      </div>

      
      <div className="mb-4">       
        <h2>Dernier Élève</h2>

        <Eleve eleve={pireEleve} />
      </div>
      
      <div className="card mb-4 bg-info">
        
        <div className="card-body">
          <h2 className="card-title">Moyenne Générale des Notes</h2>
          <p className="card-text">{moyenneGenerale}</p>
        </div>
        
      </div>

      <h2 className="mt-4">Tous les élèves</h2>
      <Eleves eleves={tEleves} />
    </div>
  );
}
