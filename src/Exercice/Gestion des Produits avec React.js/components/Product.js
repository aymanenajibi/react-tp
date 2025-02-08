//Affiche les détails de chaque produit avec props.
import React from "react";

function Product({ product }) {
  return (
    <div>
      <h5>{product.name}</h5>
      <p>Prix: {product.price}</p>
      <img
        src={product.image}
        alt={product.image}
        className="img-fluid rounded"
        style={{ width: "100px" }}
      />
    </div>
  );
}

export default Product;
