import React from "react";

function Calculator({ num1, num2, operation }) {
  const calculateResult = () => {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? (num1 / num2).toFixed(2) : "Division par zéro";
      default:
        return "Invalid operation";
    }
  };
  const result = calculateResult(num1, num2, operation);
  return (
    <div>
      <h1>Calculatrice Simple</h1>
      <p>
        Résultat de {operation} entre {num1} et {num2} : {result}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Calculator num1={10} num2={2} operation="+" />
      <Calculator num1={10} num2={2} operation="-" />
      <Calculator num1={10} num2={2} operation="*" />
      <Calculator num1={10} num2={0} operation="/" />
    </div>
  );
}
