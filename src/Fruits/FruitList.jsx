import { useState } from "react";

export default function FruitList() {
    //const fruit = fruits;

    

    //methode 2
   /* const displayFruits = function (fruits) {
        return fruits.map(function (fruit) {
            return <li>{fruit}</li>;
        });
    };*/

    //fruit.push("Ijas");
    const [fruit, setFruit] = useState('')
    const [FruitList,setFruitlist] = useState ([])
    //methode 1
    const displayFruits = () => FruitList.map((fruits) => <li>{fruits}</li>);
    const handleInput = () => {
        const fruitValue = document.querySelector('#fruit').value
        setFruit(fruitValue)
    }
    
    const handleFruit = (e) => {
        e.preventDefault()
        setFruitlist()
    }

    return (
        <>
            <span>
                <form>
                    <input onChange={handleInput} type="text" id="fruit" placeholder="Enter a fruit" />
                    <input onClick={handleFruit} type="submit" value="Add fruit" />
                </form>
            </span>
            <h1 className="h1">Fruits :</h1>
            <ul>{displayFruits(fruit)}</ul>
        </>
    );
}
