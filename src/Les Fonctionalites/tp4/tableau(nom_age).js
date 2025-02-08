export function Table() {
  const table = [
    { Nom: "Brahim", Age: 28 },
    { Nom: "Said", Age: 20 },
    { Nom: "Saida", Age: 28 },
  ];

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <td>Nom </td>
            <td>Âge </td>
          </tr>
        </thead>
        <tbody>
          {table.map((element) => (
            <tr>
              <td>{element.Nom}</td>
              <td>{element.Age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
