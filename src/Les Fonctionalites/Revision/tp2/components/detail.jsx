import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

/*
 ! --- Composant Detail ---
 * Affiche les détails d'un produit spécifique
 * Utilise useSelector pour accéder au panier depuis le store Redux
 * Utilise useParams pour récupérer l'ID du produit depuis l'URL
 * Inclut un lien pour retourner à la liste des produits
 */

const Detail = () => {
  const panier = useSelector((state) => state.panier);
  const { id } = useParams();
  const produit = panier.find((item) => item.id === parseInt(id));

  if (!produit) {
    return <p>Produit non trouvé</p>;
  }

  return (
    <div className="container mt-4">
      <h3>{produit.nom}</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>ID:</strong> {produit.id}
        </li>
        <li className="list-group-item">
          <strong>Prix:</strong> {produit.prix} dh
        </li>
        <li className="list-group-item">
          <strong>Quantité:</strong> {produit.qte}
        </li>
        <li className="list-group-item">
          <strong>Montant Total:</strong> {produit.prix * produit.qte} dh
        </li>
      </ul>
      <Link to="/" className="btn btn-primary mt-3">
        <FaShoppingCart /> Retour au Panier
      </Link>
    </div>
  );
};

export default Detail;
