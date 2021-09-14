import CocktailList from '../components/CocktailList';
import CocktailIngredientForm from '../components/CocktailIngredientForm';
import AppHeader from '../components/AppHeader';
import { useState } from 'react';

function CocktailContainer() {

// Create useStates for the cocktails and ingredients from the search form
// They will refresh app state in virtual dom upon an alteration to themselves
const [cocktails, setCocktails] = useState([]);
const [ingredients, setIngredients] = useState("");
const [prevSearch, setPrevSearch] = useState("");
const [someCocktails, setSomeCocktails] = useState([]);
const [pageCount, setPageCount] = useState("");
const [loaded, setLoaded] = useState(false);

// Handler which deals with the ingredients input via the form and the state change as a result of the form submit
const handleIngredientSubmit = (ingredients) => {
    getCocktails(ingredients);
    setPrevSearch(ingredients);
}

// This is the fetch which provides cocktails from the back end API via ingredients which will be input by the user
const getCocktails = (ingredients) => {
    const url = "http://localhost:8080/api/cocktails/"+ingredients;
    console.log("Url: " + url);
    setLoaded(false);

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCocktails(data);
            setSomeCocktails(data.slice(0,6));
            setPageCount(Math.ceil(data.length/7));
            setLoaded(true);
            
        })
}

// Function to handle page change in pagination
const onPageChange = (event, pageInfo) => {
    console.log(pageInfo);
    const { activePage } = pageInfo;
    const startIndex = (activePage - 1)*7;
    setSomeCocktails(cocktails.slice(startIndex, startIndex + 6)); 
}

// Render - pass handleIngredient submit as props to the ingredient form component
return(
    <>
                 <AppHeader />
                 <CocktailIngredientForm 
                 handleIngredientSubmit={handleIngredientSubmit} 
                 ingredients={ingredients} 
                 setIngredients={setIngredients} 
                 prevSearch ={prevSearch} 
                 setPrevSearch ={setPrevSearch} /> 
                 
                 <CocktailList allCocktails={cocktails}
                 cocktails={someCocktails} 
                 ingredients={ingredients} 
                 prevSearch={prevSearch}
                 onPageChange={onPageChange}
                 pageCount={pageCount}
                 loaded={loaded} />
     </>
);
}


export default CocktailContainer;