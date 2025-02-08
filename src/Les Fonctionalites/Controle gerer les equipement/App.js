import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormulaireEquipement from "./composants/FormEquip";
import ListeEquipements from "./composants/ListEquip";
import PageDetails from "./pages/page_detaills";

function App() {
  const [equipements, setEquipements] = useState([]);
  const [equipementSelectionne, setEquipementSelectionne] = useState(null); 

  const handleAjouterEquipement = (equipement) => {
    setEquipements([...equipements, equipement]);
  };

  const handleReformerEquipement = (index) => {
    const equipementsMisAJour = [...equipements];
    equipementsMisAJour[index].estReforme = !equipementsMisAJour[index].estReforme;
    setEquipements(equipementsMisAJour);
  };

  const handleSupprimerEquipement = (index) => {
    setEquipements(equipements.filter((_, i) => i !== index));
  };

  const handleVoirDetails = (equipement) => {
    setEquipementSelectionne(equipement);
  };

  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Test React: Gérer les équipements</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FormulaireEquipement surAjouter={handleAjouterEquipement} />
                <ListeEquipements
                  equipements={equipements}
                  surReformer={handleReformerEquipement}
                  surSupprimer={handleSupprimerEquipement}
                  surVoirDetails={handleVoirDetails} 
                />
              </>
            }
          />
          <Route
            path="/equipement-details"
            element={<PageDetails equipement={equipementSelectionne} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
