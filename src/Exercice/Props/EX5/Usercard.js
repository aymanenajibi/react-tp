/*
Exercice 5 : Afficher des détails d'un utilisateur
Crée un composant UserCard qui accepte les props name, age et email.
Dans UserCard, affiche les informations de l'utilisateur dans une carte sous forme de <div> avec chaque détail dans un élément <p>.
*/
import React from "react";

function UserCard(props) {
  return (
    <div>
      <p>Nom : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Email : {props.email}</p>
    </div>
  );
}
export default UserCard;
