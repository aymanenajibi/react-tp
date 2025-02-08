import { AJOUTER_PRODUIT, SUPPRIMER_PRODUIT, MODIFIER_PRODUIT } from "./action";

const initialState = {
  listeProduits: [], // Liste des produits
};

const produitReducer = (state = initialState, action) => {
  switch (action.type) {
    case AJOUTER_PRODUIT:
      return {
        ...state,
        listeProduits: [...state.listeProduits, action.payload],
      };
    case SUPPRIMER_PRODUIT:
      return {
        ...state,
        listeProduits: state.listeProduits.filter(
          (produit) => produit.id !== action.payload
        ),
      };
    case MODIFIER_PRODUIT:
      return {
        ...state,
        listeProduits: state.listeProduits.map((produit) =>
          produit.id === action.payload.id ? action.payload : produit
        ),
      };
    default:
      return state;
  }
};

export default produitReducer;
