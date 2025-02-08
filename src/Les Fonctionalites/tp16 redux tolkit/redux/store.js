import { configureStore } from "@reduxjs/toolkit";
import financeReducer from "./financeSlice"; // Importation du reducer du slice

const store = configureStore({
  reducer: {
    finance: financeReducer, // Ajout du reducer dans le store
  },
});

export default store;
