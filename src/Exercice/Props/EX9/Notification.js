/*


*/

// Notification.js
import React from "react";
import "./App.css";

function Notification(props) {
  const getClassName = () => {
    switch (props.type) {
      case "success":
        return "notification-success";
      case "warning":
        return "notification-warning";
      case "error":
        return "notification-error";
      default:
        return "";
    }
  };

  return (
    <div className={`notification ${getClassName()}`}>
      <p>{props.message}</p>
    </div>
  );
}

export default function Notifications() {
  return (
    <div>
      <Notification type="success" message="Opération réussie" />
      <Notification
        type="warning"
        message="Avertissement : vérifiez les informations."
      />
      <Notification
        type="error"
        message="Erreur : quelque chose a mal tourné."
      />
    </div>
  );
}
