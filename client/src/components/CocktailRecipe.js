import {Container, Header, Image, List, Embed, Grid} from 'semantic-ui-react';

function CocktailRecipe({cocktailRecipe}) {
  if (!cocktailRecipe) return null;

  console.log(cocktailRecipe);
  
    //Create an empty array
    //If the quantity is not null or blank, and the ingredient is not null or blank, combine the two together in a string and add them to the array.
    //Loop over all the elements in the array and create a JSX element for them
    //Insert this into the return
  
    let ingredientsList = []
  
    const displayIngredients = () => {
      // Object.keys(cocktailRecipe)
      // let text = cocktailRecipe["strMeasure1"] 
      // console.log(text);
      // delete cocktailRecipe["strMeasure1"]
      // console.log(cocktailRecipe);

      if((cocktailRecipe.strMeasure1 !== null && cocktailRecipe.strMeasure1 !== "") && (cocktailRecipe.strIngredient1 !== null && cocktailRecipe.strIngredient1 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure1} ${cocktailRecipe.strIngredient1}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure2 !== null && cocktailRecipe.strMeasure2 !== "") && (cocktailRecipe.strIngredient2 !== null && cocktailRecipe.strIngredient2 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure2} ${cocktailRecipe.strIngredient2}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure3 !== null && cocktailRecipe.strMeasure3 !== "") && (cocktailRecipe.strIngredient3 !== null && cocktailRecipe.strIngredient3 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure3} ${cocktailRecipe.strIngredient3}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure4 !== null && cocktailRecipe.strMeasure4 !== "") && (cocktailRecipe.strIngredient4 !== null && cocktailRecipe.strIngredient4 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure4} ${cocktailRecipe.strIngredient4}`;
        ingredientsList.push(ingredientEntry);
      }
  
      if((cocktailRecipe.strMeasure5 !== null && cocktailRecipe.strMeasure5 !== "") && (cocktailRecipe.strIngredient5 !== null && cocktailRecipe.strIngredient5 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure5} ${cocktailRecipe.strIngredient5}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure6 !== null && cocktailRecipe.strMeasure6 !== "") && (cocktailRecipe.strIngredient6 !== null && cocktailRecipe.strIngredient6 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure6} ${cocktailRecipe.strIngredient6}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure7 !== null && cocktailRecipe.strMeasure7 !== "") && (cocktailRecipe.strIngredient7 !== null && cocktailRecipe.strIngredient7 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure7} ${cocktailRecipe.strIngredient7}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure8 !== null && cocktailRecipe.strMeasure8 !== "") && (cocktailRecipe.strIngredient8 !== null && cocktailRecipe.strIngredient8 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure8} ${cocktailRecipe.strIngredient8}`;
        ingredientsList.push(ingredientEntry);
      }
  
      if((cocktailRecipe.strMeasure9 !== null && cocktailRecipe.strMeasure9 !== "") && (cocktailRecipe.strIngredient9 !== null && cocktailRecipe.strIngredient9 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure9} ${cocktailRecipe.strIngredient9}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure10 !== null && cocktailRecipe.strMeasure10 !== "") && (cocktailRecipe.strIngredient10 !== null && cocktailRecipe.strIngredient10 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure10} ${cocktailRecipe.strIngredient10}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure11 !== null && cocktailRecipe.strMeasure11 !== "") && (cocktailRecipe.strIngredient11 !== null && cocktailRecipe.strIngredient11 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure11} ${cocktailRecipe.strIngredient11}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure12 !== null && cocktailRecipe.strMeasure12 !== "") && (cocktailRecipe.strIngredient12 !== null && cocktailRecipe.strIngredient12 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure12} ${cocktailRecipe.strIngredient12}`;
        ingredientsList.push(ingredientEntry);
      }
  
      if((cocktailRecipe.strMeasure13 !== null && cocktailRecipe.strMeasure13 !== "") && (cocktailRecipe.strIngredient13 !== null && cocktailRecipe.strIngredient13 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure13} ${cocktailRecipe.strIngredient13}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure14 !== null && cocktailRecipe.strMeasure14 !== "") && (cocktailRecipe.strIngredient14 !== null && cocktailRecipe.strIngredient14 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure14} ${cocktailRecipe.strIngredient14}`;
        ingredientsList.push(ingredientEntry);
      }
      if((cocktailRecipe.strMeasure15 !== null && cocktailRecipe.strMeasure15 !== "") && (cocktailRecipe.strIngredient15 !== null && cocktailRecipe.strIngredient15 !== "")) {
        const ingredientEntry = `${cocktailRecipe.strMeasure15} ${cocktailRecipe.strIngredient15}`;
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
        
      <>
      <Container text>
        <Header as='h2' textAlign="center">{cocktailRecipe.strDrink}  </Header>
        <Grid>       
          <Grid.Column width={8}>
            <h3>Cocktail Ingredients</h3>
          <List>
              {ingredientsJSX}
          </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={cocktailRecipe.strDrinkThumb}  size="large" rounded/>
          </Grid.Column>
        </Grid>
            <h3>Method</h3>
            <p>{cocktailRecipe.strInstructions}</p>
      </Container>
      

      </>

    )
}

export default CocktailRecipe;