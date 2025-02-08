import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouter } from "./store";
import ListProduit from "./ListProduit";

/*
 ! --- Composant FormProduit ---
 * Formulaire pour ajouter un produit
 * Utilise useState pour gérer les états du formulaire
 * Utilise useDispatch pour dispatcher l'action d'ajout au store Redux
 */

const FormProduit = () => {
  const [nom, setNom] = useState("");
  const [prix, setPrix] = useState(0);
  const [id, setId] = useState(0);
  const [qte, setQte] = useState(1);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id && nom && prix >= 0 && qte > 0) {
      // Validation des champs
      dispatch(
        ajouter({
          id: parseInt(id),
          nom,
          prix: parseFloat(prix),
          qte: parseInt(qte),
        })
      );
      setId("");
      setNom("");
      setPrix(0);
      setQte(1);
    } else {
      alert("Veuillez remplir tous les champs correctement.");
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label>ID : </label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Nom : </label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Prix : </label>
          <input
            type="number"
            step="0.01"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Quantité : </label>
          <input
            type="number"
            step="1"
            value={qte}
            onChange={(e) => setQte(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ajouter Produit
        </button>
      </form>
    </div>
  );
};

export default FormProduit;
