import React, { useState } from "react";
import "./App.css";

function App() {
  // Etat pour le panier
  const [panier, setPanier] = useState([]);
  // Etat pour les donnes du formulaire (regroupees dans un objet)
  const [produit, setProduit] = useState({
    nom: "Tables",
    prix: 10,
    quantite: 1,
  });

  // Fonction pour gerer les changements dans le formulaire
  const handleChange = (event) => {
    // Récupère la valeur de l'input
    const { name, value } = event.target; //destructuration
    // Met à jour l'objet produit
    setProduit({ ...produit, [name]: value });
  };

  // Fonction pour ajouter un produit au panier
  const ajouterProduit = () => {
    // Vérifier si un produit avec le même nom existe déjà
    const existeDeja = panier.find((p) => p.nom === produit.nom);
    if (existeDeja) alert("un produit avec ce nom existe deja !");
    else setPanier([...panier, produit]);
    // Réinitialiser les champs du formulaire
    setProduit({ nom: "", prix: "", quantite: "" });
  };

  // Fonction pour modifier uniquement le prix et la quantité d'un produit
  const modierProduit = (index) => {
    const produitAModifier = panier[index];
    const nouveauPrix = prompt("Nouveau prix:", produitAModifier.prix);
    const nouvelleQuantite = prompt(
      "Nouvelle quantite:",
      produitAModifier.quantite
    );
    const produitsModifies = panier.map((produit, i) =>
      i === index
        ? {
            ...produit,
            prix: parseFloat(nouveauPrix),
            quantite: parseInt(nouvelleQuantite ,10),
          }
        : produit
    );
    setPanier(produitsModifies);
  };

  // Fonction pour supprimer un produit du panier
  const supprimerProduit = (index) => {
    const produitsRestants = panier.filter((_, i) => i !== index);
    setPanier(produitsRestants);
  };
  const total = panier.reduce(
    (acc, produit) => acc + produit.prix * produit.quantite,
    0
  );
  return (
    <div className="container">
      <h1>Panier de produits</h1>
      <div>
        <input
          type="text"
          name="nom"
          placeholder="Nom du produit"
          value={produit.nom}
          onChange={handleChange}
        />
        <input
          type="text"
          name="prix"
          placeholder="Prix"
          value={produit.prix}
          onChange={handleChange}
        />
        <input
          type="text"
          name="quantite"
          placeholder="Quantite"
          value={produit.quantite}
          onChange={handleChange}
        />
        <button onClick={ajouterProduit}>Ajouter au panier</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Quantite</th>
            <th>Montant</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {panier.map((produit, index) => (
            <tr key={index}>
              <td>{produit.nom}</td>
              <td>{produit.prix}</td>
              <td>{produit.quantite}</td>
              <td>{produit.quantite * produit.prix} DH</td>
              <td>
                <button onClick={() => modierProduit(index)}>Modifier</button>
                <button onClick={() => supprimerProduit(index)}>
                  supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 style={{ textAlign: "right" }}>Total:{total}dh</h4>
    </div>
  );
}
export default App;
