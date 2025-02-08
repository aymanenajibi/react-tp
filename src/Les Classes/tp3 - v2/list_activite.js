// ListActivite.js
import React, { useState } from "react";
import Activite from "./Activite";
import "./App.css";

const ListActivite = () => {
  const [activites, setActivites] = useState([]);
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [editId, setEditId] = useState(null);

  const resetForm = () => {
    setNom("");
    setDescription("");
    setDate("");
    setEditId(null);
  };

  const ajouterOuModifierActivite = () => {
    if (editId) {
      setActivites(
        activites.map((activite) =>
          activite.id === editId
            ? { ...activite, nom, description, date }
            : activite
        )
      );
    } else {
      const nouvelleActivite = {
        id: activites.length + 1,
        nom,
        description,
        date,
      };
      setActivites([...activites, nouvelleActivite]);
    }
    resetForm();
  };

  const supprimerActivite = (id) => {
    setActivites(activites.filter((activite) => activite.id !== id));
  };

  const modifierActivite = (id) => {
    const activite = activites.find((act) => act.id === id);
    if (activite) {
      setNom(activite.nom);
      setDescription(activite.description);
      setDate(activite.date);
      setEditId(id);
    }
  };

  return (
    <div className="container">
      <h2>Liste des Activités</h2>

      <div className="formulaire">
        <input
          type="text"
          placeholder="Nom de l'activité"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description de l'activité"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="ajouter" onClick={ajouterOuModifierActivite}>
          {editId ? "Modifier l'activité" : "Ajouter une activité"}
        </button>
      </div>

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
