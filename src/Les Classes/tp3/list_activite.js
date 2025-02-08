import React, { useState } from "react";
import Activite from "./activite";
import "./App.css";

const ListActivite = () => {
  const [activites, setActivites] = useState([]);

  const ajouterActivite = () => {
    const nouveauNom = prompt("Entrez le nom de l'activité :");
    const nouvelleDescription = prompt("Entrez la description de l'activité :");
    const nouvelleDate = prompt("Entrez la date de l'activité (YYYY-MM-DD) :");
    const nouvelleActivite = {
      id: activites.length + 1,
      nom: nouveauNom,
      description: nouvelleDescription,
      date: nouvelleDate,
    };

    setActivites([...activites, nouvelleActivite]);
  };

  const supprimerActivite = (id) => {
    setActivites(activites.filter((activite) => activite.id !== id));
  };

  const modifierActivite = (id) => {
    const nouveauNom = prompt("Entrez le nouveau nom de l'activité :");
    const nouvelleDescription = prompt(
      "Entrez la nouvelle description de l'activité :"
    );
    const nouvelleDate = prompt(
      "Entrez la nouvelle date de l'activité (YYYY-MM-DD) :"
    );

    setActivites(
      activites.map((activite) =>
        activite.id === id
          ? {
              ...activite,
              nom: nouveauNom,
              description: nouvelleDescription,
              date: nouvelleDate,
            }
          : activite
      )
    );
  };

  return (
    <div className="container">
      <h2>Liste des Activités</h2>
      <button className="ajouter" onClick={ajouterActivite}>Ajouter une tâche</button>
      {activites.map((activite) => (
        <Activite
          key={activite.id}
          activite={activite}
          onModifier={modifierActivite}
          onSupprimer={supprimerActivite}
        />
      ))}
    </div>
  );
};

export default ListActivite;
