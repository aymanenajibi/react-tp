Voici le corrigé pour l'exercice avec les questions supplémentaires sur l'utilisation de `find`, `map`, `props.children`, et `filter`.

### Base de données (constante partagée) :

```javascript
const baseDeDonnees = [
  {
    nomProduit: "Produit1",
    prix: 100,
    quantitesVendues: [2, 3, 1],
  },
  {
    nomProduit: "Produit2",
    prix: 200,
    quantitesVendues: [1, 5, 3],
  },
  {
    nomProduit: "Produit3",
    prix: 150,
    quantitesVendues: [2, 2, 4],
  },
];
```

### 1. Fonction pour calculer la quantité totale vendue (2 pts)

```javascript
export function calculerQuantiteTotale(quantites) {
  return quantites.reduce((acc, number) => acc + number, 0);
}
```

### 2. Composant `<Produit />` (4 pts)

```javascript
import React from "react";
import { calculerQuantiteTotale } from "./calculerQuantiteTotale";

export default function Produit(props) {
  const { nomProduit, prix, quantitesVendues } = props.produit;
  const quantiteTotale = calculerQuantiteTotale(quantitesVendues);

  return (
    <tr>
      <td>{nomProduit}</td>
      <td>{prix} MAD</td>
      <td>{quantiteTotale}</td>
    </tr>
  );
}
```

### 3. Composant "HeaderTable" (1 pt)

```javascript
import React from "react";

export default function HeaderTable() {
  return (
    <thead>
      <tr>
        <th>Nom du produit</th>
        <th>Prix</th>
        <th>Quantité totale vendue</th>
      </tr>
    </thead>
  );
}
```

### 4. Composant `<ListeProduits />` (4 pts)

```javascript
import React from "react";
import Produit from "./Produit";
import HeaderTable from "./HeaderTable";

export default function ListeProduits(props) {
  return (
    <table>
      <HeaderTable />
      <tbody>
        {props.produits.map((produit) => (
          <Produit key={produit.nomProduit} produit={produit} />
        ))}
      </tbody>
    </table>
  );
}
```

### 5. Afficher tous les produits (1 pt)

Dans le fichier `App.js` :

```javascript
import React from "react";
import ListeProduits from "./ListeProduits";
import { baseDeDonnees } from "./baseDeDonnees"; // Importez la base de données des produits

export default function App() {
  return (
    <div>
      <h2>Tous les produits</h2>
      <ListeProduits produits={baseDeDonnees} />
    </div>
  );
}
```

### 6. Afficher les produits dont le prix est supérieur à 150 (2 pts)

```javascript
import React from "react";
import ListeProduits from "./ListeProduits";
import { baseDeDonnees } from "./baseDeDonnees";

export default function App() {
  const produitsChers = baseDeDonnees.filter((produit) => produit.prix > 150);

  return (
    <div>
      <h2>Produits dont le prix est supérieur à 150 MAD</h2>
      <ListeProduits produits={produitsChers} />
    </div>
  );
}
```

---

### Questions supplémentaires :

### 7. Utiliser `find` pour rechercher un produit spécifique (2 pts)

```javascript
export function trouverProduitParNom(nomProduit) {
  return baseDeDonnees.find((produit) => produit.nomProduit === nomProduit);
}

// Exemple d'utilisation :
const produitCherche = trouverProduitParNom("Produit2");
console.log(produitCherche);
```

### 8. Utiliser `map` pour retourner une liste de noms de produits (2 pts)

```javascript
export function listeNomsProduits() {
  return baseDeDonnees.map((produit) => produit.nomProduit);
}

// Exemple d'utilisation :
const nomsProduits = listeNomsProduits();
console.log(nomsProduits); // ["Produit1", "Produit2", "Produit3"]
```

### 9. Utiliser `props.children` dans un composant `<Wrapper />` (2 pts)

```javascript
import React from "react";

export default function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

// Utilisation dans le composant principal `App.js`
import Wrapper from "./Wrapper";
import ListeProduits from "./ListeProduits";
import { baseDeDonnees } from "./baseDeDonnees";

export default function App() {
  return (
    <div>
      <h2>Tous les produits</h2>
      <Wrapper>
        <ListeProduits produits={baseDeDonnees} />
      </Wrapper>
    </div>
  );
}
```

### 10. Utiliser `filter` pour retourner une liste des produits avec une quantité totale vendue supérieure à 5 (2 pts)

```javascript
import { calculerQuantiteTotale } from "./calculerQuantiteTotale";

export function produitsQuantiteSuperieureA5() {
  return baseDeDonnees.filter(
    (produit) => calculerQuantiteTotale(produit.quantitesVendues) > 5
  );
}

// Exemple d'utilisation :
const produitsFiltrees = produitsQuantiteSuperieureA5();
console.log(produitsFiltrees);
```

---

### Structure des fichiers :

```
/src
  /components
    Produit.js
    HeaderTable.js
    ListeProduits.js
    Wrapper.js
  calculerQuantiteTotale.js
  App.js
```

Ce corrigé répond à toutes les questions en respectant la structure demandée. Il couvre l'utilisation des méthodes `find`, `map`, `props.children`, et `filter`, ainsi que les autres concepts dans un cadre React fonctionnel.
