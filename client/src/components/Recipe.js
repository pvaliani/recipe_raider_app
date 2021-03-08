import {Container, Header, Image, List, Embed, Grid} from 'semantic-ui-react';

function Recipe({recipe}) {
  if (!recipe) return null;

  console.log(recipe);
  

  
    let ingredientsList = []
  
    const displayIngredients = () => {
      let values = []

      Object.keys(recipe).forEach((k, i) => { 
        values.push(recipe[k]) });
      
      for (let i = 29; i < values.length - 4; i++) { 
        if (values[i] !== null && values[i] !== "") { 
          const element = values[i] + " " + values[i-20]; 
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
        <Header as='h2' textAlign="center">{recipe.strMeal}  </Header>
        <Grid>       
          <Grid.Column width={8}>
            <h3>Ingredients</h3>
          <List>
              {ingredientsJSX}
          </List>
          </Grid.Column>
          <Grid.Column width={8}>
            <Image src={recipe.strMealThumb}  size="large" rounded/>
          </Grid.Column>
        </Grid>
            <h3>Method</h3>
            <p>{recipe.strInstructions}</p>
      </Container>
      

      </>

    )
}

export default Recipe;