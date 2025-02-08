// Liste.js
import React from 'react';

export default function Liste({ clients }) {
    return (
        <div>
            <h2>Liste des Clients</h2>
            {clients.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Ville</th>
                            <th>CA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) => (
                            <tr key={index}>
                                <td>{client.nom}</td>
                                <td>{client.ville}</td>
                                <td>{client.ca}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Aucun client trouvé.</p>
            )}
        </div>
    );
}
