/* 
Exercice 7 : Boutons d'incrément et de décrément
Crée un composant Counter avec deux boutons : Incrémenter et Décrémenter.
Le composant parent doit gérer l'état du compteur et passer une valeur count et 
deux fonctions increment et decrement au composant Counter.
Dans Counter, affiche la valeur de count et utilise les deux 
fonctions pour incrémenter et décrémenter cette valeur.
*/
import React, { useState } from "react";

function Counter({ count, increment, decrement }) {
  return (
    <>
      <h1>Compteur : {count}</h1>
      <button onClick={increment}>Incrementer</button>
      <button onClick={decrement}>Decrementer</button>
    </>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Counter count={count} increment={increment} decrement={decrement} />
    </>
  );
}

export default Parent;
