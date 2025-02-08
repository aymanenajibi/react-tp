import React from "react";
import { useSelector } from "react-redux";

function Liste() {
  const transactions = useSelector((state) => state.finance.transactions);

  return (
    <div>
      <h2 className="text-center mb-4">Liste des Transactions</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>Operation</th>
              <th>Montant</th>
              <th>Compteur</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.type === "+" ? "Ajouté" : "Retiré"}</td>
                <td>{Math.abs(transaction.montant)} MAD</td>
                <td>{transaction.compteur} MAD</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Liste;
