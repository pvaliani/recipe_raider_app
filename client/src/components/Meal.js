import {Card, Icon, Image} from 'semantic-ui-react';

// Meal component which renders a meal card component from semantic UI

// Pass the name, area, image parameters from consumed back-end as props to Meal component
function Meal({name, area, image}){

    return (
        <>
            <Card className="meal">
                <Image
                    src={image}
                    wrapped
                    ui={false}
                />
                <Card.Content>
                    <Card.Header>{name}</Card.Header>
                    <Card.Description>{area}</Card.Description>
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