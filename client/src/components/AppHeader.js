import { Header, Image } from "semantic-ui-react";
import MakeADrinkLogo from '../assets/MakeADrinkLogo.png';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

function AppHeader(){


    return(
        <>
        <nav>
            <ul className='navigation'>
                <li>< Link className='link' className='deselected'to="/">Meals</Link></li>
                <li>< Link className='link' className='selected' to="/cocktails">Cocktails</Link></li>
                <li>< Link className='link' className='deselected' to="/about">About</Link></li>
            </ul>
        </nav>
         <Header className="recipeHeader" textAlign="center"  as='h2'>
          <Image src={MakeADrinkLogo} className='logo' /> 
        </Header>
        </>
    )


}



export default AppHeader;