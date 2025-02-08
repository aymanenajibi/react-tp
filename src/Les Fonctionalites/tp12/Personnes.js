import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
//import './Styles.css'
const personnes = [
    { id: 1, nom: 'Ahmed', age: 24 },
    { id: 2, nom: 'Sophia', age: 30 },
    { id: 3, nom: 'Jamal', age: 22 },
];

function App() {
    return (
        <Router>
            <div>
                <h1>Liste de Personnes</h1>
                <Routes>
                    <Route path="/" element={<Persons />} />
                    <Route path="/profil/:id" element={<Profil />} />
                </Routes>
            </div>
        </Router>
    );
}
function Persons() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Âge</th>
                    <th>Profil</th>
                </tr>
            </thead>
            <tbody>
                {personnes.map(personne => (
                    <tr key={personne.id}>
                        <td>{personne.nom}</td>
                        <td>{personne.age}</td>
                        <td><Link to={`/profil/${personne.id}`}>{personne.nom}</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function Profil() {
    const { id } = useParams();
    const personne = personnes.find(p => p.id === parseInt(id));

    if (!personne) {
        return <h2>Personne non trouvée</h2>;
    }

    return (
        <div className="profil" style={{ marginTop: '20px', border: '1px solid #000', padding: '10px' }}>
            <h2>Profil</h2>
            <p>Nom: {personne.nom}</p>
            <p>Âge: {personne.age} ans</p>
            <Link to="/">Retour à la liste</Link>
        </div>
    );
}

export default App;




