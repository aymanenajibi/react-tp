import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function PageDetails({ equipement }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!equipement) {
      navigate("/");
    }
  }, [equipement, navigate]);

  if (!equipement) {
    return <div>Équipement non trouvé</div>; // Si l'équipement n'est pas sélectionné, afficher un message
  }

  return (
    <div>
      <h2>Équipement: {equipement.nom}</h2>
      <p>Date d'achat: {equipement.dateAchat ? equipement.dateAchat : "N/A"}</p>
      <p>Statut: {equipement.estReforme ? "À réformer" : "Actif"}</p>
      <Link to="/" className="btn btn-success">
        Retour à la page d'accueil
      </Link>
    </div>
  );
}

export default PageDetails;
