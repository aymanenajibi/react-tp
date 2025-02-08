import { AJOUTER, RETIRER, ENREGISTRER } from "./types";

const initialState = {
  transactions: [], // Transactions enregistrées
  temporaire: [], // Transactions temporaires
  compteur: 0, // Solde actuel
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AJOUTER:
      return {
        ...state,
        temporaire: [
          ...state.temporaire,
          {
            type: "+",
            montant: action.payload,
            compteur: state.compteur + action.payload,
          },
        ],
        compteur: state.compteur + action.payload,
      };
    case RETIRER:
      return {
        ...state,
        temporaire: [
          ...state.temporaire,
          {
            type: "-",
            montant: action.payload,
            compteur: state.compteur - action.payload,
          },
        ],
        compteur: state.compteur - action.payload,
      };
    case ENREGISTRER:
      return {
        ...state,
        transactions: [...state.transactions, ...state.temporaire],
        temporaire: [], // Réinitialiser la liste temporaire
      };
    default:
      return state;
  }
};

export default reducer;
