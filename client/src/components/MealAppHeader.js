import { Header, Image } from "semantic-ui-react";
import MealLogo from '../assets/MealLogo.png';

function MealAppHeader(){


    return(
        <>
         <Header className="recipeHeader" textAlign="center"  as='h2'>
          <Image src={MealLogo} className='logo' /> 
        </Header>
        </>
    )


}



export default MealAppHeader;