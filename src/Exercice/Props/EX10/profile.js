import React from "react";
import "./profile.css"; // Importer le fichier CSS

function Profile({ name, age, bio }) {
  return (
    <div className="profile-card">
      <h1>Carte de Profil</h1>
      <p>Nom et prénom : {name}</p>
      <p>Âge : {age}</p>
      <p>Bio : {bio}</p>
    </div>
  );
}

export default function App() {
  return (
    <Profile
      name={"Aymane Najibi"}
      age={20}
      bio={"Je suis étudiant en développement digital."}
    />
  );
}
/*
Exercice 10 : Composant de Profil
Crée un composant Profile qui prend des props name, age et bio. Il doit afficher ces informations dans une carte.
Ensuite, utilise le composant dans App pour afficher les informations d'une personne.

Indice : Assure-toi de mettre en forme chaque élément avec des balises appropriées.
*/
