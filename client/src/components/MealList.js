import Meal from './Meal';
import {Card, Container, Pagination, Segment, Grid, Input} from 'semantic-ui-react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function MealList({meals, ingredients, prevSearch, onPageChange, pageCount}) {
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
                key={meal.idMeal}
                meal={meal}/>
    })
    
    console.log(pageCount);
    
    return (
  <section className="recipe-list">
    <Card.Group itemsPerRow={3} className="meal-list">
      {displayMeals}
    </Card.Group>
    <Pagination defaultActivePage={1} totalPages={pageCount} onPageChange={onPageChange} />
  </section>
        );
}

// error message code

export default MealList;