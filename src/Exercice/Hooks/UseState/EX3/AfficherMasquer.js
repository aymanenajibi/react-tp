import React, { useState } from "react";

function AfficherMasquer() {
  const [afficher, setAfficher] = useState(false);

  const controler = () => {
    //!prevAfficher ==== hia "non" la valeur l9dima ta3 afficher
    setAfficher((prevAfficher) => !prevAfficher);
  };
  return (
    <div>
      {/* Le texte du bouton pourrait changer en fonction de l'état */}
      <button onClick={controler}>{afficher ? "Masquer" : "Afficher"}</button>

      {/* Afficher le paragraphe uniquement si 'afficher' est vrai */}
      {afficher && <p>Contenu a afficher</p>}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <AfficherMasquer />
    </div>
  );
}

/* Exercice 3 : Afficher/Masquer un paragraphe
Créez un composant AfficherMasquer qui affiche un bouton pour afficher ou masquer un paragraphe de texte.

Instructions :

Utilisez useState pour contrôler si le paragraphe est visible ou caché.
Le bouton doit changer le texte affiché : "Afficher le texte" ou "Masquer le texte".
Exemple de rendu attendu :


[Afficher le texte]
[Masquer le texte] (lorsque le texte est affiché) */
