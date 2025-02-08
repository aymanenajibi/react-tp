import React from 'react';

// Composant qui affiche le nom, l'âge et la moyenne des notes
function Profil(props) {
  // Calcul de la moyenne des notes
  const moyenne = props.notes.reduce((acc, note) => acc + note, 0) / props.notes.length;

  return (
    <div>
      <h1>Nom: {props.nom}</h1>
      <h2>Âge: {props.age}</h2>
      <h3>Moyenne des notes: {moyenne.toFixed(2)}</h3> {/* Affiche la moyenne avec 2 décimales */}
    </div>
  );
}

export default Profil;
