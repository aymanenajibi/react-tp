import React from 'react';

//affichage d'equipement individuel

function EquipementIndividuel({ equipement, surReformer, surSupprimer }) {
  return (
    <div style={{ backgroundColor: equipement.estReforme ? 'lightcoral' : 'white' }}>
      <h3>{equipement.nom}</h3>
      <p>{equipement.dateAchat ? `Date d'achat: ${equipement.dateAchat}` : 'Date d\'achat: N/A'}</p>
      <button onClick={() => surReformer(equipement.id)}>À réformer</button>
      <button onClick={() => surSupprimer(equipement.id)}>Supprimer</button>
    </div>
  );
}

export default EquipementIndividuel;