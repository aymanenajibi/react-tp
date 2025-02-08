import { createStore } from "redux";

// Action Types
const AJOUTER = "AJOUTER";
const INCREMENTER = "INCREMENTER";
const DECREMENTER = "DECREMENTER";
const SUPPRIMER = "SUPPRIMER";

// Actions
export const ajouter = (produit) => ({
  type: AJOUTER,
  payload: produit,
});

export const incrementer = (id) => ({
  type: INCREMENTER,
  payload: id,
});

export const decrementer = (id) => ({
  type: DECREMENTER,
  payload: id,
});

export const supprimer = (id) => ({
  type: SUPPRIMER,
  payload: id,
});

// Reducer
const initialState = {
  panier: [],
};

const panierReducer = (state = initialState, action) => {
  switch (action.type) {
    case AJOUTER:
      const produitExistant = state.panier.find(
        (item) => item.id === action.payload.id
      );
      if (produitExistant) {
        return {
          ...state,
          panier: state.panier.map((item) =>
            item.id === action.payload.id
              ? { ...item, qte: item.qte + action.payload.qte }
              : item
          ),
        };
      } else {
        return {
          ...state,
          panier: [...state.panier, action.payload],
        };
      }

    case INCREMENTER:
      return {
        ...state,
        panier: state.panier.map((item) =>
          item.id === action.payload ? { ...item, qte: item.qte + 1 } : item
        ),
      };

    case DECREMENTER:
      return {
        ...state,
        panier: state.panier.map((item) =>
          item.id === action.payload && item.qte > 1
            ? { ...item, qte: item.qte - 1 }
            : item
        ),
      };

    case SUPPRIMER:
      return {
        ...state,
        panier: state.panier.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export const store = createStore(panierReducer);
