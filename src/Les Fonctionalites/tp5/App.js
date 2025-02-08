import React from 'react';
import Profil from './Profil'; // Importer le composant Profil

// Exemple d'utilisation du composant
export default function App() {
  
  const nom = "Brahim";
  const age = 25;
  const notes = [15, 16, 2];

  return (
    <Profil nom={nom} age={age} notes={notes} /> 
  );
}

