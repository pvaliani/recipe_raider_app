import Meal from './Meal';
import {Card, Container, Pagination, Segment, Grid, Input} from 'semantic-ui-react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function MealList({meals, ingredients, prevSearch}) {
    // return no cards if there are no meals. Otherwise....
    if (!meals) return null;

    // Conditional logic if not results - ped, laura 
    // if (meals && meals.length === 0) {
    //   return (
    //       <Container text>
    //         <p>No recipes matching {prevSearch}</p>
    //       </Container>
    //   );
    // }
    
    // Map the meals in a function called displayMeals which returns the API key/value pairs
    // we seek from the stored back end recipe API. We render the results in MealList

    const displayMeals = meals.map(meal => {
        return <Meal
                meal={meal}/>
    })

    
    return (
  <section className="recipe-list">
     <Pagination defaultActivePage={1} totalPages={10} />
    <Card.Group itemsPerRow={3} className="meal-list">
      {displayMeals}
    </Card.Group>
  </section>
        );
}

// error message code

export default MealList;