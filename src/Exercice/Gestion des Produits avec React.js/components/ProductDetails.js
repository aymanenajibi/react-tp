//Affiche les détails d’un produit et utilise le cycle de vie des composants.
import React, { Component } from 'react';

class ProductDetails extends Component {
    componentDidMount() {
        // Charger les détails du produit si nécessaire
        console.log('Détails du produit montés');
    }

    componentDidUpdate() {
        // Mettre à jour les informations
        console.log('Détails du produit mis à jour');
    }

    componentWillUnmount() {
        console.log('ProductDetails sera démonté');
    }

    render() {
        const { product } = this.props;
        if (!product) return <p>Produit introuvable </p>;

        return (
            <div className="card p-3">
                <h5>{product.name}</h5>
                <p>Prix: {product.price}</p>
                <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
        );
    };
};

export default ProductDetails;