import MealList from '../components/MealList';
import IngredientForm from '../components/IngredientForm';
import { useState, useEffect } from 'react';


function MealContainer() {

// Create useStates for the meals and ingredients from the search form
// They will refresh app state in virtual dom upon an alteration to themselves
const [meals, setMeals] = useState([]);
const [ingredients, setIngredients] = useState("");

// Handler which deals with the ingredients input via the form and the state change as a result of the form submit
const handleIngredientSubmit = (ingredients) => {
    getMeals(ingredients);
}

// This is the fetch which provides meals from the back end API via ingredients which will be input by the user
const getMeals = (ingredients) => {
    const url = "http://localhost:8080/api/meals/"+ingredients;
    console.log("Url: " + url);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMeals(data);
        })
}


// Render - pass handleIngredient submit as props to the ingredient form component

return(
    <>
        <IngredientForm handleIngredientSubmit={handleIngredientSubmit}
                        ingredients={ingredients}
                        setIngredients={setIngredients}/>
        <MealList />
    </>
);

}


export default MealContainer;