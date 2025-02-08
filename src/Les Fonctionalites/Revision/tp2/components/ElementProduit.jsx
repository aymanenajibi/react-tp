import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { incrementer, decrementer, supprimer } from "./store";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

/*
 ! --- Composant ElementProduit ---
 * Affiche les détails d'un produit dans une ligne de tableau
 * Utilise useDispatch pour dispatcher les actions d'incrémentation, décrémentation et suppression
 * Inclut un lien pour accéder à la page de détail du produit
 */

const ElementProduit = ({ produit }) => {
  const dispatch = useDispatch();

  return (
    <tbody>
      <tr key={produit.id}>
        <td>
          <Link to={`/Detail/${produit.id}`}>{produit.id}</Link>
        </td>
        <td>{produit.nom}</td>
        <td>{produit.prix} dh</td>
        <td>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => dispatch(decrementer(produit.id))}
          >
            <FaMinus />
          </button>
          <span className="mx-2">{produit.qte}</span>
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => dispatch(incrementer(produit.id))}
          >
            <FaPlus />
          </button>
        </td>
        <td>{produit.prix * produit.qte} dh</td>
        <td>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => dispatch(supprimer(produit.id))}
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ElementProduit;
