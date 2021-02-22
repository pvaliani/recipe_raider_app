import Meal from './Meal';
import {Card} from 'semantic-ui-react'

function MealList({meals}) {
    // return no cards if there are no meals. Otherwise....
    if (!meals) return null;

    // If the length of the meals (array of objects) is greater than 0, render the meal cards.
    // return displayMeals, etc
   // Else render the error message component with the ingredients state in it.
    // Return Error message component with ingredients passed down to it as props

    
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

export default MealList;