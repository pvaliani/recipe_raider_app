import {Card, Icon, Image, Popup, Button, Modal} from 'semantic-ui-react';
import Recipe from './Recipe';
import {useState} from 'react';

// Meal component which renders a meal card component from semantic UI

// Pass the name, area, image parameters from consumed back-end as props to Meal component
function Meal({meal}){
    const [open, setOpen] = useState(false);

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
                <Modal onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open} trigger={
                    <a>
                        <Icon name="food" />
                        Show recipe
                    </a>}
                    // positionFixed 
                >
                <Modal.Content>
                    <Recipe recipe={meal}/>
                </Modal.Content>
                <Button color='gray' onClick={() => setOpen(false)}>
                    <Icon name="close"/>
                </Button>
                </Modal>
                </Card.Content>
            </Card>
    </>
    );



}

export default Meal;