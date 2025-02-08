import React from "react";

function Message(props) {
  return (
    <>
      <p>{props.text}</p>
    </>
  );
}
export default Message;

/*
Exercice 1 : Afficher un message
Crée un composant Message qui accepte une prop text.
Affiche ce texte à l'intérieur d'un élément <p>.
*/
