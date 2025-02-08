export const AJOUTER_PRODUIT = "AJOUTER_PRODUIT";
export const SUPPRIMER_PRODUIT = "SUPPRIMER_PRODUIT";
export const MODIFIER_PRODUIT = "MODIFIER_PRODUIT";

export const ajouterProduit = (produit) => ({
  type: AJOUTER_PRODUIT,
  payload: produit,
});

export const supprimerProduit = (id) => ({
  type: SUPPRIMER_PRODUIT,
  payload: id,
});

export const modifierProduit = (produit) => ({
  type: MODIFIER_PRODUIT,
  payload: produit,
});
