// import React, { useEffect, useState } from 'react'

const DrinkDetails = ({drink}) => {
    if (!drink) {return <div className="drink-info-div">Select a Drink</div>}
    console.log(drink)

    //// was trying to make this work with useState and useEffect but I give up
    // const [ingredients, setIngredients] = useState([])


    // useEffect(()=> {
    //     const drinkArray = Object.entries(drink)
    //     drinkArray.forEach((cell) => {
    //         if (cell[0].includes("strIngredient") && cell[1]) {
    //             console.log(cell)
    //             let newIn = ingredients.push(cell)
    //             setIngredients(newIn)
    //         }
    //     })
    // },[])

    const drinkArray = Object.entries(drink)
    let ingredients = [];
    let measurements = [];

    drinkArray.forEach((cell) => {
        if (cell[0].includes("strIngredient")) {
            console.log(cell)
            ingredients.push(cell[1])
        } else if (cell[0].includes("strMeasure")){
            measurements.push(cell[1])
        }
    })

    let comb = ingredients.map((ing, idx) => [ing, measurements[idx]]);
    let ingrMeas = comb.filter(cell => cell[0])

    console.log(ingrMeas)

    return (
        <div className="drink-info-div">
            <div className="drink-title">{drink.strDrink}</div>
            <div className="ingredient-title">Ingredients</div>
            <ul className="ingredients-list" >
                { 
                    ingrMeas.map((cell, idx) => (
                        <li className="ingredient" key={idx}>{cell[1]} {cell[0]}</li>
                    ))
                }
            </ul>
            <div className="ingredient-title">Instructions</div>
            <div className="drink-instructions">{drink.strInstructions}</div>
        </div>
    )
}

export default DrinkDetails