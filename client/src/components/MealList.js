import Meal from './Meal';
import {Card, Container, Pagination, Segment, Grid, Input} from 'semantic-ui-react'

function MealList({meals, ingredients, prevSearch, onPageChange, pageCount, loaded, allMeals}) {
    // return no cards if there are no meals. Otherwise....
    if (!meals) return null;

    // logic for only returning valid searches
    if (meals && meals.length === 0 && prevSearch !== "" && loaded===true) {
      return (
          <Container className="aboutContainer" text>
            <p className="searchMsg">No recipes matching {prevSearch.toLowerCase()}</p>
          </Container>
      );
    }
    
    // Map the meals in a function called displayMeals which returns the API key/value pairs
    // we seek from the stored back end recipe API. We render the results in MealList

    const displayMeals = meals.map(meal => {
        return <Meal
                key={meal.idMeal}
                meal={meal}/>
    })


    
    console.log(pageCount);

// Pagination is displayed only if there are meals  from the fetch i.e cocktails.length > 0
    const displayPagination = () => {
        if (allMeals.length < 6){
            return
        }
        else {
            return (<Pagination className="pagination" defaultActivePage={1} totalPages={pageCount} onPageChange={onPageChange} />)
        }
    }


    // create a variable to call the pagination method which we will return at the render

    const pagination = displayPagination();
    
    return (
  <section className="recipe-list">
    <Card.Group itemsPerRow={3} className="meal-list">
      {displayMeals}
    </Card.Group>
    {pagination}
  </section>
        );
}


export default MealList;