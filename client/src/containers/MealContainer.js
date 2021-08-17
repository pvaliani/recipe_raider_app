import MealList from '../components/MealList';
import IngredientForm from '../components/IngredientForm';
import Recipe from '../components/Recipe';
import MealAppHeader from '../components/MealAppHeader';
import { useState, useEffect } from 'react';



function MealContainer() {

// Create useStates for the meals and ingredients from the search form
// They will refresh app state in virtual dom upon an alteration to themselves
const [allMeals, setAllMeals] = useState([]);
const [ingredients, setIngredients] = useState("");
const [prevSearch, setPrevSearch] = useState("");
const [someMeals, setSomeMeals] = useState([]);
const [pageCount, setPageCount] = useState("");
const [loaded, setLoaded] = useState(false);


// const [testRecipe, setTestRecipe] = useState("");

// Handler which deals with the ingredients input via the form and the state change as a result of the form submit
const handleIngredientSubmit = (ingredients) => {
    getMeals(ingredients);
    setPrevSearch(ingredients);
}

// This is the fetch which provides meals from the back end API via ingredients which will be input by the user
const getMeals = (ingredients) => {
    const url = "http://localhost:8080/api/meals/"+ingredients;
    console.log("Url: " + url);
    setLoaded(false);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setAllMeals(data);
            setSomeMeals(data.slice(0, 6))
            setPageCount(Math.ceil(data.length/7));
            setLoaded(true);
        })

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
    <>
                 <MealAppHeader />
                 <IngredientForm 
                    handleIngredientSubmit={handleIngredientSubmit} 
                    ingredients={ingredients} 
                    setIngredients={setIngredients}  
                    prevSearch ={prevSearch} 
                    setPrevSearch ={setPrevSearch} />

                    <MealList allMeals={allMeals}
                    meals={someMeals} 
                    ingredients={ingredients} 
                    prevSearch ={prevSearch} 
                    onPageChange={onPageChange} 
                    pageCount={pageCount} 
                    loaded={loaded} />
    </>
);

}


export default MealContainer;