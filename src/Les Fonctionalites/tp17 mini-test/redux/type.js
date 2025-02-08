export const AJOUTER_PRODUIT = "AJOUTER_PRODUIT";
export const SUPPRIMER_PRODUIT = "SUPPRIMER_PRODUIT";
export const MODIFIER_PRODUIT = "MODIFIER_PRODUIT";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterProduit } from "../redux/action";

function AjouterProduit() {
  const [produit, setProduit] = useState({
    nom: "",
    prix: 0,
    quantite: 0,
    categorie: "",
  });
  const dispatch = useDispatch();

  const handleAjouter = () => {
    if (produit.nom && produit.prix && produit.quantite && produit.categorie) {
      dispatch(ajouterProduit(produit));
      setProduit({ nom: "", prix: 0, quantite: 0, categorie: "" });
    } else {
      alert("Veuillez remplir tous les champs !");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nom"
        value={produit.nom}
        onChange={(e) => setProduit({ ...produit, nom: e.target.value })}
      />
      <input
        type="number"
        placeholder="Prix"
        value={produit.prix}
        onChange={(e) =>
          setProduit({ ...produit, prix: parseFloat(e.target.value) })
        }
      />
      <input
        type="number"
        placeholder="Quantité"
        value={produit.quantite}
        onChange={(e) =>
          setProduit({ ...produit, quantite: parseInt(e.target.value) })
        }
      />
      <input
        type="text"
        placeholder="Catégorie"
        value={produit.categorie}
        onChange={(e) => setProduit({ ...produit, categorie: e.target.value })}
      />
      <button onClick={handleAjouter}>Ajouter Produit</button>
    </div>
  );
}

export default AjouterProduit;
