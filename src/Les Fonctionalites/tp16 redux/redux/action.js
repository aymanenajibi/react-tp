import { AJOUTER, ENREGISTRER, RETIRER } from "./types";

export const ajouterTransaction = (montant) => ({
  type: AJOUTER,
  payload: montant,
});

export const retirerTransaction = (montant) => ({
  type: RETIRER,
  payload: montant,
});

export const enregistrerTransactions = () => ({
  type: ENREGISTRER,
});
