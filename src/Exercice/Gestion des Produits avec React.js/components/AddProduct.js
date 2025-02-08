//Permet d’ajouter un produit et utilise useState.
import React, { useState } from 'react';

function AddProduct({ onAddProduct }) {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { id: Date.now(), name, price: parseFloat(price), image };
        onAddProduct(newProduct);
        setName('');
        setPrice('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="card p-3">
            <h5>Ajouter un Produit</h5>
            <div className="form-group">
                <labe>Nom</labe>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>


            <div className="form-group">
                <label>Prix</label>
                <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>


            <div className="form-group">
                <label>Image</label>
                <input type="file" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>

            <button className="btn btn-primary mt-2">Ajouter</button>
        </form>
    );
};

export default AddProduct;