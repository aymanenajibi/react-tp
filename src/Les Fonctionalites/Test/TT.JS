<table>
  <thead>
    <th>ID</th>
    <th>Nm</th>
    <th>Age</th>
  </thead>
  <tbody>
    {t.map((tableau) => (
      <tr key={tableau.id}>
        <td key={tableau.id}>{tableau.id}</td>
        <td>{tableau.nom}</td>
        <td>{tableau.age}</td>
      </tr>
    ))}
  </tbody>
</table>;
