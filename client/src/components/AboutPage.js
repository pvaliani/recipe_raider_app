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
                Comments about the App
                Creators
                etc 
            </p>
        </Container>
        </>
    )
}

export default AboutPage;