import {Container, Header, Image} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PlateLogo from '../assets/PlateLogo.png';
import CocktailLogo from '../assets/CocktailLogo.png';

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
        <Container className='aboutContainer'>
            <br></br>
            <p>
            Stuck in a recipe rut? Looking to expand your drinks repertoire? Make a Meal of It uses the MealDB API to bring back recipe suggestions based on up to 4 key ingredients, which will inspire you to get back in the kitchen! 
            </p>
            <p>Make a Night of It does the same thing with the CocktailDB API. But for your drinks cabinet.</p>
            <p>
                <a className="gitHub" href='https://github.com/pvaliani'> Pedram</a> , <a className="gitHub" href='https://github.com/lauracdobie'> Laura</a> and <a className="gitHub" href='https://github.com/Knichols02'>Kirsten </a> made Make a Meal of It and Make a Night of it. You can check out our other projects at: 
                
            </p>
            <p className="aboutImages">
                <Image className='aboutImages' src={PlateLogo} size='small' centered /> 
                <Image className='aboutImages'src={CocktailLogo} size='small' centered /> 
            </p>
        
        </Container>
        
        </>
    )
}

export default AboutPage;