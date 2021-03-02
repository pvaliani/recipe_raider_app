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
      let values = []

      Object.keys(cocktailRecipe).forEach((k, i) => { 
        values.push(cocktailRecipe[k]) });
      
      for (let i = 32; i < values.length - 4; i++) { 
        if (values[i] !== null && values[i] !== "") { 
          const element = values[i] + " " + values[i-15]; 
          ingredientsList.push(element); } 
        }

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