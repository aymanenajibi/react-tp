import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajouterProduit } from "../redux/action";

function Accueil() {
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState("");
  const [quantite, setQuantite] = useState("");
  const produits = useSelector((state) => state.listeProduits);
  const dispatch = useDispatch();

  const handleAjouterProduit = () => {
    if (nom && prix && quantite) {
      const produit = {
        id: Date.now(), // Identifiant unique
        nom,
        prix: parseFloat(prix),
        quantite: parseInt(quantite, 10),
      };
      dispatch(ajouterProduit(produit));
      setNom("");
      setPrix("");
      setQuantite("");
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4">Gestion de Produits</h1>
      <div className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Nom du produit :</label>
          <input
            type="text"
            className="form-control"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Prix :</label>
          <input
            type="number"
            className="form-control"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quantité :</label>
          <input
            type="number"
            className="form-control"
            value={quantite}
            onChange={(e) => setQuantite(e.target.value)}
          />
        </div>
        <button onClick={handleAjouterProduit} className="btn btn-primary">
          Ajouter le produit
        </button>
      </div>

      <h2 className="text-center mt-4">Liste des produits</h2>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>
            {produit.nom} - {produit.prix} MAD - {produit.quantite} unités
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accueil;
