import React, { useState } from "react";
import FormulaireEquipement from "../composants/FormEquip";
import ListeEquipements from "../composants/ListEquip";

function PageAccueil() {
  const [equipements, setEquipements] = useState([]);

  const ajouterEquipement = (equipement) => {
    setEquipements([...equipements, equipement]);
  };

  const supprimerEquipement = (index) => {
    setEquipements(equipements.filter((_, i) => i !== index));
  };

  const reformerEquipement = (index) => {
    //tableau jdid copie de tableau equipements
    const equipementsMisAJour = [...equipements];

    //hninversiw la valeur de estReforme (true devient false)
    equipementsMisAJour[index].estReforme =
      !equipementsMisAJour[index].estReforme;

    //mise a jour de tableau equipements
    setEquipements(equipementsMisAJour);
  };

  return (
    <div>
      <h1>Page d'accueil</h1>
      <FormulaireEquipement surAjouter={ajouterEquipement} />
      <h2>Liste des équipements</h2>
      <ListeEquipements
        equipements={equipements}
        surReformer={reformerEquipement}
        surSupprimer={supprimerEquipement}
      />
    </div>
  );
}
export default PageAccueil;
