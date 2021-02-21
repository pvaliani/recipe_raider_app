import {Container, Header, Image, List, Embed} from 'semantic-ui-react';

function Recipe({recipe}) {
  if (!recipe) return null;

  // console.log(meals);
  // const recipe = meals[0];

  console.log(recipe);
  // const recipe = {
  //   idMeal: "52771",
  //   strMeal: "Spicy Arrabiata Penne",
  //   strDrinkAlternate: null,
  //   strCategory: "Vegetarian",
  //   strArea: "Italian",
  //   strInstructions: "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
  //   strMealThumb: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  //   strTags: "Pasta,Curry",
  //   strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
  //   strIngredient1: "penne rigate",
  //   strIngredient2: "olive oil",
  //   strIngredient3: "garlic",
  //   strIngredient4: "chopped tomatoes",
  //   strIngredient5: "red chile flakes",
  //   strIngredient6: "italian seasoning",
  //   strIngredient7: "basil",
  //   strIngredient8: "Parmigiano-Reggiano",
  //   strIngredient9: "",
  //   strIngredient10: "",
  //   strIngredient11: "",
  //   strIngredient12: "",
  //   strIngredient13: "",
  //   strIngredient14: "",
  //   strIngredient15: "",
  //   strIngredient16: null,
  //   strIngredient17: null,
  //   strIngredient18: null,
  //   strIngredient19: null,
  //   strIngredient20: null,
  //   strMeasure1: "1 pound",
  //   strMeasure2: "1/4 cup",
  //   strMeasure3: "3 cloves",
  //   strMeasure4: "1 tin ",
  //   strMeasure5: "1/2 teaspoon",
  //   strMeasure6: "1/2 teaspoon",
  //   strMeasure7: "6 leaves",
  //   strMeasure8: "spinkling",
  //   strMeasure9: "",
  //   strMeasure10: "",
  //   strMeasure11: "",
  //   strMeasure12: "",
  //   strMeasure13: "",
  //   strMeasure14: "",
  //   strMeasure15: "",
  //   strMeasure16: null,
  //   strMeasure17: null,
  //   strMeasure18: null,
  //   strMeasure19: null,
  //   strMeasure20: null,
  //   strSource: null,
  //   dateModified: null
  //   }
  
    //Create an empty array
    //If the quantity is not null or blank, and the ingredient is not null or blank, combine the two together in a string and add them to the array.
    //Loop over all the elements in the array and create a JSX element for them
    //Insert this into the return
  
    let ingredientsList = []
  
    const displayIngredients = () => {
      if((recipe.strMeasure1 !== null && recipe.strMeasure1 !== "") && (recipe.strIngredient1 !== null && recipe.strIngredient1 !== "")) {
        const ingredientEntry = `${recipe.strMeasure1} ${recipe.strIngredient1}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure2 !== null && recipe.strMeasure2 !== "") && (recipe.strIngredient2 !== null && recipe.strIngredient2 !== "")) {
        const ingredientEntry = `${recipe.strMeasure2} ${recipe.strIngredient2}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure3 !== null && recipe.strMeasure3 !== "") && (recipe.strIngredient3 !== null && recipe.strIngredient3 !== "")) {
        const ingredientEntry = `${recipe.strMeasure3} ${recipe.strIngredient3}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure4 !== null && recipe.strMeasure4 !== "") && (recipe.strIngredient4 !== null && recipe.strIngredient4 !== "")) {
        const ingredientEntry = `${recipe.strMeasure4} ${recipe.strIngredient4}`;
        ingredientsList.push(ingredientEntry);
      }
  
      if((recipe.strMeasure5 !== null && recipe.strMeasure5 !== "") && (recipe.strIngredient5 !== null && recipe.strIngredient5 !== "")) {
        const ingredientEntry = `${recipe.strMeasure5} ${recipe.strIngredient5}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure6 !== null && recipe.strMeasure6 !== "") && (recipe.strIngredient6 !== null && recipe.strIngredient6 !== "")) {
        const ingredientEntry = `${recipe.strMeasure6} ${recipe.strIngredient6}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure7 !== null && recipe.strMeasure7 !== "") && (recipe.strIngredient7 !== null && recipe.strIngredient7 !== "")) {
        const ingredientEntry = `${recipe.strMeasure7} ${recipe.strIngredient7}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure8 !== null && recipe.strMeasure8 !== "") && (recipe.strIngredient8 !== null && recipe.strIngredient8 !== "")) {
        const ingredientEntry = `${recipe.strMeasure8} ${recipe.strIngredient8}`;
        ingredientsList.push(ingredientEntry);
      }
  
      if((recipe.strMeasure9 !== null && recipe.strMeasure9 !== "") && (recipe.strIngredient9 !== null && recipe.strIngredient9 !== "")) {
        const ingredientEntry = `${recipe.strMeasure9} ${recipe.strIngredient9}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure10 !== null && recipe.strMeasure10 !== "") && (recipe.strIngredient10 !== null && recipe.strIngredient10 !== "")) {
        const ingredientEntry = `${recipe.strMeasure10} ${recipe.strIngredient10}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure11 !== null && recipe.strMeasure11 !== "") && (recipe.strIngredient11 !== null && recipe.strIngredient11 !== "")) {
        const ingredientEntry = `${recipe.strMeasure11} ${recipe.strIngredient11}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure12 !== null && recipe.strMeasure12 !== "") && (recipe.strIngredient12 !== null && recipe.strIngredient12 !== "")) {
        const ingredientEntry = `${recipe.strMeasure12} ${recipe.strIngredient12}`;
        ingredientsList.push(ingredientEntry);
      }
  
      if((recipe.strMeasure13 !== null && recipe.strMeasure13 !== "") && (recipe.strIngredient13 !== null && recipe.strIngredient13 !== "")) {
        const ingredientEntry = `${recipe.strMeasure13} ${recipe.strIngredient13}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure14 !== null && recipe.strMeasure14 !== "") && (recipe.strIngredient14 !== null && recipe.strIngredient14 !== "")) {
        const ingredientEntry = `${recipe.strMeasure14} ${recipe.strIngredient14}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure15 !== null && recipe.strMeasure15 !== "") && (recipe.strIngredient15 !== null && recipe.strIngredient15 !== "")) {
        const ingredientEntry = `${recipe.strMeasure15} ${recipe.strIngredient15}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure16 !== null && recipe.strMeasure16 !== "") && (recipe.strIngredient16 !== null && recipe.strIngredient16 !== "")) {
        const ingredientEntry = `${recipe.strMeasure16} ${recipe.strIngredient16}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure17 !== null && recipe.strMeasure17 !== "") && (recipe.strIngredient17 !== null && recipe.strIngredient17 !== "")) {
        const ingredientEntry = `${recipe.strMeasure17} ${recipe.strIngredient17}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure18 !== null && recipe.strMeasure18 !== "") && (recipe.strIngredient18 !== null && recipe.strIngredient18 !== "")) {
        const ingredientEntry = `${recipe.strMeasure18} ${recipe.strIngredient18}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure19 !== null && recipe.strMeasure19 !== "") && (recipe.trIngredient19 !== null && recipe.strIngredient19 !== "")) {
        const ingredientEntry = `${recipe.strMeasure19} ${recipe.strIngredient19}`;
        ingredientsList.push(ingredientEntry);
      }
      if((recipe.strMeasure20 !== null && recipe.strMeasure20 !== "") && (recipe.strIngredient20 !== null && recipe.strIngredient20 !== "")) {
        const ingredientEntry = `${recipe.strMeasure20} ${recipe.strIngredient20}`;
        ingredientsList.push(ingredientEntry);
      }
      
      // console log the ingredients list to check it in the browser
      console.log(ingredientsList);
  
      return ingredientsList;
  
    }
  
  //  Call the displayIngredients method 
    displayIngredients();
  
  //  Map the ingredients to an ingredientsList and return the result as a list item in JSX to a component prop at the bottom
  
    const ingredientsJSX = ingredientsList.map(ingredient => {
        return (<List.Item>{ingredient}</List.Item>);
    });

    return(

        // strMeal - meal name - Header of Text Container
        // strCategory - meal category - 
        // strArea - region of cuisine - 
        // strInstructions - cooking instructions - Text Container 
        // strYoutube - video instructions - Embed 
        // strSource - source of recipe - 
        // strIngredient(n) - Ingredients - 
        // strQuantity(n) -  Quantity - 

      <>
      <Container text>
        {/* <Embed id="1IszT_guI08" placeholder="" source="youtube"/> */}
        <Header as='h2'>{recipe.strMeal}</Header>

            <List>
              {ingredientsJSX}
            </List>
            <p>{recipe.strInstructions}</p>
      </Container>
      

      </>

    )
}

export default Recipe;