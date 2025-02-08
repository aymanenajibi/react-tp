/*
Exercice 8 : Liste de tâches
Crée un composant Task qui accepte une prop taskName et 
affiche le nom de la tâche dans un élément <li>
Crée un composant TaskList qui prend une prop tasks 
(un tableau d'objets avec des noms de tâches)
et utilise le composant Task pour 
afficher chaque tâche de la liste.
*/
import React from "react";

function Task(props) {
  return <li>{props.taskName}</li>;
}

function TaskList() {
  const tasks = ["aaa", "bbb", "ccc"];
  return (
    <ul>
      {tasks.map((task, index) => (
        <Task key={index} taskName={task} />
      ))}
    </ul>
  );
}

export default TaskList;
