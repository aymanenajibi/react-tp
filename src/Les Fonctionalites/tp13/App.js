import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Liste from './Liste';
import Maj from './Maj';
import Recherche from './Recherche';
import FiltreVille from './FiltreVille';
import FiltreCa from './FiltreCa';
import NotFound from './Vide';

export default function App() {
    const [clients, setClients] = useState([]);

    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Maj clients={clients} setClients={setClients} />} />
                    <Route path="/liste" element={<Liste clients={clients} />} />
                    <Route path="/recherche" element={<Recherche clients={clients}/>} />
                    <Route path="/filtreVille" element={<FiltreVille clients={clients}/>} />
                    <Route path="/filtreCa" element={<FiltreCa clients={clients}/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Gestion des clients</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/liste">Liste</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recherche">Recherche</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/filtreVille">Filtrer par ville</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/filtreCa">Filtrer par CA</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
