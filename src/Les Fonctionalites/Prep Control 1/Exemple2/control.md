Voici l'exercice complet avec des questions supplémentaires pour utiliser `find`, `map`, `props.children`, et `filter`.

### Exercice 1 : Gestion des produits vendus (14pts + questions supplémentaires)

Soit la base de données suivante :

```json
[
  {
    "nomProduit": "Produit1",
    "prix": 100,
    "quantitesVendues": [2, 3, 1]
  },
  {
    "nomProduit": "Produit2",
    "prix": 200,
    "quantitesVendues": [1, 5, 3]
  },
  {
    "nomProduit": "Produit3",
    "prix": 150,
    "quantitesVendues": [2, 2, 4]
  }
]
```

#### Questions de base (14 pts) :

1. **(2 pts)** Créer une fonction qui permet de calculer et retourner la quantité totale vendue d’un produit à partir de la liste `quantitesVendues`.

2. **(4 pts)** Créer le composant fonctionnel `<Produit />` qui permet d’afficher un produit (nom, prix, quantité totale vendue) sous forme d’une ligne du tableau HTML.

3. **(1 pt)** Créer le composant "HeaderTable" qui permet d'afficher la ligne de titres du tableau (Nom du produit, Prix, Quantité totale vendue).

4. **(4 pts)** En utilisant les deux composants “Produit” et "HeaderTable", créer le composant fonctionnel `<ListeProduits />` qui permet d’afficher une liste de produits, passée dans `props`, sous forme d'un tableau HTML.

5. **(1 pt)** En utilisant le composant "ListeProduits" et la base de données :
   - Afficher tous les produits.

6. **(2 pts)** Afficher uniquement les produits dont le prix est supérieur à 150.

---

#### Questions supplémentaires :

7. **(2 pts)** Utiliser la méthode `find` pour créer une fonction qui retourne le produit avec un nom spécifique à partir de la base de données (par exemple, chercher "Produit2").

8. **(2 pts)** Utiliser la méthode `map` pour créer une fonction qui retourne une liste contenant uniquement les noms des produits dans la base de données.

9. **(2 pts)** Créer un composant fonctionnel `<Wrapper />` qui utilise `props.children` pour afficher un encadrement (une `div`) autour de n'importe quel contenu enfant passé à ce composant. Utiliser ce composant pour afficher un texte autour de la table des produits.

10. **(2 pts)** Utiliser la méthode `filter` pour créer une fonction qui retourne une liste des produits dont la quantité totale vendue est supérieure à 5.
