import Eleve from "./Eleve"; // Correct import

export default function Eleves(props) {
  const tEleves = props.eleves; // Les données proviennent de App.js

  return (
    <>
      <div className="App">{props.children}</div>
      <table className="table table-bordered">
        <thead className="table-info">
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Moyenne Générale</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {tEleves.map((tableau) => (
            <Eleve key={tableau.id} eleve={tableau} />
          ))}
        </tbody>
      </table>
    </>
  );
}
