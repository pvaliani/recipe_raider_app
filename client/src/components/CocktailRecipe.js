import {Container, Header, Image, List, Embed, Grid} from 'semantic-ui-react';

function CocktailRecipe({cocktailRecipe}) {
  if (!cocktailRecipe) return null;

  console.log(cocktailRecipe);
  
    let ingredientsList = []
  
    const displayIngredients = () => {
      for (let i = 0; i < cocktailRecipe.ingredients.length; i++) {
        const element = cocktailRecipe.measures[i] + " " + cocktailRecipe.ingredients[i];
        ingredientsList.push(element);
      }
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