import {Card, Icon, Image} from 'semantic-ui-react';

// Meal component which renders a meal card based on semantic UI

function Meal(){

    return (
        <>
    <Card>
      <Image
        src="https://www.themealdb.com/images/media/meals/n41ny81608588066.jpg"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Ham hock with a burned fried egg on top</Card.Header>
        <Card.Description>This looks just about edible.</Card.Description>
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