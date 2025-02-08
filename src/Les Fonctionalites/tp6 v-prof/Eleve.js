export default function Eleve(props) {
  const { id, nom, notes, moyenne } = props.eleve; // On récupère la moyenne calculée dans App.js

  return (
    <tr>
      <td>{id}</td>
      <td>{nom}</td>
      <td>{moyenne.toFixed(2)}</td>
      <td>{notes.join("-----")}</td>
    </tr>
  );
}
