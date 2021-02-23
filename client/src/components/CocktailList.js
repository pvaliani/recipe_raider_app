import Cocktail from './Cocktail';
import {Card, Container, Pagination} from 'semantic-ui-react'

function CocktailList({cocktails, ingredients, prevSearch, onPageChange, pageCount}) {
    // return no cards if there are no cocktails. Otherwise....
    if (!cocktails) return null;

    // Conditional logic if not results - ped, laura 
    // if (cocktails && cocktails.length === 0) {
    //   return (
    //       <Container text>
    //         <p>No recipes matching {prevSearch}</p>
    //       </Container>
    //   );
    // }
    
    // Map the cocktails in a function called displayCocktails which returns the API key/value pairs
    // we seek from the stored back end recipe API. We render the results in MealList
    const displayCocktails = cocktails.map(cocktail => {
        return <Cocktail
                cocktail={cocktail}/>
    })

    // Pagination is displayed only if there are cocktails from the fetch i.e cocktails.length > 0

    const displayPagination = () => {
        if (cocktails.length === 0){
            return
        }
        else {
            return (<Pagination defaultActivePage={1} totalPages={pageCount} onPageChange={onPageChange} />)
        }
    }

    // We create a variable to call pagination at the end return statement

    const pagination = displayPagination();


// we call

    return (
  <section className="recipe-list">
    <Card.Group itemsPerRow={3} className="meal-list">
      {displayCocktails}
    </Card.Group>
    
    {pagination}
  </section>
        );
}

// error message code

export default CocktailList;