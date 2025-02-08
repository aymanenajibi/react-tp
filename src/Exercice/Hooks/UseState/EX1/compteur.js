import React, { useState } from "react";

function Compteur() {
  // Declare une variable d'etat 'compteur'  initialise a 0
  const [compteur, setCompteur] = useState(0);

  // Fonction qui s'execute lorsque le bouton est clique
  const augmenterCompteur = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
          <p>Nommbre de Clics : {compteur}</p>
          <button onClick={augmenterCompteur}>Augmenter</button>
    </div>
  );
}

export default function App() {
  return <Compteur />;
}
