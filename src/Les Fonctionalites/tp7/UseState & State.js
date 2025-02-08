import { useState } from "react";

export default function Compteur() {
  const [ctp, setCtp] = useState(0);
  return (
    <>
      <h1>Compteur : {ctp}</h1>
      <button onClick={() => setCtp(ctp + 1)}>Increment (+1)</button>
      <button onClick={() => setCtp(ctp - 1)}>Decrement (-1)</button>
      <button onClick={() => setCtp(ctp + 2)}>Increment (+2)</button>
      <button onClick={() => setCtp(ctp - 2)}>Decrement (-2)</button>
      <button onClick={() => setCtp(0)}>Reset</button>
    </>
  );
}
