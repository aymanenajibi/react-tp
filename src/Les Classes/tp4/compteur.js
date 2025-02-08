import React, { Component } from "react";

class MonComposant extends Component {
  static nombreTotalClick = 0; // Variable statique pour stocker le nombre total de clics
  constructor(props) {
    super(props);
    this.state = {
      compteur: 0,
      messages: [], // Pour le stockage des messages
      nom: "",
      nombreClick: 0, //Pour stocker le nombre total de click
    };
  }

  ajouterMessage = (nouveauMessage) => {
    this.setState((prevState) => ({
      messages: [...prevState.messages, nouveauMessage],
    }));
  };

  componentDidMount() {
    this.ajouterMessage("Le composant est monté !");
  }

  //*                _ = prevProps
  componentDidUpdate(_, prevState) {
    if (prevState.compteur !== this.state.compteur) {
      this.ajouterMessage(
        `Le compteur a été mis à jour : ${this.state.compteur}`
      );
    }
  }

  componentWillUnmount() {
    this.ajouterMessage("Le composant va être démonté.");
  }

  changerCompteur = (valeur) => {
    MonComposant.nombreTotalClick += 1; // Incrémente la variable statique pour tous les click
    this.setState((prevState) => ({
      compteur: prevState.compteur + valeur,
      nombreClick: prevState.nombreClick + 1,
    }));
  };

  reinitialiserMessage = () => {
    this.setState({ messages: [] });
  };

  reinirialiserCouter = () => {
    this.setState({ compteur: 0, nombreClick: 0 });
  };

  handleNomChange = (event) => {
    const nouveauNom = event.target.value;
    this.setState({
      nom: nouveauNom,
      compteur: 0, //Réinitialise le compteur
      nombreClick: 0, //Réinitialise le nombre de click
    });
  };

  render() {
    return (
      <div>
        <h1>Nom d'utilisateur</h1>
        <input
          type="text"
          onChange={this.handleNomChange}
          value={this.state.nom}
        />
        <h1>Compteur : {this.state.compteur}</h1>
        <button onClick={() => this.changerCompteur(1)}>Increment (+1)</button>
        <button onClick={() => this.changerCompteur(-1)}>Decrement (-1)</button>

        <h2>Messages de cycle de vie :</h2>
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <button onClick={this.reinitialiserMessage}>
          Reinitialiser les messages
        </button>
        <button onClick={this.reinirialiserCouter}>
          Reinitialiser les Counter
        </button>

        <h1>
          bravo, {this.state.nom} Vous avez clique {this.state.nombreClick} fois
          .
        </h1>

        <h4>Nombre Total de Click : {MonComposant.nombreTotalClick} fois</h4>
      </div>
    );
  }
}

export default MonComposant;
