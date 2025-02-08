D'accord ! Ajoutons une condition pour l'âge dans l'exemple précédent. Nous allons permettre à l'utilisateur de saisir à la fois son **nom** et son **âge**, et nous afficherons un message personnalisé en fonction de ces deux informations.

### Exemple avec le nom et l'âge

```jsx
import React, { useState } from 'react';

function FormulaireNomAge() {
  // Initialisation du state pour le nom et l'âge
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');

  return (
    <div>
      {/* Affiche le message de bienvenue */}
      <h1>
        Bonjour, {nom ? nom : "inconnu"}!
      </h1>

      {/* Affiche un message en fonction de l'âge */}
      {age && (
        <h2>
          {age >= 18 ? "Vous êtes majeur." : "Vous êtes mineur."}
        </h2>
      )}

      {/* Champ de texte pour le nom */}
      <input
        type="text"
        placeholder="Entrez votre nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />

      {/* Champ de texte pour l'âge */}
      <input
        type="number"
        placeholder="Entrez votre âge"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </div>
  );
}

export default FormulaireNomAge;
```

### Explication :
1. **useState('')** : On utilise deux états ici :
   - **nom** pour stocker le nom de l'utilisateur.
   - **age** pour stocker l'âge de l'utilisateur.

2. **age >= 18 ? "Vous êtes majeur." : "Vous êtes mineur."** : Ce code utilise une condition pour afficher un message différent selon que l'utilisateur a 18 ans ou plus (majeur), ou moins de 18 ans (mineur).

3. **onChange** pour le nom et l'âge : Chaque champ de saisie met à jour son état respectif (`nom` et `age`) lorsque l'utilisateur tape dans les inputs.

### Résultat :
- Si l'utilisateur ne remplit rien, le message sera **"Bonjour, inconnu!"** et aucun message sur l'âge ne sera affiché.
- Si l'utilisateur saisit son nom et son âge :
   - S'il a 18 ans ou plus, le message sera **"Vous êtes majeur."**.
   - S'il a moins de 18 ans, le message sera **"Vous êtes mineur."**.

### Exemple d'utilisation :
- Si l'utilisateur tape **"Alice"** dans le champ du nom et **20** dans le champ de l'âge, le message affiché sera :  
  **"Bonjour, Alice!"**  
  **"Vous êtes majeur."**

Cet exemple montre comment ajouter des conditions dans le rendu en fonction de l'état du composant. Si tu veux approfondir d'autres concepts, fais-le moi savoir !