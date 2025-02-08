/*
Exercice 3 : Afficher une liste d'éléments
Crée un composant Item qui accepte une prop name et l'affiche dans un élément <li>.
Crée un composant ItemList qui prend une prop items (un tableau de chaînes de caractères) et utilise le composant Item pour afficher chaque élément de la liste
*/

function Item(props) {
  return <li>{props.name}</li>;
}

function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item key={index} name={item} />
      ))}
    </ul>
  );
}
export default ItemList;
