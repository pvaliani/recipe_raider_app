import MealList from '../components/MealList';
import IngredientForm from '../components/IngredientForm';
import Recipe from '../components/Recipe';
import AppHeader from '../components/AppHeader';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';



function MealContainer() {

// Create useStates for the meals and ingredients from the search form
// They will refresh app state in virtual dom upon an alteration to themselves
const [allMeals, setAllMeals] = useState([]);
const [ingredients, setIngredients] = useState("");
const [prevSearch, setPrevSearch] = useState("");
const [someMeals, setSomeMeals] = useState([]);
const [pageCount, setPageCount] = useState("");


// const [testRecipe, setTestRecipe] = useState("");

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
            setAllMeals(data);
            setSomeMeals(data.slice(0, 6))
            setPageCount(Math.ceil(data.length/7));
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

// Pagination code --------- 

const onPageChange = (event, pageInfo) => {
    console.log(pageInfo);
    const { activePage } = pageInfo;
    const startIndex = (activePage - 1)*7;
    setSomeMeals(allMeals.slice(startIndex, startIndex + 6)); 
}


// End of pagination code ------- 

// const pageCount = Math.ceil(meals.length/6);


// Render - pass handleIngredient submit as props to the ingredient form component
return(
    <Router>
    <>
    <AppHeader/>
        <Switch>
            <Route exact path="/"
                 render={() => {
                 return (
                 <><IngredientForm 
                    handleIngredientSubmit={handleIngredientSubmit} 
                    ingredients={ingredients} 
                    setIngredients={setIngredients} 
                    formatInput={formatInput} 
                    prevSearch ={prevSearch} 
                    setPrevSearch ={setPrevSearch} />

                    <MealList meals={someMeals} 
                    ingredients={ingredients} 
                    prevSearch ={prevSearch} 
                    onPageChange={onPageChange} 
                    pageCount={pageCount} /> </>)
                 }}
                 />
            <Route path="/recipe" 
                render={() => <Recipe meals={someMeals} />}/>
        </Switch>
    </>
    </Router>
);

}


export default MealContainer;