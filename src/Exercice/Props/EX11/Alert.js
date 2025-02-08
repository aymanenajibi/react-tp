import React from "react";
import "./Alert.css"; // Importer le fichier CSS

function Alert({ message, level }) {
  const getClassName = () => {
    switch (level) {
      case "info":
        return "alert-info";
      case "warning":
        return "alert-warning";
      case "error":
        return "alert-error";
      default:
        return "";
    }
  };

  return (
    <div className={`alert ${getClassName()}`}>
      <p>{message}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Alert level="info" message="Ceci est une information." />
      <Alert level="warning" message="Avertissement : veuillez vérifier." />
      <Alert level="error" message="Erreur : une problème est survenu." />
    </div>
  );
}

/* Exercice 11 : Composant d'Alerte Personnalisée
Crée un composant Alert qui reçoit deux props : message (le texte de l'alerte) et 
level (niveau de l'alerte, comme "info", "warning" ou "error").
En fonction du niveau de l'alerte, applique une couleur de fond différente 
(par exemple, bleu pour "info", jaune pour "warning" et rouge pour "error").
Indice : Utilise une fonction pour déterminer la classe CSS en fonction de level. */
