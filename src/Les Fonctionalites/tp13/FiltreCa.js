// FiltreCa.js
import React, { useState } from 'react';

export default function FiltreCa({ clients }) {
    const [minCa, setMinCa] = useState('');
    const [maxCa, setMaxCa] = useState('');

    const filteredClients = clients.filter((client) => {
        const ca = parseFloat(client.ca);
        return ca >= parseFloat(minCa || 0) && ca <= parseFloat(maxCa || Infinity);
    });

    return (
        <div>
            <h2>Filtrer par CA</h2>
            <input type="number" placeholder="CA minimum" value={minCa} onChange={(e) => setMinCa(e.target.value)} />
            <input type="number" placeholder="CA maximum" value={maxCa} onChange={(e) => setMaxCa(e.target.value)} />
            <ul>
                {filteredClients.map((client, index) => (
                    <li key={index}>{client.nom} - {client.ville} - {client.ca}</li>
                ))}
            </ul>
        </div>
    );
}
