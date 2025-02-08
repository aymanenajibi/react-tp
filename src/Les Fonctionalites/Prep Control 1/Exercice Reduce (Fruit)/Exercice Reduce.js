import React from "react";
export function Panier() {
    const PanierFruit = [
        { produit: "Pomme", prix: 10, quantite: 3 },
        { produit: "Banane", prix: 6, quantite: 2.5 },
        { produit: "Orange", prix: 5, quantite: 2 },
    ];
    // Calcul du montant total avec methode ' reduce ' 
    const total = PanierFruit.reduce(
        (acc, number) => acc + number.prix * number.quantite,
        0
    );
    return (
        <>
            <h1>Panier</h1>
            <h2>Total de Panier : {total} DH</h2>
            <ul>
                {PanierFruit.map((Fruit) => (
                    <li>
                        {/*
                    //*                                     {" "} : C'est une espace
                    */}
                        {Fruit.produit} : {Fruit.quantite} kg x {Fruit.prix} DH = {" "}
                        {Fruit.prix * Fruit.quantite} DH
                    </li>
                ))}
            </ul>
        </>
    );
}

