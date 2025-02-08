{
  //!Version Map () liste
  /*   function ListeDeNoms() {
  const noms = [
    { id: 3, nom: "nada", notes: [11, 16, 11] },
    { id: 4, nom: "morad", notes: [11, 16, 11] },
  ];

  return (
    <ul>
      {noms.map((tableau) => (
        <li key={tableau.id}>
          Nom : {tableau.nom}, Notes : {tableau.notes.join(",")}
        </li>
      ))}
    </ul>
  );
}

export default ListeDeNoms;  */
  //!Version Map () Tableau
}

function ListeDeNoms() {
  const noms = [
    { id: 3, nom: "nada", notes: [11, 16, 11] },
    { id: 4, nom: "morad", notes: [11, 16, 11] },
  ];

  return (
    <table className="table table-bordered">
      <thead className="table-info">
        <tr>
          <th>ID 'UNIQUE'</th>
          <th>Nom</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {/* kat3yt 3la name table l9dim (noms) + name dyal table jdid (tableau) */}
        {/* noms.map(function (tableau)  */}
        {noms.map((tableau) => (
          <tr key={tableau.id}>
            <td>{tableau.id}</td>
            <td>{tableau.nom}</td>
            <td>{tableau.notes.join(",")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListeDeNoms;
