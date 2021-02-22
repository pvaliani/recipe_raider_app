import CocktailList from '../components/CocktailList';
import IngredientForm from '../components/IngredientForm';
import CocktailRecipe from '../components/CocktailRecipe';
import AppHeader from '../components/AppHeader';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function CocktailContainer() {

// Create useStates for the cocktails and ingredients from the search form
// They will refresh app state in virtual dom upon an alteration to themselves
const [cocktails, setCocktails] = useState([]);
const [ingredients, setIngredients] = useState("");
const [prevSearch, setPrevSearch] = useState("");
// const [testRecipe, setTestRecipe] = useState("");

// Handler which deals with the ingredients input via the form and the state change as a result of the form submit
const handleIngredientSubmit = (ingredients) => {
    getCocktails(ingredients);
}

// This is the fetch which provides cocktails from the back end API via ingredients which will be input by the user
const getCocktails = (ingredients) => {
    const url = "http://localhost:8080/api/cocktails/"+ingredients;
    console.log("Url: " + url);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCocktails(data);
        })
}

// Pseudocode to format user input for the API
// Convert string to lower case
// Convert string to array with comma delimiter - .split(“,”)
// For each element in the array, get rid of leading and trailing white space - .trim()
// For each element in the array, replace any space with an underscore - .replace(“ “, “_”)
// Convert the array back to a string
const formatInput = (userInput) => {
    const lowerCase = userInput.toLowerCase();
    const inputArray = lowerCase.split(",");
    const formattedArray = inputArray.map(i => i.trim());
    const arrayWithUnderscores = formattedArray.map(i => i.replace(" ", "_"));
    const formattedString = arrayWithUnderscores.toString();

    return formattedString;
}


// Render - pass handleIngredient submit as props to the ingredient form component
return(
    <Router>
    <>
        <Switch>
            <Route exact path="/cocktails"
                 render={() => <><IngredientForm handleIngredientSubmit={handleIngredientSubmit} ingredients={ingredients} setIngredients={setIngredients} formatInput={formatInput} prevSearch ={prevSearch} setPrevSearch ={setPrevSearch} /> <CocktailList cocktails={cocktails} ingredients={ingredients} prevSearch ={prevSearch}/> </>}
                 />
            <Route path="/cocktailrecipe" 
                render={() => <CocktailRecipe cocktails={cocktails} />}/>
        </Switch>
    </>
    </Router>
);

}


export default CocktailContainer;