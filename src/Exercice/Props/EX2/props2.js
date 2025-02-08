/* 
Exercice 2 : Passer des données d'un parent à un enfant
Crée un composant Parent qui contient un état userName.
Passe userName en tant que prop au composant Child.
Dans le composant Child, affiche le nom de l'utilisateur à l'intérieur d'un élément <h1>.
*/

import React, { useState } from "react";

function Child(props) {
  return <h1>Bonjour, {props.username}</h1>;
}

function Parent() {
  const [username, setUsername] = useState("Aymane");
  return <Child username={username} />;
}
export default Parent;
