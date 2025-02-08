import React from "react";

function Liste({ transactions }) {
  return (
    <div>
      <h2 className="text-center mb-4">Liste des Transactions</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Nom</th>
              <th>Montant</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.nom}</td>
                <td>{Math.abs(transaction.montant)} MAD</td>
                <td>{transaction.type === "+" ? "Ajouté" : "Retiré"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Liste;
