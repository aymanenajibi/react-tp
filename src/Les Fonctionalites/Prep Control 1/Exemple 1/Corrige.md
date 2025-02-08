Je vois maintenant que vous préférez passer les `props` directement dans votre composant, plutôt que de les déstructurer à l'intérieur du paramètre de la fonction. Voici donc la correction complète basée sur cette approche.

### 1. Fonction pour calculer la moyenne des notes (inchangé)

```javascript
function calculerMoyenne(notes) {
  const somme = notes.reduce((acc, note) => acc + note, 0);
  return (somme / notes.length).toFixed(2); // Arrondir à 2 décimales
}
```

### 2. Composant `<Etudiant />` avec déstructuration des `props` dans la fonction

Dans le composant `Etudiant`, vous pouvez accéder aux informations de l'étudiant via `props.eleve`, en déstructurant directement à partir de `props`.

```javascript
export default function Etudiant(props) {
  const { nom, prenom, notes } = props.eleve; // Déstructuration des props

  return (
    <tr>
      <td>{nom}</td>
      <td>{prenom}</td>
      <td>{calculerMoyenne(notes)}</td>
    </tr>
  );
}
```

### 3. Composant `HeaderTable` (inchangé)

```javascript
export default function HeaderTable() {
  return (
    <thead>
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Moyenne</th>
      </tr>
    </thead>
  );
}
```

### 4. Composant `<ListeEtudiants />` avec utilisation correcte de `props`

Le composant `ListeEtudiants` passe chaque étudiant sous forme de `props` au composant `Etudiant`.

```javascript
export default function ListeEtudiants(props) {
  return (
    <table>
      <HeaderTable />
      <tbody>
        {props.etudiants.map((eleve) => (
          <Etudiant key={eleve.nom} eleve={eleve} />
        ))}
      </tbody>
    </table>
  );
}
```

### 5. Utilisation du composant `ListeEtudiants`

Dans le composant principal (`App`), vous passez les étudiants comme `props` à `ListeEtudiants` :

```javascript
const baseDeDonnees = [
  {
    nom: "nom1",
    prenom: "prenom1",
    dateNaissance: "15/02/2000",
    ville: "Oujda",
    genre: "F",
    notes: [15, 14, 12, 10],
  },
  {
    nom: "nom2",
    prenom: "prenom2",
    dateNaissance: "18/10/2001",
    ville: "Berkane",
    genre: "M",
    notes: [11, 12, 8, 13],
  },
  // Ajouter d'autres étudiants ici...
];

function App() {
  // Tous les étudiants
  const tousLesEtudiants = baseDeDonnees;

  // Filtrer les étudiants masculins
  const etudiantsMasculins = baseDeDonnees.filter((eleve) => eleve.genre === "M");

  return (
    <div>
      <h2>Tous les étudiants</h2>
      <ListeEtudiants etudiants={tousLesEtudiants} />

      <h2>Étudiants masculins</h2>
      <ListeEtudiants etudiants={etudiantsMasculins} />
    </div>
  );
}

export default App;
```

### Explications :
- **Déstructuration dans `props`** : Comme dans votre exemple, la déstructuration des `props` est faite directement à l'intérieur de chaque composant.
- **Passage de `props`** : Chaque composant enfant reçoit les informations de l'étudiant (`eleve`) via `props`.

Cette structure correspond mieux à la manière dont vous souhaitez déstructurer et utiliser les `props`.