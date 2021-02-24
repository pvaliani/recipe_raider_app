import { Header, Image } from "semantic-ui-react";
import { BrowserRouter as Link } from 'react-router-dom';
import MealLogo from '../assets/MealLogo.png';

function MealAppHeader(){


    return(
        <>
         <Header className="recipeHeader" textAlign="center"  as='h2'>
          <Image src={MealLogo} className='logo' /> 
        </Header>
        <nav>
            <ul className='navigation'>
                <li>< Link className='link' to= '/'> Home </Link></li>
                <li>< Link className='link' to="/cocktails">Cocktails</Link></li>
                <li>< Link className='link' to="/members">About</Link></li>
            </ul>
        </nav>
        </>
    )


}



export default MealAppHeader;