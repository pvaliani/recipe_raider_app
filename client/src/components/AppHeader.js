import { Header, Image } from "semantic-ui-react";
import MakeADrinkLogo from '../assets/MakeADrinkLogo.png';
import { Link } from 'react-router-dom';

function AppHeader(){


    return(
        <>
        <nav>
            <ul className='navigation'>
                <li>< Link className='link' to="/cocktails">Home </Link></li>
                <li>< Link className='link' to="/">Meals</Link></li>
                <li>< Link className='link' to="/about">About</Link></li>
            </ul>
        </nav>
         <Header className="recipeHeader" textAlign="center"  as='h2'>
          <Image src={MakeADrinkLogo} className='logo' /> 
        </Header>
        </>
    )


}



export default AppHeader;