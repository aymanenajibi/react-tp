// Activite.js
import React from "react";
import "./App.css";

const Activite = ({ activite, onModifier, onSupprimer }) => {
  return (
    <div className="activite">
      <h3>{activite.nom}</h3>
      <p>Description: {activite.description}</p>
      <p>Date: {activite.date}</p>
      <button className="modifier" onClick={() => onModifier(activite.id)}>
        Modifier
      </button>
      <button className="supprimer" onClick={() => onSupprimer(activite.id)}>
        Supprimer
      </button>
    </div>
  );
};

export default Activite;
