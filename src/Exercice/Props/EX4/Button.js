/* 
Exercice 4 : Passer une fonction en prop
Crée un composant Button qui accepte une prop onClick (une fonction).
Lorsqu'on clique sur le bouton, appelle la fonction onClick.
*/
import React from "react";

function Button(props) {
  return <button onClick={props.onClick}>Clique-moi</button>;
}

function Click() {
  const handelClick = () => {
    alert("button est clique");
  };
  return <Button onClick={handelClick} />;
}

export default Click;
