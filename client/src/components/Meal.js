import {Card, Icon, Image, Popup, Button} from 'semantic-ui-react';
import Recipe from './Recipe';

// Meal component which renders a meal card component from semantic UI

// Pass the name, area, image parameters from consumed back-end as props to Meal component
function Meal({meal}){

    return (
        <>
        <Card className="meal">
                <Image
                    src={meal.strMealThumb}
                    wrapped
                    ui={false}
                />
                <Card.Content>
                    <Card.Header>{meal.strMeal}</Card.Header>
                    <Card.Description>{meal.strArea}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <Popup trigger={
                    <a>
                        <Icon name="food" />
                        Show recipe
                    </a>}
                    positionFixed 
                >
                <Popup.Content>
                    <Recipe recipe={meal}/>
                </Popup.Content>
                </Popup>
                </Card.Content>
            </Card>
    </>
    );



}

export default Meal;