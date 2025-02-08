import React, { useState } from "react";

function SaisieDirecte() {
  // Initiliser l'etat avec une chaine
  const [text, setText] = useState("");

  // Fonction pour mettre à jour l'état avec la saisie de l'utilisateur
  const handleChange = (e) => {
    setText(e.target.value); // Mettre à jour l'état avec la valeur saisie
  };

  return (
    <div>
      {/* Champ de saisie de texte  */}
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Tapez quelque chose..."
      />
      {/* Afficher le texte saisie */}
      <p>Vous avez ecrit : {text}</p>
    </div>
  );
}

export default function App() {
  return <SaisieDirecte />;
}
