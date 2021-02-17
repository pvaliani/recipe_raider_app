import {Card, Icon, Image} from 'semantic-ui-react';

// Meal component which renders a meal card component from semantic UI

function Meal(){

    return (
        <>
            <Card className="meal">
                <Image
                    src="https://www.themealdb.com/images/media/meals/n41ny81608588066.jpg"
                    wrapped
                    ui={false}
                />
                <Card.Content>
                    <Card.Header>This is where the meal name goes.</Card.Header>
                    <Card.Description>This is where the meal description goes.</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href="www.google.com">
                    <Icon name="user" />
                    Take me to the recipe!
                    </a>
                </Card.Content>
            </Card>
    </>
    );



}

export default Meal;