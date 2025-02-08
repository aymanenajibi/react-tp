// FiltreVille.js
import React, { useState } from 'react';

export default function FiltreVille({ clients }) {
    const [city, setCity] = useState('');

    const filteredClients = clients.filter((client) =>
        client.ville.toLowerCase() === city.toLowerCase()
    );

    return (
        <div>
            <h2>Filtrer par Ville</h2>
            <input type="text" placeholder="Ville" value={city} onChange={(e) => setCity(e.target.value)} />
            <ul>
                {filteredClients.map((client, index) => (
                    <li key={index}>{client.nom} - {client.ville} - {client.ca}</li>
                ))}
            </ul>
        </div>
    );
}
