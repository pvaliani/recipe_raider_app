import { Header, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import MealLogo from '../assets/MealLogo.png';

function MealAppHeader(){


    return(
        <>
        <nav>
            <ul className='navigation'>
                <li>< Link className='link' to="/">Home </Link></li>
                <li>< Link className='link' to="/cocktails">Cocktails</Link></li>
                <li>< Link className='link' to="/about">About</Link></li>
            </ul>
        </nav>
         <Header className="recipeHeader" textAlign="center"  as='h2'>
          <Image src={MealLogo} className='logo' /> 
        </Header>
        </>
    )


}



export default MealAppHeader;