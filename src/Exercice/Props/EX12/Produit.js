import React from "react";

function ProductItem({ name, price, discount }) {
  const prixFinal = (price, discount) => {
    return price - (price * discount) / 100;
  };

  return (
    <li>
      <h2>{name}</h2>
      <p>Prix : {price}</p>
      <p>Discount : {discount}%</p>
      <p>PrixFinal {prixFinal(price, discount).toFixed(2)} DH</p>
    </li>
  );
}

function ProductList({ products }) {
  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {products.map((product, index) => (
          <ProductItem
            key={index}
            name={product.name}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const products = [
    { name: "Produit 1", price: 100, discount: 10 },
    { name: "Produit 2", price: 200, discount: 20 },
    { name: "Produit 3", price: 300, discount: 30 },
  ];
  return <ProductList products={products} />;
}

/* Exercice 12 : Liste de Produits avec Prix Réduit
Crée un composant ProductList qui prend une liste de produits sous forme de prop products.
Chaque produit est un objet contenant name, price et discount (remise). 
Le composant doit afficher une liste de produits avec leur prix final (prix - remise).
Indice : Utilise map pour parcourir la liste des produits, 
et crée un sous-composant ProductItem pour chaque produit.*/
