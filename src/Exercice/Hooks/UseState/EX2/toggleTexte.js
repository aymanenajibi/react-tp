import React, { useState } from "react";

function ToggleText() {
  // Initialisation de l'état avec la valeur "Bonjour"
  const [toggle, setToggle] = useState("Bonsoir");

  // Fonction pour basculer entre "Bonjour" et "Bonsoir"
  const tog = () => {
    setToggle(
      (prevToggle) => (prevToggle === "Bonjour" ? "Bonsoir" : "Bonjour") //condition ? valeur_si_vrai : valeur_si_faux;
    );
  };

  // Retourne le bouton et le texte actuel
  return (
    <div>
      <p>{toggle}</p>
      <button onClick={tog}>Changer</button>
    </div>
  );
}

export default function App() {
  return <ToggleText />;
}

/*  tog utilise la fonction setToggle pour changer l'état.
 Elle vérifie la valeur actuelle de toggle avec une fonction de rappel 
 (prevToggle) =>, puis alterne entre "Bonjour" et "Bonsoir". */
