import {Card, Icon, Image} from 'semantic-ui-react';

function Recipe() {
    return(
      <>
      <Card className="recipe-card">
    <Image src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg" wrapped ui={false} />
    <Card.Content>
      <Card.Header>This is the meal name - by Id</Card.Header>
      <Card.Meta>
        <span className='date'>This is the recipes region</span>
      </Card.Meta>
      <Card.Description>
        This is the recipe description
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Click here to return to the search!
      </a>
    </Card.Content>
  </Card>

      </>

    )
}

export default Recipe;