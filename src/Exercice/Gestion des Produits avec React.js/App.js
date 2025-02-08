// Gère le routage et sert de point central pour l'application.
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className="container mt-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <Link className="navbar-brand" to="/">Gestion de Produits</Link>
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/products">Liste des Produits</Link>
                        <Link className="nav-link" to="/add-product">Ajouter un Produit</Link>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
