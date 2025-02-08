import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function FormulaireNomAge() {
  // Initialisation du state pour le nom et l'âge
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Carte Bootstrap pour envelopper le formulaire */}
          <div className="card p-4 shadow">
            <h1 className="card-title text-center">
              Bonjour, {nom ? nom : "inconnu"}!
            </h1>

            {/* Affichage conditionnel du message d'âge */}
            {age && (
              <h2 className="text-center text-danger">
                {age >= 18 ? "Vous êtes majeur." : "Vous êtes mineur."}
              </h2>
            )}

            {/* Formulaire Bootstrap */}
            <form>
              {/* Champ de texte pour le nom avec Bootstrap */}
              <div className="form-group">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="nom"
                  placeholder="Entrez votre nom"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
              </div>

              {/* Champ de texte pour l'âge avec Bootstrap */}
              <div className="form-group">
                <label htmlFor="age">Âge</label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  placeholder="Entrez votre âge"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              {/* Bouton avec Bootstrap */}
              <button type="button" className="btn btn-primary btn-block mt-3">
                Soumettre
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormulaireNomAge;
