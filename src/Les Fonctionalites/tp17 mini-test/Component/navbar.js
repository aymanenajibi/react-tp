import React from "react";
import { Link } from "react-router-dom"; // Permet la navigation entre les pages

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        {/* Nom de l'application */}
        <Link className="navbar-brand" to="/">
          Gestion de Produits
        </Link>

        {/* Liens de navigation */}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/liste">
                Liste des Produits
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
