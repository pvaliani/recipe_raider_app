import Meal from './Meal';
import {Card} from 'semantic-ui-react'

function MealList() {
    return (
    <Card.Group itemsPerRow={3} className="meal-list">
        <Meal />
        <Meal />
        <Meal />
        <Meal />
    </Card.Group>
        );
}

export default MealList;