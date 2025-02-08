import React, { useState } from 'react';

export default function Maj({ clients, setClients }) {
    const [nom, setNom] = useState('');
    const [ville, setVille] = useState('');
    const [ca, setCa] = useState('');

    const ajouterClient = () => {
        const newClient = { nom, ville, ca };
        setClients([...clients, newClient]); // This line should work now
        setNom('');
        setVille('');
        setCa('');
    };

    return (
        <div>
            <h2>Ajouter un Client</h2>
            <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
            <input type="text" placeholder="Ville" value={ville} onChange={(e) => setVille(e.target.value)} />
            <input type="text" placeholder="CA" value={ca} onChange={(e) => setCa(e.target.value)} />
            <button onClick={ajouterClient}>Ajouter</button>
        </div>
    );
}
