import {Container, Header} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function AboutPage(){
    return(
        <>
        <nav>
            <ul className='navigation'>
                <li>< Link className='link' className='deselected' to="/">Meals</Link></li>
                <li>< Link className='link' className='deselected' to="/cocktails">Cocktails</Link></li>
                <li>< Link className='link' className='selected'to="/about">About</Link></li>
            </ul>
        </nav>
        <Header className='aboutHeader' textAlign="center"  as='h1'>
            About
        </Header>
        <Container>
            <p>
            Stuck in a recipe rut? Looking to expand your drinks repertoire? Make a Meal of It uses the MealDB API to bring back recipe suggestions based on up to 4 key ingredients, which will inspire you to get back in the kitchen! Make a Night of It does the same thing with the CocktailDB API. But for your drinks cabinet.
Pedram, Laura and Kirsten made Make a Meal of It and Make a Night of it. You can check out our other projects at: insert GitHub links.
            </p>
        </Container>
        </>
    )
}

export default AboutPage;