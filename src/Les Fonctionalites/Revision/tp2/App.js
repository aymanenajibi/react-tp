import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormProduit from "./components/FormProduct";
import ListProduit from "./components/ListProduit";
import Detail from "./components/detail";
import "bootstrap/dist/css/bootstrap.min.css";

/*
 ! --- Composant App ---
 * Point d'entrée principal de l'application
 * Configure les routes de l'application avec React Router
 * Inclut les composants FormProduit, ListProduit, et Detail
 */

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FormProduit />
              <ListProduit />
            </>
          }
        />
        <Route path="/Detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default App;
