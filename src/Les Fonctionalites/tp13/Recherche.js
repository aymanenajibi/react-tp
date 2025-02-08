// Recherche.js
import React, { useState } from 'react';

export default function Recherche({ clients }) {
    const [searchTerm, setSearchTerm] = useState('');

    const results = clients.filter((client) =>
        client.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Recherche de Client</h2>
            <input type="text" placeholder="Rechercher par nom" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <ul>
                {results.map((client, index) => (
                    <li key={index}>{client.nom} - {client.ville} - {client.ca}</li>
                ))}
            </ul>
        </div>
    );
}
