import React from "react";
import { useSelector } from "react-redux";
import ElementProduit from "./ElementProduit";

/*
 ! --- Composant ListProduit ---
 * Affiche la liste des produits dans le panier
 * Utilise useSelector pour accéder au panier depuis le store Redux
 * Calcule et affiche le total du panier
 */

const ListProduit = () => {
  const panier = useSelector((state) => state.panier);

  return (
    <div className="container mt-4">
      <h2>Panier</h2>
      {panier.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <table className="table table-striped">
          {panier.map((p) => (
            <ElementProduit produit={p} />
          ))}
        </table>
      )}
      <h3 className="mt-4">
        Total:{" "}
        {panier.reduce((acc, produit) => acc + produit.qte * produit.prix, 0)}{" "}
        dh
      </h3>
    </div>
  );
};

export default ListProduit;
