/*
Exercice 6 : Passer des données et afficher des images
Crée un composant ImageCard qui prend deux props : src (l’URL de l'image) et alt (le texte alternatif).
Affiche l'image avec une légende en utilisant ces props.
*/
import React from "react";

export default function ImageCard(props) {
  return (
    <div>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}
