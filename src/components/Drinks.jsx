import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import DrinkDetails from './DrinkDetails'

const Drinks = () => {

    const [drinks, setDrinks] = useState()
    const [drinkInfoBox, setDrinkInfoBox] = useState()
    let {id} = useParams()

    useEffect(()=> {
        const getDrinks = async() => {
            const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
            setDrinks(response.data.drinks)
        }
        getDrinks()
    },[])


    console.log(drinkInfoBox)
    console.log(drinks)

    if (!drinks) {return <h3>Loading Drinks</h3>}
    if (drinks.length===0) {return <h3>No Drinks found matching that description</h3>}

    return (
        <div className="drinks-page">
            <div className="drinks-list">
                { 
                    drinks.map((drink) => (
                        <div className="drink-grid-div" onClick={() => setDrinkInfoBox(drink)} key={drink.idDrink} style={{ backgroundImage: `url(${drink.strDrinkThumb})`, backgroundSize: "cover" , backgroundPosition: "center"}}>
                            <div>{drink.strDrink}</div>
                        </div>
                    ))
                }
            </div>
            <DrinkDetails drink={drinkInfoBox}/>
        </div>
        
    )
}

export default Drinks