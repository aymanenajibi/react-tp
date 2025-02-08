import React from "react";
import Entete from "./Entete";
import Sommaire from "./Sommaire";
import Contenu from "./Contenu";
import Footer from "./Footer";
export default function App() {
  return (
    <div>
      <Entete />
      <div style={{ display: "flex", minHeight: "1080px" }}>
        <Sommaire />
        <Contenu />
      </div>
      <Footer />
    </div>
  );
}

