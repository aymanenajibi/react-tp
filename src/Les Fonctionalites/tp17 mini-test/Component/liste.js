import React from "react";
import { useSelector } from "react-redux";

function Liste() {
  // Récupération de la liste des produits depuis le store Redux
  const produits = useSelector((state) => state.produits);

  return (
    <div>
      <h2 className="text-center mb-4">Liste des Produits</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Nom du Produit</th>
              <th>Prix (MAD)</th>
              <th>Quantité</th>
              <th>Catégorie</th>
            </tr>
          </thead>
          <tbody>
            {produits.map((produit, index) => (
              <tr key={index}>
                <td>{produit.nom}</td>
                <td>{produit.prix}</td>
                <td>{produit.quantite}</td>
                <td>{produit.categorie}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Liste;
