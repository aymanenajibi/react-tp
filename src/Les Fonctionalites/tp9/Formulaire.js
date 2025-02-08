import { useState } from "react";
import './App.css'

const Personne = () => {
  const [Personne, setPersonne] = useState({
    nom: "",
    prenom: "",
    age: 0,
    licence: false,
    genre: "M",
    groupe: "",
  });

  const [listePersonnes, setListePersonnes] = useState([]); // État pour stocker la liste des personnes ajoutées

  // Fonction pour mettre à jour chaque champ de la personne
  const change = (Key) => (event) => {
    setPersonne({ ...Personne, [Key]: event.target.value });
  };

  // Fonction pour ajouter une personne à la liste
  const ajouterPersonne = () => {
    setListePersonnes([...listePersonnes, Personne]); // Ajoute la personne actuelle à la liste
    alert(`Personne ajoutée: ${Personne.prenom} ${Personne.nom}`);
    setPersonne({
      nom: "",
      prenom: "",
      age: 0,
      licence: false,
      genre: "M",
      groupe: "",
    }); // Réinitialise les champs
  };

  return (
    <>
      {/* Zone de donne */}
      Bonjour {Personne.genre === "M" ? "Monsieur : " : "Madame : "}
      {Personne.prenom}
      {Personne.nom}
      {Personne.licence ? " (licencié(e)) " : ""}
      {Personne.groupe}
      {/* Zone de Text */}
      <br />
      <input
        type="text"
        onChange={change("nom")}
        placeholder="Nom"
        value={Personne.nom}
      />
      <br />
      <br />
      <input
        type="text"
        onChange={change("prenom")}
        placeholder="Prénom"
        value={Personne.prenom}
      />
      {/* Zone Checkbox */}
      <br />
      <br />
      <input
        type="checkbox"
        onChange={(event) =>
          setPersonne({ ...Personne, licence: event.target.checked })
        }
        checked={Personne.licence}
      />
      <label>Licencié(e)</label>
      {/* Zone de Radio button Masculin et Féminin */}
      <br />
      <br />
      <input
        type="radio"
        value="M"
        name="genre"
        onChange={change("genre")}
        checked={Personne.genre === "M"}
      />{" "}
      Masculin
      <br />
      <input
        type="radio"
        value="F"
        name="genre"
        onChange={change("genre")}
        checked={Personne.genre === "F"}
      />{" "}
      Féminin
      <br />
      <br />
      {/* Zone Groupe des dev */}
      <select onChange={change("groupe")} value={Personne.groupe}>
        <option value="">Sélectionnez un groupe</option>
        <option value="Dev 101">Dev 101</option>
        <option value="Dev 102">Dev 102</option>
        <option value="Dev 103">Dev 103</option>
      </select>
      <br />
      <br />
      {/* Zone Button Ajouter */}
      <button onClick={ajouterPersonne}>Ajouter</button>
      {/* Affichage de la liste des personnes ajoutées */}
      <h3>Listes des Personnes</h3>
      <ul>
        {listePersonnes.map((personne, index) => (
          <li key={index}>
            {personne.genre === "M" ? "Monsieur " : "Madame "}
            {personne.prenom} {personne.nom}
            {personne.licence ? " (licencié(e)) " : ""} - {personne.groupe}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Personne;
