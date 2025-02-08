import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  temporaire: [],
  compteur: 0,
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    ajouterTransaction: (state, action) => {
      state.temporaire.push({
        type: "+",
        montant: action.payload,
        compteur: state.compteur + action.payload,
      });
      state.compteur += action.payload;
    },
    retirerTransaction: (state, action) => {
      state.temporaire.push({
        type: "-",
        montant: action.payload,
        compteur: state.compteur - action.payload,
      });
      state.compteur -= action.payload;
    },
    enregistrerTransactions: (state) => {
      state.transactions.push(...state.temporaire);
      state.temporaire = [];
    },
  },
});

// Export des actions générées par createSlice
export const {
  ajouterTransaction,
  retirerTransaction,
  enregistrerTransactions,
} = financeSlice.actions;

// Export du reducer à ajouter au store
export default financeSlice.reducer;
