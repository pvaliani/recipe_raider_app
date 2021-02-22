import Meal from './Meal';
<<<<<<< HEAD
import {Card, Container} from 'semantic-ui-react'

function MealList({meals, ingredients}) {
    // return no cards if there are no meals. Otherwise....
    if (!meals) return null;

    // if (meals && meals.length === 0 ) {
    //   return (
    //       <Container text>
    //         <p>No recipes matching {ingredients}</p>
    //       </Container>
    //   );
    // }
    
=======
import {Card} from 'semantic-ui-react'
function MealList({meals}) {
    // return no cards if there are no meals. Otherwise....
    if (!meals) return null;
>>>>>>> main
    // Map the meals in a function called displayMeals which returns the API key/value pairs
    // we seek from the stored back end recipe API. We render the results in MealList
    const displayMeals = meals.map(meal => {
        return <Meal
                meal={meal}/>
    })
    return (
  <section className="recipe-list">
    <Card.Group itemsPerRow={3} className="meal-list">
      {displayMeals}
    </Card.Group>
  </section>
        );
}
<<<<<<< HEAD

// error message code

=======
>>>>>>> main
export default MealList;