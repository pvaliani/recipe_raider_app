import Meal from './Meal';
import {Card} from 'semantic-ui-react'

function MealList({meals}) {
    // return no cards if there are no meals. Otherwise....
    if (!meals) return null;
    
    // Map the meals in a function called displayMeals which returns the API key/value pairs
    // we seek from the stored back end recipe API. We render the results in MealList
    const displayMeals = meals.map(meal => {
        return <Meal 
                image={meal.strMealThumb}
                name={meal.strMeal}
                area={meal.strArea}/>
    })
    return (
    <Card.Group itemsPerRow={3} className="meal-list">
      {displayMeals}
    </Card.Group>
        );
}

export default MealList;