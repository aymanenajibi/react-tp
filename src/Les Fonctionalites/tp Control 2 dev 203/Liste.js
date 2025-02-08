import React from "react";

function Liste({ operations }) {
  return (
    <div>
      <h2 className="text-center mb-4">Historique des Opérations</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Opération</th>
              <th>Nombre</th>
              <th>Compteur</th>
            </tr>
          </thead>
          <tbody>
            {operations.map((op, index) => (
              <tr key={index}>
                <td>{op.operation}</td>
                <td>{op.nombre}</td>
                <td>{op.compteur}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Liste;
