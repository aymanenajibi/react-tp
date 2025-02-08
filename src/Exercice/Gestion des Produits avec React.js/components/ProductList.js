//Affiche la liste des produits et utilise les méthodes map, filter, et reduce.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from './Product';
import Image1 from '../Images/bmw-m4-performance-technic-custom-tuning-1920x1080-2651.jpg';

const initialProducts = [
  { id: 1, name: "Produit A", price: 100, image: {Image1} },
  { id: 2, name: "Produit B", price: 150, image: "../Images/wallpaperflare.com_wallpaper (18).jpg" },
];

function ProduitList() {
  const [products, setProducts] = useState(initialProducts);

  const total = products.reduce((acc, produit) => acc + produit.price, 0);

  return (
    <div>
      <h3>Liste des Produits</h3>
          <ul className="list-group">
              {products.map(product => (
                  <li className="list-group-item d-flex justify-content-between align-item-center" key={product.id}>
                      <Product product={product} />
                      <Link className="btn btn-outline-info" to={`/products/${product.id}`}>Voir details</Link>
                  </li>
              ))}
          </ul>
          <h5>Total: {total} MAD</h5>
    </div>
  );
}

export default ProduitList;
